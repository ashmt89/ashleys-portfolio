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
            July 5, 2026
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
            BSIS Program Review
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

          <h3>Upper-Level Courses:</h3>

            <ul className="list-disc space-y-2 pl-6">
                <li>LIS 3261 – Introduction to Information Science</li>
                <li>LIS 3353 – IT Concepts for Information Professionals</li>
                <li>LIS 4414 – Information Policy &amp; Ethics</li>
                <li>LIS 4202 – Information Behaviors</li>
                <li>LIS 3361 – WWW Page Design/Management</li>
                <li>LIS 4365 – Web Design Technologies</li>
                <li>LIS 4482 – Networks and Communication</li>
                <li>LIS 3352 – Interaction Design</li>
                <li>LIS 3783 – Information Architecture</li>
                <li>LIS 4785 – Intro to Health Informatics</li>
                <li>LIS 4930 – Drones for Info Professionals</li>
                <li>CIS 3360 – Principles of Information Security</li>
                <li>ENC 3250 – Professional Writing</li>
                <li>HUN 3296 – Nutrition &amp; Disease</li>
            </ul>

          <h3>Additional Helpful Courses:</h3>

            <ul className="list-disc space-y-2 pl-6">
                <li>COP 2030 – Programming Concepts</li>
                <li>COP 2250 – Object-Oriented Programming</li>
                <li>LIS 2780 – Database Concepts</li>
            </ul>
          
          <h3>Introduction</h3>

          <p>
            The Bachelor of Science in Information Studies (BSIS) Program at the University of
            South Florida (USF) has provided me with a wide range of experience and skills needed to
            become an information professional. With a concentration in web development
            technologies, the courses offered through this program have laid a solid foundation for me
            to continue working towards my career goal of becoming a full-stack web developer. The
            program has taught me essential technical skills and given me deeper understanding of
            core concepts including user-centered design, information behavior, human-computer
            interaction and best practices in the web development field. Specific courses geared
            directly towards web development along with certain hands-on projects were essential to
            my progress. While I already had experience with HTML and CSS, the BSIS program
            allowed me to master those skills and gain new expertise that I will use in any web
            development position.
          </p>

          <h3>Overview of Courses</h3>

          <p>
            There were several courses that provided me essential web development and
            technical skills that are directly related to my future career as a web developer. WWW
            Page Design/Management (LIS 3361) helped me develop foundational front-end
            development skills by teaching me how to apply core design principles and utilize HTML
            and CSS to build a basic resume website. While I was already familiar with HTML and CSS,
            this class helped sharpen those skills and gave me a deeper understanding of how the
            different languages work together. On the other hand, Web Design Technologies (LIS 4365)
            was one of the most valuable courses I took. This class allowed me to apply programming
            concepts to real-world projects, giving me experience combining front-end design and
            back-end functionality to build more dynamic websites like those that I would build as a
            professional full-stack developer. Additionally, these courses taught me how to store files
            and deploy websites, which was something I was not familiar with prior to this program.
          </p>

          <p>
            A few lower-level courses that I took directly supported these web design classes,
            teaching me essential programming skills needed to build more complex websites.
            Programming Concepts (COP 2030) gave me a better understanding of how code works at
            the most basic level and taught me the fundamentals of programming, setting me up for
            success in later web development courses. I learned even more in my Object-Oriented
            Programming (COP 2250) course. This class taught me about programming logic,
            functions, and how to write the necessary code used to create forms and notifications.
            These are skills that I will apply to almost all future web projects. Another highly valuable
            course I took was Database Concepts (LIS2780). This class taught me about database
            design and how to integrate databases into web projects using MySQL, which is essential
            for building websites that store information or data, such as online stores. While
            programming skills are essential as a web developer, a good website also requires
            thoughtful organization and planning to ensure usability and an overall positive user
            experience.
          </p>

          <p>
            Outside of technical skills, Interaction Design (LIS 3352) taught me key principles of
            website usability, or user interface (UI), and user experience (UX). I now have a better
            understanding of how humans interact with computers and their natural tendencies during
            navigation, which is something I important to think about when considering the flow of a
            website or how certain things should look. Information Behaviors (LIS 4202) also supported
            this understanding by teaching me how people search for and process information. I
            learned about information overload and the importance of reducing it, which is very helpful
            for designing websites that are easy to navigate and understand. In addition, Information
            Architecture (LIS 3783) taught me how to plan out designs and organize information
            effectively. More specifically, I learned how to design for the intended audience and their
            needs when preparing a design, considering how the navigation, flow of information and
            content hierarchy can influence a user’s experience. During this course I also had the
            opportunity to work on projects with a team and learn new wireframing tools. The skills I
            learned throughout these courses were reinforced through projects that allowed me to
            apply what I learned to real-life situations, better preparing me for the work that I will
            eventually be doing.           
          </p>

          <h3>Overview of Assignments</h3>

          <p>
            The most significant assignment that I remember is building a complete, functional
            website for a fictitious Farmer’s Market in my Web Design Technologies class. This was a
            large project that allowed me to use many different skills from various courses, combining
            my knowledge in front-end design and back-end functionality. Most notably, I used what I
            learned in Database Concepts and the programming courses to integrate a database for
            the store functionality and create working forms. These are skills that I will use very often in
            a career as a web developer. In my Database Concepts class, I completed a database
            project that directly prepared me for the large web project. For the database project, I had
            to create and manage a database with a large amount of data which taught me in-depth
            information about how the different tables connect and how they can be manipulated to
            provide different reports. I also learned MySQL which is a significant skill to have as a web
            developer. The Farmer’s Market project gave me the opportunity to use these new skills
            and learn how to connect web applications to databases.
          </p>

          <p>
            Another noteworthy project I completed was a HiFi Wireframe design for my
            Information Architecture class. This assignment was significant to me because it gave me
            a chance to work collaboratively with a team and plan an entire website prior to the
            development process. This helped teach me valuable skills in UX design and gave me
            practical steps I can use in the future to focus on the audience and their needs before
            writing any code. This is essential in front-end development, especially when working with
            a team of developers and clients. These projects taught me how to bring the different
            programming concepts and design principles that I learned all together, giving me a deeper
            understanding of how they relate and integrate.
          </p>

          <h3>Conclusion</h3>

          <p>
            Overall, most of the courses in the BSIS program had something to offer that will
            help me to be successful in my career aspirations. I do wish that I had access to a few of
            the courses offered at USF that are more closely related to my specific goals, such as a
            programming class for Python, a web design class and a graphic design class (I tried to
            register for these but they were restricted to a different major), but the required courses
            still provided background knowledge that will make me a more well-rounded web
            developer. Most importantly, I gained valuable experience working with other programming
            languages, databases, UX/UI design principles, and working both independently and
            collaboratively. The combination of coursework and hands-on projects that I completed
            have all taught me new skills and ideas that I now consider when designing and building
            websites, which is something I will always carry with me and continue to build upon
            throughout my future career endeavors.
          </p>
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