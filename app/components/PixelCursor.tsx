import { useEffect, useRef } from "react";

const PIXEL_SIZE = 18;
const RADIUS = 80;
const FADE_SPEED = 0.04;
const PALETTE = [
  "#6366f1", "#818cf8", "#4f46e5", "#a5b4fc",
  "#8b5cf6", "#7c3aed", "#c4b5fd", "#4338ca",
];

export default function PixelCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number, cols: number, rows: number;
    let grid: { color: string; alpha: number; target: number }[] = [];
    const mouse = { x: -999, y: -999 };
    let animFrame: number;

    function resize() {
      W = canvas!.width = window.innerWidth * devicePixelRatio;
      H = canvas!.height = window.innerHeight * devicePixelRatio;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      cols = Math.ceil(W / PIXEL_SIZE) + 1;
      rows = Math.ceil(H / PIXEL_SIZE) + 1;
      grid = Array.from({ length: rows * cols }, () => ({
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        alpha: 0,
        target: 0,
      }));
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX * devicePixelRatio;
      mouse.y = e.clientY * devicePixelRatio;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r * cols + c];
          const cx = c * PIXEL_SIZE + PIXEL_SIZE / 2;
          const cy = r * PIXEL_SIZE + PIXEL_SIZE / 2;
          const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
          cell.target = dist < RADIUS ? Math.pow(1 - dist / RADIUS, 1.5) : 0;
          cell.alpha += (cell.target - cell.alpha) * FADE_SPEED;
          if (cell.alpha > 0.01) {
            ctx.globalAlpha = cell.alpha;
            ctx.fillStyle = cell.color;
            ctx.fillRect(c * PIXEL_SIZE, r * PIXEL_SIZE, PIXEL_SIZE - 1, PIXEL_SIZE - 1);
            ctx.globalAlpha = 1;
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    }

    resize();
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