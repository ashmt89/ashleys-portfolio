import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ArchiveAccent =
  | "cyan"
  | "pink"
  | "violet"
  | "lime";

type ArchiveProject = {
  number: string;
  title: string;
  category: string;
  year: string;
  description?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  accent: ArchiveAccent;
};

/* -------------------------------------------------------------------------- */
/*                              PROJECT DATA                                  */
/* -------------------------------------------------------------------------- */

const archiveProjects: ArchiveProject[] = [
  {
    number: "01",
    title: "Ashley's Blog",
    category: "Web Development",
    year: "2024",
    description:
      "A content-focused blog designed and developed as an exploration of modern frontend architecture, responsive design, and thoughtful user experience.",
    tags: ["Astro", "Islands Architecture"],
    image: "/images/projects/ashleys-blog.webp",
    liveUrl: "https://ashleys-blog.netlify.app/",
    githubUrl: "",
    accent: "cyan",
  },

  {
    number: "02",
    title: "Posh Paws Retreat",
    category: "Wireframe Design",
    year: "2024",
    description:
      "A wireframe design for a doggy daycare and spa.",
    tags: ["Figma"],
    image: "/images/projects/posh-paws.png",
    liveUrl: "",
    githubUrl: "",
    accent: "violet",
  },

  {
    number: "03",
    title: "",
    category: "",
    year: "",
    description:
      "",
    tags: [""],
    image: "",
    liveUrl: "",
    githubUrl: "",
    accent: "pink",
  },

  {
    number: "04",
    title: "",
    category: "",
    year: "",
    description:
      "",
    tags: [""],
    image: "",
    liveUrl: "",
    githubUrl: "",
    accent: "lime",
  },
];

/* -------------------------------------------------------------------------- */
/*                              ACCENT STYLES                                 */
/* -------------------------------------------------------------------------- */

const accents = {
  cyan: {
    text: "text-[#58d7ff]",
    dot: "bg-[#58d7ff]",
    glow: "bg-[#58d7ff]",
    border: "group-hover:border-[#58d7ff]/15",
  },

  pink: {
    text: "text-[#ff2da3]",
    dot: "bg-[#ff2da3]",
    glow: "bg-[#ff2da3]",
    border: "group-hover:border-[#ff2da3]/15",
  },

  violet: {
    text: "text-[#9b6cff]",
    dot: "bg-[#8c52ff]",
    glow: "bg-[#8c52ff]",
    border: "group-hover:border-[#8c52ff]/15",
  },

  lime: {
    text: "text-[#d8ff47]",
    dot: "bg-[#d8ff47]",
    glow: "bg-[#d8ff47]",
    border: "group-hover:border-[#d8ff47]/15",
  },
};

/* -------------------------------------------------------------------------- */
/*                             ARCHIVE PREVIEW                                */
/* -------------------------------------------------------------------------- */

