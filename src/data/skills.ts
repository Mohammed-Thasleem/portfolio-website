import { Code2, Palette, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "SASS" },
      { name: "Redux" },
      { name: "Bootstrap" },
      { name: "Ant Design" },
      { name: "CSS-in-JS" },
    ],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: [
      { name: "Figma" },
      { name: "Wireframing" },
      { name: "Prototyping" },
      { name: "Design Systems" },
      { name: "Design Principles" },
      { name: "User Research" },
      { name: "Accessibility" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vite" },
      { name: "Netlify" },
      { name: "Firebase" },
      { name: "REST APIs" },
      { name: "Storybook" },
      { name: "Webpack" },
      { name: "Jest" },
      { name: "Playwright" },
      { name: "SonarQube" },
      { name: "WireMock" },
    ],
  },
];
