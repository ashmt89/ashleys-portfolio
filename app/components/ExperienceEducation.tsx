import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import SectionMarker from "~/components/SectionMarker";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Education = {
  degree: string;
  school: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  areas: {
    title: string;
    focus: string;
  }[];
  href?: string;
};

type Experience = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  accent: "pink" | "violet" | "cyan";
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const education: Education = {
  degree: "B.S. Information Science",

  school: "University of South Florida",

  location: "Tampa, FL",

  startDate: "2024",
  endDate: "2026",

  description:
    "My studies in Information Science explore the relationship between people, technology, information, and systems. Through coursework and hands-on projects, I've developed experience across web development, databases, information architecture, project management, and user-centered design.",

  areas: [
    {
      title: "Web Development",
      focus: "Frontend · Responsive UI",
    },
    {
      title: "Database Systems",
      focus: "SQL · Data Modeling",
    },
    {
      title: "Information Architecture",
      focus: "Organization · UX",
    },
    {
      title: "Project Management",
      focus: "Planning · Implementation",
    },
    {
      title: "Networks & Technology",
      focus: "Systems · Infrastructure",
    },
    {
      title: "Emerging Technology",
      focus: "AI · Ethics · Research",
    },
  ],

  /*
    Optional:

    href: "/education",
  */
};

const experiences: Experience[] = [
  {
    id: "current-position",

    title: "Fiscal & Business Specialist",
    organization: "University of South Florida, College of Public Health",

    location: "Tampa, FL",

    startDate: "2022",
    endDate: "Present",

    description:
      "Briefly describe your role and focus on the responsibilities and experiences most relevant to the professional story you want your portfolio to tell.",

    highlights: [
      "Describe an important responsibility, accomplishment, or contribution.",
      "Highlight collaboration, problem solving, leadership, or technology experience.",
      "Include a measurable result when you have one.",
    ],

    tags: [
      "Organization",
      "Problem Solving",
      "Teamwork",
    ],

    accent: "pink",
  },

  {
    id: "previous-position",

    title: "Director of Education",
    organization: "Barbizon USA",

    location: "Tampa, Florida",

    startDate: "2019",
    endDate: "2022",

    description:
      "A concise description of what you did and how the experience contributed to skills that are relevant to your current direction. managed people..problem solving",

    highlights: [
      "A meaningful responsibility or accomplishment.",
      "A transferable skill you developed through this role. project management, leadership, communication, etc.",
    ],

    tags: [
      "Communication",
      "Leadership",
      "Collaboration",
    ],

    accent: "violet",
  },

  {
    id: "earlier-position",

    title: "Earlier Experience",
    organization: "Organization Name",

    startDate: "2020",
    endDate: "2022",

    description:
      "Earlier experience can be kept concise while still showing the progression of your professional journey.",

    tags: [
      "Customer Experience",
      "Communication",
    ],

    accent: "cyan",
  },
];

/* -------------------------------------------------------------------------- */
/*                              ACCENT STYLES                                 */
/* -------------------------------------------------------------------------- */

const accentStyles = {
  pink: {
    text: "text-[#ff2da3]",
    muted: "text-[#ff2da3]/65",
    dot: "bg-[#ff2da3]",
    glow: "bg-[#ff2da3]",
    border: "group-hover:border-[#ff2da3]/20",
  },

  violet: {
    text: "text-[#a274ff]",
    muted: "text-[#a274ff]/65",
    dot: "bg-[#8c52ff]",
    glow: "bg-[#8c52ff]",
    border: "group-hover:border-[#8c52ff]/20",
  },

  cyan: {
    text: "text-[#58d7ff]",
    muted: "text-[#58d7ff]/65",
    dot: "bg-[#58d7ff]",
    glow: "bg-[#58d7ff]",
    border: "group-hover:border-[#58d7ff]/20",
  },
};

/* -------------------------------------------------------------------------- */
/*                                SMALL TAG                                   */
/* -------------------------------------------------------------------------- */

