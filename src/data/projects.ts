export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Meal Nest",
    description:
      "Streamlined mess management platform enabling administrators to efficiently manage menus, schedules, and operations through an intuitive dashboard.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vite",
      "Lucide Icons",
    ],
    liveUrl: "https://mealnest.netlify.app/",
    githubUrl: "https://github.com/Mohammed-Thasleem/mess-management-app",
    imageUrl: "/MealNest.png",
  },
  {
    id: "2",
    title: "Vita Watch",
    description:
      "Smart health monitoring app that helps users track metrics, set goals, and visualize progress through secure, interactive dashboards.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Ant Design",
      "Chart.js",
      "React Router",
      "Vite",
    ],
    liveUrl: "https://vitawatch.netlify.app/",
    githubUrl: "https://github.com/Mohammed-Thasleem/health-monitor-app",
    imageUrl: "/VitaWatch.png",
  },
  {
    id: "3",
    title: "Emergency Medic",
    description:
      "Real-time emergency response platform empowering event organizers and medical teams with role-based coordination and live incident tracking.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Radix UI",
      "Vite",
    ],
    liveUrl: "https://emergency-medic.netlify.app/",
    githubUrl: "https://github.com/Mohammed-Thasleem/emergency-medical-service",
    imageUrl: "/EmergencyMedic.png",
  },
  {
    id: "4",
    title: "NA Tours",
    description:
      "Modern tour discovery landing page delivering immersive experiences and showcasing adventure packages with high-performance, responsive design.",
    techStack: ["HTML5", "SCSS (Sass)", "CSS3", "Node.js", "PostCSS"],
    liveUrl: "https://natours-trip.netlify.app/",
    githubUrl: "https://github.com/Mohammed-Thasleem/Natours",
    imageUrl: "/natours.png",
  },
  // {
  //   id: "5",
  //   title: "Design System",
  //   description:
  //     "Comprehensive design system with reusable components, documentation, and accessibility guidelines.",
  //   techStack: ["React", "Storybook", "TypeScript", "Figma"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   imageUrl: "/placeholder.svg",
  // },
  // {
  //   id: "6",
  //   title: "Weather Application",
  //   description:
  //     "Beautiful weather app with location-based forecasts, animated backgrounds, and detailed metrics.",
  //   techStack: ["React", "OpenWeather API", "CSS Animations", "Vite"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   imageUrl: "/placeholder.svg",
  // },
];
