import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
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
  tags: string[];
  slug: string;
  image?: string;
  accent: Accent;
};

/* -------------------------------------------------------------------------- */
/*                                   POSTS                                    */
/* -------------------------------------------------------------------------- */

const posts: Post[] = [
  {
    date: "JUN, 2026",
    title: "Biography & Career Goals",
    excerpt:
      "My background, goals, and path toward a career in full-stack web development.",
    tags: ["Career", "Education"],
    slug: "biography-and-career-goals",
    accent: "pink",

    // Add an image later if you'd like:
    // image: "/images/blog/career-goals.webp",
  },

  {
    date: "JUN, 2026",
    title: "Software-Tracking Database Implementation Plan",
    excerpt:
      "A project management plan for developing a software-tracking database at the University of South Florida.",
    tags: ["Project Management", "Database"],
    slug: "project-management-plan",
    accent: "cyan",

    // image: "/images/blog/database-plan.webp",
  },

  {
    date: "APR, 2026",
    title: "What Web Development Looks Like in the Age of AI",
    excerpt:
      "AI isn't replacing developers — it's changing what we spend our time on. Here's how I'm adapting my workflow and staying relevant.",
    tags: ["AI", "Web Dev"],
    slug: "web-dev-and-ai",
    accent: "violet",

    // image: "/images/blog/web-dev-ai.webp",
  },
];

/* -------------------------------------------------------------------------- */
/*                              ACCENT STYLES                                 */
/* -------------------------------------------------------------------------- */

const accents = {
  pink: {
    text: "text-[#ff2da3]",
    mutedText: "text-[#ff2da3]/55",

    dot: "bg-[#ff2da3]",
    glow: "bg-[#ff2da3]",

    border: "group-hover/post:border-[#ff2da3]/20",

    gradient:
      "from-[#ff2da3]/20 via-[#8c52ff]/10 to-transparent",
  },

  cyan: {
    text: "text-[#58d7ff]",
    mutedText: "text-[#58d7ff]/55",

    dot: "bg-[#58d7ff]",
    glow: "bg-[#58d7ff]",

    border: "group-hover/post:border-[#58d7ff]/20",

    gradient:
      "from-[#58d7ff]/18 via-[#8c52ff]/10 to-transparent",
  },

  violet: {
    text: "text-[#a274ff]",
    mutedText: "text-[#a274ff]/55",

    dot: "bg-[#8c52ff]",
    glow: "bg-[#8c52ff]",

    border: "group-hover/post:border-[#8c52ff]/20",

    gradient:
      "from-[#8c52ff]/20 via-[#ff2da3]/8 to-transparent",
  },
};

/* -------------------------------------------------------------------------- */
/*                               POST IMAGE                                   */
/* -------------------------------------------------------------------------- */