function Tag({
  children,
}: {
  children: string;
}) {
  return (
    <span
      className="
        rounded-full

        border
        border-white/[0.065]

        bg-white/[0.022]

        px-3
        py-1.5

        font-mono
        text-[0.5rem]
        font-medium
        uppercase
        tracking-[0.13em]

        text-white/30

        backdrop-blur-md

        transition-colors
        duration-300

        group-hover:text-white/45
      "
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                           EDUCATION ANCHOR CARD                            */
/* -------------------------------------------------------------------------- */

function EducationAnchor() {
  return (
    <div
      className="
        group
        relative
        isolate

        overflow-hidden

        rounded-[32px]

        border
        border-white/[0.07]

        bg-[rgba(8,14,38,0.42)]

        p-6

        backdrop-blur-xl
        backdrop-saturate-[1.25]

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.065),
          inset_0_-1px_0_rgba(255,255,255,0.015),
          0_28px_80px_rgba(0,0,0,0.17)
        ]

        transition-all
        duration-500

        hover:border-[#58d7ff]/15

        sm:p-8
        lg:p-10
        xl:p-12
      "
    >
      {/* ============================================================ */}
      {/* ENVIRONMENTAL LIGHT                                         */}
      {/* ============================================================ */}

      {/* Cyan left light */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -left-32
          -top-32

          h-[380px]
          w-[380px]

          rounded-full

          bg-[#58d7ff]/[0.055]

          blur-[110px]

          transition-opacity
          duration-700

          group-hover:opacity-150
        "
      />

      {/* Violet right light */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-28
          -bottom-36

          h-[420px]
          w-[420px]

          rounded-full

          bg-[#8c52ff]/[0.06]

          blur-[120px]
        "
      />

      {/* Tiny lime accent */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          right-[12%]
          top-[18%]

          h-28
          w-28

          rounded-full

          bg-[#d8ff47]/[0.025]

          blur-[55px]
        "
      />

      {/* ============================================================ */}
      {/* GLASS SURFACE                                                */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[3%]
          right-[3%]
          top-px

          h-[28%]

          rounded-[999px_999px_55%_55%]

          bg-gradient-to-b
          from-white/[0.04]
          via-white/[0.01]
          to-transparent
        "
      />

      {/* Cyan top caustic */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[7%]
          top-0

          h-px
          w-[28%]

          bg-gradient-to-r
          from-transparent
          via-[#58d7ff]/30
          to-transparent

          shadow-[0_-1px_5px_rgba(88,215,255,0.10)]
        "
      />

      {/* Violet top caustic */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          right-[8%]
          top-0

          h-px
          w-[32%]

          bg-gradient-to-r
          from-transparent
          via-[#8c52ff]/28
          to-transparent
        "
      />

      {/* ============================================================ */}
      {/* CONTENT                                                      */}
      {/* ============================================================ */}

      <div className="relative z-10">

        {/* Top metadata */}

        <div
          className="
            mb-10

            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Education label */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full

                border
                border-[#58d7ff]/15

                bg-[#58d7ff]/[0.035]

                text-[#58d7ff]

                shadow-[
                  inset_0_1px_0_rgba(255,255,255,0.08),
                  0_0_20px_rgba(88,215,255,0.04)
                ]
              "
            >
              <GraduationCap
                size={16}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <p
                className="
                  font-mono

                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-[#58d7ff]/65
                "
              >
                Education
              </p>

              <p
                className="
                  mt-1

                  font-mono

                  text-[0.45rem]
                  uppercase
                  tracking-[0.14em]

                  text-white/18
                "
              >
                Academic Foundation
              </p>
            </div>
          </div>

          {/* Dates */}

          <div
            className="
              flex
              items-center
              gap-2

              font-mono

              text-[0.52rem]
              uppercase
              tracking-[0.14em]

              text-white/25
            "
          >
            <CalendarDays
              size={12}
              strokeWidth={1.5}
            />

            {education.startDate}
            {" — "}
            {education.endDate}
          </div>
        </div>

        {/* ========================================================== */}
        {/* MAIN EDUCATION GRID                                        */}
        {/* ========================================================== */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]
            lg:gap-14

            xl:gap-20
          "
        >
          {/* -------------------------------------------------------- */}
          {/* LEFT: DEGREE                                            */}
          {/* -------------------------------------------------------- */}

          <div>
            <div
              className="
                mb-5

                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]

                  rounded-full

                  bg-[#d8ff47]

                  shadow-[
                    0_0_6px_rgba(216,255,71,0.8),
                    0_0_16px_rgba(216,255,71,0.25)
                  ]
                "
              />

              <span
                className="
                  font-mono

                  text-[0.5rem]
                  uppercase
                  tracking-[0.17em]

                  text-white/25
                "
              >
                Current Focus
              </span>
            </div>

            <h3
              className="
                max-w-[700px]

                text-[clamp(2.2rem,4.5vw,4.6rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.06em]

                text-white
              "
            >
              {education.degree}
            </h3>

            {/* School */}

            <div
              className="
                mt-5

                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
              "
            >
              <span
                className="
                  text-base
                  font-medium

                  text-white/50
                "
              >
                {education.school}
              </span>

              {education.location && (
                <span
                  className="
                    flex
                    items-center
                    gap-1.5

                    font-mono

                    text-[0.5rem]
                    uppercase
                    tracking-[0.13em]

                    text-white/20
                  "
                >
                  <MapPin
                    size={11}
                    strokeWidth={1.5}
                  />

                  {education.location}
                </span>
              )}
            </div>

            {/* Description */}

            <p
              className="
                mt-7

                max-w-[650px]

                text-sm
                leading-7

                text-white/38

                sm:text-[0.95rem]
              "
            >
              {education.description}
            </p>
          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT: AREAS OF STUDY                                   */}
          {/* -------------------------------------------------------- */}

<div
  className="
    lg:border-l
    lg:border-white/[0.055]
    lg:pl-10

    xl:pl-14
  "
>
  {/* Section heading */}

  <div
    className="
      mb-6

      flex
      items-center
      justify-between
      gap-4
    "
  >
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <Sparkles
        size={13}
        strokeWidth={1.5}
        className="text-[#8c52ff]/70"
      />

      <p
        className="
          font-mono

          text-[0.52rem]
          font-semibold
          uppercase
          tracking-[0.18em]

          text-white/30
        "
      >
        Areas of Study
      </p>
    </div>

    {/* Decorative count */}

    <span
      className="
        font-mono

        text-[0.45rem]
        uppercase
        tracking-[0.14em]

        text-white/15
      "
    >
      06 disciplines
    </span>
  </div>

  {/* Areas */}

  <div
    className="
      overflow-hidden

      rounded-[20px]

      border
      border-white/[0.055]

      bg-white/[0.035]
    "
  >
    {education.areas.map((area, index) => (
      <div
        key={area.title}
        className="
          group/area
          relative

          grid
          grid-cols-[36px_1fr_auto]
          items-center
          gap-3

          min-h-[72px]

          border-b
          border-white/[0.045]

          bg-[#080e22]/75

          px-4
          py-3.5

          transition-all
          duration-300

          last:border-b-0

          hover:bg-white/[0.025]

          sm:grid-cols-[42px_1fr_auto]
          sm:px-5
        "
      >
        {/* ------------------------------------------------ */}
        {/* HOVER ATMOSPHERE                                 */}
        {/* ------------------------------------------------ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            -left-10
            top-1/2

            h-20
            w-28

            -translate-y-1/2

            rounded-full

            bg-[#58d7ff]

            opacity-0

            blur-[45px]

            transition-opacity
            duration-500

            group-hover/area:opacity-[0.035]
          "
        />

        {/* ------------------------------------------------ */}
        {/* NUMBER                                           */}
        {/* ------------------------------------------------ */}

        <div
          className="
            relative
            z-10

            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              font-mono

              text-[0.48rem]
              font-medium
              tracking-[0.14em]

              text-[#58d7ff]/35

              transition-colors
              duration-300

              group-hover/area:text-[#58d7ff]/75
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* ------------------------------------------------ */}
        {/* AREA INFO                                        */}
        {/* ------------------------------------------------ */}

        <div
          className="
            relative
            z-10

            min-w-0
          "
        >
          <h4
            className="
              text-[0.72rem]
              font-medium
              uppercase
              tracking-[0.06em]

              text-white/55

              transition-colors
              duration-300

              group-hover/area:text-white/85

              sm:text-[0.76rem]
            "
          >
            {area.title}
          </h4>

          <p
            className="
              mt-1

              font-mono

              text-[0.46rem]
              uppercase
              tracking-[0.11em]

              text-white/20

              transition-colors
              duration-300

              group-hover/area:text-white/32
            "
          >
            {area.focus}
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* DECORATIVE NODE                                  */}
        {/* ------------------------------------------------ */}

        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              relative

              flex
              h-[16px]
              w-[16px]
              items-center
              justify-center

              rounded-full

              border
              border-white/[0.055]

              transition-all
              duration-300

              group-hover/area:border-[#d8ff47]/20
            "
          >
            <span
              className="
                h-[3px]
                w-[3px]

                rounded-full

                bg-white/15

                transition-all
                duration-300

                group-hover/area:bg-[#d8ff47]

                group-hover/area:shadow-[
                  0_0_5px_rgba(216,255,71,0.8),
                  0_0_12px_rgba(216,255,71,0.25)
                ]
              "
            />
          </span>
        </div>

        {/* ------------------------------------------------ */}
        {/* BOTTOM HOVER LIGHT                               */}
        {/* ------------------------------------------------ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            bottom-0
            left-[10%]

            h-px
            w-0

            bg-gradient-to-r
            from-transparent
            via-[#58d7ff]/25
            to-transparent

            transition-all
            duration-500

            group-hover/area:w-[55%]
          "
        />
      </div>
    ))}
  </div>

  {/* Footer note */}

  <div
    className="
      mt-4

      flex
      items-center
      gap-2
    "
  >
    <span
      className="
        h-[3px]
        w-[3px]

        rounded-full

        bg-[#8c52ff]/50
      "
    />

    <p
      className="
        font-mono

        text-[0.43rem]
        uppercase
        tracking-[0.13em]

        text-white/15
      "
    >
      Connecting technology, people &amp; information
    </p>
  </div>
</div>
        </div>

        {/* ========================================================== */}
        {/* OPTIONAL EDUCATION LINK                                   */}
        {/* ========================================================== */}

        {education.href && (
          <div
            className="
              mt-10

              flex
              justify-end
            "
          >
            <a
              href={education.href}
              className="
                group/link

                inline-flex
                items-center
                gap-3

                font-mono

                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.15em]

                text-white/30

                transition-colors
                duration-300

                hover:text-white
              "
            >
              View education details

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.07]

                  bg-white/[0.025]

                  transition-all
                  duration-300

                  group-hover/link:translate-x-1
                  group-hover/link:border-[#d8ff47]/20
                  group-hover/link:text-[#d8ff47]
                "
              >
                <ArrowRight
                  size={13}
                  strokeWidth={1.7}
                />
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Bottom cyan caustic */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-[8%]

          h-px
          w-[28%]

          bg-gradient-to-r
          from-transparent
          via-[#58d7ff]/25
          to-transparent
        "
      />

      {/* Bottom violet caustic */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          right-[8%]

          h-px
          w-[34%]

          bg-gradient-to-r
          from-transparent
          via-[#8c52ff]/25
          to-transparent
        "
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         EXPERIENCE TIMELINE CARD                           */
/* -------------------------------------------------------------------------- */

function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const accent =
    accentStyles[experience.accent];

  return (
    <article
      className={`
        group
        relative
        isolate

        overflow-hidden

        rounded-[24px]

        border
        border-white/[0.055]

        bg-[rgba(8,14,35,0.32)]

        p-5

        backdrop-blur-lg

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.04),
          0_12px_35px_rgba(0,0,0,0.10)
        ]

        transition-all
        duration-400

        hover:-translate-y-0.5
        hover:bg-[rgba(10,16,40,0.45)]

        sm:p-6
        lg:p-7

        ${accent.border}
      `}
    >
      {/* Ambient glow */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-20
          -top-20

          h-44
          w-44

          rounded-full

          opacity-[0.025]

          blur-[65px]

          transition-opacity
          duration-500

          group-hover:opacity-[0.07]

          ${accent.glow}
        `}
      />

      {/* Top glass highlight */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[8%]
          right-[8%]
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />

      <div className="relative z-10">

        {/* Metadata */}

        <div
          className="
            mb-5

            flex
            flex-wrap
            items-center
            justify-between
            gap-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-2.5
            "
          >
            <BriefcaseBusiness
              size={13}
              strokeWidth={1.5}

              className={accent.text}
            />

            <span
              className={`
                font-mono

                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.17em]

                ${accent.muted}
              `}
            >
              Experience
            </span>
          </div>

          <span
            className="
              font-mono

              text-[0.5rem]
              uppercase
              tracking-[0.13em]

              text-white/20
            "
          >
            {experience.startDate}

            {experience.endDate && (
              <>
                {" — "}
                {experience.endDate}
              </>
            )}
          </span>
        </div>

        {/* Title */}

        <h4
          className="
            text-[clamp(1.35rem,2.4vw,2rem)]
            font-medium
            leading-[1]
            tracking-[-0.04em]

            text-white/90
          "
        >
          {experience.title}
        </h4>

        {/* Organization */}

        <div
          className="
            mt-3

            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
          "
        >
          <span
            className="
              text-sm
              font-medium

              text-white/42
            "
          >
            {experience.organization}
          </span>

          {experience.location && (
            <span
              className="
                flex
                items-center
                gap-1.5

                font-mono

                text-[0.48rem]
                uppercase
                tracking-[0.12em]

                text-white/18
              "
            >
              <MapPin
                size={10}
                strokeWidth={1.5}
              />

              {experience.location}
            </span>
          )}
        </div>

        {/* Description */}

        <p
          className="
            mt-5

            max-w-[650px]

            text-sm
            leading-6

            text-white/32
          "
        >
          {experience.description}
        </p>

        {/* Highlights */}

        {experience.highlights &&
          experience.highlights.length > 0 && (
            <ul
              className="
                mt-5

                flex
                flex-col
                gap-2.5
              "
            >
              {experience.highlights.map(
                (highlight) => (
                  <li
                    key={highlight}
                    className="
                      flex
                      items-start
                      gap-3

                      text-xs
                      leading-5

                      text-white/28
                    "
                  >
                    <span
                      className={`
                        mt-[7px]

                        h-[3px]
                        w-[3px]

                        shrink-0

                        rounded-full

                        ${accent.dot}
                      `}
                    />

                    {highlight}
                  </li>
                )
              )}
            </ul>
          )}

        {/* Tags */}

        {experience.tags &&
          experience.tags.length > 0 && (
            <div
              className="
                mt-6

                flex
                flex-wrap
                gap-2
              "
            >
              {experience.tags.map(
                (tag) => (
                  <Tag key={tag}>
                    {tag}
                  </Tag>
                )
              )}
            </div>
          )}
      </div>

      {/* Bottom accent */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          bottom-0
          left-[8%]

          h-px
          w-[22%]

          opacity-15

          transition-all
          duration-500

          group-hover:w-[35%]
          group-hover:opacity-35

          ${accent.glow}
        `}
      />
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                         EXPERIENCE TIMELINE                                */
/* -------------------------------------------------------------------------- */

function ExperienceTimeline() {
  return (
    <div
      className="
        relative

        mx-auto
        mt-0

        max-w-[1050px]
      "
    >
      {/* ============================================================ */}
      {/* CONNECTOR FROM EDUCATION                                    */}
      {/* ============================================================ */}

      <div
        className="
          flex
          h-24
          justify-center

          lg:h-32
        "
      >
        <div
          className="
            relative

            w-px
            h-full

            bg-gradient-to-b
            from-[#58d7ff]/20
            via-white/[0.08]
            to-white/[0.04]
          "
        >
          {/* Light in connector */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[20%]

              h-12
              w-px

              -translate-x-1/2

              bg-[#58d7ff]/25

              blur-[1px]
            "
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* EXPERIENCE LABEL                                            */}
      {/* ============================================================ */}

      <div
        className="
          mb-10

          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-white/[0.06]

            bg-[#080e22]/70

            px-4
            py-2

            backdrop-blur-xl
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]

              rounded-full

              bg-[#ff2da3]

              shadow-[0_0_10px_rgba(255,45,163,0.6)]
            "
          />

          <span
            className="
              font-mono

              text-[0.5rem]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-white/30
            "
          >
            Professional Experience
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TIMELINE ITEMS                                              */}
      {/* ============================================================ */}

      <div className="relative">

        {/* Central timeline — desktop */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-1/2
            top-0

            hidden
            w-px

            -translate-x-1/2

            bg-gradient-to-b
            from-white/[0.09]
            via-white/[0.05]
            to-transparent

            lg:block
          "
        />

        {/* Left timeline — mobile */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-[13px]
            top-0

            w-px

            bg-gradient-to-b
            from-white/[0.09]
            via-white/[0.05]
            to-transparent

            lg:hidden
          "
        />

        <div
          className="
            flex
            flex-col
            gap-8

            lg:gap-10
          "
        >
          {experiences.map(
            (experience, index) => {
              const accent =
                accentStyles[
                  experience.accent
                ];

              const left =
                index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className="
                    relative

                    grid

                    lg:grid-cols-[1fr_80px_1fr]
                    lg:items-start
                  "
                >
                  {/* ================================ */}
                  {/* TIMELINE NODE                   */}
                  {/* ================================ */}

                  <div
                    className="
                      absolute
                      left-0
                      top-5
                      z-20

                      flex
                      h-[27px]
                      w-[27px]
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/[0.09]

                      bg-[#080e22]

                      shadow-[
                        0_0_0_5px_rgba(7,12,28,0.9),
                        inset_0_1px_0_rgba(255,255,255,0.08)
                      ]

                      lg:left-1/2
                      lg:top-6
                      lg:-translate-x-1/2
                    "
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        absolute

                        h-5
                        w-5

                        rounded-full

                        opacity-20

                        blur-[7px]

                        ${accent.glow}
                      `}
                    />

                    <span
                      className={`
                        relative

                        h-[6px]
                        w-[6px]

                        rounded-full

                        ${accent.dot}
                      `}
                    />
                  </div>

                  {/* ================================ */}
                  {/* CARD                            */}
                  {/* ================================ */}

                  <div
                    className={`
                      ml-12

                      lg:ml-0

                      ${
                        left
                          ? `
                            lg:col-start-1
                            lg:pr-0
                          `
                          : `
                            lg:col-start-3
                          `
                      }
                    `}
                  >
                    <ExperienceCard
                      experience={
                        experience
                      }
                    />
                  </div>

                  {/* Date opposite card on desktop */}

                  <div
                    className={`
                      hidden

                      pt-8

                      lg:block

                      ${
                        left
                          ? `
                            lg:col-start-3
                            lg:row-start-1
                            lg:pl-2
                            lg:text-left
                          `
                          : `
                            lg:col-start-1
                            lg:row-start-1
                            lg:pr-2
                            lg:text-right
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        font-mono

                        text-[0.5rem]
                        uppercase
                        tracking-[0.16em]

                        text-white/15
                      "
                    >
                      {experience.startDate}

                      {experience.endDate && (
                        <>
                          {" — "}
                          {
                            experience.endDate
                          }
                        </>
                      )}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* End marker */}

        <div
          className="
            relative

            mt-12

            flex

            pl-[7px]

            lg:justify-center
            lg:pl-0
          "
        >
          <div
            className="
              h-3
              w-3

              rotate-45

              border
              border-white/[0.10]

              bg-[#080e22]

              shadow-[0_0_15px_rgba(140,82,255,0.10)]
            "
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                     EXPERIENCE & EDUCATION SECTION                         */
/* -------------------------------------------------------------------------- */

export function ExperienceEducation() {
  return (
    <section
      id="experience"
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
      {/* BACKGROUND                                                        */}
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
        {/* Base atmosphere */}

        <div
          className="
            absolute
            inset-0

            bg-[
              radial-gradient(
                circle_at_18%_20%,
                rgba(88,215,255,0.06),
                transparent_27%
              ),
              radial-gradient(
                circle_at_80%_55%,
                rgba(255,45,163,0.05),
                transparent_30%
              ),
              radial-gradient(
                circle_at_50%_35%,
                rgba(140,82,255,0.035),
                transparent_28%
              ),
              linear-gradient(
                180deg,
                #0c0c25_0%,
                #080d20_45%,
                #070c1c_100%
              )
            ]
          "
        />

        {/* Cyan orb */}

        <div
          className="
            absolute
            -left-[300px]
            top-[12%]

            h-[650px]
            w-[650px]

            rounded-full

            bg-[#58d7ff]/5

            blur-[180px]
          "
        />

        {/* Magenta orb */}

        <div
          className="
            absolute
            -right-[300px]
            top-[55%]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#ff2da3]/5

            blur-[190px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.014]

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
              black_10%,
              black_90%,
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
        {/* ============================================================ */}
        {/* SECTION HEADING                                             */}
        {/* ============================================================ */}

        <div
          className="
            mb-16

            lg:mb-20
          "
        >
          <SectionMarker
            number="04"
            label="My Journey"
            accent="pink"
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

                text-[#ff2da3]/65
              "
            >
              Experience &amp; Education
            </p>

            <div
              className="
                flex
                flex-col
                gap-7

                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <h2
                className="
                  max-w-[700px]

                  text-[clamp(3rem,6vw,5.5rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]

                  text-white
                "
              >
                Where I&apos;ve

                <span
                  className="
                    block
                    text-white/30
                  "
                >
                  been.
                </span>
              </h2>

              <p
                className="
                  max-w-[420px]

                  text-sm
                  leading-7

                  text-white/35

                  lg:pb-1
                "
              >
                The education, experiences, and
                opportunities shaping how I approach
                technology, design, and creative
                problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* EDUCATION — PRIMARY ANCHOR                                  */}
        {/* ============================================================ */}

        <EducationAnchor />

        {/* ============================================================ */}
        {/* PROFESSIONAL EXPERIENCE TIMELINE                            */}
        {/* ============================================================ */}

        <ExperienceTimeline />
      </div>
    </section>
  );
}

export default ExperienceEducation;