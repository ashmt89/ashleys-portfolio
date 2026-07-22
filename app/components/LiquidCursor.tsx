import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const SPLAT_FRAG = `
precision highp float;
uniform sampler2D uTexture;
uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
varying vec2 vUv;
void main() {
  vec2 p = vUv - uPoint;
  p.x *= 1.0;
  float splat = exp(-dot(p, p) / uRadius);
  vec3 base = texture2D(uTexture, vUv).rgb;
  gl_FragColor = vec4(base + splat * uColor, 1.0);
}
`;

const ADVECT_FRAG = `
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uResolution;
uniform float uDissipation;
varying vec2 vUv;
void main() {
  vec2 vel = texture2D(uVelocity, vUv).xy;
  vec2 coord = vUv - vel * (1.0 / uResolution);
  vec4 result = uDissipation * texture2D(uSource, coord);
  gl_FragColor = result;
}
`;

const DISPLAY_FRAG = `
precision highp float;
uniform sampler2D uTexture;
uniform vec2 uResolution;
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  vec2 vel = texture2D(uTexture, uv).xy;
  // Displace UV by velocity for a warping look
  vec2 distorted = uv + vel * 0.012;
  // Output only the distortion as a subtle transparent overlay
  float strength = length(vel) * 8.0;
  vec3 color = vec3(
    0.282 + vel.x * 0.4,  // #46292B-ish
    0.38 + vel.y * 0.3,   // #73617B-ish
    0.725 + length(vel) * 0.3 // #959BB9-ish
  );
  gl_FragColor = vec4(color, strength * 0.18);
}
`;

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    let W = 0, H = 0;
    let animFrame: number;
    const mouse = { x: 0.5, y: 0.5, dx: 0, dy: 0 };
    let lastMouse = { x: 0.5, y: 0.5 };

    // --- helpers ---
    function createShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    function createProgram(vert: string, frag: string) {
      const p = gl!.createProgram()!;
      gl!.attachShader(p, createShader(gl!.VERTEX_SHADER, vert));
      gl!.attachShader(p, createShader(gl!.FRAGMENT_SHADER, frag));
      gl!.linkProgram(p);
      return p;
    }

    function createFBO(w: number, h: number) {
      const tex = gl!.createTexture()!;
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, w, h, 0, gl!.RGBA, gl!.UNSIGNED_BYTE, null);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      const fbo = gl!.createFramebuffer()!;
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
      gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, tex, 0);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      return { tex, fbo };
    }

    // quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 0, 0,
       1, -1, 1, 0,
      -1,  1, 0, 1,
       1,  1, 1, 1,
    ]), gl.STATIC_DRAW);

    function bindQuad(prog: WebGLProgram) {
      const pos = gl!.getAttribLocation(prog, "position");
      const uv  = gl!.getAttribLocation(prog, "uv");
      gl!.enableVertexAttribArray(pos);
      gl!.vertexAttribPointer(pos, 2, gl!.FLOAT, false, 16, 0);
      gl!.enableVertexAttribArray(uv);
      gl!.vertexAttribPointer(uv, 2, gl!.FLOAT, false, 16, 8);
    }

    const splatProg   = createProgram(VERT, SPLAT_FRAG);
    const advectProg  = createProgram(VERT, ADVECT_FRAG);
    const displayProg = createProgram(VERT, DISPLAY_FRAG);

    let velA: ReturnType<typeof createFBO>;
    let velB: ReturnType<typeof createFBO>;
    const SIM = 256;

    function init() {
      velA = createFBO(SIM, SIM);
      velB = createFBO(SIM, SIM);
    }

    function resize() {
      W = canvas!.width  = window.innerWidth  * devicePixelRatio;
      H = canvas!.height = window.innerHeight * devicePixelRatio;
      canvas!.style.width  = window.innerWidth  + "px";
      canvas!.style.height = window.innerHeight + "px";
    }

    function splat(fbo: ReturnType<typeof createFBO>, src: ReturnType<typeof createFBO>, px: number, py: number, dx: number, dy: number) {
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo.fbo);
      gl!.viewport(0, 0, SIM, SIM);
      gl!.useProgram(splatProg);
      bindQuad(splatProg);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, src.tex);
      gl!.uniform1i(gl!.getUniformLocation(splatProg, "uTexture"), 0);
      gl!.uniform2f(gl!.getUniformLocation(splatProg, "uPoint"), px, 1.0 - py);
      gl!.uniform3f(gl!.getUniformLocation(splatProg, "uColor"), dx * 8, dy * 8, 0.0);
      gl!.uniform1f(gl!.getUniformLocation(splatProg, "uRadius"), 0.002);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }

    function advect(dst: ReturnType<typeof createFBO>, vel: ReturnType<typeof createFBO>, src: ReturnType<typeof createFBO>, dissipation: number) {
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, dst.fbo);
      gl!.viewport(0, 0, SIM, SIM);
      gl!.useProgram(advectProg);
      bindQuad(advectProg);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, vel.tex);
      gl!.uniform1i(gl!.getUniformLocation(advectProg, "uVelocity"), 0);
      gl!.activeTexture(gl!.TEXTURE1);
      gl!.bindTexture(gl!.TEXTURE_2D, src.tex);
      gl!.uniform1i(gl!.getUniformLocation(advectProg, "uSource"), 1);
      gl!.uniform2f(gl!.getUniformLocation(advectProg, "uResolution"), SIM, SIM);
      gl!.uniform1f(gl!.getUniformLocation(advectProg, "uDissipation"), dissipation);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }

    function draw() {
      // splat velocity
      splat(velB, velA, mouse.x, mouse.y, mouse.dx, mouse.dy);
      [velA, velB] = [velB, velA];

      // advect velocity
      advect(velB, velA, velA, 0.98);
      [velA, velB] = [velB, velA];

      // display
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      gl!.viewport(0, 0, W, H);
      gl!.enable(gl!.BLEND);
      gl!.blendFunc(gl!.SRC_ALPHA, gl!.ONE_MINUS_SRC_ALPHA);
      gl!.useProgram(displayProg);
      bindQuad(displayProg);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, velA.tex);
      gl!.uniform1i(gl!.getUniformLocation(displayProg, "uTexture"), 0);
      gl!.uniform2f(gl!.getUniformLocation(displayProg, "uResolution"), W, H);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);

      mouse.dx = 0;
      mouse.dy = 0;

      animFrame = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouse.dx = x - lastMouse.x;
      mouse.dy = y - lastMouse.y;
      mouse.x = x;
      mouse.y = y;
      lastMouse = { x, y };
    }

    resize();
    init();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}