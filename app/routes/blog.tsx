import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Accent = "pink" | "cyan" | "violet";

type Post = {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  accent: Accent;
};

/* -------------------------------------------------------------------------- */
/*                                   POSTS                                    */
/* -------------------------------------------------------------------------- */

const posts: Post[] = [
  {
    date: "JUN, 2026",

    title:
      "Biography & Career Goals",

    excerpt:
      "My background, goals, and path toward a career in full-stack web development.",

    slug:
      "biography-and-career-goals",

    accent: "pink",
  },

  {
    date: "JUN, 2026",

    title:
      "Software-Tracking Database Implementation Plan",

    excerpt:
      "A project management plan for developing a software-tracking database at the University of South Florida.",

    slug:
      "project-management-plan",

    accent: "cyan",
  },

  {
    date: "JUN, 2026",

    title:
      "Ethical Case Study Analysis: AI Governance in Modern Society",

    excerpt:
      "A case study exploring the ethical and societal implications of AI and how it should be governed.",

    slug:
      "ethical-case-study",

    accent: "violet",
  },

    {
    date: "JUL, 2026",

    title:
      "Information Policy/Technology in the News",

    excerpt:
      "",

    slug:
      "",

    accent: "pink",
  },

  {
    date: "JUL, 2026",

    title:
      "BSIS Program Review",

    excerpt:
      "A review of my BSIS coursework, experiences, and the skills I developed throughout the program.",

    slug:
      "bsis-program-review",

    accent: "cyan",
  },
];

/* -------------------------------------------------------------------------- */
/*                               ACCENT COLORS                                */
/* -------------------------------------------------------------------------- */

const accents = {
  pink: {
    text: "text-[#ff2da3]",
    dot: "bg-[#ff2da3]",
  },

  cyan: {
    text: "text-[#58d7ff]",
    dot: "bg-[#58d7ff]",
  },

  violet: {
    text: "text-[#a274ff]",
    dot: "bg-[#8c52ff]",
  },
};

/* -------------------------------------------------------------------------- */
/*                                 POST ROW                                   */
/* -------------------------------------------------------------------------- */

