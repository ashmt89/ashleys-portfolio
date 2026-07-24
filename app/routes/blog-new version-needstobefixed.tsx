import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import {
  blogPosts,
  type BlogPost,
} from "~/data/blogPosts";

import {
  blogAccents,
} from "~/components/blog/blogTheme";

/* -------------------------------------------------------------------------- */
/*                                 POST ROW                                   */
/* -------------------------------------------------------------------------- */

function PostRow({
  post,
}: {
  post: BlogPost;
}) {
  const theme = blogAccents[post.accent];

  return (
    <article
      className="
        group
        relative

        grid
        gap-8

        border-t
        border-white/[0.055]

        py-10

        transition-all
        duration-500

        md:grid-cols-[70px_1fr_auto]
        md:items-start
        md:gap-10

        lg:py-12
      "
    >
      {/* ================================================================ */}
      {/* NUMBER                                                           */}
      {/* ================================================================ */}

      <div className="flex items-center gap-3 md:block">
        <span
          className={`
            font-mono

            text-[0.48rem]
            font-semibold
            tracking-[0.16em]

            ${theme.textMuted}
          `}
        >
          {post.number}
        </span>

        {/* Mobile line */}

        <span
          className={`
            h-px
            w-8

            bg-gradient-to-r

            md:hidden

            ${theme.divider}
          `}
        />
      </div>

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div className="min-w-0">

        {/* Date */}

        <p
          className="
            mb-4

            font-mono

            text-[0.46rem]
            font-medium
            uppercase
            tracking-[0.17em]

            text-white/20
          "
        >
          {post.date}
        </p>

        {/* Title */}

        <Link
          to={`/blog/${post.slug}`}
          className="block"
        >
          <h2
            className="
              max-w-[720px]

              text-[clamp(1.75rem,3.2vw,3rem)]
              font-medium
              leading-[1.02]
              tracking-[-0.045em]

              text-white/85

              transition-all
              duration-300

              group-hover:text-white
            "
          >
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}

        <p
          className="
            mt-5
            max-w-[570px]

            text-sm
            leading-7

            text-white/32

            transition-colors
            duration-300

            group-hover:text-white/42

            sm:text-[0.95rem]
          "
        >
          {post.excerpt}
        </p>

        {/* Categories */}

        <div
          className="
            mt-6

            flex
            flex-wrap
            gap-2
          "
        >
          {post.categories.map(
            (category) => (
              <span
                key={category}
                className="
                  rounded-full

                  border
                  border-white/[0.065]

                  bg-white/[0.018]

                  px-3
                  py-1.5

                  font-mono

                  text-[0.42rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]

                  text-white/25

                  transition-all
                  duration-300

                  group-hover:border-white/[0.09]
                  group-hover:text-white/40
                "
              >
                {category}
              </span>
            )
          )}
        </div>
      </div>

      {/* ================================================================ */}
      {/* READ BUTTON                                                      */}
      {/* ================================================================ */}

      <div
        className="
          flex

          md:justify-end
          md:pt-7
        "
      >
        <Link
          to={`/blog/${post.slug}`}
          aria-label={`Read ${post.title}`}
          className={`
            group/read

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/[0.07]

            bg-white/[0.025]

            text-white/30

            backdrop-blur-xl

            shadow-[
              inset_0_1px_0_rgba(255,255,255,0.05),
              0_8px_30px_rgba(0,0,0,0.1)
            ]

            transition-all
            duration-300

            hover:-translate-y-1

            ${theme.border}
          `}
        >
          <ArrowUpRight
            size={15}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300

              group-hover/read:translate-x-0.5
              group-hover/read:-translate-y-0.5
            "
          />
        </Link>
      </div>

      {/* ================================================================ */}
      {/* HOVER ACCENT LINE                                                */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          left-0
          top-[-1px]

          h-px
          w-0

          bg-gradient-to-r

          opacity-0

          transition-all
          duration-700

          group-hover:w-36
          group-hover:opacity-100

          ${theme.divider}
        `}
      />

      {/* ================================================================ */}
      {/* SUBTLE HOVER BLOOM                                               */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-20
          top-1/2

          h-48
          w-48

          -translate-y-1/2

          rounded-full

          opacity-0

          blur-[90px]

          transition-opacity
          duration-700

          group-hover:opacity-100

          ${theme.glow}
        `}
      />
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  BLOG                                      */
/* -------------------------------------------------------------------------- */

export default function Blog() {
  return (
    <main
      className="
        relative
        isolate

        min-h-screen
        overflow-hidden

        bg-[#070c1c]

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
        {/* Base */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(
              180deg,
              #081020_0%,
              #0a0f26_50%,
              #070c1c_100%
            )]
          "
        />

        {/* Pink orb */}

        <div
          className="
            absolute

            -right-[300px]
            -top-[300px]

            h-[750px]
            w-[750px]

            rounded-full

            bg-[#ff2da3]/8

            blur-[200px]
          "
        />

        {/* Violet orb */}

        <div
          className="
            absolute

            -left-[400px]
            top-[30%]

            h-[800px]
            w-[800px]

            rounded-full

            bg-[#8c52ff]/6

            blur-[230px]
          "
        />

        {/* Cyan orb */}

        <div
          className="
            absolute

            -right-[350px]
            bottom-[-100px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#58d7ff]/4

            blur-[220px]
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
              black,
              transparent_55%
            )]
          "
        />
      </div>

      {/* ================================================================== */}
      {/* PAGE                                                               */}
      {/* ================================================================== */}

      <div
        className="
          mx-auto
          max-w-[1400px]

          px-6
          pb-28
          pt-36

          sm:px-10
          sm:pt-44

          lg:px-12
          lg:pt-48

          xl:px-20

          2xl:px-24
        "
      >
        <div
          className="
            grid
            gap-20

            lg:grid-cols-[320px_minmax(0,1fr)]
            lg:gap-20

            xl:grid-cols-[380px_minmax(0,1fr)]
            xl:gap-28
          "
        >
          {/* ============================================================ */}
          {/* LEFT / EDITORIAL HEADER                                      */}
          {/* ============================================================ */}

          <header
            className="
              lg:sticky
              lg:top-36
              lg:self-start
            "
          >
            {/* Section marker */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono

                  text-[0.48rem]
                  font-semibold
                  tracking-[0.16em]

                  text-[#ff2da3]/65
                "
              >
                01
              </span>

              <span
                className="
                  h-px
                  w-10

                  bg-gradient-to-r
                  from-[#ff2da3]/50
                  to-transparent
                "
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
                Journal
              </span>
            </div>

            {/* Giant title */}

            <h1
              className="
                mt-8

                text-[clamp(5rem,10vw,8.5rem)]
                font-medium
                leading-[0.72]
                tracking-[-0.085em]

                text-white
              "
            >
              NO
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white/55
                  via-white/30
                  to-white/15

                  bg-clip-text
                  text-transparent
                "
              >
                TES
              </span>

              <span className="text-[#ff2da3]">
                —
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-9
                max-w-[270px]

                text-[0.95rem]
                leading-7

                text-white/32
              "
            >
              Thoughts, projects, experiments,
              and things I&apos;ve learned along
              the way.
            </p>

            {/* Decorative detail */}

            <div
              className="
                mt-10

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

                  bg-[#d8ff47]/70

                  shadow-[
                    0_0_8px_rgba(216,255,71,0.4)
                  ]
                "
              />

              <span
                className="
                  font-mono

                  text-[0.4rem]
                  uppercase
                  tracking-[0.16em]

                  text-white/15
                "
              >
                Notes / 2026
              </span>
            </div>
          </header>

          {/* ============================================================ */}
          {/* RIGHT / POSTS                                                */}
          {/* ============================================================ */}

          <section className="min-w-0">

            {/* Section heading */}

            <div
              className="
                flex
                items-center
                gap-4

                pb-6
              "
            >
              <p
                className="
                  shrink-0

                  font-mono

                  text-[0.46rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-white/20
                "
              >
                Latest entries
              </p>

              <div
                className="
                  h-px
                  flex-1

                  bg-gradient-to-r
                  from-white/[0.08]
                  to-transparent
                "
              />

              <span
                className="
                  font-mono

                  text-[0.42rem]
                  tracking-[0.14em]

                  text-white/12
                "
              >
                {String(
                  blogPosts.length
                ).padStart(2, "0")}
              </span>
            </div>

            {/* Posts */}

            <div>
              {blogPosts.map((post) => (
                <PostRow
                  key={post.slug}
                  post={post}
                />
              ))}
            </div>

            {/* End marker */}

            <div
              className="
                flex
                items-center
                gap-4

                border-t
                border-white/[0.055]

                pt-8
              "
            >
              <span
                className="
                  h-[4px]
                  w-[4px]

                  rotate-45

                  border
                  border-[#8c52ff]/40
                "
              />

              <span
                className="
                  font-mono

                  text-[0.4rem]
                  uppercase
                  tracking-[0.15em]

                  text-white/12
                "
              >
                End of entries
              </span>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}