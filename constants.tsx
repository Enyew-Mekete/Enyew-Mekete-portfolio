
import React from 'react';
import { Project, Experience, Education, NavItem, Certificate, Award } from './types';
import { IMAGES } from './assets/images';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
  { label: 'My Company', href: 'https://enyew-mekete.github.io/en-tech-s.c/' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MySQL. Features include real-time inventory tracking and secure payment gateway integration.',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    image: IMAGES.projects.ecommerce,
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'AI Task Planner',
    description: 'An intelligent task management application that uses Gemini AI to categorize and prioritize tasks based on natural language descriptions.',
    tags: ['Next.js', 'Gemini API', 'Tailwind', 'PostgreSQL'],
    image: IMAGES.projects.aiPlanner,
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Real-time Chat App',
    description: 'Scalable messaging application supporting direct messages, group chats, and file sharing using Socket.io and Redis.',
    tags: ['TypeScript', 'Socket.io', 'Redis', 'Express'],
    image: IMAGES.projects.chatApp,
    link: '#',
    github: '#'
  }
];

export const SKILLS_DATA = {
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Full Stack Developer',
    company: 'En-Tech S.C.',
    period: '2023 - Present',
    description: [
      'Led a Team of 5 Developers in rebuilding the core customer Dashboard, improving load times by 40%.',
      'Architected microservices using Node.js and Express to handle high-traffic API requests.',
      'Implemented CI/CD pipelines that reduced deployment errors by 25%.'
    ]
  },
  {
    id: 'e2',
    role: 'Frontend Developer',
    company: 'Web Solutions Co.',
    period: '2019 - 2021',
    description: [
      'Developed responsive user interfaces using React and Tailwind CSS.',
      'Collaborated with UI/UX designers to translate Figma prototypes into functional code.',
      'Maintained legacy codebases and successfully migrated them to modern frameworks.'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Science in Computer Science',
    institution: 'InProgress...',
    year: 'Future',
    description: 'Specialized in Software Engineering and Distributed Systems.'
  },
  {
    id: 'edu2',
    degree: 'Bachelors of Computer Science',
    institution: 'Bonga University',
    year: '2025 G.C',
    description: 'Graduated with Honors. Core focus on Software Engineering, Database Administration, System Administration, Network Administration, Distributed Systems, and Algorithms.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    name: 'Database Management System',
    issuer: 'Great Learning Academy',
    date: 'January to April 2024',
    image: IMAGES.certificates.dbms
  },
  {
    id: 'c2',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'January 1 to April 28, 2024',
    image: IMAGES.certificates.cybersecurity
  },
  {
    id: 'c3',
    name: 'Network Addressing and Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    date: 'January 2 to April 21, 2024',
    image: IMAGES.certificates.troubleshooting
  },
  {
    id: 'c4',
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'January 3 to April 20, 2024',
    image: IMAGES.certificates.networking
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'a1',
    title: 'Gold Medal',
    issuer: 'University Honors Board',
    year: 'June 2025 G.C',
    image: IMAGES.awards.goldMedal
  },
  {
    id: 'a2',
    title: 'Academic Achievement Certificate',
    issuer: 'Faculty of Engineering & Technology',
    year: 'June 2025 G.C',
    image: IMAGES.awards.achievement
  }
];

export const Icons = {
  Moon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  ),
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Telegram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  ),
  ArrowUpRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
  )
};
