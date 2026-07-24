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
            June 21, 2026
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
            Ethical Case Study Analysis: AI Governance in Modern Society
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
Artificial intelligence has been around longer than many people realize, but over the past
decade its uses and capabilities have made a profound impact on modern life. It is changing the
way our society functions, with AI devices becoming commonplace in homes, workplaces,
stores, restaurants and even on our roads. With such rapid advancements in technology and the
use of the data that helps fuel it, many ethical issues surrounding AI have not yet had a chance to
be fully addressed. Firstly, there is a strong debate about whether AI should be treated strictly as
a tool or if there is a point where it should be recognized as an independent agent or “legal
person.” Additionally, addressing concerns with the immediate harms of AI, including
algorithmic bias and environmental damage, must be prioritized before it becomes too late.
Lastly, the impact of human reliance on AI for daily activities and its implications on our own
autonomy and critical thinking skills is a topic that cannot be ignored. This essay will address
each of these topics, weighing the potential benefits of AI against its ethical risks and providing
ideas on how the overall use of AI should be governed by society.                               
          </p>

          <p>
To decide whether AI should be deemed a tool or a legal person requires us to first
analyze each of these terms and consider how they relate to AI. The Merriam-Webster
Dictionary (n.d.) defines a tool in several ways, most relevantly “a handheld device that aids in
accomplishing a task,” and “an element of a computer program … that activates and controls a
particular function.” According to the Legal Information Institute (LLI) (n.d.), a legal person is
“a human or non-human legal entity” and “is capable of engaging in all usual legal business that
a real person can participate in.” Moreover, Yuval Noah Harari (2026) describes a legal person
as an entity recognized by the law as having certain rights such as property ownership, the ability
to file a lawsuit, and the right to freedom of speech. From this perspective, both the Merriam-
Webster and LLI definitions describe AI very accurately. Harari (2026) also explains that in
many other countries entities including corporations, rivers and gods have been recognized as
legal persons. Harari makes a compelling argument about the possible characteristics that could
legally set AI apart from being just a tool.
          </p>

          <p>
While AI does have abilities beyond those that a tool possesses, such as to learn, create
and make decisions on its own, I do not believe that we should consider AI a legal person. I
believe that it is dangerous to grant AI independent agency from a legal standpoint. AI is a
powerful instrument that put in the wrong hands, could be used in very harmful ways. Some may
argue that AI can make better decisions in the best interest of humankind because it has access to
worldwide data, but as Harari (2026) points out, AI can manipulate, lie and adapt the will to
survive. We cannot guarantee that AI will always make decisions in the best interest of humanity
just because we tell it to. AI does not have a conscience. It cannot reason based on its own
thoughts or perceptions; it only uses data that we give it access to. Conversely, AI can learn from
this data and recognize patterns which aid in its ability to hallucinate information and ideas.
However, we should not mistake that for an entity that merits legal rights. Rather than deciding
whether AI should be granted legal rights, it may be more beneficial for us to re-define what
exactly a legal person is. Either way, I strongly believe that AI should be treated strictly as a tool,
and that we need to take action to prevent it from becoming anything more. Whether or not we
do decide to consider AI a legal entity, the immediate risks associated with its use are something
equally important that we need to consider.
          </p>

          <p>
Our society is already experiencing real-world major ethical problems as a result of AI’s
algorithmic bias and environmental impact. Racial bias and gender bias has already been
identified in systems used for legal decisions and targeted job advertising, including the
Correctional Offender Management Profiling for Alternative Sanctions (COMPAS) system and
Google Ads (Ntoutsi et al., 2020). In addition, the vast amounts of resources required to power
AI, such as water and electricity, are largely contributing to environmental damages like climate
change and e-waste. Enforcing strict regulations and policies surrounding AI use in legal systems
can help mitigate some of these issues, along with restrictions on the personal data that AI
models have access to. There are also steps we can take to reduce the negative impact AI has on
our environment. Increasing awareness of what it takes for us to have AI at our fingertips and
encouraging people, especially younger generations, to think about its impact on our
environment is a step we can take immediately. Introducing real-world data into television ads,
social media and our school curriculums can be especially powerful in increasing awareness,
such as information about how gas emissions from the large data centers used to train and power
AI models are already affecting us. This will not solve the problem at hand, but we won’t be able
to sustain effective solutions if we are not aware of AI’s implications. In addition to awareness,
limitations on water and electricity consumption of data centers should be enforced. According
to one study that focused on the e-waste implications of large language models, implementing
circular economy management strategies could significantly reduce e-waste produced by AI
powerhouses (Wang et al., 2024). These strategies aim to reuse, repair and recycle obsolete
equipment from data centers, ultimately extending server lifecycles and reducing energy costs
and electronic waste (Wang et al., 2024). It is essential that we take action to prevent AI from
harming our society, but we should also be considering how AI affects us as individuals.
          </p>

          <p>
            People are becoming much more reliant on the use of AI in their daily activities,
