import type { ReactNode } from "react";

import {
  blogAccents,
  type BlogAccent,
} from "./blogTheme";

/* -------------------------------------------------------------------------- */
/*                              ARTICLE OPENING                               */
/* -------------------------------------------------------------------------- */

type ArticleOpeningProps = {
  children: ReactNode;
  dropCap?: string;
  accent?: BlogAccent;
};

export function ArticleOpening({
  children,
  dropCap,
  accent = "pink",
}: ArticleOpeningProps) {
  const theme = blogAccents[accent];

  return (
    <p
      className="
        text-[1.08rem]
        leading-[1.9]

        text-white/65

        sm:text-[1.12rem]
      "
    >
      {dropCap && (
        <span
          className={`
            float-left

            mr-3
            mt-2

            text-[4rem]
            font-medium
            leading-[0.72]

            ${theme.text}
          `}
        >
          {dropCap}
        </span>
      )}

      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ARTICLE BREAK                                 */
/* -------------------------------------------------------------------------- */

type ArticleBreakProps = {
  accent?: BlogAccent;
};

export function ArticleBreak({
  accent = "violet",
}: ArticleBreakProps) {
  const theme = blogAccents[accent];

  return (
    <div
      aria-hidden="true"
      className="
        my-12

        flex
        items-center
        gap-3
      "
    >
      <span
        className={`
          h-[4px]
          w-[4px]

          rotate-45

          border

          ${theme.border}
        `}
      />

      <span
        className={`
          h-px
          w-16

          bg-gradient-to-r

          ${theme.divider}
        `}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ARTICLE CALLOUT                               */
/* -------------------------------------------------------------------------- */

type ArticleCalloutProps = {
  children: ReactNode;
  accent?: BlogAccent;
};

export function ArticleCallout({
  children,
  accent = "pink",
}: ArticleCalloutProps) {
  const theme = blogAccents[accent];

  return (
    <aside
      className="
        relative
        isolate

        my-14

        overflow-hidden

        rounded-[28px]

        border
        border-white/[0.065]

        bg-[rgba(10,15,38,0.35)]

        px-7
        py-8

        backdrop-blur-xl

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.05),
          0_20px_60px_rgba(0,0,0,0.12)
        ]

        sm:px-9
        sm:py-10
      "
    >
      {/* Colored atmospheric bloom */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute

          -right-20
          -top-24

          h-52
          w-52

          rounded-full

          blur-[80px]

          ${theme.glow}
        `}
      />

      {/* Shared cyan reflection */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute

          -bottom-24
          -left-20

          h-48
          w-48

          rounded-full

          bg-[#58d7ff]/4

          blur-[75px]
        "
      />

      {/* Glass rim reflection */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          left-[8%]
          top-0

          h-px
          w-[35%]

          bg-gradient-to-r

          ${theme.divider}
        `}
      />

      <p
        className="
          relative
          z-10

          max-w-[580px]

          text-[clamp(1.45rem,3vw,2.1rem)]
          font-medium
          leading-[1.25]
          tracking-[-0.035em]

          text-white/75
        "
      >
        {children}
      </p>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*                               ARTICLE LINK                                 */
/* -------------------------------------------------------------------------- */

type ArticleLinkProps = {
  href: string;
  children: ReactNode;
};

export function ArticleLink({
  href,
  children,
}: ArticleLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-[#58d7ff]/75

        underline
        decoration-[#58d7ff]/25
        decoration-1
        underline-offset-4

        transition-all
        duration-300

        hover:text-[#8ee5ff]
        hover:decoration-[#58d7ff]/60
      "
    >
      {children}
    </a>
  );
}