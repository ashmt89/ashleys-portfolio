import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#070c1c] text-white">
      {/* ================================================================ */}
      {/* SIMPLE BACKGROUND                                                */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          overflow-hidden
        "
      >
        {/* Subtle pink glow */}

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

        {/* Subtle violet glow */}

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

        {/* Subtle cyan glow */}

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

      {/* ================================================================ */}
      {/* PAGE                                                             */}
      {/* ================================================================ */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[850px]

          px-6
          pb-24
          pt-36

          sm:px-10
          sm:pt-44

          lg:pt-48
        "
      >
        {/* ============================================================ */}
        {/* BACK TO BLOG                                                */}
        {/* ============================================================ */}

        <Link
          to="/blog"
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

          All Posts
        </Link>

        {/* ============================================================ */}
        {/* ARTICLE HEADER                                              */}
        {/* ============================================================ */}

        <header
          className="
            border-b
            border-white/[0.08]

            pb-10
          "
        >
          {/* Date */}

          <p
            className="
              mb-5

              font-mono

              text-[0.65rem]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#ff2da3]
            "
          >
            June 28, 2026
          </p>

          {/* Title */}

          <h1
            className="
              max-w-[800px]

              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]

              text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Information Policy/Technology in the News
          </h1>
        </header>

        {/* ============================================================ */}
        {/* ESSAY CONTENT                                               */}
        {/* ============================================================ */}

        <article
          className="
            pt-12

            text-[1rem]
            leading-[1.9]

            text-white/70

            sm:text-[1.05rem]

            [&>p]:mb-7

            [&>h2]:mb-5
            [&>h2]:mt-14
            [&>h2]:text-2xl
            [&>h2]:font-bold
            [&>h2]:tracking-[-0.02em]
            [&>h2]:text-white

            [&>h3]:mb-4
            [&>h3]:mt-10
            [&>h3]:text-xl
            [&>h3]:font-semibold
            [&>h3]:text-white/90

            [&_a]:text-[#58d7ff]
            [&_a]:underline
            [&_a]:underline-offset-4
            [&_a:hover]:text-[#d8ff47]

            [&_strong]:font-semibold
            [&_strong]:text-white/90
          "
        >
          {/* ======================================================== */}
          {/* PASTE YOUR ESSAY HERE                                   */}
          {/* ======================================================== */}

          <p>
            Over the last decade, Artificial Intelligence has grown to become part of our daily lives. Along with its convenience also comes new ethical and legal concerns to be addressed. Since ChatGPT became popular in 2022, Congress has introduced over one hundred AI-related bills, yet only one law has passed. The article, “From Schoolhouse Rock to Stalemate: Why AI Legislation Keeps Stalling in Congress,” discusses the difficulties with passing AI legislation and how complex procedures prevent many bills from passing into law. I believe the core issue stems from how largely AI affects the nation and disagreements between policy makers over how much AI should be regulated. 
          </p>

          <p>
            AI affects so many different industries that it becomes more complicated when multiple congressional committees need to review and make decisions regarding the legislation. Mehra (2026) points out that “committees compete for jurisdiction, decline to act, or advance conflicting approaches,” which causes delays and makes the process extremely slow. In addition, stakeholders from many different areas are involved, including Congress, National Institute of Standards and Technology (NIST), Federal Trade Commission (FTC), individual state governments, technology professionals and engineers, and the general public. While the legislation is being discussed by Congress, the state governments are taking their own action to create AI regulations, which creates more complications. Additionally, AI algorithms and systems are constantly changing, which makes it more difficult for policymakers to keep up with all of the new policy proposals. 
          </p>

          <p>
            One of the most significant issues the article discusses is the lack of consistency in the national approach to AI regulation. I believe we need to create a more streamlined process when it comes to AI legislation. With all of the states creating their own regulations and new issues constantly arising, it will be impossible to address each new bill that comes up. I think that we would benefit more from having AI federally regulated to reduce the additional complications state policies introduce.  
          </p>

          <h2>References</h2>

          <div className="space-y-6">
            <p>
              Mehra, A. (2026, May 27).{" "}
              <em><i>From schoolhouse rock to stalemate: Why AI legislation keeps stalling in congress.</i></em>{" "}IEEE.{" "}
              <a
                href="https://insight.ieeeusa.org/articles/from-schoolhouse-rock-to-stalemate-why-ai-legislation-keeps-stalling-in-congress/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://insight.ieeeusa.org/articles/from-schoolhouse-rock-to-stalemate-why-ai-legislation-keeps-stalling-in-congress/
              </a>
            </p>
          </div>
        </article>

        {/* ============================================================ */}
        {/* BOTTOM BACK BUTTON                                          */}
        {/* ============================================================ */}

        <footer
          className="
            mt-20

            border-t
            border-white/[0.08]

            pt-8
          "
        >
          <Link
            to="/blog"
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

            Back to All Posts
          </Link>
        </footer>
      </div>
    </main>
  );
}