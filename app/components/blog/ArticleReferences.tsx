import { ArticleLink } from "./ArticleElements";

export type ArticleReference = {
  id: string;
  content: React.ReactNode;
  href?: string;
};

type ArticleReferencesProps = {
  references: ArticleReference[];
};

export function ArticleReferences({
  references,
}: ArticleReferencesProps) {
  return (
    <section
      className="
        mt-20

        border-t
        border-white/[0.055]

        pt-10
      "
    >
      {/* Header */}

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

            text-[0.45rem]
            font-semibold
            tracking-[0.16em]

            text-[#58d7ff]/50
          "
        >
          REF
        </span>

        <span
          className="
            h-px
            w-8

            bg-gradient-to-r
            from-[#58d7ff]/35
            to-transparent
          "
        />

        <h2
          className="
            font-mono

            text-[0.48rem]
            font-semibold
            uppercase
            tracking-[0.18em]

            text-white/25
          "
        >
          References
        </h2>
      </div>

      <ol
        className="
          space-y-6

          text-[0.78rem]
          leading-6

          text-white/28
        "
      >
        {references.map((reference) => (
          <li key={reference.id}>
            {reference.content}

            {reference.href && (
              <>
                {" "}

                <ArticleLink
                  href={reference.href}
                >
                  View source ↗
                </ArticleLink>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}