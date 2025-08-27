import { Code, Database, Cloud, Smartphone, Server, Monitor, ExternalLink } from 'lucide-react';
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
    skills: ['C#', 'Node.js', 'Python', 'Express.js', 'PHP', 'GraphQL', 'REST APIs']
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
    skills: ['Git', 'Bash', 'PowerShell', 'VS Code', 'Figma', 'Postman', 'Jira', 'ServiceNow']
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
    title: 'Healthcare API Integration Dashboard',
    description: "Enterprise healthcare interoperability platform demonstrating FHIR R4 and HL7 v2.x integration with Epic, Cerner, and Azure Health Data Services. Features real-time API monitoring, patient resource validation, and HL7 message transformation with HIPAA-compliant architecture.",
    tech: ['Python', 'Flask', 'JavaScript', 'Chart.js', 'FHIR R4', 'HL7 v2.x', 'Docker', 'Azure', 'OAuth 2.0'],
    category: 'fullstack',
    image: "assets/healthcareapidashboard.png",
    featured: true,
    liveUrl: 'https://healthcare-api-integration.onrender.com/',
    codeUrl: 'https://github.com/rogerbap/healthcare-api-integration/blob/main/README.md'
  },
  {
    title: 'Secure Patient Portal with Risk Assessment',
    description: "Enterprise healthcare security platform demonstrating advanced authentication, real-time risk assessment, and role-based access control. Features behavioral analytics, geographic threat detection, device fingerprinting, and HIPAA-compliant audit logging with JWT authentication and session management.",
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Sequelize', 'bcrypt', 'JavaScript', 'CSS3'],
    category: 'fullstack',
    image: "assets/healthcare-patient-portal.png",
    featured: true,
    liveUrl: 'https://secure-patient-portal.onrender.com/',
    codeUrl: 'https://github.com/rogerbap/secure-patient-portal/blob/main/README.md'
  },
  {
    title: 'Deploy the Cat - Real-time CI/CD Game',
    description: "Interactive real-time game demonstrating CI/CD pipeline concepts with WebSocket communication. Players race to deploy their pipeline before a mischievous cat sabotages components. Features drag-and-drop interface, progressive difficulty scaling, emergency fix mechanics, real-time deployment simulation, and microservices architecture with separate frontend/backend deployment.",
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'Express.js', 'Vite', 'CSS3', 'WebSocket', 'Railway', 'Vercel'],
    category: 'fullstack',
    image: "assets/deploy-the-cat.png",
    featured: true,
    liveUrl: 'https://deploy-the-cat.vercel.app/',
    codeUrl: 'https://github.com/rogerbap/deploy-the-cat/blob/main/client/README.md'
  },
  {
    title: 'CodeQuest - Interactive Code Debugging Game',
    description: "Full-stack educational game platform where developers practice debugging skills through interactive coding challenges. Features two game modes: Career Mode with progressive learning paths and Quick Fire Mode with time-based challenges. Includes user authentication, progress tracking, achievement systems, real-time code execution with safety validation, and comprehensive leaderboards. Built with secure JWT authentication and MongoDB Atlas for persistent user data.",
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS', 'Axios', 'bcryptjs', 'Lucide React', 'Express Validator'],
    category: 'fullstack',
    image: 'assets/codequest.png',
    featured: true,
    liveUrl: 'https://codequestgame.vercel.app/',
    codeUrl: 'https://github.com/rogerbap/codequest'
  },
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