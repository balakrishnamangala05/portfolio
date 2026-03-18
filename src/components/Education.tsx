import React from 'react';
import './Education.css';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
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
    color: '#0078D4',
    link: 'https://learn.microsoft.com/en-us/users/balakrishnamangala/credentials/9be97dadf53fcaec',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    code: 'DP-900',
    issuer: 'Microsoft',
    category: 'Cloud / Data',
    color: '#0078D4',
    link: 'https://learn.microsoft.com/en-us/users/balakrishnamangala/credentials/5b6629dc8f150c4b',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    code: 'OCI AI',
    issuer: 'Oracle',
    category: 'AI / Cloud',
    color: '#F80000',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=FFA7F82057C39124BA761A5B3902FC02BAA93C272F1120632A59D73357AADA7A',
  },
  {
    name: 'Machine Learning with Python – Level 1',
    code: 'ML-PY',
    issuer: 'IBM',
    category: 'Machine Learning',
    color: '#054ADA',
    link: 'https://www.credly.com/badges/6408ea0a-b118-488b-83dc-6db3b52aa881/public_url',
  },
  {
    name: 'Python for Data Science',
    code: 'PY-DS',
    issuer: 'IBM',
    category: 'Data Science',
    color: '#054ADA',
    link: 'https://www.credly.com/badges/14262962-4d58-44cc-be18-e22672756270/public_url',
  },
];

const Education: React.FC = () => {
  return (
    <div className="edu-section">
      <div className="edu-inner">
        <h2 className="section-title">Education & <span>Certifications</span></h2>

        {/* Education Cards */}
        <div className="edu-cards">
          <div className="edu-card">
            <div className="edu-card-left">
              <div className="edu-degree-badge">MS</div>
            </div>
            <div className="edu-card-right">
              <h3>Master of Science — Computer Science</h3>
              <p className="edu-school">University of Maryland Baltimore County</p>
              <div className="edu-meta">
                <span className="edu-gpa">CGPA: 3.533 / 4.0</span>
              </div>
              <div className="edu-courses">
                <p className="edu-courses-label">Relevant Coursework:</p>
                <div className="edu-course-tags">
                  {['Design Analysis & Algorithms', 'Operating Systems', 'Machine Learning', 'DBMS', 'Distributed Systems', 'Data Structures', 'Quantum Computation'].map(c => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-card-left">
              <div className="edu-degree-badge">B.Tech</div>
            </div>
            <div className="edu-card-right">
              <h3>Bachelor of Technology — Computer Science & Engineering</h3>
              <p className="edu-school">Jawaharlal Nehru Technological University</p>
              <div className="edu-meta">
                <span className="edu-gpa">GPA: 3.9 / 4.0</span>
              </div>
              <div className="edu-courses">
                <p className="edu-courses-label">Relevant Coursework:</p>
                <div className="edu-course-tags">
                  {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP', 'Compiler Design'].map(c => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <h3 className="cert-heading">Certifications</h3>
        <div className="cert-grid">
          {certifications.map(cert => (
            <div
              className="cert-card"
              key={cert.code}
              style={{ '--cert-color': cert.color } as React.CSSProperties}
            >
              <div className="cert-top">
                <span className="cert-category">{cert.category}</span>
                <a
                  className="cert-verify"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify ↗
                </a>
              </div>
              <p className="cert-name">{cert.name}</p>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