function PostRow({
  post,
  index,
}: {
  post: Post;
  index: number;
}) {
  const accent =
    accents[post.accent];

  const number = String(
    index + 1
  ).padStart(2, "0");

  return (
    <article
      className="
        border-t
        border-white/[0.08]

        py-10

        first:border-t-0
        first:pt-0

        sm:py-12
      "
    >
      {/* ============================================================ */}
      {/* METADATA                                                     */}
      {/* ============================================================ */}

      <div
        className="
          mb-4

          flex
          flex-wrap
          items-center
          gap-3
        "
      >
        {/* Article number */}

        <span
          className={`
            font-mono

            text-[0.65rem]
            font-semibold
            tracking-[0.15em]

            ${accent.text}
          `}
        >
          {number}
        </span>

        <span
          className="
            text-white/15
          "
        >
          /
        </span>

        {/* Date */}

        <span
          className="
            font-mono

            text-[0.6rem]
            font-semibold
            uppercase
            tracking-[0.16em]

            text-white/35
          "
        >
          {post.date}
        </span>
      </div>

      {/* ============================================================ */}
      {/* TITLE                                                        */}
      {/* ============================================================ */}

      <Link
        to={`/blog/${post.slug}`}
        className="group/title"
      >
        <h2
          className="
            max-w-[750px]

            text-2xl
            font-bold
            leading-tight
            tracking-[-0.025em]

            text-white

            transition-colors
            duration-200

            group-hover/title:text-white/75

            sm:text-3xl
            lg:text-4xl
          "
        >
          {post.title}
        </h2>
      </Link>

      {/* ============================================================ */}
      {/* EXCERPT                                                      */}
      {/* ============================================================ */}

      <p
        className="
          mt-5
          max-w-[650px]

          text-sm
          leading-7

          text-white/45

          sm:text-[0.95rem]
        "
      >
        {post.excerpt}
      </p>

      {/* ============================================================ */}
      {/* BOTTOM ROW                                                   */}
      {/* ============================================================ */}

      <div
        className="
          mt-7

          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* Read link */}

        <Link
          to={`/blog/${post.slug}`}
          className="
            group/read

            inline-flex
            items-center
            gap-2

            font-mono

            text-[0.6rem]
            font-semibold
            uppercase
            tracking-[0.15em]

            text-white/45

            transition-colors
            duration-200

            hover:text-[#d8ff47]
          "
        >
          Read article

          <ArrowUpRight
            size={14}
            strokeWidth={1.8}

            className="
              transition-transform
              duration-200

              group-hover/read:translate-x-0.5
              group-hover/read:-translate-y-0.5
            "
          />
        </Link>
      </div>
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

        min-h-screen

        bg-[#070c1c]

        text-white
      "
    >
      {/* ================================================================== */}
      {/* SIMPLE BACKGROUND                                                  */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          fixed
          inset-0

          overflow-hidden
        "
      >
        {/* Pink */}

        <div
          className="
            absolute

            -right-[300px]
            -top-[300px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#ff2da3]/[0.06]

            blur-[200px]
          "
        />

        {/* Violet */}

        <div
          className="
            absolute

            -left-[350px]
            top-[40%]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#8c52ff]/[0.04]

            blur-[200px]
          "
        />

        {/* Cyan */}

        <div
          className="
            absolute

            -right-[300px]
            bottom-[-300px]

            h-[650px]
            w-[650px]

            rounded-full

            bg-[#58d7ff]/[0.03]

            blur-[200px]
          "
        />
      </div>

      {/* ================================================================== */}
      {/* PAGE                                                               */}
      {/* ================================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1100px]

          px-6
          pb-24
          pt-36

          sm:px-10
          sm:pt-44

          lg:pt-48
        "
      >
        {/* ============================================================ */}
        {/* BACK TO PORTFOLIO                                           */}
        {/* ============================================================ */}

        <Link
          to="/"
          className="
            group

            mb-14

            inline-flex
            items-center
            gap-2

            font-mono

            text-[0.65rem]
            font-semibold
            uppercase
            tracking-[0.15em]

            text-white/40

            transition-colors
            duration-200

            hover:text-[#d8ff47]
          "
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.8}

            className="
              transition-transform
              duration-200

              group-hover:-translate-x-1
            "
          />

          Back to Portfolio
        </Link>

        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}

        <header
          className="
            mb-16

            border-b
            border-white/[0.08]

            pb-12
          "
        >
          {/* Small label */}

          <div
            className="
              mb-6

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

                bg-[#ff2da3]
              "
            />

            <span
              className="
                font-mono

                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-[#ff2da3]
              "
            >
              Journal
            </span>
          </div>

          {/* Main title */}

          <h1
            className="
              text-5xl
              font-bold
              leading-[0.95]
              tracking-[-0.05em]

              text-white

              sm:text-6xl
              lg:text-7xl
            "
          >
            Blog
            <span
              className="
                text-[#ff2da3]
              "
            >
              —
            </span>
            Notes
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-xl

              text-base
              leading-7

              text-white/45
            "
          >
            Thoughts, projects, research,
            and things I&apos;ve learned
            throughout my journey in
            technology, design, and
            development.
          </p>
        </header>

        {/* ============================================================ */}
        {/* POSTS HEADER                                                */}
        {/* ============================================================ */}

        <div
          className="
            mb-8

            flex
            items-center
            justify-between

            border-b
            border-white/[0.08]

            pb-5
          "
        >
          <p
            className="
              font-mono

              text-[0.6rem]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-white/35
            "
          >
            Latest Posts
          </p>

          <span
            className="
              font-mono

              text-[0.55rem]
              uppercase
              tracking-[0.14em]

              text-white/20
            "
          >
            {posts.length} Posts
          </span>
        </div>

        {/* ============================================================ */}
        {/* POST LIST                                                   */}
        {/* ============================================================ */}

        <section
          aria-label="Blog posts"
        >
          {posts.map(
            (post, index) => (
              <PostRow
                key={post.slug}
                post={post}
                index={index}
              />
            )
          )}
        </section>

        {/* ============================================================ */}
        {/* BOTTOM                                                      */}
        {/* ============================================================ */}

        <div
          className="
            mt-10

            border-t
            border-white/[0.08]

            pt-8
          "
        >
          <Link
            to="/"
            className="
              group

              inline-flex
              items-center
              gap-2

              font-mono

              text-[0.65rem]
              font-semibold
              uppercase
              tracking-[0.15em]

              text-white/40

              transition-colors
              duration-200

              hover:text-[#d8ff47]
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.8}

              className="
                transition-transform
                duration-200

                group-hover:-translate-x-1
              "
            />

            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}