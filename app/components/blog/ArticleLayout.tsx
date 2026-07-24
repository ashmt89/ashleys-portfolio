import type { ReactNode } from "react";

import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import { Link } from "react-router";

import {
  getAdjacentBlogPosts,
  getBlogPost,
} from "~/data/blogPosts";

import {
  blogAccents,
} from "./blogTheme";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

type ArticleLayoutProps = {
  slug: string;
  children: ReactNode;
};

/* -------------------------------------------------------------------------- */
/*                              ARTICLE LAYOUT                                */
/* -------------------------------------------------------------------------- */

export function ArticleLayout({
  slug,
  children,
}: ArticleLayoutProps) {

  /* ---------------------------------------------------------------------- */
  /* ARTICLE DATA                                                           */
  /* ---------------------------------------------------------------------- */

  const article = getBlogPost(slug);

  if (!article) {
    throw new Error(
      `Blog post "${slug}" was not found in blogPosts.`
    );
  }

  const {
    previousPost,
    nextPost,
  } = getAdjacentBlogPosts(slug);

  const theme =
    blogAccents[article.accent];

  return (
    <main
      className="
        relative
        isolate

        min-h-screen
        overflow-hidden

        bg-[#070c1c]

        font-sans
        text-white
      "
    >
      {/* ================================================================== */}
      {/* BACKGROUND                                                         */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
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

            bg-[linear-gradient(
              180deg,
              #081020_0%,
              #090d23_45%,
              #070c1c_100%
            )]
          "
        />

        {/* Article-specific primary glow */}

        <div
          className={`
            absolute

            -right-[350px]
            -top-[300px]

            h-[800px]
            w-[800px]

            rounded-full

            blur-[220px]

            ${theme.glow}
          `}
        />

        {/* Shared violet atmosphere */}

        <div
          className="
            absolute

            -left-[450px]
            top-[25%]

            h-[850px]
            w-[850px]

            rounded-full

            bg-[#8c52ff]/4

            blur-[240px]
          "
        />

        {/* Shared cyan atmosphere */}

        <div
          className="
            absolute

            -right-[400px]
            bottom-[5%]

            h-[750px]
            w-[750px]

            rounded-full

            bg-[#58d7ff]/3

            blur-[220px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.009]

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
              black,
              transparent_45%
            )]
          "
        />
      </div>

      {/* ================================================================== */}
      {/* ARTICLE HEADER                                                     */}
      {/* ================================================================== */}

      <header
        className="
          px-6
          pb-16
          pt-36

          sm:px-10
          sm:pt-44

          lg:px-12
          lg:pb-20
          lg:pt-48

          xl:px-20

          2xl:px-24
        "
      >
        <div className="mx-auto max-w-[1100px]">

          {/* ------------------------------------------------------------ */}
          {/* SECTION MARKER                                               */}
          {/* ------------------------------------------------------------ */}

          <div className="flex items-center gap-3">

            <span
              className={`
                font-mono

                text-[0.48rem]
                font-semibold
                tracking-[0.16em]

                ${theme.textMuted}
              `}
            >
              {article.number}
            </span>

            <span
              className={`
                h-px
                w-10

                bg-gradient-to-r

                ${theme.divider}
              `}
            />

            <span
              className="
                font-mono

                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-white/25
              "
            >
              {article.categories.join(" / ")}
            </span>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* META                                                         */}
          {/* ------------------------------------------------------------ */}

          <div
            className="
              mt-8

              flex
              flex-wrap
              items-center

              gap-x-4
              gap-y-3
            "
          >

            <span
              className="
                font-mono

                text-[0.48rem]
                font-medium
                uppercase
                tracking-[0.16em]

                text-white/25
              "
            >
              {article.date}
            </span>

            {article.readTime && (
              <>
                <span
                  className={`
                    h-[3px]
                    w-[3px]

                    rounded-full

                    ${theme.dot}
                  `}
                />

                <span
                  className="
                    flex
                    items-center
                    gap-2

                    font-mono

                    text-[0.48rem]
                    font-medium
                    uppercase
                    tracking-[0.16em]

                    text-white/20
                  "
                >
                  <Clock3
                    size={11}
                    strokeWidth={1.5}
                  />

                  {article.readTime}
                </span>
              </>
            )}

          </div>

          {/* ------------------------------------------------------------ */}
          {/* TITLE                                                        */}
          {/* ------------------------------------------------------------ */}

          <h1
            className="
              mt-8

              max-w-[1000px]

              text-[clamp(3.4rem,8vw,7.5rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.07em]

              text-white
            "
          >
            {article.title}
          </h1>

          {/* ------------------------------------------------------------ */}
          {/* DESCRIPTION + TAGS                                           */}
          {/* ------------------------------------------------------------ */}

          <div
            className="
              mt-10

              grid
              gap-8

              border-b
              border-white/[0.055]

              pb-12

              lg:grid-cols-[1fr_0.7fr]
              lg:items-end
              lg:pb-14
            "
          >

            {article.excerpt && (
              <p
                className="
                  max-w-[680px]

                  text-[clamp(1.05rem,1.8vw,1.3rem)]
                  leading-[1.7]

                  text-white/40
                "
              >
                {article.excerpt}
              </p>
            )}

            <div
              className="
                flex
                flex-wrap
                gap-2

                lg:justify-end
              "
            >
              {article.categories.map((category) => (
                <span
                  key={category}
                  className="
                    rounded-full

                    border
                    border-white/[0.065]

                    bg-white/[0.018]

                    px-3.5
                    py-1.5

                    font-mono

                    text-[0.45rem]
                    font-medium
                    uppercase
                    tracking-[0.14em]

                    text-white/25
                  "
                >
                  {category}
                </span>
              ))}
            </div>

          </div>
        </div>
      </header>

      {/* ================================================================== */}
      {/* ARTICLE BODY                                                       */}
      {/* ================================================================== */}

      <article
        className="
          px-6

          sm:px-10

          lg:px-12

          xl:px-20

          2xl:px-24
        "
      >
        <div
          className="
            mx-auto

            grid
            max-w-[1100px]

            lg:grid-cols-[160px_minmax(0,720px)]
            lg:gap-14

            xl:grid-cols-[190px_minmax(0,740px)]
            xl:gap-20
          "
        >

          {/* ------------------------------------------------------------ */}
          {/* EDITORIAL SIDEBAR                                            */}
          {/* ------------------------------------------------------------ */}

          <aside className="hidden lg:block">

            <div className="sticky top-32">

              <p
                className="
                  font-mono

                  text-[0.42rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]

                  text-white/15
                "
              >
                Article / {article.number}
              </p>

              <div
                className={`
                  mt-5

                  h-px
                  w-10

                  bg-gradient-to-r

                  ${theme.divider}
                `}
              />

              <p
                className="
                  mt-5

                  font-mono

                  text-[0.4rem]
                  uppercase
                  leading-5
                  tracking-[0.13em]

                  text-white/10
                "
              >
                {article.categories.map((category) => (
                  <span
                    key={category}
                    className="block"
                  >
                    {category}
                  </span>
                ))}
              </p>

              <div
                className="
                  mt-10

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

                    ${theme.dot}
                  `}
                />

                <span
                  className="
                    font-mono

                    text-[0.38rem]
                    uppercase
                    tracking-[0.14em]

                    text-white/10
                  "
                >
                  Notes / {article.dateISO.slice(0, 4)}
                </span>

              </div>

            </div>

          </aside>

          {/* ------------------------------------------------------------ */}
          {/* READING COLUMN                                               */}
          {/* ------------------------------------------------------------ */}

          <div
            className="
              min-w-0

              text-[1rem]
              leading-[1.9]

              text-white/55

              sm:text-[1.04rem]

              [&>p+p]:mt-9
            "
          >
            {children}
          </div>

        </div>
      </article>

      {/* ================================================================== */}
      {/* ARTICLE NAVIGATION                                                 */}
      {/* ================================================================== */}

      <section
        className="
          mt-24

          border-t
          border-white/[0.05]

          px-6
          py-10

          sm:px-10

          lg:mt-32
          lg:px-12
          lg:py-12

          xl:px-20

          2xl:px-24
        "
      >
        <div
          className="
            mx-auto

            flex
            max-w-[1100px]

            flex-col
            gap-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* ------------------------------------------------------------ */}
          {/* LEFT NAV                                                     */}
          {/* ------------------------------------------------------------ */}

          {previousPost ? (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="
                group/back

                inline-flex
                items-center
                gap-4
              "
            >
              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.065]

                  bg-white/[0.018]

                  text-white/25

                  transition-all
                  duration-300

                  group-hover/back:-translate-x-1

                  ${theme.border}
                `}
              >
                <ArrowLeft
                  size={13}
                  strokeWidth={1.6}
                />
              </span>

              <div>
                <span
                  className="
                    block

                    font-mono

                    text-[0.4rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-white/15
                  "
                >
                  Previous article
                </span>

                <span
                  className="
                    mt-1
                    block

                    text-sm
                    font-medium

                    text-white/45

                    transition-colors
                    duration-300

                    group-hover/back:text-white/80
                  "
                >
                  {previousPost.title}
                </span>
              </div>
            </Link>
          ) : (
            <Link
              to="/blog"
              className="
                group/back

                inline-flex
                items-center
                gap-3

                font-mono

                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.16em]

                text-white/25

                transition-colors
                duration-300

                hover:text-white/70
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.065]

                  bg-white/[0.018]

                  transition-transform
                  duration-300

                  group-hover/back:-translate-x-1
                "
              >
                <ArrowLeft
                  size={13}
                  strokeWidth={1.6}
                />
              </span>

              All notes
            </Link>
          )}

          {/* ------------------------------------------------------------ */}
          {/* NEXT ARTICLE                                                 */}
          {/* ------------------------------------------------------------ */}

          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="
                group/next

                inline-flex
                items-center
                gap-4

                sm:text-right
              "
            >
              <div>
                <span
                  className="
                    block

                    font-mono

                    text-[0.4rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-white/15
                  "
                >
                  Next article
                </span>

                <span
                  className="
                    mt-1
                    block

                    text-sm
                    font-medium

                    text-white/45

                    transition-colors
                    duration-300

                    group-hover/next:text-white/80
                  "
                >
                  {nextPost.title}
                </span>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.065]

                  bg-white/[0.018]

                  text-white/25

                  transition-all
                  duration-300

                  group-hover/next:-translate-y-0.5
                  group-hover/next:translate-x-1
                "
              >
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.6}
                />
              </span>
            </Link>
          )}

        </div>
      </section>
    </main>
  );
}