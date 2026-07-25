import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/biography-and-career-goals", "routes/blog/biography-and-career-goals.tsx"),
    route("blog/project-management-plan", "routes/blog/project-management-plan.tsx"),
    route("blog/ethical-case-study", "routes/blog/ethical-case-study.tsx"),
    route("blog/bsis-program-review", "routes/blog/bsis-program-review.tsx"),
    route("blog/information-policy-technology", "routes/blog/information-policy-technology.tsx"),
] satisfies RouteConfig;
