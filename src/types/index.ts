export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'web';
  year: string;
  overview: string;
  architecture: string;
  specialFeatures: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  bulletPoints: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer?: string;
  highlight?: boolean;
}
