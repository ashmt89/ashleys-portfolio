import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/biography-and-career-goals", "routes/blog/biography-and-career-goals.tsx"),
    route("blog/project-management-plan", "routes/blog/project-management-plan.tsx"),
] satisfies RouteConfig;
