import {
  ArticleBreak,
  ArticleCallout,
  ArticleLink,
  ArticleOpening,
} from "~/components/blog/ArticleElements";

import { ArticleLayout } from "~/components/blog/ArticleLayout";

import {
  ArticleReferences,
  type ArticleReference,
} from "~/components/blog/ArticleReferences";

/* -------------------------------------------------------------------------- */
/*                                REFERENCES                                  */
/* -------------------------------------------------------------------------- */

const references: ArticleReference[] = [
  {
    id: "coursera-ai",

    content: (
      <>
        Coursera. (2026, May 28).{" "}
        <em>
          Will AI replace programmers?
        </em>
      </>
    ),

    href:
      "https://www.coursera.org/articles/will-ai-replace-programmers",
  },

  {
    id: "glassdoor-tampa",

    content: (
      <>
        Glassdoor. (n.d.).{" "}
        <em>
          How much does a web developer make
          in Tampa, FL?
        </em>
      </>
    ),

    href:
      "https://www.glassdoor.com/Salaries/tampa-fl-us-web-developer-salary-SRCH_IL.0,11_IC1154429_KO12,25.htm",
  },

  {
    id: "bls-degree",

    content: (
      <>
        Bureau of Labor Statistics.
        (2025, August 28). Field of degree:
        Computer and information technology.
        In{" "}
        <em>
          Occupational outlook handbook
        </em>
        . U.S. Department of Labor.
      </>
    ),

    href:
      "https://www.bls.gov/ooh/field-of-degree/computer-and-information/computer-and-information-technology-field-of-degree.htm",
  },

  {
    id: "bls-become-developer",

    content: (
      <>
        Bureau of Labor Statistics.
        (2025, August 28). How to become a
        web developer or digital designer.
        In{" "}
        <em>
          Occupational outlook handbook
        </em>
        . U.S. Department of Labor.
      </>
    ),

    href:
      "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-4",
  },

  {
    id: "bls-web-developers",

    content: (
      <>
        Bureau of Labor Statistics.
        (2025, August 28). Web developers
        and digital designers. In{" "}
        <em>
          Occupational outlook handbook
        </em>
        . U.S. Department of Labor.
      </>
    ),

    href:
      "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function BiographyAndCareerGoals() {
  return (
    <ArticleLayout
      slug="biography-and-career-goals"
    >
      <ArticleOpening
        dropCap="M"
        accent="pink"
      >
        y name is Ashley Graham. I grew up
        in the small town of Bristol, RI...
      </ArticleOpening>

      <p>
        Throughout my time at USF...
      </p>

      <ArticleBreak />

      <p>
        In addition to what I've learned...
      </p>

      <ArticleCallout accent="pink">
        Creative thinking and technical
        problem-solving don't have to live
        on opposite sides of the process.
      </ArticleCallout>

      <ArticleReferences
        references={references}
      />
    </ArticleLayout>
  );
}