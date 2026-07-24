import type { BlogAccent } from "~/components/blog/blogTheme";

export type BlogPost = {
  slug: string;

  number: string;

  date: string;

  dateISO: string;

  readTime: string;

  title: string;

  excerpt: string;

  categories: string[];

  accent: BlogAccent;

  featured?: boolean;

  image?: string;

  imageAlt?: string;
};

/* -------------------------------------------------------------------------- */
/*                                  POSTS                                     */
/* -------------------------------------------------------------------------- */

export const blogPosts: BlogPost[] = [
  {
    slug: "biography-and-career-goals",

    number: "01",

    date: "June 14, 2026",

    dateISO: "2026-06-14",

    readTime: "8 min read",

    title: "Biography & Career Goals",

    excerpt:
      "My background, education, skills, and goals as I transition toward a career in full-stack web development.",

    categories: [
      "Career",
      "Education",
    ],

    accent: "pink",

    featured: false,

    // Add these later if you have article artwork:
    // image: "/images/blog/biography.jpg",
    // imageAlt: "Description of image",
  },

  {
    slug: "project-management-plan",

    number: "02",

    date: "June 20, 2026",

    dateISO: "2026-06-20",

    readTime: "10 min read",

    title:
      "Software-Tracking Database Implementation Plan",

    excerpt:
      "A project management plan for developing and implementing a software-tracking database at the University of South Florida.",

    categories: [
      "Project Management",
      "Database",
    ],

    accent: "cyan",

    featured: false,
  },

  {
    slug: "web-dev-and-ai",

    number: "03",

    date: "April 28, 2026",

    dateISO: "2026-04-28",

    readTime: "7 min read",

    title:
      "What Web Development Looks Like in the Age of AI",

    excerpt:
      "AI isn't replacing developers — it's changing how we work. A look at how web development is evolving and how I'm adapting.",

    categories: [
      "AI",
      "Web Dev",
    ],

    accent: "lime",

    featured: true,
  },
];

/* -------------------------------------------------------------------------- */
/*                              POST HELPERS                                  */
/* -------------------------------------------------------------------------- */

export function getBlogPost(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (post) => post.slug === slug
  );
}

/* -------------------------------------------------------------------------- */

export function getBlogPostIndex(
  slug: string
): number {
  return blogPosts.findIndex(
    (post) => post.slug === slug
  );
}

/* -------------------------------------------------------------------------- */

export function getAdjacentBlogPosts(
  slug: string
) {
  const index = getBlogPostIndex(slug);

  if (index === -1) {
    return {
      previousPost: undefined,
      nextPost: undefined,
    };
  }

  return {
    previousPost:
      index > 0
        ? blogPosts[index - 1]
        : undefined,

    nextPost:
      index < blogPosts.length - 1
        ? blogPosts[index + 1]
        : undefined,
  };
}