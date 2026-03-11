export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}

export interface NewsItem {
  date: string;
  content: string;
  link?: string;
  linkText?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  socials: SocialLink[];
  experience: Job[];
  projects: Project[];
  skills: SkillCategory[];
  news: NewsItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}