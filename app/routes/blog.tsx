const posts = [
  {
    date: "JUN, 2026",
    title: "Biography & Career Goals",
    excerpt:
      "My background, goals, and path toward a career in full-stack web development.",
    tags: ["Career", "Education"],
    slug: "biography-and-career-goals",
  },
  {
    date: "JUN, 2026",
    title: "Software-Tracking Database Implementation Plan",
    excerpt:
      "A project management plan for developing a software-tracking database at the University of South Florida.",
    tags: ["Web Dev", "React"],
    slug: "project-management-plan",
  },
  {
    date: "APR, 2026",
    title: "What Web Development Looks Like in the Age of AI",
    excerpt:
      "AI isn't replacing developers — it's changing what we spend our time on. Here's how I'm adapting my workflow and staying relevant.",
    tags: ["AI", "Web Dev"],
    slug: "web-dev-and-ai",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[url(app/images/pink-bg.jpg)] bg-cover bg-fixed bg-bottom text-indigo-950 font-sans">

      <div className="max-w-6xl mx-auto px-8 pt-32 pb-24">
        <div className="flex gap-16 items-start">

          {/* Sticky left title */}
          <div className="hidden lg:block sticky top-32 w-64 shrink-0">
            <h1 className="text-[6rem] font-black leading-none tracking-tighter uppercase">
              BL<br />OG–<br />NEW<br />S
            </h1>
            <p className="text-lg text-black/50 mt-4 leading-snug">
              Latest posts<br />and updates
            </p>
          </div>

          {/* Posts */}
          <div className="flex-1 divide-y divide-black/15">
            {posts.map((post, i) => (
              <article key={i} className="py-16 flex gap-8 items-start">

                {/* placeholder image */}
                <div className="w-56 h-40 shrink-0 bg-black/10 rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#46292B]/30 to-[#73617B]/30" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-3">
                    {post.date}
                  </p>
                  <h2 className="text-3xl font-black leading-tight tracking-tight mb-4">
                    {post.title}
                  </h2>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold tracking-widest uppercase mb-6 hover:bg-[#46292B] transition-colors duration-200"
                  >
                    Read ↘
                  </a>
                  <p className="text-sm text-black/50 leading-relaxed max-w-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 border border-black/20 rounded-full text-black/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[#1a1a1a] text-white px-5 py-4 text-sm font-black tracking-widest">
          AG.
        </div>
        <a
          href="/"
          className="bg-[#A8D4DC] text-black px-6 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#959BB9] transition-colors duration-200"
        >
          ← Portfolio
        </a>
      </div>

    </main>
  );
}