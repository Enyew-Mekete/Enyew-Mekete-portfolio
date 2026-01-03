
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
