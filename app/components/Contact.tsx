import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import SectionMarker from "~/components/SectionMarker";

/* -------------------------------------------------------------------------- */
/*                                CONTACT DATA                                */
/* -------------------------------------------------------------------------- */

const contactLinks = [
  {
    label: "Email",
    value: "Say hello",
    href: "mailto:you@example.com",
    icon: Mail,
    accent: "lime",
  },

  {
    label: "GitHub",
    value: "Follow along",
    href: "https://github.com/ashmt89",
    icon: FaGithub,
    accent: "violet",
  },

  {
    label: "LinkedIn",
    value: "Connect",
    href: "https://www.linkedin.com/in/ashley-graham-0a167786/",
    icon: FaLinkedin,
    accent: "cyan",
  },
] as const;

const accentStyles = {
  lime: {
    text: "text-[#d8ff47]",
    glow: "bg-[#d8ff47]",
    hoverBorder: "hover:border-[#d8ff47]/15",
  },

  violet: {
    text: "text-[#a274ff]",
    glow: "bg-[#8c52ff]",
    hoverBorder: "hover:border-[#8c52ff]/15",
  },

  cyan: {
    text: "text-[#58d7ff]",
    glow: "bg-[#58d7ff]",
    hoverBorder: "hover:border-[#58d7ff]/15",
  },
};

/* -------------------------------------------------------------------------- */
/*                            CONTACT LINK                                    */
/* -------------------------------------------------------------------------- */

