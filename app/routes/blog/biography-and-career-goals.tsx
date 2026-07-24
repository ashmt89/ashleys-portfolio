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
            June 14, 2026
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
            Biography & Career Goals
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
            My name is Ashley Graham. I grew up in the small town of Bristol, RI, moved to Tampa,
            FL when I was 25, and live here with my husband Jesse and our two huskies, Maverick and
            Jackson. My background is in banking and finance, but my plans are to transition into a web
            development career where I can put my artistic side to good use. I will be graduating this
            summer with a bachelor’s degree in information science and a concentration in web development
            technologies. My passion lies in front end web development and design, but I am also learning
            back-end development so that I can become a well-rounded full-stack developer. What I love
            about full-stack development is that the front-end design allows me to be creative, while the back
            end is where I can use my technical skills to bring my visions to life, also opening doors for a
            wider range of career opportunities.
          </p>

          <p>
            Throughout my time at USF, I’ve learned a wide range of topics that support my path to
            web development. Courses in networks and communication and programming helped me
            understand the foundation of what makes our technology work, and classes about information
            architecture, information behavior and interaction design taught me how to build web
            applications that are not only functional but also provide a great user experience. I learned how
            to work with databases using MySQL, along with programming languages including C++, Java,
            SQL and PHP. Although I was already familiar with HTML and CSS, these classes helped me
            develop an even deeper understanding and home in on those skills through comprehensive web
            projects.
          </p>

          <p>
            In addition to what I’ve learned from my classes, I’m also well versed in many other
            skills and tools that I’ve learned through personal experience. Visual Studio Code and GitHub
            are the primary environments I use to build and manage projects. I’m also familiar with Next JS,
            React, Astro and Tailwind CSS, and am skilled at incorporating external UI component libraries
            and content management systems into projects, like Shadcn and Sanity. I also use deployment
            and hosting platforms including Netlify and Vercel, and file management tools including
            Cyberduck and MAMP. Additionally, I’ve had the opportunity to build and launch websites for
            friends: https://www.fluentinnovations.com/, https://www.sunnydark.com/, and
            https://thefaerywisemermaid.vercel.app/. (The second two are still in progress as they are brand
            new business endeavors.)
          </p>

          <p>
            My past career experience in customer service along with my coursework at USF has
            given me the soft skills needed to be a successful developer. I have excellent communication and
            customer-service skills, essential for effective coordination with development teams and
            interactions with users. I’m also detail-oriented and possess important problem-solving skills
            which are necessary for error fixing and debugging. Additionally, I’m open to getting
            certifications that can improve my knowledge and skills and may consider pursuing my master’s
            degree in the future to help with potential career advancement.            
          </p>

          <p>
            Surprisingly, information science makes up only 6% of the computer and information
            technology field’s needs compared with computer science, which makes up 61%. Nevertheless,
            the Bureau of Labor Statistics states web development employment is growing much faster than
            the average for all occupations, with a projected growth of 7% over the next decade (U.S. Bureau
            of Labor Statistics, 2025). To put this in perspective, it is estimated that there will be about
            14,500 openings for web developers and digital designers each year through 2034 (U.S. Bureau
            of Labor Statistics, 2025). This is a promising outlook for my career goals, especially
            considering the average salary and opportunities for growth. According to sources such as the
            Occupational Outlook Handbook (2025) and Glassdoor (n.d.), the median salary is
            approximately $98,000 and ranges from $75,000-$125,000 in Tampa. Due to the wide range of
            skills required, a position in web development can also open doors for other careers, such as
            project management and software development.
          </p>

          <p>
            Many people think web development is a dying field now that AI has become so
            prevalent, but many others can see the potential for the field to grow and evolve. As I once read
            on Coursera.org (n.d.), “web development is being reborn,” which I completely agree with. My
            goal is not to allow AI to take over my capabilities, but to use it as a tool to enhance my skills
            and efficiency. Although I will most likely work with a team of developers, I really want to be
            able to fully understand the whole process and have that versatility in my coding skills. Having
            the ability to create web applications from start to finish is something I’d like to keep in my back
            pocket no matter what specialty I move into. My main goal is to be able to utilize my creative
            and technical skills to combine aesthetically pleasing visual appearances with smooth
            functionality, creating the best user experiences possible.
          </p>

          {/* Optional section heading example:

          <h2>Career Goals</h2>

          <p>
            Your paragraph here...
          </p>

          */}

          {/* ======================================================== */}
          {/* OPTIONAL REFERENCES                                     */}
          {/* ======================================================== */}

          <h2>References</h2>

          <div className="space-y-6">
            {/* Coursera */}
            <p>
              Coursera. (2026, May 28).{" "}
              <em>Will AI replace programmers?</em>{" "}
              <a
                href="https://www.coursera.org/articles/will-ai-replace-programmers"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.coursera.org/articles/will-ai-replace-programmers
              </a>
            </p>

            {/* Glassdoor */}
            <p>
              Glassdoor. (n.d.).{" "}
              <em>How much does a web developer make in Tampa, FL?</em>{" "}
              <a
                href="https://www.glassdoor.com/Salaries/tampa-fl-us-web-developer-salary-SRCH_IL.0,11_IC1154429_KO12,25.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.glassdoor.com/Salaries/tampa-fl-us-web-developer-salary-SRCH_IL.0,11_IC1154429_KO12,25.htm
              </a>
            </p>

            {/* Bureau of Labor Statistics — Field of Degree */}
            <p>
              Bureau of Labor Statistics. (2025, August 28).{" "}
              <em>
                Field of degree: Computer and information technology.
              </em>{" "}
              In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
              <a
                href="https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm
              </a>
            </p>

            {/* Bureau of Labor Statistics — How to Become */}
            <p>
              Bureau of Labor Statistics. (2025, August 28).{" "}
              <em>
                How to become a web developer or digital designer.
              </em>{" "}
              In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
              <a
                href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-4
              </a>
            </p>

            {/* Bureau of Labor Statistics — Web Developers */}
            <p>
              Bureau of Labor Statistics. (2025, August 28).{" "}
              <em>
                Web developers and digital designers.
              </em>{" "}
              In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
              <a
                href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm
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