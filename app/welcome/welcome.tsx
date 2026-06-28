import { useEffect, useState } from "react";

const ROLES = [
  "Aspiring Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "IS Student",
];

export function Welcome() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-slate-800/60 backdrop-blur-sm bg-slate-950/80">
        <span className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Portfolio
        </span>
        <ul className="flex gap-8 text-sm text-slate-400">
          {["About", "Projects", "Essays", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-slate-100 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
        </div>

        {/* Eyebrow */}
        <p className="relative text-indigo-400 text-sm font-medium tracking-widest uppercase mb-6">
          Hello, world
        </p>

        {/* Name */}
        <h1 className="relative text-5xl sm:text-7xl font-bold tracking-tight text-slate-50 mb-4">
          Ashley Graham
        </h1>

        {/* Animated role */}
        <div className="relative h-10 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl text-indigo-300 font-light">
            {displayed}
            <span
              className={`inline-block w-0.5 h-6 bg-indigo-400 ml-0.5 align-middle transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </div>

        {/* Bio */}
        <p className="relative max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          I'm an information science student passionate about creating beautiful,
          clean, and functional web experiences — with a focus on making them
          as intuitive as they are visually compelling.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            View my work
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm font-medium transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-slate-500">Scroll</span>
          <svg
            className="w-4 h-4 text-slate-500 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Skills snapshot */}
      <section
        id="skills"
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
          What I work with
        </p>
        <h2 className="text-2xl font-semibold text-slate-100 mb-10">
          Skills & tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript", "TypeScript", "React", "Next.js",
            "Node.js", "HTML/CSS", "Tailwind CSS", "Git",
            "SQL", "Figma", 
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-sm hover:border-indigo-500 hover:text-indigo-300 transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects placeholder */}
      <section
        id="projects"
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Things I've built
        </p>
        <h2 className="text-2xl font-semibold text-slate-100 mb-10">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Ashley's Blog",
              desc: "A brief description of what this project does and the problem it solves.",
              tags: ["Astro", "Islands Architecture"],
              href: "https://ashleys-blog.netlify.app/",
            },
            {
              title: "Farmer's Market",
              desc: "A brief description of what this project does and the problem it solves.",
              tags: ["JavaScript", "SQL"],
              href: "",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-100">{project.title}</h3>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <svg
                      className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors duration-200 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essays */}
      <section
        id="essays"
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
          My writing
        </p>
        <h2 className="text-2xl font-semibold text-slate-100 mb-10">
          Essays
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Biography and Career Goals",
              desc: "My background, goals, and path toward a career in full-stack web development.",
              tags: ["BSIS Senior Capstone"],
              href: "/essays/biography-and-career-goals",
            },
            {
              title: "Database Implementation Plan",
              desc: "A project management plan for developing a software-tracking database at the University of South Florida.",
              tags: ["BSIS Senior Capstone"],
              href: "/essays/project-management-plan",
            },
          ].map((essay) => (
            <div
              key={essay.title}
              className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-100">{essay.title}</h3>
                {essay.href && (
                  <a href={essay.href} target="_blank" rel="noopener noreferrer">
                    <svg
                      className="w-4 h-4 text-slate-600 hover:text-indigo-400 transition-colors duration-200 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{essay.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {essay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-10 text-center">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Let's connect
          </p>
          <h2 className="text-2xl font-semibold text-slate-100 mb-3">
            Get in touch
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
            Whether it's an opportunity, a question, or just to say hi —
            my inbox is open.
          </p>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-600 text-xs border-t border-slate-800/60">
        Built with React Router & Tailwind CSS
      </footer>
    </main>
  );
}


