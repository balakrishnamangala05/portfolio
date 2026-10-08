import whatsappImg from './assets/wca-ml project.png';
import nlpImg from './assets/nlp-examination.png';
import safeMdImg from './assets/safe-md.png';
import multiplexImg from './assets/multiplex-booking.png';

export const PROFILE = {
  name: 'Balakrishna Mangala',
  firstName: 'Balakrishna',
  lastName: 'Mangala',
  role: 'AI Engineer',
  company: 'Securiti AI',
  email: 'balakrish.m16@gmail.com',
  linkedin: 'https://www.linkedin.com/in/balakrishnamangala/',
  github: 'https://github.com/balakrishnamangala05',
  resume: '/Balakrishna_Mangala_AI_Engineer_Resume.pdf',
  location: 'United States',
};

export interface Job {
  id: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

export const JOBS: Job[] = [
  {
    id: 'securiti',
    company: 'Securiti AI',
    role: 'AI Engineer',
    period: 'Jul 2025 - Present',
    location: 'United States',
    current: true,
    bullets: [
      'Build Python FastAPI services that call OpenAI GPT and Gemini behind one interface with provider failover, powering AI-driven data governance workflows.',
      'Develop RAG pipelines with LangChain, embeddings, and policy-aware retrieval so answers stay grounded in sensitive enterprise data.',
      'Automate infrastructure health checks and configuration validation with Python and Ansible across 50+ enterprise systems.',
      'Ship services through CI/CD with Docker and GitHub Actions across AWS and Azure environments, working directly with customer teams.',
    ],
    stack: ['Python', 'FastAPI', 'LLMs', 'RAG', 'LangChain', 'Ansible', 'AWS', 'Azure'],
  },
  {
    id: 'marlabs',
    company: 'Marlabs Center of Excellence',
    role: 'Software Development Engineer',
    period: 'Oct 2024 - Jun 2025',
    location: 'United States',
    bullets: [
      'Built FastAPI backend services and React with TypeScript dashboards used by client teams to track operations.',
      'Automated log and health checks in Python and turned recurring production issues into runbooks the support team could follow.',
      'Worked with client stakeholders to scope requirements, debug live issues, and ship fixes through Azure CI/CD pipelines.',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'Python', 'Azure', 'CI/CD'],
  },
  {
    id: 'capgemini',
    company: 'Capgemini Engineering',
    client: "Sainsbury's",
    role: 'Associate-II Software Engineer',
    period: 'Aug 2022 - Jun 2023',
    location: 'Hyderabad, India',
    bullets: [
      "Built backend API services with Django REST Framework that unified supplier, logistics, and inventory data for Sainsbury's UK store network.",
      'Cut a critical supply chain report from 4 hours to under 2 by rewriting SQL Server stored procedures with better joins and covering indexes.',
      'Wrote Python data pipelines with Pandas and SQLAlchemy that ingested and validated daily POS transactions and inventory snapshots.',
    ],
    stack: ['Python', 'Django REST', 'SQL Server', 'Pandas', 'SQLAlchemy'],
  },
  {
    id: 'ctrls',
    company: 'CtrlS Datacenters',
    role: 'Software Developer',
    period: 'Jul 2021 - Jun 2022',
    location: 'Hyderabad, India',
    bullets: [
      'Wrote Python and Bash automation for infrastructure monitoring and routine operational checks on hosted client environments.',
      'Built SolarWinds dashboards and alerts and supported incident response to keep customer infrastructure available.',
    ],
    stack: ['Python', 'Bash', 'Linux', 'SolarWinds'],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  image?: string;
  hue: number;
}

export const PROJECTS: Project[] = [
  {
    title: 'BinsHunt.ai',
    tagline: 'AI-powered job hunt platform',
    description:
      'An end-to-end career platform where AI agents autonomously analyze job postings, score resume-to-JD alignment through RAG retrieval, and produce customized interview preparation content at scale.',
    tech: ['React.js', 'Python', 'FastAPI', 'LangChain', 'Gemini API', 'RAG'],
    featured: true,
    hue: 258,
  },
  {
    title: 'Smart Personal Finance Assistant',
    tagline: 'ML budgeting app',
    description:
      'A personal budgeting application powered by ML regression models that classify spending patterns and predict monthly expenses with 90% accuracy, contributing to a 25% increase in user savings rates.',
    tech: ['Python', 'React.js', 'AWS', 'Pandas', 'Machine Learning'],
    featured: true,
    hue: 168,
  },
  {
    title: 'WhatsApp Chat Analyzer',
    tagline: 'NLP insights from chat exports',
    description:
      'A machine learning application that analyzes WhatsApp chat data to extract meaningful insights such as user activity, sentiment analysis, and word usage patterns.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Visualization'],
    github:
      'https://github.com/balakrishnamangala05/WhatsApp-Chat-Analyzer-using-Natural-Language-Processing-Techniques',
    image: whatsappImg,
    hue: 140,
  },
  {
    title: 'Descriptive Examination System',
    tagline: 'Automatic grading with NLP',
    description:
      'A system utilizing NLP techniques to analyze and grade descriptive answers automatically based on pre-set criteria, providing quick and efficient assessment.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    github:
      'https://github.com/balakrishnamangala05/Descriptive-Examination-System-using-Natural-Language-Processing',
    image: nlpImg,
    hue: 210,
  },
  {
    title: 'SAFE-MD',
    tagline: 'Crime analysis and forecasting',
    description:
      'A data-driven solution leveraging statistical methods and ML to analyze crime data and predict future trends for improved public safety measures in Maryland.',
    tech: ['Python', 'Machine Learning', 'Data Science', 'Tableau'],
    github: 'https://github.com/balakrishnamangala05/crime-analysis-and-forecasting-in-Maryland',
    image: safeMdImg,
    hue: 8,
  },
  {
    title: 'Multiplex Booking System',
    tagline: 'Movie ticket booking',
    description:
      'An online platform for seamless movie ticket booking at multiplexes, offering real-time seat availability and multiple payment options for user convenience.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/balakrishnamangala05/multiplex-booking-system-Angular',
    image: multiplexImg,
    hue: 36,
  },
];

export const CERTIFICATIONS = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    category: 'Cloud',
    color: '#FF9900',
    link: 'https://www.credly.com/badges/3c19e5ec-2ecd-48d1-ad39-909b3a676bc8/public_url',
  },
  {
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    code: 'DP-700',
    issuer: 'Microsoft',
    category: 'Data Engineering',
    color: '#2F9BFF',
    link: 'https://learn.microsoft.com/en-us/users/balakrishnamangala/credentials/9be97dadf53fcaec',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    code: 'DP-900',
    issuer: 'Microsoft',
    category: 'Cloud and Data',
    color: '#2F9BFF',
    link: 'https://learn.microsoft.com/en-us/users/balakrishnamangala/credentials/5b6629dc8f150c4b',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    code: 'OCI AI',
    issuer: 'Oracle',
    category: 'AI and Cloud',
    color: '#FF4D4D',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=FFA7F82057C39124BA761A5B3902FC02BAA93C272F1120632A59D73357AADA7A',
  },
  {
    name: 'Machine Learning with Python - Level 1',
    code: 'ML-PY',
    issuer: 'IBM',
    category: 'Machine Learning',
    color: '#6E8CFF',
    link: 'https://www.credly.com/badges/6408ea0a-b118-488b-83dc-6db3b52aa881/public_url',
  },
  {
    name: 'Python for Data Science',
    code: 'PY-DS',
    issuer: 'IBM',
    category: 'Data Science',
    color: '#6E8CFF',
    link: 'https://www.credly.com/badges/14262962-4d58-44cc-be18-e22672756270/public_url',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Science in Computer Science',
    short: 'MS',
    school: 'University of Maryland Baltimore County',
    gpa: '3.6',
    scale: '4.0',
    courses: [
      'Design Analysis & Algorithms',
      'Operating Systems',
      'Machine Learning',
      'DBMS',
      'Distributed Systems',
      'Data Structures',
      'Quantum Computation',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    short: 'B.Tech',
    school: 'Jawaharlal Nehru Technological University',
    gpa: '3.9',
    scale: '4.0',
    courses: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP',
      'Compiler Design',
    ],
  },
];

export const SKILL_GROUPS = [
  { title: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'] },
  {
    title: 'AI and ML',
    skills: ['LangChain', 'LangGraph', 'Generative AI', 'OpenAI API', 'Gemini API', 'Claude API', 'RAG', 'Agentic Workflows', 'NLP'],
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Cloud and DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Linux'],
  },
  { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'PL/SQL', 'MongoDB', 'Redis'] },
  { title: 'Testing and Tools', skills: ['Pytest', 'Jest', 'Postman', 'Swagger', 'JIRA', 'Git'] },
];
