import { Palette, Code, Layout, Smartphone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Frontend Development",
    description:
      "Building performant, responsive web applications using modern frameworks and best practices.",
    icon: Code,
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning user interfaces that prioritize user experience and accessibility.",
    icon: Palette,
  },
  {
    id: "3",
    title: "Web App Development",
    description:
      "Developing full-featured web applications with seamless functionality and clean architecture.",
    icon: Layout,
  },
  {
    id: "4",
    title: "Responsive Design",
    description:
      "Ensuring your application looks and works perfectly across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    id: "5",
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, efficiency, and excellent Core Web Vitals scores.",
    icon: Zap,
  },
];