function ContactLink({
  item,
}: {
  item: (typeof contactLinks)[number];
}) {
  const accent = accentStyles[item.accent];

  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={
        item.href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        item.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className={`
        group/link
        relative
        isolate

        flex
        items-center
        justify-between
        gap-5

        overflow-hidden

        border-t
        border-white/[0.055]

        py-6

        transition-all
        duration-300

        ${accent.hoverBorder}
      `}
    >
      {/* ============================================================ */}
      {/* HOVER ATMOSPHERE                                            */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -left-16
          top-1/2

          h-24
          w-40

          -translate-y-1/2

          rounded-full

          opacity-0

          blur-[55px]

          transition-opacity
          duration-500

          group-hover/link:opacity-[0.04]

          ${accent.glow}
        `}
      />

      {/* ============================================================ */}
      {/* LEFT                                                        */}
      {/* ============================================================ */}

      <div
        className="
          relative
          z-10

          flex
          items-center
          gap-4
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-white/[0.06]

            bg-white/[0.018]

            text-white/25

            transition-all
            duration-300

            group-hover/link:border-white/[0.10]
            group-hover/link:text-white/60
          "
        >
          <Icon
            size={15}
            strokeWidth={1.5}
          />
        </div>

        {/* Label */}

        <div>
          <p
            className="
              font-mono

              text-[0.46rem]
              font-medium
              uppercase
              tracking-[0.17em]

              text-white/20
            "
          >
            {item.label}
          </p>

          <p
            className="
              mt-1

              text-sm
              font-medium

              text-white/55

              transition-colors
              duration-300

              group-hover/link:text-white/90
            "
          >
            {item.value}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ARROW                                                       */}
      {/* ============================================================ */}

      <div
        className={`
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

          text-white/18

          transition-all
          duration-300

          group-hover/link:-translate-y-0.5
          group-hover/link:translate-x-0.5
          group-hover/link:border-white/[0.10]

          ${accent.text}
        `}
      >
        <ArrowUpRight
          size={13}
          strokeWidth={1.7}
        />
      </div>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                          MAIN CONTACT PORTAL                               */
/* -------------------------------------------------------------------------- */

function ContactPortal() {
  return (
    <a
      href="mailto:you@example.com"
      className="
        group/portal
        relative
        isolate

        block

        overflow-hidden

        rounded-[32px]

        border
        border-white/[0.07]

        bg-[rgba(8,14,38,0.38)]

        p-7

        backdrop-blur-xl
        backdrop-saturate-[1.25]

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.065),
          inset_0_-1px_0_rgba(255,255,255,0.015),
          0_30px_80px_rgba(0,0,0,0.16)
        ]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#d8ff47]/15

        sm:p-9
        lg:p-11
      "
    >
      {/* ============================================================ */}
      {/* AMBIENT LIGHT                                               */}
      {/* ============================================================ */}

      {/* Lime */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-24
          -top-24

          h-72
          w-72

          rounded-full

          bg-[#d8ff47]/[0.035]

          blur-[100px]

          transition-all
          duration-700

          group-hover/portal:scale-125
          group-hover/portal:bg-[#d8ff47]/[0.06]
        "
      />

      {/* Pink */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -bottom-36
          -left-28

          h-80
          w-80

          rounded-full

          bg-[#ff2da3]/[0.045]

          blur-[110px]
        "
      />

      {/* Violet */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-[-40%]
          right-[20%]

          h-72
          w-72

          rounded-full

          bg-[#8c52ff]/[0.04]

          blur-[100px]
        "
      />

      {/* ============================================================ */}
      {/* GLASS REFLECTION                                            */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[3%]
          right-[3%]
          top-px

          h-[35%]

          rounded-[999px_999px_55%_55%]

          bg-gradient-to-b
          from-white/[0.04]
          via-white/[0.008]
          to-transparent
        "
      />

      {/* Cyan rim */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-[7%]
          top-0

          h-px
          w-[25%]

          bg-gradient-to-r
          from-transparent
          via-[#58d7ff]/30
          to-transparent

          shadow-[0_-1px_5px_rgba(88,215,255,0.08)]
        "
      />

      {/* Pink rim */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          right-[12%]
          top-0

          h-px
          w-[28%]

          bg-gradient-to-r
          from-transparent
          via-[#ff2da3]/28
          to-transparent
        "
      />

      {/* ============================================================ */}
      {/* CONTENT                                                     */}
      {/* ============================================================ */}

      <div
        className="
          relative
          z-10

          flex
          min-h-[260px]
          flex-col
          justify-between

          sm:min-h-[300px]
        "
      >
        {/* Top */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* Live dot */}

            <span
              className="
                relative

                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                border
                border-[#d8ff47]/10

                bg-[#d8ff47]/[0.025]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute

                  h-4
                  w-4

                  rounded-full

                  bg-[#d8ff47]/15

                  blur-[6px]
                "
              />

              <span
                className="
                  relative

                  h-[5px]
                  w-[5px]

                  rounded-full

                  bg-[#d8ff47]

                  shadow-[
                    0_0_6px_rgba(216,255,71,0.8),
                    0_0_15px_rgba(216,255,71,0.3)
                  ]
                "
              />
            </span>

            <div>
              <p
                className="
                  font-mono

                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-[#d8ff47]/60
                "
              >
                Start a conversation
              </p>

              <p
                className="
                  mt-1

                  font-mono

                  text-[0.42rem]
                  uppercase
                  tracking-[0.13em]

                  text-white/15
                "
              >
                Inbox open
              </p>
            </div>
          </div>

          {/* Arrow */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-white/[0.07]

              bg-white/[0.02]

              text-white/35

              transition-all
              duration-500

              group-hover/portal:-translate-y-1
              group-hover/portal:translate-x-1

              group-hover/portal:border-[#d8ff47]/20
              group-hover/portal:bg-[#d8ff47]/[0.035]
              group-hover/portal:text-[#d8ff47]

              group-hover/portal:shadow-[
                0_0_25px_rgba(216,255,71,0.07)
              ]
            "
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
            />
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16">
          <p
            className="
              max-w-[520px]

              text-[clamp(1.6rem,3vw,2.7rem)]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]

              text-white/80

              transition-colors
              duration-500

              group-hover/portal:text-white
            "
          >
            Have a project, opportunity,
            or interesting idea?
          </p>

          <div
            className="
              mt-6

              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <span
              className="
                font-mono

                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.15em]

                text-white/30

                transition-colors
                duration-300

                group-hover/portal:text-[#d8ff47]/80
              "
            >
              you@example.com
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-8

                bg-white/10

                transition-all
                duration-500

                group-hover/portal:w-14
                group-hover/portal:bg-[#d8ff47]/30
              "
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM CAUSTIC                                              */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-[7%]

          h-px
          w-[25%]

          bg-gradient-to-r
          from-transparent
          via-[#ff2da3]/25
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          right-[8%]

          h-px
          w-[30%]

          bg-gradient-to-r
          from-transparent
          via-[#d8ff47]/20
          to-transparent
        "
      />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                            CONTACT SECTION                                 */
/* -------------------------------------------------------------------------- */

export function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        isolate

        overflow-hidden

        bg-[#070c1c]

        px-6
        pb-16
        pt-24

        sm:px-10

        lg:px-12
        lg:pb-20
        lg:pt-32

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
        {/* Main gradient */}

        <div
          className="
            absolute
            inset-0

            bg-[
              radial-gradient(
                circle_at_50%_30%,
                rgba(216,255,71,0.035),
                transparent_22%
              ),
              radial-gradient(
                circle_at_18%_60%,
                rgba(255,45,163,0.06),
                transparent_30%
              ),
              radial-gradient(
                circle_at_82%_50%,
                rgba(88,215,255,0.05),
                transparent_28%
              ),
              linear-gradient(
                180deg,
                #070c1c_0%,
                #090b21_55%,
                #050817_100%
              )
            ]
          "
        />

        {/* Pink atmosphere */}

        <div
          className="
            absolute

            -left-[320px]
            top-[30%]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#ff2da3]/5

            blur-[190px]
          "
        />

        {/* Cyan atmosphere */}

        <div
          className="
            absolute

            -right-[300px]
            top-[20%]

            h-[650px]
            w-[650px]

            rounded-full

            bg-[#58d7ff]/5

            blur-[180px]
          "
        />

        {/* Lime center atmosphere */}

        <div
          className="
            absolute

            left-1/2
            top-[25%]

            h-[350px]
            w-[350px]

            -translate-x-1/2

            rounded-full

            bg-[#d8ff47]/[0.018]

            blur-[120px]
          "
        />

        {/* Grid */}

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
              black_80%,
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
        {/* SECTION MARKER                                             */}
        {/* ============================================================ */}

        <SectionMarker
          number="06"
          label="Say Hello"
          accent="lime"
        />

        {/* ============================================================ */}
        {/* HERO HEADING                                               */}
        {/* ============================================================ */}

        <div
          className="
            mt-7

            grid
            gap-8

            lg:grid-cols-[1fr_0.55fr]
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

                text-[#d8ff47]/60
              "
            >
              Let&apos;s connect
            </p>

            <h2
              className="
                max-w-[900px]

                text-[clamp(3.5rem,7.5vw,7.5rem)]
                font-medium
                leading-[0.84]
                tracking-[-0.07em]

                text-white
              "
            >
              Have an idea?

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-white/35
                  via-white/25
                  to-white/15

                  bg-clip-text
                  text-transparent
                "
              >
                Let&apos;s build it.
              </span>
            </h2>
          </div>

          {/* Supporting copy */}

          <div
            className="
              max-w-[390px]

              lg:justify-self-end
              lg:pb-2
            "
          >
            <p
              className="
                text-sm
                leading-7

                text-white/35
              "
            >
              Whether it&apos;s a project, an
              opportunity, or just an interesting
              conversation, I&apos;d love to hear
              what you&apos;re working on.
            </p>

            {/* Availability */}

            <div
              className="
                mt-5

                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  relative

                  flex
                  h-[7px]
                  w-[7px]
                  items-center
                  justify-center
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute

                    h-full
                    w-full

                    rounded-full

                    bg-[#d8ff47]/25

                    blur-[3px]
                  "
                />

                <span
                  className="
                    relative

                    h-[4px]
                    w-[4px]

                    rounded-full

                    bg-[#d8ff47]

                    shadow-[0_0_8px_rgba(216,255,71,0.7)]
                  "
                />
              </span>

              <span
                className="
                  font-mono

                  text-[0.46rem]
                  uppercase
                  tracking-[0.15em]

                  text-white/22
                "
              >
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CONTACT CONTENT                                            */}
        {/* ============================================================ */}

        <div
          className="
            mt-16

            grid
            gap-10

            lg:mt-24
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-14

            xl:gap-20
          "
        >
          {/* Main portal */}

          <ContactPortal />

          {/* Social / contact links */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            <div
              className="
                mb-2

                flex
                items-center
                gap-3
              "
            >
              <Sparkles
                size={12}
                strokeWidth={1.5}

                className="text-[#8c52ff]/60"
              />

              <p
                className="
                  font-mono

                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-white/25
                "
              >
                Find me online
              </p>
            </div>

            <div>
              {contactLinks.map((item) => (
                <ContactLink
                  key={item.label}
                  item={item}
                />
              ))}
            </div>

            {/* Small note */}

            <p
              className="
                mt-6

                max-w-[330px]

                font-mono

                text-[0.43rem]
                uppercase
                leading-5
                tracking-[0.12em]

                text-white/12
              "
            >
              The best way to reach me is by email.
              I&apos;ll get back to you as soon as I
              can.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MINI FOOTER                                                */}
        {/* ============================================================ */}

        <div
          className="
            mt-24

            flex
            flex-col
            gap-5

            border-t
            border-white/[0.045]

            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-32
          "
        >
          <p
            className="
              font-mono

              text-[0.43rem]
              uppercase
              tracking-[0.14em]

              text-white/14
            "
          >
            © {new Date().getFullYear()} Ashley Graham
          </p>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                font-mono

                text-[0.42rem]
                uppercase
                tracking-[0.14em]

                text-white/12
              "
            >
              Designed &amp; built with
            </span>

            <span
              className="
                font-mono

                text-[0.42rem]
                uppercase
                tracking-[0.14em]

                text-[#58d7ff]/35
              "
            >
              React + Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;