import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ashley Graham — Web Designer & Developer" },
    { name: "Web Designer & Developer", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
