import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  place: string;
  date: string;
  achievements?: string[];
}

export interface ExperienceSection {
  title: string;
  icon: IconType;
  items: ExperienceItem[];
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
}