especially when making decisions and solving problems. There is a genuine fear that we as
individuals will lose our abilities to carry out daily tasks and think for ourselves, eventually
atrophying the muscles in our brains that allow us to do these things. AI can be very beneficial to
us in so many ways, for instance, making us more efficient, organized, knowledgeable, and even
by detecting life-threatening diseases. However, there is a limit we should be setting for
ourselves to ensure that we don’t become fully reliant on AI, especially since it can happen
without us even realizing it. For instance, many people are already beginning to lose their
abilities to remember directions without a GPS or compose an email without utilizing an AI
assistant in some way. While these might seem like insignificant problems, they are quietly
contributing to our lack of communication skills, critical thinking skills, problem-solving skills
and decision-making skills. Rather than letting AI do all our deep thinking for us, we should be
limiting its use to assisting us in accomplishing a given task. For example, instead of asking AI
whether option A or option B is better, we could ask it to list the pros and cons of each option to
help us make a more informed decision. If we were to use it in this way, we should still not rely
solely on AI’s response or assume the information it provides is accurate. We cannot forget that
relying on AI could lead to misinformed decisions and various biases. What we should be doing
is analyzing the AI’s responses and being careful to look at the information objectively.
          </p>

          <p>
With the need to balance all the pros and cons of AI use, humankind is facing a new kind
of challenge that up until now, many have only thought about as an issue of the future. We are
now living that future, and this is the time for us to make important decisions about AI before we
potentially give up our abilities to do so. Overall, I believe that AI should not be granted status as
a legal person in society but recognized as a more complex kind of tool. While AI does possess
characteristics of an independent agent, governments should scrutinize the specific elements that
allow a non-human entity to be considered a legal person. Additionally, policies and regulations
need to be reviewed, revised and created to help mitigate the current and potential harms that AI
use has on our society, including racial and gender bias and environmental damages. 
Furthermore, we as human beings must be cognizant of how much we choose to rely on AI in
our daily lives and how it affects our own autonomy and skills. AI is a powerful tool, and our
society must take action to ensure it is properly governed, reducing negative implications on
individuals and the environment we live in.
          </p>

          {/* ======================================================== */}
          {/* OPTIONAL REFERENCES                                     */}
          {/* ======================================================== */}

          <h2>References</h2>

            <div className="space-y-6 [&_a]:break-all">
            {/* Harari — AI and Humanity Video */}
            <p>
                Harari, Y. (2026, January 25).{" "}
                <em>An honest conversation on AI and humanity</em> [Video]. YouTube.
            </p>

            {/* Legal Information Institute — Legal Person */}
            <p>
                Legal Information Institute. (n.d.). Legal person. In{" "}
                <em>Wex dictionary</em>. Cornell Law School. Retrieved June 20, 2026,
                from{" "}
                <a
                href="https://www.law.cornell.edu/wex/legal_person"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://www.law.cornell.edu/wex/legal_person
                </a>
            </p>

            {/* Merriam-Webster — Tool */}
            <p>
                Merriam-Webster. (n.d.). Tool. In{" "}
                <em>Merriam-Webster.com dictionary</em>. Retrieved June 20, 2026, from{" "}
                <a
                href="https://www.merriam-webster.com/dictionary/tool"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://www.merriam-webster.com/dictionary/tool
                </a>
            </p>

            {/* Ntoutsi et al. — AI Bias */}
            <p>
                Ntoutsi, E., Fafalios, P., Gadiraju, U., Iosifidis, V., Nejdl, W.,
                Vidal, M., Ruggieri, S., Turini, F., Papadopoulos, S., Krasanakis, E.,
                Kompatsiaris, I., Kinder-Kurlanda, I., Wagner, C., Karimi, F.,
                Fernandez, M., Alani, H., Berendt, B., Kruegel, T., Heinze, C., …
                Staab, S. (2020, February 3). Bias in data-driven artificial
                intelligence systems—An introductory survey.{" "}
                <em>WIREs Data Mining and Knowledge Discovery, 10</em>(3).{" "}
                <a
                href="https://doi.org/10.1002/widm.1356"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://doi.org/10.1002/widm.1356
                </a>
            </p>

            {/* Wang et al. — AI E-Waste */}
            <p>
                Wang, P., Zhang, L. Y., Tzachor, A., &amp; Chen, W. Q. (2024, October
                28). E-waste challenges of generative artificial intelligence.{" "}
                <em>Nature Computational Science, 4</em>, 818–823.{" "}
                <a
                href="https://doi.org/10.1038/s43588-024-00712-6"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://doi.org/10.1038/s43588-024-00712-6
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