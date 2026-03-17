import React from 'react';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    skills: ['LangChain', 'LangGraph', 'Generative AI', 'OpenAI API', 'Gemini API', 'Claude API', 'RAG', 'Agentic Workflows', 'NLP'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    skills: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Linux'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'PL/SQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Testing & Tools',
    icon: '🛠️',
    skills: ['Pytest', 'Jest', 'Postman', 'Swagger', 'JIRA', 'Git'],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <div className="skills-inner">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
