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
            Software-Tracking Database Implementation Plan
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
            I have been tasked with leading a team in the development of a software-tracking
            database for the University of South Florida. The purpose of this project is to create a
            system to track and maintain all the software that the university owns, licenses, rents, and
            manages to ensure compliance with software tracking regulations. This database will
            provide a centralized place for records including the software types, software developers,
            software versions, types of licensing agreements, departments that use the software,
            computers the software is installed on, software installation dates and other related
            information. I will be designing an implementation plan using the six phases outlined in the
            Project Management Handbook by Wouter Baars (2006). These phases will allow me to
            organize the project into manageable parts and more easily keep track of timelines and
            progress.
          </p>

          <h3>Stage 1: Initiation Phase</h3>

          <p>
            The first stage, the initiation phase, is where I will outline the scope of the project.
            What we need is a user-friendly database system that can be accessed by authorized
            personnel, can be maintained and updated regularly, and can generate reports. This
            database is needed because all educational institutions are required to track all software
            used throughout the institution, so it is essential that we maintain the information with
            accuracy and keep it up to date on a regular basis. This database will hold a lot of
            information, so I’ll need to make sure that we have the appropriate technology available. I
            will set up a meeting with stakeholders to gain the proper approvals, including the IT
            management team, college deans, financial directors, and those in charge of distributing
            software and equipment to employees. I will also recruit a team of program designers,
            developers and IT representatives with the help of college leadership.
          </p>

          <p>
            One common problem with project plans is that they often expand beyond the
            scope of the project (Wedell, 2012). To prevent this, I’ll need to make sure I gain agreement
            from all stakeholders that this database will only house current information. I do not want
            the database to track future software that we might acquire based on future employees or
            any plans for changes in software that the institution uses. I will determine the projects
            feasibility by discussing what resources and budget we have available so that I can factor
            in any costs or technological needs during the next phase. Any potential risks will also be
            assessed during my initial meeting, and I plan to address future issues by setting up a
            communication system that allows each team member to provide status updates and
            alerts. Next, I will schedule weekly meetings with the IT team and designated college
            representatives to ensure that we move through each part of the process in a timely
            manner and address any needs or concerns as they arise.
          </p>

          <h3>Stage 2: Definition Phase</h3>

          <p>
            This is where I will collect details regarding what will be done to put this project in
            motion. Activities will include gathering detailed tracking requirements from our
            compliance office, determining how information will be entered, updated and maintained
            by staff, and assessing our existing resources and technology platforms. I will enlist the
            help of our IT department to determine the best database platform and methods for data
            entry and maintenance. I will also meet with financial representatives from each college to
            discuss the best way to gather the software-related financial data that we need to report,
            and with department heads to designate personnel for data entry and maintenance of
            records. During these meetings I will verify that the appropriate employees have access to
            the necessary systems and establish any training needs.        
          </p>

          <h3>Stage 3: Design Phase</h3>

          <p>
            During this phase, I will map out how each part of the implementation process will
            work. This will consist of creating flow charts to illustrate process workflows, site maps to
            categorize software information, organizational charts to establish employee roles, and
            prototypes of the structure, layout and design of the database. I will also utilize tracking
            software to define a list of the required fields and reporting requirements that can be
            shared with IT to develop the necessary fields for the data. These activities will mostly
            require database designers and IT representatives. While the designers work on the
            database, I will organize the staff roles and reporting hierarchy into visual charts. Once the
            designs are established, I will meet with the original team of stakeholders to obtain
            approval of the designs and feedback.
          </p>

          <h3>Stage 4: Development Phase</h3>

          <p>
            The next step is the implementation process, which will include a detailed schedule
            and timeline for completion. I will use the project management software MS Project to put
            this plan together so that I can easily make updates, track progress and share it with my
            team. To help me establish a feasible timeline, I will utilize the critical path method (CPM)
            to determine potential dates for earliest and latest project completion, as well as what
            tasks need to be completed before the next can be started. The CPM will help ensure
            different tasks being worked on by different people don’t conflict with each other and that
            task dependencies are handled in the appropriate order. I will also schedule dates for
            testing, factoring in potential delays such as staff absences, vacations or unforeseen
            technological issues.
          </p>

          <h3>Stage 5: Implementation Phase</h3>

          <p>
            Once the planning and preparation is complete, we will begin the implementation
            phase. At this stage, the IT and development team will build the database and configure
            our systems. Once this is complete, IT will test the database, address any issues and
            repeat testing until we have a smooth workflow. Once testing is complete, IT will distribute
            access to designated personnel in each college and have them log in to make sure they
            can access the system. Communication with the IT and development team leads is
            essential during this stage, as I will need to ensure we are staying on track and addressing
            any issues as they arise. Throughout this phase, team leads will update progress
            dashboards that will allow me to obtain status reports that I can share with leadership to
            keep everyone informed.
          </p>

          <h3>Stage 6: Follow-up Phase</h3>

          <p>
            The final phase will consist of maintenance and a review of the completed project.
            Deliverables will include meeting with department heads, conducting trainings on how to
            use the database and informing all employees of what information we will need to track.
            The development team will also construct a guide including step-by-step directions and
            visuals for users to refer to. Emails will be distributed to all the designated college
            representatives with this information, along with instructions to upload their data by a
            specific date. At this point, IT will generate a report to verify that the database is accurately
            capturing information and address any potential issues. Once this is complete, I will hold a
            final meeting with team leads to discuss what went well and what we could improve on,
            which will help us improve our processes for any future projects.
          </p>

          <p>
            Following the six project management phases is essential to ensuring the project’s
            success. Careful planning and consistent communication are also key to working with a
            team, especially when there are so many aspects involved. Implementing a database
            system across the university is very large task, but the result will greatly improve our
            software tracking and maintenance capabilities, allowing us to maintain compliance with
            institutional reporting requirements.
          </p>

          {/* ======================================================== */}
          {/* OPTIONAL REFERENCES                                     */}
          {/* ======================================================== */}

          <h2>References</h2>

          <div className="space-y-6 [&_a]:break-all">
            <p>
              Baars, W. (2006).{" "}
              <em>Project management handbook</em>. (Version 1.1) [PDF]. Data Archiving
              and Networked Services.
            </p>

            <p>
              Wedell, G. (2012, April 30).{" "}
              <em>What is project management? – Training video</em> [Video]. YouTube.{" "}
              <a
                href="https://www.youtube.com/watch?v=9LSnINglkQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/watch?v=9LSnINglkQA
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