import {
  ArrowUpRight,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";

import SectionMarker from "~/components/SectionMarker";

/* -------------------------------------------------------------------------- */
/*                              ABOUT DATA                                    */
/* -------------------------------------------------------------------------- */

const interests = [
  {
    number: "01",
    title: "Creative Frontend Development",
    description: "Building expressive experiences for the web",
    icon: Code2,
    accent: "cyan",
  },
  {
    number: "02",
    title: "UI Systems & Interaction",
    description: "Exploring the space between usability and personality",
    icon: Palette,
    accent: "pink",
  },
  {
    number: "03",
    title: "AI & Emerging Technology",
    description: "Learning how new technology shapes digital experiences",
    icon: Sparkles,
    accent: "violet",
  },
] as const;

const accentStyles = {
  cyan: {
    text: "text-[#58d7ff]",
    dot: "bg-[#58d7ff]",
    glow: "bg-[#58d7ff]",
    border: "group-hover/item:border-[#58d7ff]/15",
  },

  pink: {
    text: "text-[#ff2da3]",
    dot: "bg-[#ff2da3]",
    glow: "bg-[#ff2da3]",
    border: "group-hover/item:border-[#ff2da3]/15",
  },

  violet: {
    text: "text-[#a274ff]",
    dot: "bg-[#8c52ff]",
    glow: "bg-[#8c52ff]",
    border: "group-hover/item:border-[#8c52ff]/15",
  },
};

/* -------------------------------------------------------------------------- */
/*                            PORTRAIT / VISUAL                               */
/* -------------------------------------------------------------------------- */

function AboutVisual() {
  return (
    <div
      className="
        group
        relative
        mx-auto
        w-full
        max-w-[520px]
        lg:mx-0
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND OFFSET FRAME                                     */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          absolute
          -bottom-4
          -right-4
          h-full
          w-full
          rounded-[32px]
          border
          border-[#8c52ff]/10
          bg-[#8c52ff]/[0.018]
        "
      />

      {/* ============================================================ */}
      {/* MAIN GLASS FRAME                                            */}
      {/* ============================================================ */}

      <div
        className="
          relative
          isolate
          aspect-[4/5]
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.075]
          bg-[rgba(8,14,38,0.45)]
          p-2
          backdrop-blur-xl
          shadow-[
            inset_0_1px_0_rgba(255,255,255,0.07),
            inset_0_-1px_0_rgba(255,255,255,0.015),
            0_30px_80px_rgba(0,0,0,0.22)
          ]
        "
      >
        {/* ---------------------------------------------------------- */}
        {/* IMAGE                                                      */}
        {/* ---------------------------------------------------------- */}

        <div
          className="
            relative
            h-full
            overflow-hidden
            rounded-[25px]
            bg-[#080e22]
          "
        >

{/* Grayscale image */}
<img
  src="/images/portrait.webp"
  alt="Ashley Graham"
  className="
    h-full
    w-full
    object-cover

    grayscale
    contrast-[1.12]
    brightness-[0.78]

    transition-all
    duration-700
    ease-out

    group-hover:scale-[1.02]
    group-hover:grayscale-[35%]
    group-hover:brightness-[0.9]
  "
/>

{/* Navy shadow tint */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0

    bg-[#071225]/45

    mix-blend-multiply
  "
/>

{/* Neon duotone gradient */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0

    bg-gradient-to-br
    from-[#ff2da3]/55
    via-[#8c52ff]/20
    to-[#58d7ff]/55

    mix-blend-color

    transition-opacity
    duration-700

    group-hover:opacity-60
  "
/>

{/* Soft neon bloom */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0

    bg-[
      radial-gradient(
        circle_at_80%_20%,
        rgba(255,45,163,0.28),
        transparent_35%
      ),
      radial-gradient(
        circle_at_15%_75%,
        rgba(88,215,255,0.25),
        transparent_38%
      )
    ]

    mix-blend-screen
  "
/>

{/* Electric edge lighting */}

<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0

    bg-[
      linear-gradient(
        115deg,
        rgba(255,45,163,0.22)_0%,
        transparent_30%,
        transparent_65%,
        rgba(88,215,255,0.20)_100%
      )
    ]

    mix-blend-screen
  "
/>

          {/* Dark bottom gradient */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050919]/75
              via-transparent
              to-[#081020]/10
            "
          />    

          {/* -------------------------------------------------------- */}
          {/* TOP LABEL                                                */}
          {/* -------------------------------------------------------- */}

          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.08]
              bg-[#070c1c]/45
              px-3
              py-2
              backdrop-blur-xl
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
                  0_0_14px_rgba(216,255,71,0.3)
                ]
              "
            />

            <span
              className="
                font-mono
                text-[0.46rem]
                font-medium
                uppercase
                tracking-[0.17em]
                text-white/45
              "
            >
              Behind the screen
            </span>
          </div>

          {/* -------------------------------------------------------- */}
          {/* BOTTOM METADATA                                          */}
          {/* -------------------------------------------------------- */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              flex
              items-end
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  font-mono
                  text-[0.45rem]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                Based in
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-white/70
                "
              >
                Florida
              </p>
            </div>

            <span
              className="
                font-mono
                text-[0.44rem]
                uppercase
                tracking-[0.14em]
                text-white/20
              "
            >
              27.9° N / 82.5° W
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* GLASS REFLECTION                                           */}
        {/* ---------------------------------------------------------- */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[6%]
            right-[6%]
            top-px
            h-[25%]
            rounded-[999px_999px_55%_55%]
            bg-gradient-to-b
            from-white/[0.045]
            to-transparent
          "
        />

        {/* Cyan rim */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-0
            h-px
            w-[30%]
            bg-gradient-to-r
            from-transparent
            via-[#58d7ff]/35
            to-transparent
          "
        />

        {/* Pink rim */}

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
            via-[#ff2da3]/30
            to-transparent
          "
        />
      </div>

      {/* Decorative floating coordinates */}

      <div
        aria-hidden="true"
        className="
          absolute
          -left-5
          top-[22%]
          hidden
          font-mono
          text-[0.42rem]
          uppercase
          tracking-[0.16em]
          text-white/12
          [writing-mode:vertical-rl]
          lg:block
        "
      >
        Creative / Technology / Design
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          INTEREST / FOCUS ROW                              */
/* -------------------------------------------------------------------------- */

function InterestRow({
  item,
}: {
  item: (typeof interests)[number];
}) {
  const accent = accentStyles[item.accent];
  const Icon = item.icon;

  return (
    <div
      className={`
        group/item
        relative
        grid
        grid-cols-[32px_1fr_auto]
        items-center
        gap-3
        overflow-hidden
        border-b
        border-white/[0.045]
        py-4
        transition-all
        duration-300
        last:border-b-0
        ${accent.border}
      `}
    >
      {/* Hover glow */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -left-12
          top-1/2
          h-20
          w-28
          -translate-y-1/2
          rounded-full
          opacity-0
          blur-[45px]
          transition-opacity
          duration-500
          group-hover/item:opacity-[0.04]
          ${accent.glow}
        `}
      />

      {/* Number */}

      <span
        className={`
          relative
          z-10
          font-mono
          text-[0.47rem]
          tracking-[0.14em]
          opacity-45
          transition-opacity
          duration-300
          group-hover/item:opacity-100
          ${accent.text}
        `}
      >
        {item.number}
      </span>

      {/* Text */}

      <div className="relative z-10">
        <h4
          className="
            text-sm
            font-medium
            text-white/60
            transition-colors
            duration-300
            group-hover/item:text-white/90
          "
        >
          {item.title}
        </h4>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-white/22
            transition-colors
            duration-300
            group-hover/item:text-white/32
          "
        >
          {item.description}
        </p>
      </div>

      {/* Icon */}

      <div
        className="
          relative
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.055]
          bg-white/[0.015]
          text-white/18
          transition-all
          duration-300
          group-hover/item:border-white/[0.10]
          group-hover/item:text-white/45
        "
      >
        <Icon
          size={13}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ABOUT SECTION                                 */
/* -------------------------------------------------------------------------- */

export function About() {
  return (
    <section
      id="about"
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
      {/* BACKGROUND                                                       */}
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
        <div
          className="
            absolute
            inset-0
            bg-[
              radial-gradient(
                circle_at_15%_35%,
                rgba(255,45,163,0.06),
                transparent_28%
              ),
              radial-gradient(
                circle_at_82%_60%,
                rgba(88,215,255,0.055),
                transparent_30%
              ),
              radial-gradient(
                circle_at_55%_20%,
                rgba(140,82,255,0.04),
                transparent_25%
              ),
              linear-gradient(
                180deg,
                #070c1c_0%,
                #0a0d25_50%,
                #070c1c_100%
              )
            ]
          "
        />

        {/* Magenta atmosphere */}

        <div
          className="
            absolute
            -left-[300px]
            top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#ff2da3]/5
            blur-[180px]
          "
        />

        {/* Cyan atmosphere */}

        <div
          className="
            absolute
            -right-[300px]
            bottom-[5%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#58d7ff]/5
            blur-[190px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
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
        {/* ============================================================ */}
        {/* SECTION HEADER                                              */}
        {/* ============================================================ */}

        <SectionMarker
          number="05"
          label="About"
          accent="cyan"
        />

        <div
          className="
            mt-7
            grid
            gap-7
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
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
                text-[#58d7ff]/65
              "
            >
              Beyond the code
            </p>

            <h2
              className="
                max-w-[780px]
                text-[clamp(3rem,6vw,5.5rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.065em]
                text-white
              "
            >
              Curious by nature.

              <span
                className="
                  block
                  text-white/30
                "
              >
                Creative by design.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[430px]
              text-sm
              leading-7
              text-white/35
              lg:justify-self-end
              lg:pb-1
            "
          >
            I&apos;m interested in the space where
            technology, creativity, and human-centered
            design come together.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MAIN ABOUT LAYOUT                                           */}
        {/* ============================================================ */}

        <div
          className="
            mt-16
            grid
            items-center
            gap-14
            lg:mt-24
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
            xl:grid-cols-[0.75fr_1.25fr]
            xl:gap-28
          "
        >
          {/* ---------------------------------------------------------- */}
          {/* LEFT: VISUAL                                               */}
          {/* ---------------------------------------------------------- */}

          <AboutVisual />

          {/* ---------------------------------------------------------- */}
          {/* RIGHT: STORY                                               */}
          {/* ---------------------------------------------------------- */}

          <div
            className="
              max-w-[720px]
            "
          >
            {/* Intro statement */}

            <div
              className="
                relative
                border-l
                border-[#ff2da3]/20
                pl-6
                sm:pl-8
              "
            >
              {/* Glowing top node */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-[3px]
                  top-1
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#ff2da3]
                  shadow-[
                    0_0_7px_rgba(255,45,163,0.8),
                    0_0_18px_rgba(255,45,163,0.3)
                  ]
                "
              />

              <p
                className="
                  text-[clamp(1.35rem,2.5vw,2rem)]
                  font-medium
                  leading-[1.4]
                  tracking-[-0.035em]
                  text-white/75
                "
              >
                I&apos;m an Information Science student
                with a love for the space where{" "}
                <span className="text-white">
                  technology and creativity overlap.
                </span>
              </p>
            </div>

            {/* Body copy */}

            <div
              className="
                mt-8
                grid
                gap-5
                text-sm
                leading-7
                text-white/35
                sm:text-[0.95rem]
              "
            >
              <p>
                I enjoy taking ideas and turning them into
                digital experiences that are thoughtful,
                intuitive, and visually distinctive. For me,
                good design isn&apos;t just about how
                something looks—it&apos;s about how all the
                pieces work together to create an experience
                that feels intentional.
              </p>

              <p>
                My background in Information Science has
                given me the opportunity to explore web
                development, information systems, databases,
                user experience, and emerging technologies.
                At the same time, my creative interests push
                me to experiment with visual design,
                interaction, and new ways of making the web
                feel more expressive.
              </p>

              <p>
                I&apos;m especially drawn to projects where I
                can combine both sides of that thinking:
                solving a real problem while creating
                something people genuinely enjoy using.
              </p>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CURRENTLY EXPLORING                                     */}
            {/* -------------------------------------------------------- */}

            <div
              className="
                mt-10
                border-t
                border-white/[0.055]
                pt-8
              "
            >
              <div
                className="
                  mb-3
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
                    gap-2.5
                  "
                >
                  <span
                    className="
                      h-[4px]
                      w-[4px]
                      rounded-full
                      bg-[#d8ff47]
                      shadow-[0_0_8px_rgba(216,255,71,0.6)]
                    "
                  />

                  <p
                    className="
                      font-mono
                      text-[0.5rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    Currently Exploring
                  </p>
                </div>

                <span
                  className="
                    hidden
                    font-mono
                    text-[0.42rem]
                    uppercase
                    tracking-[0.14em]
                    text-white/12
                    sm:block
                  "
                >
                  Always learning
                </span>
              </div>

              <div>
                {interests.map((item) => (
                  <InterestRow
                    key={item.number}
                    item={item}
                  />
                ))}
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CTA                                                      */}
            {/* -------------------------------------------------------- */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-5
              "
            >
              <a
                href="#contact"
                className="
                  group/cta
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#d8ff47]
                  px-5
                  py-3
                  font-mono
                  text-[0.58rem]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#07101f]
                  shadow-[
                    inset_0_1px_0_rgba(255,255,255,0.5),
                    0_0_25px_rgba(216,255,71,0.08)
                  ]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[
                    inset_0_1px_0_rgba(255,255,255,0.6),
                    0_0_32px_rgba(216,255,71,0.18)
                  ]
                "
              >
                Let&apos;s connect

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover/cta:translate-x-0.5
                    group-hover/cta:-translate-y-0.5
                  "
                />
              </a>

              <span
                className="
                  font-mono
                  text-[0.45rem]
                  uppercase
                  tracking-[0.14em]
                  text-white/15
                "
              >
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;