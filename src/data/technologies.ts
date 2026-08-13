import { Atom, Box, Code, Database, FileCode2, Palette, Server, type LucideIcon } from "lucide-react";

export interface Technology {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const technologies: Technology[] = [
  { name: "React", icon: Code, color: "text-cyan-400" },
  { name: "TypeScript", icon: FileCode2, color: "text-cyan-400" },
  { name: "React", icon: Atom, color: "text-cyan-300" },
  { name: "Vite", icon: Server, color: "text-emerald-400" },
  { name: "Tailwind", icon: Palette, color: "text-teal-400" },
  { name: "Java", icon: Code, color: "text-red-400" },
  { name: "Spring Boot", icon: Server, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { name: "Docker", icon: Box, color: "text-blue-500" },
];
