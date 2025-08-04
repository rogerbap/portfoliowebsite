import { Code, Database, Cloud, Smartphone, Server, Monitor } from 'lucide-react';
import React from 'react';

export const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Tech Stack' },
  { id: 'proficiency', title: 'Proficiency' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' }
];

export const techStack = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Modern, responsive user interfaces',
    skills: ['React.js', 'Next.js', 'TypeScript', 'CSS3', 'Three.js', 'Vue.js']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side architecture',
    skills: ['C#','Node.js', 'Python', 'Express.js', 'PHP', 'GraphQL', 'REST APIs']
  },
  {
    icon: Database,
    title: 'Database & Storage',
    description: 'Efficient data management solutions',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'MSSQL', 'NoSQL', 'AzureCosmosDB']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Modern deployment and infrastructure',
    skills: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform', 'Kubernetes']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile solutions',
    skills: ['React Native', 'Expo', 'Flutter', 'PWA', 'Ionic', 'Capacitor']
  },
  {
    icon: Monitor,
    title: 'Tools & Workflow',
    description: 'Professional development environment',
    skills: ['Git','Bash','PowerShell', 'VS Code', 'Figma', 'Postman', 'Jira', 'ServiceNow']
  },

];

export const proficiencyData = [
  { name: 'JavaScript', level: 95, category: 'frontend', hot: true },
  { name: 'TypeScript', level: 90, category: 'frontend', hot: true },
  { name: 'React.js', level: 95, category: 'frontend', hot: true },
  { name: 'Next.js', level: 88, category: 'frontend', hot: true },
  { name: 'Vue.js', level: 82, category: 'frontend', hot: true },
  { name: 'HTML5/CSS3', level: 98, category: 'frontend', hot: true },
  { name: 'SCSS/Tailwind', level: 92, category: 'frontend', hot: true },
  { name: 'Three.js', level: 78, category: 'frontend', hot: true },
  { name: 'Node.js', level: 90, category: 'backend', hot: true },
  { name: 'C#', level: 83, category: 'backend', hot: true },
  { name: 'Python', level: 91, category: 'backend', hot: true },
  { name: 'PHP', level: 89, category: 'backend', hot: true },
  { name: 'PostgreSQL', level: 85, category: 'database', hot: true },
  { name: 'MongoDB', level: 82, category: 'database', hot: true },
  { name: 'AWS', level: 80, category: 'cloud', hot: true },
  { name: 'Docker', level: 83, category: 'cloud', hot: true },
  { name: 'Kubernetes', level: 79, category: 'cloud', hot: true },
];

export const projects = [
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'Full-stack e-commerce solution with AI recommendations, real-time chat, and advanced analytics dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Stripe', 'Socket.io'],
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    featured: true
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'Slack-inspired team collaboration platform with real-time messaging, file sharing, and video calls.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC', 'AWS S3'],
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    featured: true
  },
  {
    title: 'Cryptocurrency Trading Dashboard',
    description: 'Advanced trading interface with real-time market data, portfolio tracking, and automated trading strategies.',
    tech: ['React', 'Python', 'FastAPI', 'WebSocket', 'Redis', 'TradingView'],
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
    featured: true
  },
  {
    title: 'Task Management System',
    description: 'Modern project management app with team collaboration, time tracking, and automated reporting.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js', 'Socket.io'],
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop'
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive dashboard for social media performance tracking and audience insights.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Twitter API'],
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
  },
  {
    title: 'Microservices API Gateway',
    description: 'Scalable API gateway with authentication, rate limiting, and service orchestration.',
    tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'JWT', 'GraphQL'],
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop'
  }
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
];