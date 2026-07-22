import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectArchive from "~/components/ProjectArchive";
import SectionMarker from "~/components/SectionMarker";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

type ProjectAccent = "cyan" | "pink" | "violet" | "lime";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];

  image?: string;

  liveUrl?: string;
  githubUrl?: string;

  accent: ProjectAccent;
};

/* -------------------------------------------------------------------------- */
/*                                PROJECT DATA                                */
/* -------------------------------------------------------------------------- */

const projects: Project[] = [
  {
    number: "01",

    title: "Sunny Dark",

    category: "Web Development",

    description:
      "A project I am currently working on for an artist who primarily creates and sells masks.",

    tags: [
      "React Router",
      "JavaScript",
      "Responsive Design",
    ],

    image: "/images/projects/sunnydark.webp",

    liveUrl: "https://www.sunnydark.com/",

    accent: "cyan",
  },

  {
    number: "02",

    title: "Farmer's Market",

    category: "Full-Stack Development",

    description:
      "A database-driven web project focused on organizing information, building intuitive interfaces, and connecting frontend experiences with structured data.",

    tags: [
      "JavaScript",
      "SQL",
      "Database Design",
    ],

    image: "/images/projects/farmers-market.png",

    accent: "pink",
  },

  /*
    Add one more project here later.

    {
      number: "03",
      title: "Project Name",
      category: "UI / UX Design",
      description: "...",
      tags: ["React", "Tailwind CSS"],
      image: "/images/projects/project.webp",
      liveUrl: "...",
      githubUrl: "...",
      accent: "violet",
    },
  */
];

/* -------------------------------------------------------------------------- */
/*                              ACCENT STYLES                                 */
/* -------------------------------------------------------------------------- */

const accentStyles = {
  cyan: {
    text: "text-[#58d7ff]",
    subtleText: "text-[#58d7ff]/65",

    dot: "bg-[#58d7ff]",

    border: "group-hover:border-[#58d7ff]/25",

    glow: "bg-[#58d7ff]",

    shadow:
      "group-hover:shadow-[0_25px_70px_rgba(88,215,255,0.08)]",
  },

  pink: {
    text: "text-[#ff2da3]",
    subtleText: "text-[#ff2da3]/65",

    dot: "bg-[#ff2da3]",

    border: "group-hover:border-[#ff2da3]/25",

    glow: "bg-[#ff2da3]",

    shadow:
      "group-hover:shadow-[0_25px_70px_rgba(255,45,163,0.09)]",
  },

  violet: {
    text: "text-[#9b6cff]",
    subtleText: "text-[#9b6cff]/65",

    dot: "bg-[#8c52ff]",

    border: "group-hover:border-[#8c52ff]/25",

    glow: "bg-[#8c52ff]",

    shadow:
      "group-hover:shadow-[0_25px_70px_rgba(140,82,255,0.09)]",
  },

  lime: {
    text: "text-[#d8ff47]",
    subtleText: "text-[#d8ff47]/65",

    dot: "bg-[#d8ff47]",

    border: "group-hover:border-[#d8ff47]/20",

    glow: "bg-[#d8ff47]",

    shadow:
      "group-hover:shadow-[0_25px_70px_rgba(216,255,71,0.06)]",
  },
};

/* -------------------------------------------------------------------------- */
/*                               PROJECT TAG                                  */
/* -------------------------------------------------------------------------- */

