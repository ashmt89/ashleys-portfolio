import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiJavascript,
} from "react-icons/si";

import type { ReactNode } from "react";
import { Database } from 'lucide-react';
import { SectionMarker } from "./SectionMarker";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

type Skill = {
  name: string;
  category: string;
  code: string;
  icon: ReactNode;
  accent:
    | "cyan"
    | "blue"
    | "teal"
    | "lime"
    | "violet"
    | "pink"
    | "coral"
    | "yellow";
};

const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    code: "01",
    icon: <SiReact />,
    accent: "cyan",
  },
  {
    name: "TypeScript",
    category: "Language",
    code: "02",
    icon: <SiTypescript />,
    accent: "blue",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    code: "03",
    icon: <SiTailwindcss />,
    accent: "teal",
  },
  {
    name: "Node.js",
    category: "Runtime",
    code: "04",
    icon: <SiNodedotjs />,
    accent: "lime",
  },
  {
    name: "SQL",
    category: "Database",
    code: "05",
    icon: <Database />,
    accent: "violet",
  },
  {
    name: "Figma",
    category: "Design",
    code: "06",
    icon: <SiFigma />,
    accent: "pink",
  },
  {
    name: "Git",
    category: "Tooling",
    code: "07",
    icon: <SiGit />,
    accent: "coral",
  },
  {
    name: "JavaScript",
    category: "Language",
    code: "08",
    icon: <SiJavascript />,
    accent: "yellow",
  },
];

/* -------------------------------------------------------------------------- */
/*                              ACCENT STYLES                                 */
/* -------------------------------------------------------------------------- */

const accentStyles = {
  cyan: {
    icon: "text-[#58d7ff]",
    glow: "bg-[#58d7ff]",
    border: "group-hover:border-[#58d7ff]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(88,215,255,0.12)]",
  },

  blue: {
    icon: "text-[#4f8cff]",
    glow: "bg-[#4f8cff]",
    border: "group-hover:border-[#4f8cff]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(79,140,255,0.12)]",
  },

  teal: {
    icon: "text-[#35d7dc]",
    glow: "bg-[#35d7dc]",
    border: "group-hover:border-[#35d7dc]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(53,215,220,0.12)]",
  },

  lime: {
    icon: "text-[#9eea4f]",
    glow: "bg-[#9eea4f]",
    border: "group-hover:border-[#d8ff47]/25",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(216,255,71,0.10)]",
  },

  violet: {
    icon: "text-[#a970ff]",
    glow: "bg-[#8c52ff]",
    border: "group-hover:border-[#8c52ff]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(140,82,255,0.14)]",
  },

  pink: {
    icon: "text-[#ff5cb8]",
    glow: "bg-[#ff2da3]",
    border: "group-hover:border-[#ff2da3]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(255,45,163,0.14)]",
  },

  coral: {
    icon: "text-[#ff5a69]",
    glow: "bg-[#ff4f71]",
    border: "group-hover:border-[#ff4f71]/30",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(255,79,113,0.12)]",
  },

  yellow: {
    icon: "text-[#e8f13f]",
    glow: "bg-[#d8ff47]",
    border: "group-hover:border-[#d8ff47]/25",
    shadow: "group-hover:shadow-[0_16px_45px_rgba(216,255,71,0.10)]",
  },
};

/* -------------------------------------------------------------------------- */
/*                               SKILL CARD                                   */
/* -------------------------------------------------------------------------- */

