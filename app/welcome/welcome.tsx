import {
  useEffect,
  useState,
} from "react";

/* -------------------------------------------------------------------------- */
/*                              TYPEWRITER DATA                               */
/* -------------------------------------------------------------------------- */

const ROLES = [
  "Frontend Developer",
  "React Engineer",
  "UI Systems Designer",
  "Creative Technologist",
];

/* -------------------------------------------------------------------------- */
/*                              DECORATIVE STAR                               */
/* -------------------------------------------------------------------------- */

function Star({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        d="
          M12 0
          C12.7 7.7 16.3 11.3 24 12
          C16.3 12.7 12.7 16.3 12 24
          C11.3 16.3 7.7 12.7 0 12
          C7.7 11.3 11.3 7.7 12 0Z
        "
        fill="currentColor"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                              TYPEWRITER                                    */
/* -------------------------------------------------------------------------- */

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] =
    useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];

    if (!deleting && displayed.length < target.length) {
      const timeout = window.setTimeout(() => {
        setDisplayed(
          target.slice(0, displayed.length + 1)
        );
      }, 70);

      return () => window.clearTimeout(timeout);
    }

    if (
      !deleting &&
      displayed.length === target.length
    ) {
      const timeout = window.setTimeout(() => {
        setDeleting(true);
      }, 1800);

      return () => window.clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      const timeout = window.setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);

      return () => window.clearTimeout(timeout);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(
        (current) => (current + 1) % ROLES.length
      );
    }
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCursorVisible((current) => !current);
    }, 500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="
        flex min-h-[28px]
        items-center
        font-mono
        text-sm
        tracking-[0.08em]
        text-white/65

        sm:text-[0.95rem]
      "
    >
      <span>{displayed}</span>

      <span
        className={`
          ml-[2px]
          text-[#d8ff47]

          drop-shadow-[0_0_7px_rgba(216,255,71,0.55)]

          transition-opacity
          duration-100

          ${
            cursorVisible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        _
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         ABSTRACT HERO VISUAL                               */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        absolute

        right-[-8%]
        top-1/2

        hidden

        h-[720px]
        w-[720px]

        -translate-y-1/2

        lg:block

        xl:right-[0%]
        xl:h-[780px]
        xl:w-[780px]

        2xl:right-[3%]
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Large atmospheric bloom                                             */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[520px]
          w-[520px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#ff2da3]/12

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          left-[45%]
          top-[45%]

          h-[380px]
          w-[380px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#8c52ff]/14

          blur-[100px]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Outer orbit                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[560px]
          w-[560px]

          -translate-x-1/2
          -translate-y-1/2

          rotate-[-18deg]

          rounded-[50%]

          border
          border-[#58d7ff]/10
        "
      />

      {/* Highlight only part of the orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[560px]
          w-[560px]

          -translate-x-1/2
          -translate-y-1/2

          rotate-[28deg]

          rounded-[50%]

          border-t
          border-r

          border-[#58d7ff]/35

          opacity-70

          blur-[0.2px]

          [mask-image:linear-gradient(
            to_bottom,
            black,
            transparent_72%
          )]
        "
      />

      {/* Second orbit */}

      <div
        className="
          absolute
          left-[49%]
          top-[50%]

          h-[440px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rotate-[36deg]

          rounded-[50%]

          border
          border-[#ff2da3]/12
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Central orb                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[330px]
          w-[330px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[
            radial-gradient(
              circle_at_34%_27%,
              rgba(255,255,255,0.12),
              transparent_12%
            ),
            radial-gradient(
              circle_at_38%_38%,
              rgba(88,215,255,0.13),
              transparent_28%
            ),
            radial-gradient(
              circle_at_66%_70%,
              rgba(255,45,163,0.25),
              transparent_42%
            ),
            linear-gradient(
              145deg,
              rgba(10,18,42,0.75),
              rgba(20,12,48,0.9)
            )
          ]

          border
          border-white/[0.07]

          shadow-[
            inset_-30px_-20px_60px_rgba(255,45,163,0.10),
            inset_25px_15px_55px_rgba(88,215,255,0.07),
            0_0_80px_rgba(255,45,163,0.10)
          ]
        "
      >
        {/* Internal magenta glow */}

        <div
          className="
            absolute
            bottom-[12%]
            right-[8%]

            h-[170px]
            w-[170px]

            rounded-full

            bg-[#ff2da3]/15

            blur-[45px]
          "
        />

        {/* Internal cyan glow */}

        <div
          className="
            absolute
            left-[5%]
            top-[12%]

            h-[120px]
            w-[120px]

            rounded-full

            bg-[#58d7ff]/10

            blur-[40px]
          "
        />

        {/* Wireframe latitude */}

        <div
          className="
            absolute
            left-[8%]
            right-[8%]
            top-1/2

            h-[42%]

            -translate-y-1/2

            rounded-[50%]

            border
            border-[#58d7ff]/12
          "
        />

        {/* Wireframe longitude */}

        <div
          className="
            absolute
            bottom-[7%]
            left-1/2
            top-[7%]

            w-[42%]

            -translate-x-1/2

            rounded-[50%]

            border
            border-[#ff2da3]/13
          "
        />

        {/* Vertical highlight */}

        <div
          className="
            absolute
            left-[28%]
            top-[10%]

            h-[45%]
            w-px

            rotate-[18deg]

            bg-gradient-to-b
            from-transparent
            via-[#58d7ff]/35
            to-transparent

            blur-[0.4px]
          "
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Floating nodes                                                      */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          absolute
          left-[15%]
          top-[26%]

          h-[7px]
          w-[7px]

          rounded-full

          bg-[#58d7ff]

          shadow-[
            0_0_8px_rgba(88,215,255,0.9),
            0_0_22px_rgba(88,215,255,0.45)
          ]
        "
      />

      <div
        className="
          absolute
          right-[15%]
          top-[38%]

          h-[5px]
          w-[5px]

          rounded-full

          bg-[#ff2da3]

          shadow-[
            0_0_8px_rgba(255,45,163,0.9),
            0_0_22px_rgba(255,45,163,0.45)
          ]
        "
      />

      <div
        className="
          absolute
          bottom-[22%]
          left-[28%]

          h-[5px]
          w-[5px]

          rounded-full

          bg-[#d8ff47]

          shadow-[
            0_0_7px_rgba(216,255,71,0.9),
            0_0_18px_rgba(216,255,71,0.4)
          ]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Stars                                                               */}
      {/* ------------------------------------------------------------------ */}

      <Star
        className="
          absolute
          right-[20%]
          top-[20%]

          h-5
          w-5

          text-[#58d7ff]/60

          drop-shadow-[0_0_10px_rgba(88,215,255,0.4)]
        "
      />

      <Star
        className="
          absolute
          bottom-[25%]
          right-[5%]

          h-3
          w-3

          text-[#ff2da3]/70

          drop-shadow-[0_0_8px_rgba(255,45,163,0.45)]
        "
      />

      <Star
        className="
          absolute
          left-[25%]
          top-[17%]

          h-2
          w-2

          text-white/50
        "
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             BACKGROUND                                     */
/* -------------------------------------------------------------------------- */

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Base navy environment */}

      <div
        className="
          absolute
          inset-0

          bg-[
            radial-gradient(
              circle_at_78%_28%,
              rgba(255,45,163,0.13),
              transparent_31%
            ),
            radial-gradient(
              circle_at_68%_48%,
              rgba(140,82,255,0.10),
              transparent_36%
            ),
            radial-gradient(
              circle_at_20%_18%,
              rgba(88,215,255,0.045),
              transparent_25%
            ),
            linear-gradient(
              135deg,
              #070d1d_0%,
              #091225_38%,
              #10132e_70%,
              #160d2c_100%
            )
          ]
        "
      />

      {/* Cyan upper-left atmosphere */}

      <div
        className="
          absolute
          left-[-160px]
          top-[-180px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#58d7ff]/6

          blur-[130px]
        "
      />

      {/*
        Magenta upper atmosphere.

        This intentionally reaches toward the navbar so the
        navbar's magenta reflection feels environmentally motivated.
      */}

      <div
        className="
          absolute
          right-[5%]
          top-[-300px]

          h-[650px]
          w-[650px]

          rounded-full

          bg-[#ff2da3]/10

          blur-[150px]
        "
      />

      {/* Subtle bottom violet atmosphere */}

      <div
        className="
          absolute
          bottom-[-280px]
          left-[35%]

          h-[600px]
          w-[700px]

          rounded-full

          bg-[#8c52ff]/8

          blur-[150px]
        "
      />

      {/* Very subtle grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

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

          bg-[size:70px_70px]

          [mask-image:linear-gradient(
            to_bottom,
            transparent,
            black_25%,
            black_75%,
            transparent
          )]
        "
      />

      {/* Soft vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[
            radial-gradient(
              ellipse_at_center,
              transparent_35%,
              rgba(3,7,18,0.45)_100%
            )
          ]
        "
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 WELCOME                                    */
/* -------------------------------------------------------------------------- */

export function Welcome() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070d1d]
        text-white
      "
    >

      <section
        id="home"
        className="
          relative
          isolate

          flex
          min-h-[100svh]
          items-center

          overflow-hidden

          px-6
          pb-20
          pt-28

          sm:px-10

          lg:px-12
          lg:pb-16
          lg:pt-28

          xl:px-20

          2xl:px-24
        "
      >
        <HeroBackground />

        {/* Right-side visual */}

        <HeroVisual />

        {/* ---------------------------------------------------------------- */}
        {/* HERO CONTENT                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div
          className="
            relative
            z-10

            mx-auto
            w-full
            max-w-[1440px]
          "
        >
          <div
            className="
              max-w-[720px]

              lg:w-[53%]
            "
          >
            {/* Eyebrow */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]

                  rounded-full

                  bg-[#d8ff47]

                  shadow-[
                    0_0_5px_rgba(216,255,71,0.9),
                    0_0_14px_rgba(216,255,71,0.45)
                  ]
                "
              />

              <p
                className="
                  font-mono
                  text-[0.68rem]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#d8ff47]/80

                  sm:text-xs
                "
              >
                HELLO_WORLD();
              </p>
            </div>

            {/* Name */}

            <h1
              className="
                max-w-[700px]

                text-[clamp(4.25rem,8.5vw,8rem)]
                font-semibold
                leading-[0.83]
                tracking-[-0.075em]

                text-white
              "
            >
              <span className="block sora-font">
                Ashley
              </span>

              <span
                className="
                  block
                  sora-font

                  bg-gradient-to-r
                  from-white
                  via-[#e7e3ff]
                  to-[#a99bdb]

                  bg-clip-text
                  text-transparent
                "
              >
                Graham
              </span>
            </h1>

            {/* Statement */}

            <div
              className="
                mt-9
                max-w-[560px]

                sm:mt-10
              "
            >
              <p
                className="
                  text-[clamp(1.4rem,2.3vw,2.15rem)]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.035em]

                  text-white/88
                "
              >
                Designing interfaces
                <br />

                <span className="text-white/45">
                  that feel alive.
                </span>
              </p>

              <p
                className="
                  mt-6
                  max-w-[500px]

                  text-sm
                  leading-7
                  text-white/45

                  sm:text-[0.95rem]
                "
              >
                Information science student and creative
                developer focused on building thoughtful,
                intuitive digital experiences where design
                and technology meet.
              </p>
            </div>

            {/* Typewriter */}

            <div className="mt-7">
              <TypewriterRole />
            </div>

            {/* CTAs */}

            <div
              className="
                mt-9

                flex
                flex-col
                items-start
                gap-3

                sm:flex-row
                sm:items-center
              "
            >
              {/* Primary */}

              <a
                href="#projects"
                className="
                  group

                  relative

                  inline-flex
                  items-center
                  justify-center
                  gap-3

                  overflow-hidden

                  rounded-full

                  bg-[#d8ff47]

                  px-6
                  py-3.5

                  text-[0.7rem]
                  font-bold
                  uppercase
                  tracking-[0.15em]

                  text-[#081020]

                  shadow-[
                    0_8px_30px_rgba(0,0,0,0.18),
                    0_0_28px_rgba(216,255,71,0.16),
                    inset_0_1px_0_rgba(255,255,255,0.5)
                  ]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]

                  hover:shadow-[
                    0_12px_35px_rgba(0,0,0,0.24),
                    0_0_36px_rgba(216,255,71,0.28),
                    inset_0_1px_0_rgba(255,255,255,0.6)
                  ]
                "
              >
                {/* Button reflection */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-[10%]
                    top-0

                    h-[45%]

                    rounded-full

                    bg-gradient-to-b
                    from-white/30
                    to-transparent

                    opacity-70
                  "
                />

                <span className="relative z-10">
                  View projects
                </span>

                <span
                  className="
                    relative z-10

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Secondary glass button */}

              <a
                href="#about"
                className="
                  group

                  relative

                  inline-flex
                  items-center
                  justify-center

                  overflow-hidden

                  rounded-full

                  border
                  border-white/[0.09]

                  bg-white/[0.025]

                  px-6
                  py-3.5

                  text-[0.7rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]

                  text-white/65

                  backdrop-blur-xl

                  shadow-[
                    inset_0_1px_0_rgba(255,255,255,0.07),
                    0_8px_25px_rgba(0,0,0,0.12)
                  ]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:border-[#58d7ff]/20
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -left-8
                    top-1/2

                    h-14
                    w-20

                    -translate-y-1/2

                    rounded-full

                    bg-[#58d7ff]/0

                    blur-xl

                    transition-all
                    duration-300

                    group-hover:bg-[#58d7ff]/8
                  "
                />

                <span className="relative z-10">
                  About me
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* BOTTOM META                                                      */}
        {/* ---------------------------------------------------------------- */}

        <div
          className="
            absolute
            bottom-7
            left-6
            right-6
            z-10

            hidden

            items-center
            justify-between

            lg:flex
            lg:left-12
            lg:right-12

            xl:left-20
            xl:right-20

            2xl:left-24
            2xl:right-24
          "
        >
          <div
            className="
              flex
              items-center
              gap-4

              font-mono
              text-[0.6rem]
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            <span className="text-[#58d7ff]/50">
              01
            </span>

            <span
              className="
                h-px
                w-8
                bg-white/10
              "
            />

            <span>
              Creative development
            </span>
          </div>

          <a
            href="#skills"
            className="
              group

              flex
              items-center
              gap-3

              font-mono
              text-[0.6rem]
              uppercase
              tracking-[0.18em]
              text-white/25

              transition-colors
              duration-300

              hover:text-white/55
            "
          >
            Scroll

            <span
              className="
                text-[#d8ff47]/55

                transition-transform
                duration-300

                group-hover:translate-y-1
              "
            >
              ↓
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Welcome;