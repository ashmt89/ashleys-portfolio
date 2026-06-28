export default function BiographyAndCareerGoals() {
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
          Biography and Career Goals
        </h1>
        <p className="text-slate-500 text-lg mb-8">
          An overview of my background, education, skills, and goals as I transition into a career in web development.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #334155", marginBottom: "32px" }} />

        {/* Body */}
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          <p>
            My name is Ashley Graham. I grew up in the small town of Bristol, RI, moved to Tampa, FL when I was 25, and live here with my husband Jesse and our two huskies, Maverick and Jackson. My background is in banking and finance, but my plans are to transition into a web development career where I can put my artistic side to good use. I will be graduating this summer with a bachelor's degree in information science and a concentration in web development technologies. My passion lies in front end web development and design, but I am also learning back-end development so that I can become a well-rounded full-stack developer. What I love about full-stack development is that the front-end design allows me to be creative, while the back end is where I can use my technical skills to bring my visions to life, also opening doors for a wider range of career opportunities.
          </p>

          <p>
            Throughout my time at USF, I've learned a wide range of topics that support my path to web development. Courses in networks and communication and programming helped me understand the foundation of what makes our technology work, and classes about information architecture, information behavior and interaction design taught me how to build web applications that are not only functional but also provide a great user experience. I learned how to work with databases using MySQL, along with programming languages including C++, Java, SQL and PHP. Although I was already familiar with HTML and CSS, these classes helped me develop an even deeper understanding and home in on those skills through comprehensive web projects.
          </p>

          <p>
            In addition to what I've learned from my classes, I'm also well versed in many other skills and tools that I've learned through personal experience. Visual Studio Code and GitHub are the primary environments I use to build and manage projects. I'm also familiar with Next JS, React, Astro and Tailwind CSS, and am skilled at incorporating external UI component libraries and content management systems into projects, like Shadcn and Sanity. I also use deployment and hosting platforms including Netlify and Vercel, and file management tools including Cyberduck and MAMP. Additionally, I've had the opportunity to build and launch websites for friends:{" "}
            <a href="https://www.fluentinnovations.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">https://www.fluentinnovations.com/</a>,{" "}
            <a href="https://www.sunnydark.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">https://www.sunnydark.com/</a>, and{" "}
            <a href="https://thefaerywisemermaid.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">https://thefaerywisemermaid.vercel.app/</a>. (The second two are still in progress as they are brand new business endeavors.)
          </p>

          <p>
            My past career experience in customer service along with my coursework at USF has given me the soft skills needed to be a successful developer. I have excellent communication and customer-service skills, essential for effective coordination with development teams and interactions with users. I'm also detail-oriented and possess important problem-solving skills which are necessary for error fixing and debugging. Additionally, I'm open to getting certifications that can improve my knowledge and skills and may consider pursuing my master's degree in the future to help with potential career advancement.
          </p>

          <p>
            Surprisingly, information science makes up only 6% of the computer and information technology field's needs compared with computer science, which makes up 61%. Nevertheless, the Bureau of Labor Statistics states web development employment is growing much faster than the average for all occupations, with a projected growth of 7% over the next decade (U.S. Bureau of Labor Statistics, 2025). To put this in perspective, it is estimated that there will be about 14,500 openings for web developers and digital designers each year through 2034 (U.S. Bureau of Labor Statistics, 2025). This is a promising outlook for my career goals, especially considering the average salary and opportunities for growth. According to sources such as the Occupational Outlook Handbook (2025) and Glassdoor (n.d.), the median salary is approximately $98,000 and ranges from $75,000–$125,000 in Tampa. Due to the wide range of skills required, a position in web development can also open doors for other careers, such as project management and software development.
          </p>

          <p>
            Many people think web development is a dying field now that AI has become so prevalent, but many others can see the potential for the field to grow and evolve. As I once read on Coursera.org (n.d.), "web development is being reborn," which I completely agree with. My goal is not to allow AI to take over my capabilities, but to use it as a tool to enhance my skills and efficiency. Although I will most likely work with a team of developers, I really want to be able to fully understand the whole process and have that versatility in my coding skills. Having the ability to create web applications from start to finish is something I'd like to keep in my back pocket no matter what specialty I move into. My main goal is to be able to utilize my creative and technical skills to combine aesthetically pleasing visual appearances with smooth functionality, creating the best user experiences possible.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #334155", marginBottom: "32px" }} />

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold text-slate-100 mb-3">References</h2>
            <ul className="space-y-4 text-slate-400 text-sm pl-8 -indent-8">
              <li>
                Coursera. (2026, May 28). <em>Will AI replace programmers?</em>{" "}
                <a href="https://www.coursera.org/articles/will-ai-replace-programmers" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline break-all">
                  https://www.coursera.org/articles/will-ai-replace-programmers
                </a>
              </li>
              <li>
                Glassdoor. (n.d.). <em>How much does a web developer make in Tampa, FL?</em>{" "}
                <a href="https://www.glassdoor.com/Salaries/tampa-fl-us-web-developer-salary-SRCH_IL.0,11_IC1154429_KO12,25.htm" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline break-all">
                  https://www.glassdoor.com/Salaries/tampa-fl-us-web-developer-salary-SRCH_IL.0,11_IC1154429_KO12,25.htm
                </a>
              </li>
              <li>
                Bureau of Labor Statistics. (2025, August 28). Field of degree: Computer and information technology. In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
                <a href="https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline break-all">
                  https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm
                </a>
              </li>
              <li>
                Bureau of Labor Statistics. (2025, August 28). How to become a web developer or digital designer. In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
                <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-4" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline break-all">
                  https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-4
                </a>
              </li>
              <li>
                Bureau of Labor Statistics. (2025, August 28). Web developers and digital designers. In <em>Occupational outlook handbook</em>. U.S. Department of Labor.{" "}
                <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline break-all">
                  https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}