function SkillCard({ skill }: { skill: Skill }) {
  const accent = accentStyles[skill.accent];

  return (
    <div
      className={`
        group
        relative
        isolate

        flex
        min-h-[205px]
        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[24px]

        border
        border-white/[0.075]

        bg-[rgba(8,14,38,0.42)]

        px-5
        py-7

        backdrop-blur-xl
        backdrop-saturate-[1.3]

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.075),
          inset_0_-1px_0_rgba(255,255,255,0.02),
          0_12px_30px_rgba(0,0,0,0.16)
        ]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1.5

        ${accent.border}
        ${accent.shadow}
      `}
    >
      {/* ============================================================ */}
      {/* CARD NUMBER                                                  */}
      {/* ============================================================ */}

      <span
        className="
          absolute
          left-4
          top-4
          z-20

          font-mono
          text-[0.55rem]
          font-medium
          tracking-[0.18em]

          text-white/20

          transition-colors
          duration-300

          group-hover:text-white/40
        "
      >
        {skill.code}
      </span>

      {/* Small corner marker */}

      <div
        aria-hidden="true"
        className="
          absolute
          right-4
          top-4

          flex
          items-center
          gap-[3px]

          opacity-30
        "
      >
        <span
          className={`
            h-[3px]
            w-[3px]

            rounded-full

            ${accent.glow}
          `}
        />

        <span
          className="
            h-px
            w-3

            bg-white/20
          "
        />
      </div>

      {/* ============================================================ */}
      {/* COLORED ICON LIGHT                                           */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          left-1/2
          top-[38%]

          h-24
          w-24

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          opacity-[0.07]

          blur-[32px]

          transition-all
          duration-500

          group-hover:scale-125
          group-hover:opacity-[0.16]

          ${accent.glow}
        `}
      />

      {/* ============================================================ */}
      {/* GLASS REFLECTION                                             */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[8%]
          right-[8%]
          top-px

          h-[38%]

          rounded-[999px_999px_55%_55%]

          bg-gradient-to-b
          from-white/[0.045]
          via-white/[0.012]
          to-transparent
        "
      />

      {/* Top edge */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[14%]
          right-[14%]
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/[0.16]
          to-transparent
        "
      />

      {/* ============================================================ */}
      {/* ICON                                                         */}
      {/* ============================================================ */}

      <div
        className={`
          relative
          z-10

          mb-5

          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center

          text-[3.25rem]

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:scale-[1.06]

          ${accent.icon}

          [&>svg]:h-full
          [&>svg]:w-full

          opacity-80

          drop-shadow-[0_0_8px_currentColor]

          group-hover:opacity-100
          group-hover:drop-shadow-[0_0_16px_currentColor]
        `}
      >
        {skill.icon}
      </div>

      {/* ============================================================ */}
      {/* SKILL NAME                                                   */}
      {/* ============================================================ */}

      <span
        className="
          relative
          z-10

          text-center

          text-[0.9rem]
          font-semibold
          tracking-[-0.015em]

          text-white/85

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        {skill.name}
      </span>

      {/* ============================================================ */}
      {/* CATEGORY                                                     */}
      {/* ============================================================ */}

      <div
        className="
          absolute
          bottom-4
          left-4
          right-4
          z-10

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            font-mono

            text-[0.48rem]
            font-medium
            uppercase
            tracking-[0.17em]

            text-white/20

            transition-colors
            duration-300

            group-hover:text-white/40
          "
        >
          {skill.category}
        </span>

        {/* Tiny arrow */}

        <span
          aria-hidden="true"
          className="
            translate-x-[-3px]

            font-mono
            text-[0.65rem]

            text-white/15

            opacity-0

            transition-all
            duration-300

            group-hover:translate-x-0
            group-hover:text-white/40
            group-hover:opacity-100
          "
        >
          ↗
        </span>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM COLOR CAUSTIC                                         */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-px
          w-[45%]

          -translate-x-1/2

          opacity-20

          transition-all
          duration-300

          group-hover:w-[68%]
          group-hover:opacity-50

          ${accent.glow}
        `}
      />

      {/* Bottom hover bloom */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -bottom-14
          left-1/2

          h-24
          w-[85%]

          -translate-x-1/2

          rounded-full

          opacity-0

          blur-[40px]

          transition-opacity
          duration-500

          group-hover:opacity-[0.09]

          ${accent.glow}
        `}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SKILLS SECTION                                */
/* -------------------------------------------------------------------------- */

export function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        isolate

        overflow-hidden

        border-y
        border-white/[0.045]

        bg-[#080d20]

        px-6
        py-24

        sm:px-10

        lg:px-12
        lg:py-28

        xl:px-20

        2xl:px-24
      "
    >
      {/* ================================================================ */}
      {/* ENVIRONMENTAL BACKGROUND                                         */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Base gradient */}

        <div
          className="
            absolute
            inset-0

            bg-[
              linear-gradient(
                105deg,
                #081225_0%,
                #09142c_30%,
                #111038_58%,
                #21102f_100%
              )
            ]
          "
        />

        {/* Cyan overhead light */}

        <div
          className="
            absolute
            -top-[180px]
            left-[30%]

            h-[400px]
            w-[500px]

            rounded-full

            bg-[#58d7ff]/15

            blur-[120px]
          "
        />

        {/* Violet middle atmosphere */}

        <div
          className="
            absolute
            -bottom-[250px]
            left-[42%]

            h-[500px]
            w-[600px]

            rounded-full

            bg-[#8c52ff]/10

            blur-[150px]
          "
        />

        {/* Magenta overhead light */}

        <div
          className="
            absolute
            -top-[190px]
            right-[10%]

            h-[420px]
            w-[520px]

            rounded-full

            bg-[#ff2da3]/17

            blur-[125px]
          "
        />

        {/* Top atmospheric line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#58d7ff]/30
            to-[#ff2da3]/25
          "
        />

        {/* Bottom atmospheric line */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0

            h-px

            bg-gradient-to-r
            from-[#58d7ff]/5
            via-[#8c52ff]/15
            to-[#ff2da3]/20
          "
        />
      </div>

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1440px]
        "
      >
        {/* Heading */}

        <div
  className="
    mb-12

    flex
    flex-col
    gap-7
  "
>

  <div>
    <p
      className="
        mb-4

        font-mono

        text-[0.68rem]
        font-semibold
        uppercase
        tracking-[0.22em]

        text-[#58d7ff]/75
      "
    >
      What I work with
    </p>

    <h2
      className="
        text-[clamp(2.5rem,4vw,4rem)]
        font-medium
        leading-none
        tracking-[-0.05em]

        text-white
      "
    >
      Skills{" "}
      <span className="text-white/35">
        &amp; Tools
      </span>
    </h2>
  </div>
</div>

        {/* ============================================================ */}
        {/* SKILL GRID                                                   */}
        {/* ============================================================ */}

        <div
          className="
            grid

            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-4

            lg:grid-cols-4

            xl:grid-cols-8
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>

{/*
      <SectionMarker
        number="02"
        label="Technical Toolkit"
        accent="cyan"
      />
*/}
    </section>
  );
}

export default Skills;