function PostImage({
  post,
  number,
}: {
  post: Post;
  number: string;
}) {
  const accent = accents[post.accent];

  return (
    <div
      className="
        relative

        w-full

        lg:w-[270px]
        lg:shrink-0

        xl:w-[310px]
      "
    >
      <div
        className={`
          relative
          isolate

          aspect-[16/11]

          overflow-hidden

          rounded-[22px]

          border
          border-white/[0.065]

          bg-[#080e22]

          p-[5px]

          shadow-[
            inset_0_1px_0_rgba(255,255,255,0.06),
            0_20px_50px_rgba(0,0,0,0.16)
          ]

          transition-all
          duration-500

          ${accent.border}
        `}
      >
        {/* ========================================================== */}
        {/* IMAGE / PLACEHOLDER                                       */}
        {/* ========================================================== */}

        <div
          className="
            relative

            h-full
            w-full

            overflow-hidden

            rounded-[17px]

            bg-[#090f25]
          "
        >
          {post.image ? (
            <>
              <img
                src={post.image}
                alt=""
                className="
                  h-full
                  w-full

                  object-cover

                  opacity-75

                  grayscale

                  transition-all
                  duration-700

                  group-hover/post:scale-[1.035]
                  group-hover/post:grayscale-[30%]
                  group-hover/post:opacity-90
                "
              />

              {/* Neon image treatment */}

              <div
                aria-hidden="true"
                className={`
                  pointer-events-none

                  absolute
                  inset-0

                  bg-gradient-to-br

                  ${accent.gradient}

                  mix-blend-color

                  transition-opacity
                  duration-500

                  group-hover/post:opacity-60
                `}
              />
            </>
          ) : (
            /* Abstract placeholder */

            <div
              className="
                absolute
                inset-0

                overflow-hidden

                bg-[
                  radial-gradient(
                    circle_at_25%_30%,
                    rgba(255,45,163,0.13),
                    transparent_30%
                  ),
                  radial-gradient(
                    circle_at_75%_65%,
                    rgba(88,215,255,0.10),
                    transparent_30%
                  ),
                  linear-gradient(
                    135deg,
                    #0b1029,
                    #101334
                  )
                ]
              "
            >
              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0

                  opacity-[0.055]

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

                  bg-[size:28px_28px]
                "
              />

              {/* Giant article number */}

              <span
                className={`
                  absolute
                  -bottom-5
                  -right-1

                  font-mono

                  text-[7rem]
                  font-bold
                  leading-none

                  opacity-[0.055]

                  ${accent.text}
                `}
              >
                {number}
              </span>

              {/* Center icon */}

              <div
                className="
                  absolute
                  inset-0

                  flex
                  items-center
                  justify-center
                "
              >
                <BookOpen
                  size={25}
                  strokeWidth={1}

                  className="text-white/12"
                />
              </div>
            </div>
          )}

          {/* Dark edge */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              inset-0

              bg-gradient-to-t
              from-[#050817]/35
              via-transparent
              to-transparent
            "
          />

          {/* Number */}

          <span
            className="
              absolute
              left-4
              top-4

              font-mono
              text-[0.46rem]
              font-semibold
              tracking-[0.16em]

              text-white/30
            "
          >
            / {number}
          </span>
        </div>

        {/* ========================================================== */}
        {/* GLASS RIM                                                 */}
        {/* ========================================================== */}

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
            via-white/[0.15]
            to-transparent
          "
        />

        <div
          aria-hidden="true"
          className={`
            pointer-events-none

            absolute
            bottom-0
            left-[12%]

            h-px
            w-[35%]

            opacity-25

            ${accent.glow}
          `}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                POST ROW                                    */
/* -------------------------------------------------------------------------- */

function PostRow({
  post,
  index,
}: {
  post: Post;
  index: number;
}) {
  const accent = accents[post.accent];

  const number = String(index + 1).padStart(
    2,
    "0"
  );

  return (
    <article
      className="
        group/post
        relative

        border-t
        border-white/[0.055]

        py-10

        first:border-t-0
        first:pt-0

        lg:py-14
      "
    >
      {/* Hover atmosphere */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-20
          top-1/2

          h-64
          w-64

          -translate-y-1/2

          rounded-full

          opacity-0

          blur-[100px]

          transition-opacity
          duration-700

          group-hover/post:opacity-[0.035]

          ${accent.glow}
        `}
      />

      <div
        className="
          relative
          z-10

          grid
          gap-7

          lg:grid-cols-[auto_1fr]
          lg:gap-9

          xl:gap-12
        "
      >
        {/* Image */}

        <PostImage
          post={post}
          number={number}
        />

        {/* ========================================================== */}
        {/* CONTENT                                                   */}
        {/* ========================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
          "
        >
          {/* Metadata */}

          <div
            className="
              mb-4

              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
            "
          >
            <span
              className={`
                flex
                items-center
                gap-2

                font-mono
                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.17em]

                ${accent.mutedText}
              `}
            >
              <span
                className={`
                  h-[4px]
                  w-[4px]

                  rounded-full

                  ${accent.dot}
                `}
              />

              {post.date}
            </span>

            <span
              className="
                h-px
                w-5

                bg-white/10
              "
            />

            <span
              className="
                font-mono
                text-[0.44rem]
                uppercase
                tracking-[0.15em]

                text-white/15
              "
            >
              Article {number}
            </span>
          </div>

          {/* Title */}

          <Link
            to={`/blog/${post.slug}`}
            className="
              group/title

              max-w-[760px]
            "
          >
            <h2
              className="
                text-[clamp(1.7rem,3.3vw,3rem)]
                font-medium
                leading-[1]
                tracking-[-0.045em]

                text-white/85

                transition-colors
                duration-300

                group-hover/title:text-white
              "
            >
              {post.title}
            </h2>
          </Link>

          {/* Excerpt */}

          <p
            className="
              mt-5

              max-w-[610px]

              text-sm
              leading-7

              text-white/32
            "
          >
            {post.excerpt}
          </p>

          {/* Footer */}

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
            {/* Tags */}

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full

                    border
                    border-white/[0.06]

                    bg-white/[0.018]

                    px-3
                    py-1.5

                    font-mono
                    text-[0.45rem]
                    font-medium
                    uppercase
                    tracking-[0.13em]

                    text-white/25

                    transition-all
                    duration-300

                    group-hover/post:border-white/[0.09]
                    group-hover/post:text-white/40
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read link */}

            <Link
              to={`/blog/${post.slug}`}
              aria-label={`Read ${post.title}`}
              className="
                group/read

                inline-flex
                shrink-0
                items-center
                gap-3

                font-mono
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.15em]

                text-white/30

                transition-colors
                duration-300

                hover:text-[#d8ff47]
              "
            >
              Read article

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.065]

                  bg-white/[0.018]

                  transition-all
                  duration-300

                  group-hover/read:-translate-y-0.5
                  group-hover/read:translate-x-0.5

                  group-hover/read:border-[#d8ff47]/20
                  group-hover/read:bg-[#d8ff47]/[0.025]

                  group-hover/read:shadow-[
                    0_0_20px_rgba(216,255,71,0.05)
                  ]
                "
              >
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.7}
                />
              </span>
            </Link>
          </div>
        </div>
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
        isolate

        min-h-screen
        overflow-hidden

        bg-[#070c1c]

        font-sans
        text-white
      "
    >

      {/* ================================================================ */}
      {/* BACKGROUND                                                        */}
      {/* ================================================================ */}

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
        {/* Main atmosphere */}

        <div
          className="
            absolute
            inset-0

            bg-[
              radial-gradient(
                circle_at_72%_15%,
                rgba(255,45,163,0.12),
                transparent_28%
              ),
              radial-gradient(
                circle_at_15%_55%,
                rgba(140,82,255,0.08),
                transparent_30%
              ),
              radial-gradient(
                circle_at_75%_75%,
                rgba(88,215,255,0.055),
                transparent_28%
              ),
              linear-gradient(
                180deg,
                #081020_0%,
                #0a0d25_45%,
                #070c1c_100%
              )
            ]
          "
        />

        {/* Large pink orb */}

        <div
          className="
            absolute

            -right-[250px]
            -top-[220px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#ff2da3]/8

            blur-[190px]
          "
        />

        {/* Violet orb */}

        <div
          className="
            absolute

            -left-[350px]
            top-[35%]

            h-[750px]
            w-[750px]

            rounded-full

            bg-[#8c52ff]/6

            blur-[210px]
          "
        />

        {/* Cyan orb */}

        <div
          className="
            absolute

            -right-[300px]
            bottom-[0%]

            h-[650px]
            w-[650px]

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
      {/* PAGE                                                             */}
      {/* ================================================================ */}

      <div
        className="
          mx-auto
          max-w-[1440px]

          px-6
          pb-24
          pt-36

          sm:px-10
          sm:pt-40

          lg:px-12
          lg:pb-32

          xl:px-20

          2xl:px-24
        "
      >
        {/* ============================================================ */}
        {/* MOBILE / TABLET HEADER                                      */}
        {/* ============================================================ */}

        <div
          className="
            mb-16

            lg:hidden
          "
        >
          <div
            className="
              mb-5

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

          <h1
            className="
              text-[clamp(4rem,18vw,7rem)]
              font-medium
              leading-[0.73]
              tracking-[-0.085em]

              text-white
            "
          >
            Blog

            <span
              className="
                block
                text-white/20
              "
            >
              Notes
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-sm

              text-sm
              leading-7

              text-white/30
            "
          >
            Thoughts, projects, research, and notes
            from my journey through technology,
            design, and development.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP EDITORIAL LAYOUT                                    */}
        {/* ============================================================ */}

        <div
          className="
            lg:grid
            lg:grid-cols-[280px_minmax(0,1fr)]
            lg:gap-14

            xl:grid-cols-[340px_minmax(0,1fr)]
            xl:gap-20
          "
        >
          {/* ========================================================== */}
          {/* STICKY SIDEBAR                                            */}
          {/* ========================================================== */}

          <aside
            className="
              hidden

              lg:block
            "
          >
            <div
              className="
                sticky
                top-32
              "
            >
              {/* Section marker */}

              <div
                className="
                  mb-8

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

                    text-white/22
                  "
                >
                  Journal
                </span>
              </div>

              {/* Giant editorial title */}

              <h1
                className="
                  text-[clamp(5.5rem,8vw,8rem)]
                  font-medium
                  leading-[0.68]
                  tracking-[-0.09em]

                  text-white
                "
              >
                BL
                <br />

                OG

                <span className="text-[#ff2da3]">
                  —
                </span>

                <br />

                <span className="text-white/20">
                  NO
                  <br />
                  TES
                </span>
              </h1>

              {/* Description */}

              <div
                className="
                  mt-10

                  max-w-[230px]

                  border-l
                  border-white/[0.06]

                  pl-5
                "
              >
                <p
                  className="
                    text-sm
                    leading-6

                    text-white/30
                  "
                >
                  Thoughts, projects, research,
                  and notes from my journey
                  through technology and design.
                </p>

                {/* Post count */}

                <div
                  className="
                    mt-6

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

                      shadow-[0_0_8px_rgba(216,255,71,0.6)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[0.44rem]
                      uppercase
                      tracking-[0.15em]

                      text-white/18
                    "
                  >
                    {String(posts.length).padStart(
                      2,
                      "0"
                    )}{" "}
                    entries
                  </span>
                </div>
              </div>

              {/* Decorative coordinates */}

              <div
                className="
                  mt-12

                  font-mono
                  text-[0.4rem]
                  uppercase
                  leading-5
                  tracking-[0.14em]

                  text-white/10
                "
              >
                Archive / 2026
                <br />
                Design / Development
                <br />
                Ashley Graham
              </div>
            </div>
          </aside>

          {/* ========================================================== */}
          {/* POSTS                                                     */}
          {/* ========================================================== */}

          <section
            aria-label="Blog posts"
            className="
              min-w-0
            "
          >
            {/* Top archive metadata */}

            <div
              className="
                mb-10

                flex
                items-end
                justify-between
                gap-6

                border-b
                border-white/[0.055]

                pb-5
              "
            >
              <div>
                <p
                  className="
                    font-mono
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]

                    text-white/25
                  "
                >
                  Latest entries
                </p>

                <p
                  className="
                    mt-1

                    font-mono
                    text-[0.42rem]
                    uppercase
                    tracking-[0.13em]

                    text-white/10
                  "
                >
                  Sorted / Newest first
                </p>
              </div>

              <span
                className="
                  font-mono
                  text-[0.44rem]
                  uppercase
                  tracking-[0.14em]

                  text-white/14
                "
              >
                2026 — Present
              </span>
            </div>

            {/* Post rows */}

            <div>
              {posts.map((post, index) => (
                <PostRow
                  key={post.slug}
                  post={post}
                  index={index}
                />
              ))}
            </div>

            {/* End of archive */}

            <div
              className="
                mt-10

                flex
                items-center
                gap-4

                border-t
                border-white/[0.055]

                pt-7
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]

                  rotate-45

                  border
                  border-[#8c52ff]/40
                "
              />

              <span
                className="
                  font-mono
                  text-[0.43rem]
                  uppercase
                  tracking-[0.15em]

                  text-white/12
                "
              >
                End of current archive
              </span>
            </div>
          </section>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FOOTER                                                           */}
      {/* ================================================================ */}

      <footer
        className="
          border-t
          border-white/[0.045]

          px-6
          py-8

          sm:px-10

          lg:px-12

          xl:px-20

          2xl:px-24
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1440px]
            flex-col
            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-mono
              text-[0.43rem]
              uppercase
              tracking-[0.14em]

              text-white/12
            "
          >
            © {new Date().getFullYear()} Ashley
            Graham
          </p>

          <Link
            to="/"
            className="
              group/footer

              inline-flex
              items-center
              gap-2

              font-mono
              text-[0.45rem]
              font-semibold
              uppercase
              tracking-[0.15em]

              text-white/20

              transition-colors
              duration-300

              hover:text-[#d8ff47]
            "
          >
            <ArrowLeft
              size={11}
              strokeWidth={1.7}

              className="
                transition-transform
                duration-300

                group-hover/footer:-translate-x-1
              "
            />

            Back to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}