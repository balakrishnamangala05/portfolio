import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'BinsHunt.ai – AI-Powered Job Hunt Platform',
    description:
      'An end-to-end career platform where AI agents autonomously analyze job postings, score resume-to-JD alignment through RAG retrieval, and produce customized interview preparation content at scale.',
    tech: ['React.js', 'Python', 'FastAPI', 'LangChain', 'Gemini API', 'RAG'],
    featured: true,
  },
  {
    title: 'Smart Personal Finance Assistant',
    description:
      'A personal budgeting application powered by ML regression models that classify spending patterns and predict monthly expenses with 90% accuracy, contributing to a 25% increase in user savings rates.',
    tech: ['Python', 'React.js', 'AWS', 'Pandas', 'Machine Learning'],
    featured: true,
  },
  {
    title: 'WhatsApp Chat Analyzer using ML',
    description:
      'A machine learning application that analyzes WhatsApp chat data to extract meaningful insights such as user activity, sentiment analysis, and word usage patterns.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Visualization'],
    github: 'https://github.com/balakrishnamangala05/WhatsApp-Chat-Analyzer-using-Natural-Language-Processing-Techniques',
  },
  {
    title: 'Descriptive Examination System using NLP',
    description:
      'A system utilizing NLP techniques to analyze and grade descriptive answers automatically based on pre-set criteria, providing quick and efficient assessment.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    github: 'https://github.com/balakrishnamangala05/Descriptive-Examination-System-using-Natural-Language-Processing',
  },
  {
    title: 'SAFE-MD: Crime Analysis & Forecasting',
    description:
      'A data-driven solution leveraging statistical methods and ML to analyze crime data and predict future trends for improved public safety measures in Maryland.',
    tech: ['Python', 'Machine Learning', 'Data Science', 'Tableau'],
    github: 'https://github.com/balakrishnamangala05/crime-analysis-and-forecasting-in-Maryland',
  },
  {
    title: 'Multiplex Booking System',
    description:
      'An online platform for seamless movie ticket booking at multiplexes, offering real-time seat availability and multiple payment options for user convenience.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/balakrishnamangala05/multiplex-booking-system-Angular',
  },
];

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <div className="projects-inner">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={i}>
              {project.featured && <span className="featured-badge">Featured</span>}
              <div className="project-card-top">
                <span className="project-folder">📁</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="projects-more">
          <a
            href="https://github.com/balakrishnamangala05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
