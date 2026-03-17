import React, { useState } from 'react';
import './Experience.css';

interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    id: 'stm',
    company: 'Shifting Tech Mindset (STM)',
    role: 'Software Engineer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    bullets: [
      'Led development of an intelligent support chatbot using Python, OpenAI, and LangChain with multi-step agentic reasoning pipelines, reducing ticket resolution time by 40% for 500K+ users.',
      'Provisioned containerized microservices on AWS ECS with Docker and horizontal auto-scaling, sustaining 99.9% availability under 500K+ daily API calls.',
      'Built optimized API endpoints with Django and FastAPI, leveraging composite PostgreSQL indexes and Redis-based caching for a 40% reduction in query execution time.',
    ],
  },
  {
    id: 'xeddy',
    company: 'Xeddy, Inc',
    role: 'Software Engineer',
    period: 'Nov 2024 – May 2025',
    location: 'Baltimore, MD',
    bullets: [
      'Shipped a consumer-facing restaurant rewards platform with React.js/TypeScript frontend and Python-based (Flask, FastAPI) microservices enabling loyalty point accumulation and redemption.',
      'Implemented event-driven background processing using Celery workers backed by Redis queues with Socket.io for live push notifications, achieving 45% faster response cycles.',
      'Created merchant-facing analytics dashboards using D3.js, providing restaurant owners with visual insights into customer behavior and loyalty program effectiveness.',
    ],
  },
  {
    id: 'umbc',
    company: 'University of Maryland Baltimore County',
    role: 'Research & Teaching Assistant',
    period: 'May 2024 – Dec 2024',
    location: 'Baltimore, MD',
    bullets: [
      'Mentored 40 students in Machine Learning (CMSC 678), delivering tutoring sessions on algorithms, neural networks, and model evaluation with hands-on project feedback.',
      'Analyzed 10 years of transportation datasets using Python automation scripts, producing 5 stakeholder-ready reports with interactive Tableau and Power BI dashboards.',
    ],
  },
  {
    id: 'capgemini',
    company: 'Capgemini | Client: Sainsbury\'s',
    role: 'Software Associate - II',
    period: 'Aug 2021 – Jul 2023',
    location: 'Hyderabad, India',
    bullets: [
      'Constructed backend API services with Django REST Framework to unify supplier, logistics, and inventory data streams for Sainsbury\'s 1,400+ UK store network with full Swagger/OpenAPI coverage.',
      'Reduced a mission-critical supply chain report\'s execution time from 4 hours to under 2 hours by rewriting SQL stored procedures in MS SQL Server with optimized join strategies and covering indexes.',
      'Authored Python-based (Pandas, SQLAlchemy) data transformation pipelines ingesting and validating daily POS transactions and inventory snapshots from 1,000+ retail locations.',
    ],
  },
];

const Experience: React.FC = () => {
  const [active, setActive] = useState('stm');
  const current = jobs.find(j => j.id === active)!;

  return (
    <div className="exp-section">
      <div className="exp-inner">
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div className="exp-layout">
          {/* Tab list */}
          <div className="exp-tabs">
            {jobs.map(job => (
              <button
                key={job.id}
                className={`exp-tab ${active === job.id ? 'active' : ''}`}
                onClick={() => setActive(job.id)}
              >
                <span className="exp-tab-company">{job.company.split('|')[0].trim()}</span>
                <span className="exp-tab-period">{job.period}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{current.role}</h3>
                <p className="exp-company">
                  <span>@</span> {current.company}
                </p>
              </div>
              <div className="exp-meta">
                <span className="exp-period">{current.period}</span>
                <span className="exp-location">{current.location}</span>
              </div>
            </div>

            <ul className="exp-bullets">
              {current.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-arrow">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