function ArchivePreview({
  project,
}: {
  project: ArchiveProject | null;
}) {
  return (
    <div
      className={`
        pointer-events-none

        absolute
        right-[4%]
        top-1/2
        z-30

        hidden

        w-[340px]

        -translate-y-1/2

        transition-all
        duration-300

        xl:block

        ${
          project
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0"
        }
      `}
    >
      {project && (
        <div
          className="
            overflow-hidden

            rounded-[22px]

            border
            border-white/[0.09]

            bg-[rgba(8,13,32,0.82)]

            p-2

            backdrop-blur-2xl

            shadow-[
              inset_0_1px_0_rgba(255,255,255,0.08),
              0_25px_70px_rgba(0,0,0,0.35)
            ]
          "
        >
          {/* Image */}

          <div
            className="
              relative

              aspect-[16/10]

              overflow-hidden

              rounded-[16px]

              bg-[#080e22]
            "
          >
            {project.image ? (
              <img
                src={project.image}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  items-center
                  justify-center

                  bg-[
                    radial-gradient(
                      circle_at_50%_40%,
                      rgba(140,82,255,0.15),
                      transparent_40%
                    ),
                    #080e22
                  ]
                "
              >
                <span
                  className="
                    font-mono
                    text-[0.55rem]
                    uppercase
                    tracking-[0.18em]
                    text-white/20
                  "
                >
                  Project Preview
                </span>
              </div>
            )}

            {/* Image overlay */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#060b1b]/40
                to-transparent
              "
            />
          </div>

          {/* Preview info */}

          <div className="px-3 pb-3 pt-4">
            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <span
                className={`
                  h-[4px]
                  w-[4px]

                  rounded-full

                  ${accents[project.accent].dot}
                `}
              />

              <span
                className="
                  font-mono
                  text-[0.5rem]
                  uppercase
                  tracking-[0.17em]
                  text-white/30
                "
              >
                {project.category}
              </span>
            </div>

            <p
              className="
                text-sm
                font-medium
                text-white/80
              "
            >
              {project.title}
            </p>

            {project.description && (
              <p
                className="
                  mt-2

                  text-xs
                  leading-5
                  text-white/30
                "
              >
                {project.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ARCHIVE ROW                                   */
/* -------------------------------------------------------------------------- */

function ArchiveRow({
  project,
  onEnter,
  onLeave,
}: {
  project: ArchiveProject;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const accent = accents[project.accent];

  const primaryUrl =
    project.liveUrl || project.githubUrl;

  const content = (
    <>
      {/* Hover glow */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -left-20
          top-1/2

          h-28
          w-48

          -translate-y-1/2

          rounded-full

          opacity-0

          blur-[55px]

          transition-opacity
          duration-500

          group-hover:opacity-[0.08]

          ${accent.glow}
        `}
      />

      {/* Number */}

      <div
        className="
          relative
          z-10

          flex
          items-center
          gap-3
        "
      >
        <span
          className={`
            font-mono

            text-[0.58rem]
            font-medium
            tracking-[0.15em]

            opacity-45

            transition-all
            duration-300

            group-hover:opacity-100

            ${accent.text}
          `}
        >
          {project.number}
        </span>

        <span
          className="
            hidden

            h-px
            w-5

            bg-white/10

            sm:block
          "
        />
      </div>

      {/* Title */}

      <div
        className="
          relative
          z-10
        "
      >
        <h3
          className="
            text-base
            font-medium

            tracking-[-0.025em]

            text-white/75

            transition-colors
            duration-300

            group-hover:text-white

            sm:text-lg
          "
        >
          {project.title}
        </h3>

        {/* Mobile category */}

        <span
          className="
            mt-1
            block

            font-mono
            text-[0.48rem]
            uppercase
            tracking-[0.14em]
            text-white/25

            md:hidden
          "
        >
          {project.category}
        </span>
      </div>

      {/* Category */}

      <span
        className="
          relative
          z-10

          hidden

          font-mono
          text-[0.52rem]
          font-medium
          uppercase
          tracking-[0.16em]

          text-white/25

          md:block
        "
      >
        {project.category}
      </span>

      {/* Tags */}

      <div
        className="
          relative
          z-10

          hidden

          flex-wrap
          gap-x-3
          gap-y-1

          lg:flex
        "
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              font-mono
              text-[0.5rem]
              uppercase
              tracking-[0.12em]
              text-white/22
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Year */}

      <span
        className="
          relative
          z-10

          font-mono
          text-[0.55rem]
          tracking-[0.12em]

          text-white/25
        "
      >
        {project.year}
      </span>

      {/* Arrow */}

      <div
        className="
          relative
          z-10

          flex
          justify-end
        "
      >
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          className="
            text-white/20

            transition-all
            duration-300

            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#d8ff47]
          "
        />
      </div>

      {/* Bottom highlight */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-[5%]
          right-[5%]

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/[0.06]
          to-transparent

          transition-all
          duration-300

          group-hover:via-white/[0.11]
        "
      />
    </>
  );

  const className = `
    group
    relative

    grid
    grid-cols-[45px_1fr_auto]
    items-center
    gap-3

    overflow-hidden

    border-b
    border-white/[0.045]

    px-4
    py-5

    transition-all
    duration-300

    hover:bg-white/[0.018]

    sm:grid-cols-[70px_1fr_auto]
    sm:px-6

    md:grid-cols-[70px_1.4fr_0.8fr_auto]

    lg:grid-cols-[70px_1.4fr_0.75fr_1fr_70px_30px]

    ${accent.border}
  `;

  /*
    If there is a primary URL, make the whole row clickable.

    Otherwise it remains a div so unfinished/coursework projects
    can still appear in the archive.
  */

  if (primaryUrl) {
    return (
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={className}
    >
      {content}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            PROJECT ARCHIVE                                 */
/* -------------------------------------------------------------------------- */

export function ProjectArchive() {
  const [activeProject, setActiveProject] =
    useState<ArchiveProject | null>(null);

  return (
    <section
      className="
        relative

        mt-24

        lg:mt-32
      "
    >
      {/* ================================================================ */}
      {/* HEADING                                                          */}
      {/* ================================================================ */}

      <div
        className="
          mb-9

          flex
          flex-col
          gap-5

          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div>
          <div
            className="
              mb-4

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[4px]
                w-[4px]

                rounded-full

                bg-[#d8ff47]

                shadow-[
                  0_0_6px_rgba(216,255,71,0.7),
                  0_0_14px_rgba(216,255,71,0.25)
                ]
              "
            />

            <p
              className="
                font-mono

                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.2em]

                text-[#d8ff47]/60
              "
            >
              More work
            </p>
          </div>

          <h3
            className="
              text-[clamp(2rem,4vw,3.5rem)]
              font-medium
              leading-none
              tracking-[-0.055em]

              text-white
            "
          >
            Project{" "}
            <span className="text-white/30">
              Archive
            </span>
          </h3>
        </div>

        <p
          className="
            max-w-[390px]

            text-sm
            leading-6
            text-white/30
          "
        >
          Smaller builds, experiments, coursework,
          and ideas that helped shape the way I
          approach development and design.
        </p>
      </div>

      {/* ================================================================ */}
      {/* ARCHIVE GLASS CONTAINER                                         */}
      {/* ================================================================ */}

      <div
        className="
          relative
          isolate

          rounded-[26px]

          border
          border-white/[0.065]

          bg-[rgba(7,12,31,0.36)]

          backdrop-blur-xl

          shadow-[
            inset_0_1px_0_rgba(255,255,255,0.055),
            inset_0_-1px_0_rgba(255,255,255,0.015),
            0_20px_60px_rgba(0,0,0,0.12)
          ]
        "
      >
        {/* ------------------------------------------------------------ */}
        {/* GLASS REFLECTION                                             */}
        {/* ------------------------------------------------------------ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-[3%]
            right-[3%]
            top-px

            h-20

            rounded-[999px_999px_50%_50%]

            bg-gradient-to-b
            from-white/[0.035]
            to-transparent
          "
        />

        {/* Cyan top caustic */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-[6%]
            top-0

            h-px
            w-[26%]

            bg-gradient-to-r
            from-transparent
            via-[#58d7ff]/25
            to-transparent
          "
        />

        {/* Magenta top caustic */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            right-[7%]
            top-0

            h-px
            w-[30%]

            bg-gradient-to-r
            from-transparent
            via-[#ff2da3]/25
            to-transparent
          "
        />

        {/* ------------------------------------------------------------ */}
        {/* DESKTOP COLUMN HEADINGS                                      */}
        {/* ------------------------------------------------------------ */}

        <div
          className="
            hidden

            grid-cols-[70px_1.4fr_0.75fr_1fr_70px_30px]
            items-center
            gap-3

            border-b
            border-white/[0.05]

            px-6
            py-4

            lg:grid
          "
        >
          {[
            "No.",
            "Project",
            "Type",
            "Built with",
            "Year",
            "",
          ].map((heading, index) => (
            <span
              key={`${heading}-${index}`}
              className="
                font-mono

                text-[0.46rem]
                font-medium
                uppercase
                tracking-[0.17em]

                text-white/18
              "
            >
              {heading}
            </span>
          ))}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ROWS                                                         */}
        {/* ------------------------------------------------------------ */}

        <div>
          {archiveProjects.map((project) => (
            <ArchiveRow
              key={project.number}
              project={project}
              onEnter={() =>
                setActiveProject(project)
              }
              onLeave={() =>
                setActiveProject(null)
              }
            />
          ))}
        </div>
      </div>

      {/* Floating preview */}

      <ArchivePreview project={activeProject} />
    </section>
  );
}

export default ProjectArchive;