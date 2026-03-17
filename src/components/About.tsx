import React from 'react';
import './About.css';
import profileImage from '../assets/profile-new.png';

const highlights = [
  { label: '3+', sub: 'Years Experience' },
  { label: 'MS', sub: 'Computer Science, UMBC' },
  { label: '4+', sub: 'Cloud Certifications' },
  { label: '10+', sub: 'Projects Shipped' },
];

const About: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-inner">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-image-border">
              <img src={profileImage} alt="Balakrishna Mangala" />
            </div>
          </div>

          <div className="about-text-col">
            <p className="about-bio">
              I'm <span>Balakrishna Mangala</span>, a Software Engineer with 3+ years of
              experience building production-grade backend systems, cloud-native architectures,
              and AI-integrated applications.
            </p>
            <p className="about-bio">
              I hold a <span>Master of Science in Computer Science</span> from the University
              of Maryland Baltimore County (CGPA: 3.533) and am passionate about designing
              scalable distributed systems, intelligent agentic workflows, and developer tooling.
            </p>
            <p className="about-bio">
              Currently at <span>Shifting Tech Mindset</span>, I lead development of
              intelligent chatbot systems using LangChain and deploy microservices on AWS ECS.
              Outside of work, I enjoy chess, Figma design, and exploring emerging AI research.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div className="highlight-card" key={h.label}>
                  <span className="highlight-num">{h.label}</span>
                  <span className="highlight-sub">{h.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
