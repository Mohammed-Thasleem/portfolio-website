import { Code2, Palette, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'SCSS' },
    ],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    skills: [
      { name: 'Figma' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Design Systems' },
      { name: 'User Research' },
      { name: 'Accessibility' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git' },
      { name: 'Vite' },
      { name: 'Firebase' },
      { name: 'REST APIs' },
      { name: 'VS Code' },
      { name: 'Storybook' },
    ],
  },
];
