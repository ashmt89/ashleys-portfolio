import { NavLink, useLocation } from "react-router";
import { useEffect, useState, type MouseEvent } from "react";

/* -------------------------------------------------------------------------- */
/*                                  NAV DATA                                  */
/* -------------------------------------------------------------------------- */

const navItems = [
  {
    label: "Home",
    type: "route",
    to: "/",
  },
  {
    label: "Skills",
    type: "anchor",
    to: "#skills",
  },
  {
    label: "Projects",
    type: "anchor",
    to: "#projects",
  },
  {
    label: "Experience",
    type: "anchor",
    to: "#experience",
  },
  {
    label: "About",
    type: "anchor",
    to: "#about",
  },
  {
    label: "Blog",
    type: "route",
    to: "/blog",
  },
  {
    label: "Contact",
    type: "anchor",
    to: "#contact",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  ICONS                                     */
/* -------------------------------------------------------------------------- */

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" />

      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative block h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <span
        className={`
          absolute left-0 top-[4px] h-px w-full bg-current
          transition-all duration-300
          ${
            open
              ? "translate-y-[5px] rotate-45"
              : ""
          }
        `}
      />

      <span
        className={`
          absolute left-0 top-[9px] h-px w-full bg-current
          transition-all duration-300
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />

      <span
        className={`
          absolute left-0 top-[14px] h-px w-full bg-current
          transition-all duration-300
          ${
            open
              ? "-translate-y-[5px] -rotate-45"
              : ""
          }
        `}
      />
    </span>
  );
}

function GlassRim() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        -inset-px
        rounded-full
      "
    >
      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        "
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main environmental reflection */}
          <linearGradient
            id="glass-rim-gradient"
            x1="0%"
            y1="10%"
            x2="100%"
            y2="90%"
          >
            <stop
              offset="0%"
              stopColor="#58d7ff"
              stopOpacity="0.75"
            />

            <stop
              offset="16%"
              stopColor="#58d7ff"
              stopOpacity="0.08"
            />

            <stop
              offset="30%"
              stopColor="#ffffff"
              stopOpacity="0.10"
            />

            <stop
              offset="43%"
              stopColor="#8c52ff"
              stopOpacity="0.32"
            />

            <stop
              offset="55%"
              stopColor="#8c52ff"
              stopOpacity="0.05"
            />

            <stop
              offset="70%"
              stopColor="#ff2da3"
              stopOpacity="0.62"
            />

            <stop
              offset="88%"
              stopColor="#ff2da3"
              stopOpacity="0.16"
            />

            <stop
              offset="100%"
              stopColor="#d8ff47"
              stopOpacity="0.30"
            />
          </linearGradient>

          {/* Soft glow only — NO displacement */}
          <filter
            id="glass-rim-glow"
            x="-20%"
            y="-100%"
            width="140%"
            height="300%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="2.5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Softer secondary bloom */}
          <filter
            id="glass-rim-bloom"
            x="-20%"
            y="-100%"
            width="140%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* -------------------------------------------------------- */}
        {/* Very soft colored bloom behind the glass                 */}
        {/* -------------------------------------------------------- */}

        <rect
          x="3"
          y="3"
          width="794"
          height="74"
          rx="37"
          ry="37"
          fill="none"
          stroke="url(#glass-rim-gradient)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          opacity="0.2"
          filter="url(#glass-rim-bloom)"
        />

        {/* -------------------------------------------------------- */}
        {/* Main chromatic refractive edge                           */}
        {/* -------------------------------------------------------- */}

        <rect
          x="3"
          y="3"
          width="794"
          height="74"
          rx="37"
          ry="37"
          fill="none"
          stroke="url(#glass-rim-gradient)"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
          opacity="0.72"
          filter="url(#glass-rim-glow)"
        />

        {/* -------------------------------------------------------- */}
        {/* Clean structural glass edge                              */}
        {/* -------------------------------------------------------- */}

        <rect
          x="4"
          y="4"
          width="792"
          height="72"
          rx="36"
          ry="36"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               NAVIGATION                                   */
/* -------------------------------------------------------------------------- */

export function Navigation() {
  const location = useLocation();

  const isBlog =
    location.pathname.startsWith("/blog");

  const pageContext = isBlog
    ? "Blog / Journal"
    : null;

  const [activeSection, setActiveSection] =
    useState("home");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* ---------------------------------------------------------------------- */
  /* CLOSE MOBILE MENU ON LOCATION CHANGE                                  */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    setMobileOpen(false);
  }, [
    location.pathname,
    location.hash,
  ]);

  /* ---------------------------------------------------------------------- */
  /* NAVBAR SCROLL STATE                                                    */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ---------------------------------------------------------------------- */
  /* MOBILE BODY SCROLL LOCK                                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [mobileOpen]);

  /* ---------------------------------------------------------------------- */
  /* ACTIVE HOMEPAGE SECTION                                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionIds = [
      "skills",
      "projects",
      "experience",
      "about",
      "contact",
    ];

    const observers:
      IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element =
        document.getElementById(id);

      if (!element) return;

      const observer =
        new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            rootMargin:
              "-35% 0px -55% 0px",
            threshold: 0,
          }
        );

      observer.observe(element);

      observers.push(observer);
    });

    const handleHome = () => {
      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener(
      "scroll",
      handleHome,
      {
        passive: true,
      }
    );

    handleHome();

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });

      window.removeEventListener(
        "scroll",
        handleHome
      );
    };
  }, [location.pathname]);

  /* ---------------------------------------------------------------------- */
  /* ANCHOR NAVIGATION                                                      */
  /* ---------------------------------------------------------------------- */

  const handleAnchorClick = (
    id: string,
    event?: MouseEvent<HTMLAnchorElement>
  ) => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      event?.preventDefault();

      const section =
        document.querySelector(id);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ---------------------------------------------------------------------- */
  /* HASH SCROLL AFTER RETURNING HOME                                       */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (
      location.pathname !== "/" ||
      !location.hash
    ) {
      return;
    }

    const timeout =
      window.setTimeout(() => {
        const section =
          document.querySelector(
            location.hash
          );

        if (!section) return;

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [
    location.pathname,
    location.hash,
  ]);

  /* ---------------------------------------------------------------------- */
  /* ACTIVE ITEM LOGIC                                                      */
  /* ---------------------------------------------------------------------- */

  const isItemActive = (
    item: (typeof navItems)[number]
  ) => {
    if (item.type === "anchor") {
      return (
        location.pathname === "/" &&
        activeSection ===
          item.to.replace("#", "")
      );
    }

    if (item.to === "/") {
      return (
        location.pathname === "/" &&
        activeSection === "home"
      );
    }

    if (item.to === "/blog") {
      return location.pathname.startsWith(
        "/blog"
      );
    }

    return false;
  };

  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/*                            DESKTOP HEADER                            */}
      {/* -------------------------------------------------------------------- */}

      <header
        className="
          fixed inset-x-0 top-0 z-50
          hidden lg:block
          pointer-events-none
        "
      >
        <div
          className={`
            relative mx-auto flex h-[104px]
            max-w-[1600px] items-center
            px-8 xl:px-12

            transition-all duration-500

            ${
              scrolled
                ? "h-[88px]"
                : "h-[104px]"
            }
          `}
        >
          {/* Logo */}

          <div
  className="
    pointer-events-auto

    relative
    z-20

    flex
    items-center
    gap-4
  "
>
  <NavLink
    to="/"
    aria-label="Ashley Graham — Home"
    className="
      text-[1.45rem]
      font-black
      tracking-[-0.06em]

      text-[#ff4ac1]

      transition-all
      duration-300

      hover:text-[#ff75d0]

      hover:drop-shadow-[
        0_0_12px_rgba(255,45,163,0.5)
      ]
    "
  >
    AG.
  </NavLink>

  {/* Page context */}

  {pageContext && (
    <div
      className="
        hidden
        items-center
        gap-3

        xl:flex
      "
    >
      {/* Light trail */}

      <span
        aria-hidden="true"
        className="
          h-px
          w-7

          bg-gradient-to-r
          from-[#ff2da3]/45
          via-[#8c52ff]/30
          to-transparent
        "
      />

      {/* Context */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <span
          className="
            h-[4px]
            w-[4px]

            rounded-full

            bg-[#58d7ff]/70

            shadow-[
              0_0_6px_rgba(88,215,255,0.45)
            ]
          "
        />

        <span
          className="
            font-mono

            text-[0.43rem]
            font-medium
            uppercase
            tracking-[0.17em]

            text-white/22
          "
        >
          {pageContext}
        </span>
      </div>
    </div>
  )}
</div>

          {/* Center Navigation */}
          <nav
            aria-label="Main navigation"
            className="
              pointer-events-auto
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <div
              className="
                group/nav
                relative
                rounded-full

                shadow-[
                  0_18px_50px_rgba(0,0,0,0.38),
                  -14px_-8px_40px_rgba(88,215,255,0.05),
                  16px_10px_45px_rgba(255,45,163,0.07)
                ]
              "
            >
              {/* Smooth colored glass rim */}
              <GlassRim />

              {/* Clean glass body */}
              <div
                className={`
                  relative
                  flex items-center gap-0.5
                  overflow-hidden rounded-full

                  bg-[rgba(10,14,34,0.28)]

                  px-1.5 py-1.5

                  backdrop-blur-[1.5px]
                  backdrop-saturate-[1.8]
                  backdrop-brightness-[1.08]

                  shadow-[
                    inset_0_1px_0_rgba(255,255,255,0.18),
                    inset_0_-1px_0_rgba(255,255,255,0.035),
                    0_12px_35px_rgba(0,0,0,0.18)
                  ]

                  ${scrolled ? "bg-[rgba(8,12,30,0.48)]" : ""}
                `}
              >

                {/* Sharp reflected light */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[5%]
                    top-0

                    h-px
                    w-[36%]

                    bg-linear-to-r from-transparent via-white/45 to-transparent

                    blur-[0.45px]
                  "
                />


                {/* ================================================================ */}
                {/* REFRACTED ENVIRONMENTAL LIGHT                                    */}
                {/* ================================================================ */}

                {/*
                  These aren't meant to look like visible orbs.

                  Because they're clipped by overflow-hidden and heavily blurred,
                  they read as colored light being bent through the glass.
                */}

                {/* Cyan refraction entering from left */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-16 -top-12

                    h-28 w-48
                    rounded-full

                    bg-[#58d7ff]/8

                    blur-[32px]

                    rotate-[-12deg]
                  "
                />

                {/* Small cyan edge streak */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-4 top-[18%]

                    h-[60%] w-20

                    bg-[radial-gradient(ellipse_at_left,rgba(88,215,255,0.08),transparent_68%)]

                    blur-md
                  "
                />

                {/* Violet central refraction */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[43%] -top-14

                    h-28 w-52
                    -translate-x-1/2

                    rounded-full

                    bg-[#8c52ff]/7

                    blur-[38px]
                  "
                />

                {/* Magenta refraction entering from right */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-12 -bottom-16

                    h-32 w-56
                    rounded-full

                    bg-[#ff2da3]/10

                    blur-[38px]

                    rotate-[8deg]
                  "
                />

                {/* Pink edge streak */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-5 top-[10%]

                    h-[75%] w-24

                    bg-[radial-gradient(ellipse_at_right,rgba(255,45,163,0.09),transparent_70%)]

                    blur-lg
                  "
                />

                {/*
                  Very subtle lime reflection.

                  Keeping this tiny is important — lime remains an accent,
                  rather than becoming another dominant navbar color.
                */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[9%] bottom-[-20px]

                    h-10 w-20
                    rounded-full

                    bg-[#d8ff47]/8

                    blur-2xl
                  "
                />

                {/* Main curved glass reflection */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    z-[2]
                    left-[3%]
                    right-[3%]
                    bottom-0
                    h-[55%]
                    rounded-b-full
                    opacity-100
                  "
                  style={{
                    background:
                      "linear-gradient(360deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.055) 38%, rgba(255,255,255,0) 100%)",
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                />

                {/* Outer curved glass highlight top */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    z-[2]
                    left-[0.1%]
                    right-[0.1%]
                    top-0
                    h-[50%]
                    rounded-t-full
                    opacity-20
                    border-t
                    border-l
                    border-r
                    blur-[0.5px]
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.055) 38%, rgba(255,255,255,0) 100%)",
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                />

                {/* Outer curved glass highlight bottom */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    z-[2]
                    left-[0.1%]
                    right-[0.1%]
                    bottom-0
                    h-[50%]
                    rounded-b-full
                    opacity-20
                    border-b
                    border-l
                    border-r
                    blur-[0.5px]
                  "
                  style={{
                    background:
                      "linear-gradient(360deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.055) 38%, rgba(255,255,255,0) 100%)",
                    maskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                />
                
                

                {/* ================================================================ */}
                {/* SMOOTH GLASS EDGE                                             */}
                {/* ================================================================ */}

                {/* Faint structural highlight */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    left-[10%]
                    right-[10%]

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.14]
                    to-transparent

                    opacity-70
                  "
                />

                {/* Top-left cyan caustic */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    left-[6%]

                    h-px
                    w-[31%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#58d7ff]/32
                    to-transparent

                    shadow-[0_-1px_5px_rgba(88,215,255,0.12)]
                  "
                />

                {/* Top-right magenta caustic */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    right-[6%]

                    h-px
                    w-[36%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#ff2da3]/34
                    to-transparent

                    shadow-[0_-1px_5px_rgba(255,45,163,0.12)]
                  "
                />

                {/* Bottom-left cyan caustic */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[8%]

                    h-px
                    w-[27%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#58d7ff]/40
                    to-transparent

                    shadow-[0_1px_5px_rgba(88,215,255,0.18)]
                  "
                />

                {/* Bottom-right magenta caustic */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-[7%]

                    h-px
                    w-[34%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#ff2da3]/45
                    to-transparent

                    shadow-[0_1px_6px_rgba(255,45,163,0.18)]
                  "
                />

                {/* ================================================================ */}
                {/* NAV ITEMS                                                        */}
                {/* ================================================================ */}

                <div className="relative z-10 flex items-center gap-1">
                  {navItems.map((item) => {
                    const active = isItemActive(item);
                    const isBlogItem =
                      item.type === "route" &&
                      item.to === "/blog";

                    const sharedClasses = `
                    group
                    relative

                    flex items-center gap-2.5

                    overflow-hidden
                    rounded-full

                    px-3.5
                    xl:px-[18px]
                    py-[9px]

                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-white/[0.035]
                          text-white

                          ring-1
                          ring-inset
                          ring-white/[0.035]

                          shadow-[
                            inset_0_1px_0_rgba(255,255,255,0.10),
                            inset_8px_0_20px_rgba(88,215,255,0.025),
                            0_3px_12px_rgba(0,0,0,0.05)
                          ]

                          ${
                            isBlogItem
                              ? `
                                after:absolute
                                after:bottom-[1px]
                                after:left-[35%]
                                after:right-[35%]

                                after:h-px

                                after:bg-gradient-to-r
                                after:from-transparent
                                after:via-[#ff2da3]/45
                                after:to-transparent

                                after:shadow-[
                                  0_0_7px_rgba(255,45,163,0.25)
                                ]
                              `
                              : ""
                          }
                        `
                        : `
                          text-white/60

                          hover:-translate-y-px
                          hover:bg-white/[0.03]
                          hover:text-white
                        `
                    }
                  `;

                    const content = (
                      <>

                        {/* Hover illumination effect */}

                        <span
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-x-[15%]
                            bottom-[-12px]

                            h-6

                            rounded-full

                            bg-[#ff2da3]/0
                            blur-xl

                            transition-all
                            duration-300

                            group-hover:bg-[#ff2da3]/10
                          "
                        />

                        {/* Active lime indicator */}

                        <span
                          className={`
                            relative z-10
                            shrink-0
                            rounded-full

                            bg-[#d8ff47]

                            shadow-[
                              0_0_5px_rgba(216,255,71,0.95),
                              0_0_11px_rgba(216,255,71,0.45)
                            ]

                            transition-all duration-300

                            ${
                              active
                                ? "h-[5px] w-[5px] scale-100 opacity-100"
                                : "h-[5px] w-0 scale-0 opacity-0"
                            }
                          `}
                        />

                        <span className="relative z-10">
                          {item.label}
                        </span>
                      </>
                    );

                    if (item.type === "anchor") {
                      return (
                        <a
                          key={item.label}
                          href={`/${item.to}`}
                          onClick={(event) =>
                            handleAnchorClick(item.to, event)
                          }
                          className={sharedClasses}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        end={item.to === "/"}
                        className={sharedClasses}
                      >
                        {content}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Utility Buttons */}

          <div
            className="
              pointer-events-auto
              ml-auto flex items-center gap-3
            "
          >
            <button
              type="button"
              aria-label="Toggle theme"
              className="
                group

                relative

                flex h-11 w-11
                items-center justify-center

                overflow-hidden
                rounded-full

                border border-white/[0.11]

                bg-[#0c1023]/55

                text-white/80

                backdrop-blur-2xl

                shadow-[
                  0_10px_30px_rgba(0,0,0,0.3),
                  0_0_25px_rgba(140,82,255,0.08),
                  inset_0_1px_0_rgba(255,255,255,0.08)
                ]

                transition-all duration-300

                hover:-translate-y-[2px]
                hover:border-[#8c52ff]/40
                hover:text-white

                hover:shadow-[
                  0_12px_35px_rgba(0,0,0,0.35),
                  0_0_25px_rgba(140,82,255,0.18),
                  inset_0_1px_0_rgba(255,255,255,0.1)
                ]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute inset-0

                  bg-[radial-gradient(circle_at_50%_120%,rgba(140,82,255,0.2),transparent_60%)]

                  opacity-0

                  transition-opacity duration-300

                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                <SunIcon />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/*                             MOBILE HEADER                            */}
      {/* -------------------------------------------------------------------- */}

      <header
        className="
          fixed inset-x-0 top-0 z-50
          lg:hidden
        "
      >
        <div
          className="
            flex h-[76px]
            items-center justify-between
            px-5
          "
        >
          {/* ---------------------------------------------------------- */}
          {/* LEFT — BRAND + PAGE CONTEXT                                */}
          {/* ---------------------------------------------------------- */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              aria-label="Ashley Graham — Home"
              className="
                text-xl
                font-black
                tracking-[-0.06em]

                text-[#ff4ac1]

                drop-shadow-[
                  0_0_12px_rgba(255,45,163,0.25)
                ]
              "
            >
              AG.
            </NavLink>

            {isBlog && (
              <>
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-4

                    bg-gradient-to-r
                    from-[#ff2da3]/40
                    to-transparent
                  "
                />

                <span
                  className="
                    font-mono

                    text-[0.4rem]
                    font-medium
                    uppercase
                    tracking-[0.16em]

                    text-white/20
                  "
                >
                  Journal
                </span>
              </>
            )}
          </div>

          {/* ---------------------------------------------------------- */}
          {/* RIGHT — MENU BUTTON                                        */}
          {/* ---------------------------------------------------------- */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((open) => !open)
            }
            className="
              flex h-11 w-11
              shrink-0
              items-center justify-center

              rounded-full

              border border-white/[0.11]

              bg-[#0c1023]/70

              text-white

              backdrop-blur-2xl

              shadow-[
                0_10px_30px_rgba(0,0,0,0.3),
                0_0_25px_rgba(255,45,163,0.08),
                inset_0_1px_0_rgba(255,255,255,0.08)
              ]
            "
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        {/* Mobile Glass Menu */}

        <div
          className={`
            absolute left-4 right-4 top-[68px]

            overflow-hidden

            rounded-[28px]

            border border-white/[0.1]

            bg-[#090d20]/90

            backdrop-blur-3xl

            shadow-[
              0_24px_80px_rgba(0,0,0,0.55),
              0_0_45px_rgba(255,45,163,0.1),
              inset_0_1px_0_rgba(255,255,255,0.08)
            ]

            transition-all duration-300

            ${
              mobileOpen
                ? `
                  visible
                  translate-y-0
                  scale-100
                  opacity-100
                `
                : `
                  invisible
                  -translate-y-3
                  scale-[0.98]
                  opacity-0
                  pointer-events-none
                `
            }
          `}
        >
          {/* Decorative top glow */}

          <div
            aria-hidden="true"
            className="
              absolute left-1/2 top-0
              h-24 w-64
              -translate-x-1/2 -translate-y-1/2

              rounded-full

              bg-[#ff2da3]/15

              blur-[60px]
            "
          />

          <nav
            aria-label="Mobile navigation"
            className="
              relative z-10
              flex flex-col
              p-3
            "
          >
            {navItems.map((item) => {
              const active = isItemActive(item);

              const mobileClasses = `
                group

                flex items-center justify-between

                rounded-2xl

                px-5 py-4

                text-sm
                font-medium
                tracking-wide

                transition-all duration-300

                ${
                  active
                    ? `
                      bg-white/[0.06]
                      text-white
                    `
                    : `
                      text-white/65
                      hover:bg-white/[0.04]
                      hover:text-white
                    `
                }
              `;

              const mobileContent = (
                <>
                  <span className="flex items-center gap-3">
                    <span
                      className={`
                        h-[7px] w-[7px]
                        rounded-full

                        bg-[#d8ff47]

                        shadow-[0_0_10px_rgba(216,255,71,0.8)]

                        transition-all

                        ${
                          active
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />

                    {item.label}
                  </span>

                  <span
                    className="
                      text-[#58d7ff]/50

                      transition-transform duration-300

                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </>
              );

              if (item.type === "anchor") {
                return (
                  <a
                    key={item.label}
                    href={`/${item.to}`}
                    onClick={(event) =>
                      handleAnchorClick(
                        item.to,
                        event
                      )
                    }
                    className={mobileClasses}
                  >
                    {mobileContent}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={mobileClasses}
                >
                  {mobileContent}
                </NavLink>
              );
            })}
          </nav>

          {/* Bottom color accent */}

          <div
            aria-hidden="true"
            className="
              h-px w-full

              bg-gradient-to-r
              from-transparent
              via-[#ff2da3]/60
              to-transparent
            "
          />
        </div>
      </header>
    </>
  );
}

export default Navigation;