import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("essays/project-management-plan", "routes/essays/project-management-plan.tsx"),
    route("essays/biography-and-career-goals", "routes/essays/biography-and-career-goals.tsx"),
] satisfies RouteConfig;