function ProjectTag({
  children,
}: {
  children: string;
}) {
  return (
    <span
      className="
        rounded-full

        border
        border-white/[0.07]

        bg-white/[0.025]

        px-3
        py-1.5

        font-mono

        text-[0.55rem]
        font-medium
        uppercase
        tracking-[0.14em]

        text-white/40

        backdrop-blur-md
      "
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PROJECT IMAGE                                 */
/* -------------------------------------------------------------------------- */

function ProjectPreview({
  project,
}: {
  project: Project;
}) {
  const accent = accentStyles[project.accent];

  return (
    <div
      className="
        relative

        aspect-[16/10]

        overflow-hidden

        rounded-[22px]

        border
        border-white/[0.07]

        bg-[#080e22]

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.07),
          0_20px_50px_rgba(0,0,0,0.22)
        ]
      "
    >
      {/* ------------------------------------------------------------ */}
      {/* IMAGE                                                        */}
      {/* ------------------------------------------------------------ */}

      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover

            opacity-85

            transition-all
            duration-700
            ease-out

            group-hover:scale-[1.025]
            group-hover:opacity-100
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            bg-[
              radial-gradient(
                circle_at_50%_40%,
                rgba(140,82,255,0.14),
                transparent_35%
              ),
              #080e22
            ]
          "
        >
          <span
            className="
              font-mono
              text-[0.6rem]
              uppercase
              tracking-[0.2em]
              text-white/20
            "
          >
            Project Preview
          </span>
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* IMAGE ATMOSPHERE                                             */}
      {/* ------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-t
          from-[#060b1b]/55
          via-transparent
          to-white/[0.015]
        "
      />

      {/* Accent light */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-16
          -top-16

          h-40
          w-40

          rounded-full

          opacity-[0.08]

          blur-[55px]

          transition-opacity
          duration-500

          group-hover:opacity-[0.18]

          ${accent.glow}
        `}
      />

      {/* ------------------------------------------------------------ */}
      {/* GLASS REFLECTION                                             */}
      {/* ------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[5%]
          right-[5%]
          top-px

          h-[32%]

          rounded-[999px_999px_60%_60%]

          bg-gradient-to-b
          from-white/[0.045]
          to-transparent
        "
      />

      {/* Top specular */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[12%]
          right-[12%]
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* ------------------------------------------------------------ */}
      {/* PREVIEW NUMBER                                               */}
      {/* ------------------------------------------------------------ */}

      <div
        className="
          absolute
          bottom-4
          left-4

          flex
          items-center
          gap-2

          rounded-full

          border
          border-white/[0.08]

          bg-[#070c1c]/55

          px-3
          py-1.5

          backdrop-blur-xl
        "
      >
        <span
          className={`
            h-[4px]
            w-[4px]

            rounded-full

            ${accent.dot}
          `}
        />

        <span
          className="
            font-mono
            text-[0.52rem]
            tracking-[0.16em]
            text-white/50
          "
        >
          {project.number}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PROJECT LINKS                                 */
/* -------------------------------------------------------------------------- */

function ProjectLinks({
  project,
}: {
  project: Project;
}) {
  if (!project.liveUrl && !project.githubUrl) {
    return null;
  }

  return (
    <div
      className="
        mt-7

        flex
        flex-wrap
        items-center
        gap-3
      "
    >
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/link

            inline-flex
            items-center
            gap-2

            rounded-full

            bg-[#d8ff47]

            px-5
            py-3

            font-mono

            text-[0.6rem]
            font-bold
            uppercase
            tracking-[0.14em]

            text-[#07101f]

            shadow-[
              inset_0_1px_0_rgba(255,255,255,0.5),
              0_0_24px_rgba(216,255,71,0.08)
            ]

            transition-all
            duration-300

            hover:-translate-y-0.5

            hover:shadow-[
              inset_0_1px_0_rgba(255,255,255,0.6),
              0_0_30px_rgba(216,255,71,0.18)
            ]
          "
        >
          View project

          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300

              group-hover/link:translate-x-0.5
              group-hover/link:-translate-y-0.5
            "
          />
        </a>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-white/[0.08]

            bg-white/[0.025]

            text-white/45

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-white/[0.15]
            hover:bg-white/[0.045]
            hover:text-white
          "
        >
          <FaGithub
            size={16}
            strokeWidth={1.7}
          />
        </a>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PROJECT CARD                                 */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent = accentStyles[project.accent];

  const reversed = index % 2 !== 0;

  return (
    <article
      className={`
        group
        relative
        isolate

        overflow-hidden

        rounded-[32px]

        border
        border-white/[0.065]

        bg-[rgba(7,12,31,0.42)]

        p-5

        backdrop-blur-xl

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.055),
          inset_0_-1px_0_rgba(255,255,255,0.015),
          0_24px_70px_rgba(0,0,0,0.16)
        ]

        transition-all
        duration-500

        hover:-translate-y-1

        sm:p-7

        lg:p-8

        ${accent.border}
        ${accent.shadow}
      `}
    >
      {/* ============================================================ */}
      {/* BACKGROUND LIGHT                                             */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute

          ${
            reversed
              ? "-left-32 top-1/2"
              : "-right-32 top-1/2"
          }

          h-[320px]
          w-[320px]

          -translate-y-1/2

          rounded-full

          opacity-[0.035]

          blur-[100px]

          transition-opacity
          duration-700

          group-hover:opacity-[0.08]

          ${accent.glow}
        `}
      />

      {/* ============================================================ */}
      {/* GLASS TOP REFLECTION                                         */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[4%]
          right-[4%]
          top-px

          h-[28%]

          rounded-[999px_999px_50%_50%]

          bg-gradient-to-b
          from-white/[0.035]
          to-transparent
        "
      />

      {/* ============================================================ */}
      {/* LAYOUT                                                       */}
      {/* ============================================================ */}

      <div
        className="
          relative
          z-10

          grid
          items-center
          gap-9

          lg:grid-cols-[0.9fr_1.35fr]
          lg:gap-14
        "
      >
        {/* ---------------------------------------------------------- */}
        {/* PROJECT INFORMATION                                       */}
        {/* ---------------------------------------------------------- */}

        <div
          className={`
            flex
            flex-col
            justify-center

            ${
              reversed
                ? "lg:order-2"
                : "lg:order-1"
            }
          `}
        >
          {/* Project metadata */}

          <div
            className="
              mb-6

              flex
              items-center
              gap-3
            "
          >
            <span
              className={`
                font-mono

                text-[0.58rem]
                font-semibold
                tracking-[0.18em]

                ${accent.subtleText}
              `}
            >
              {project.number}
            </span>

            <span
              className="
                h-px
                w-7

                bg-white/10
              "
            />

            <span
              className="
                font-mono

                text-[0.52rem]
                font-medium
                uppercase
                tracking-[0.17em]

                text-white/25
              "
            >
              {project.category}
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              text-[clamp(2rem,3.4vw,3.5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.055em]

              text-white
            "
          >
            {project.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-5

              max-w-[480px]

              text-sm
              leading-7

              text-white/40

              sm:text-[0.95rem]
            "
          >
            {project.description}
          </p>

          {/* Tags */}

          <div
            className="
              mt-6

              flex
              flex-wrap
              gap-2
            "
          >
            {project.tags.map((tag) => (
              <ProjectTag key={tag}>
                {tag}
              </ProjectTag>
            ))}
          </div>

          {/* Links */}

          <ProjectLinks project={project} />
        </div>

        {/* ---------------------------------------------------------- */}
        {/* PROJECT PREVIEW                                           */}
        {/* ---------------------------------------------------------- */}

        <div
          className={
            reversed
              ? "lg:order-1"
              : "lg:order-2"
          }
        >
          <ProjectPreview project={project} />
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM CAUSTIC                                               */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          bottom-0

          ${
            reversed
              ? "left-[7%]"
              : "right-[7%]"
          }

          h-px
          w-[28%]

          opacity-20

          transition-all
          duration-500

          group-hover:w-[38%]
          group-hover:opacity-45

          ${accent.glow}
        `}
      />
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                             PROJECTS SECTION                               */
/* -------------------------------------------------------------------------- */

export function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        isolate

        overflow-hidden

        bg-[#070c1c]

        px-6
        py-24

        sm:px-10

        lg:px-12
        lg:py-32

        xl:px-20

        2xl:px-24
      "
    >
      {/* ================================================================ */}
      {/* ENVIRONMENT                                                       */}
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
              radial-gradient(
                circle_at_15%_25%,
                rgba(140,82,255,0.08),
                transparent_28%
              ),
              radial-gradient(
                circle_at_88%_55%,
                rgba(255,45,163,0.075),
                transparent_30%
              ),
              linear-gradient(
                180deg,
                #080d20_0%,
                #070c1c_48%,
                #0c0c25_100%
              )
            ]
          "
        />

        {/* Violet atmosphere */}

        <div
          className="
            absolute

            left-[-250px]
            top-[15%]

            h-[600px]
            w-[600px]

            rounded-full

            bg-[#8c52ff]/7

            blur-[160px]
          "
        />

        {/* Magenta atmosphere */}

        <div
          className="
            absolute

            right-[-250px]
            top-[45%]

            h-[650px]
            w-[650px]

            rounded-full

            bg-[#ff2da3]/7

            blur-[170px]
          "
        />

        {/* Very subtle grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            bg-[
              linear-gradient(
                rgba(255,255,255,0.5)_1px,
                transparent_1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5)_1px,
                transparent_1px
              )
            ]

            bg-[size:80px_80px]

            [mask-image:linear-gradient(
              to_bottom,
              transparent,
              black_15%,
              black_85%,
              transparent
            )]
          "
        />
      </div>

      {/* ================================================================ */}
      {/* CONTENT                                                           */}
      {/* ================================================================ */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1440px]
        "
      >
        {/* -------------------------------------------------------------- */}
        {/* SECTION HEADING                                                */}
        {/* -------------------------------------------------------------- */}

        <div className="mb-16 lg:mb-20">
          <SectionMarker
            number="03"
            label="Selected Work"
            accent="violet"
          />

          <div className="mt-7">
            <p
              className="
                mb-4

                font-mono

                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-[#8c52ff]/75
              "
            >
              Things I've built
            </p>

            <div
              className="
                flex
                flex-col
                gap-6

                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <h2
                className="
                  max-w-[650px]

                  text-[clamp(3rem,6vw,5.5rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]

                  text-white
                "
              >
                Featured
                <span
                  className="
                    block
                    text-white/30
                  "
                >
                  Projects.
                </span>
              </h2>

              <p
                className="
                  max-w-[390px]

                  text-sm
                  leading-7

                  text-white/35

                  lg:pb-1
                "
              >
                A selection of projects where I explore
                the intersection of development, design,
                usability, and creative problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* PROJECTS                                                       */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
            flex
            flex-col
            gap-7

            lg:gap-10
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Project Archive */}
        <ProjectArchive />  
      </div>
    </section>
  );
}

export default Projects;