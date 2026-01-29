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
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with seamless checkout experience, real-time inventory, and beautiful product galleries.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Intuitive task management application with drag-and-drop, team collaboration, and productivity analytics.',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
  {
    id: '3',
    title: 'Portfolio Dashboard',
    description: 'Real-time portfolio tracker with interactive charts, performance metrics, and market insights.',
    techStack: ['TypeScript', 'D3.js', 'REST APIs', 'SCSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
  {
    id: '4',
    title: 'Social Media App',
    description: 'Feature-rich social platform with real-time messaging, story features, and content discovery.',
    techStack: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
  {
    id: '5',
    title: 'Design System',
    description: 'Comprehensive design system with reusable components, documentation, and accessibility guidelines.',
    techStack: ['React', 'Storybook', 'TypeScript', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
  {
    id: '6',
    title: 'Weather Application',
    description: 'Beautiful weather app with location-based forecasts, animated backgrounds, and detailed metrics.',
    techStack: ['React', 'OpenWeather API', 'CSS Animations', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/placeholder.svg',
  },
];
