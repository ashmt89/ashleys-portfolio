export default function ProjectManagementPlan() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-slate-800/60 backdrop-blur-sm bg-slate-950/80">
        <a
          href="/"
          className="text-sm font-semibold tracking-widest text-indigo-400 uppercase hover:text-indigo-300 transition-colors duration-200"
        >
          ← Portfolio
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">

        {/* Header */}
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
          June 14, 2026
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-8">
          Database Implementation Plan
        </h1>
        <p className="text-slate-500 text-lg mb-8">A project management plan for developing a software-tracking database at the University of South Florida.</p>

        <hr style={{ border: "none", borderTop: "1px solid #334155", marginBottom: "32px" }} />

        {/* Body */}
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          <p>
            I have been tasked with leading a team in the development of a software-tracking
            database for the University of South Florida. The purpose of this project is to
            create a system to track and maintain all the software that the university owns,
            licenses, rents, and manages to ensure compliance with software tracking regulations.
            This database will provide a centralized place for records including the software
            types, software developers, software versions, types of licensing agreements,
            departments that use the software, computers the software is installed on, software
            installation dates and other related information. I will be designing an
            implementation plan using the six phases outlined in the{" "}
            <em>Project Management Handbook</em> by Wouter Baars (2006).
          </p>

          {[
            {
              stage: "Stage 1",
              title: "Initiation Phase",
              body: `The first stage, the initiation phase, is where I will outline the scope of the project. What we need is a user-friendly database system that can be accessed by authorized personnel, can be maintained and updated regularly, and can generate reports. This database is needed because all educational institutions are required to track all software used throughout the institution, so it is essential that we maintain the information with accuracy and keep it up to date on a regular basis. This database will hold a lot of information, so I'll need to make sure that we have the appropriate technology available. I will set up a meeting with stakeholders to gain the proper approvals, including the IT management team, college deans, financial directors, and those in charge of distributing software and equipment to employees. I will also recruit a team of program designers, developers and IT representatives with the help of college leadership.

One common problem with project plans is that they often expand beyond the scope of the project (Wedell, 2012). To prevent this, I'll need to make sure I gain agreement from all stakeholders that this database will only house current information. I will determine the project's feasibility by discussing what resources and budget we have available. Any potential risks will also be assessed during my initial meeting, and I plan to address future issues by setting up a communication system that allows each team member to provide status updates and alerts.`,
            },
            {
              stage: "Stage 2",
              title: "Definition Phase",
              body: `This is where I will collect details regarding what will be done to put this project in motion. Activities will include gathering detailed tracking requirements from our compliance office, determining how information will be entered, updated and maintained by staff, and assessing our existing resources and technology platforms. I will enlist the help of our IT department to determine the best database platform and methods for data entry and maintenance. I will also meet with financial representatives from each college to discuss the best way to gather the software-related financial data that we need to report, and with department heads to designate personnel for data entry and maintenance of records.`,
            },
            {
              stage: "Stage 3",
              title: "Design Phase",
              body: `During this phase, I will map out how each part of the implementation process will work. This will consist of creating flow charts to illustrate process workflows, site maps to categorize software information, organizational charts to establish employee roles, and prototypes of the structure, layout and design of the database. I will also utilize tracking software to define a list of the required fields and reporting requirements that can be shared with IT to develop the necessary fields for the data. Once the designs are established, I will meet with the original team of stakeholders to obtain approval of the designs and feedback.`,
            },
            {
              stage: "Stage 4",
              title: "Development Phase",
              body: `The next step is the implementation process, which will include a detailed schedule and timeline for completion. I will use MS Project to put this plan together so that I can easily make updates, track progress and share it with my team. To help me establish a feasible timeline, I will utilize the critical path method (CPM) to determine potential dates for earliest and latest project completion, as well as what tasks need to be completed before the next can be started. I will also schedule dates for testing, factoring in potential delays such as staff absences, vacations or unforeseen technological issues.`,
            },
            {
              stage: "Stage 5",
              title: "Implementation Phase",
              body: `Once the planning and preparation is complete, we will begin the implementation phase. At this stage, the IT and development team will build the database and configure our systems. Once this is complete, IT will test the database, address any issues and repeat testing until we have a smooth workflow. Once testing is complete, IT will distribute access to designated personnel in each college. Communication with the IT and development team leads is essential during this stage. Throughout this phase, team leads will update progress dashboards that will allow me to obtain status reports to share with leadership.`,
            },
            {
              stage: "Stage 6",
              title: "Follow-up Phase",
              body: `The final phase will consist of maintenance and a review of the completed project. Deliverables will include meeting with department heads, conducting trainings on how to use the database and informing all employees of what information we will need to track. The development team will also construct a guide including step-by-step directions and visuals for users to refer to. At this point, IT will generate a report to verify that the database is accurately capturing information. Once this is complete, I will hold a final meeting with team leads to discuss what went well and what we could improve on.`,
            },
          ].map(({ stage, title, body }) => (
            <div key={stage}>
              <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-1">
                {stage}
              </p>
              <h2 className="text-xl font-semibold text-slate-100 mb-3">{title}</h2>
              {body.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          ))}

          <p>
            Following the six project management phases is essential to ensuring the project's
            success. Careful planning and consistent communication are also key to working with
            a team, especially when there are so many aspects involved. Implementing a database
            system across the university is a very large task, but the result will greatly
            improve our software tracking and maintenance capabilities, allowing us to maintain
            compliance with institutional reporting requirements.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #334155", marginBottom: "32px" }} />

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold text-slate-100 mb-3">References</h2>
            <ul className="space-y-2 text-slate-400 text-sm pl-8 -indent-8">
              <li>
                Baars, W. (2006). <em>Project management handbook</em> (Version 1.1) [PDF].
                Data Archiving and Networked Services.
              </li>
              <li>
                Wedell, G. (2012, April 30). <em>What is project management? – Training video</em>{" "}
                [Video]. YouTube.{" "}
                <a
                  href="https://www.youtube.com/watch?v=9LSnINglkQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  https://www.youtube.com/watch?v=9LSnINglkQA
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}