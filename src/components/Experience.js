import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <h2 className="experience-title">Professional Journey</h2>

      {/* Capgemini Section */}
      <div className="experience-box">
        <h3>Capgemini</h3>
        <p className="position">Software Engineer Intern</p>
        <p className="duration">June 2022 - January 2023</p>
        <ul className="details">
          <li>
            Worked on designing and developing the process of Title Procurement – Automating Form Generation, Document Management, and Ownership Transfer processes of vehicles.
          </li>
          <li>
            Learned Ruby from scratch. Developed REST API microservices with Ruby and utilized SQL and Redis cache to support the backend.
          </li>
          <li>
            Conducted peer code reviews, fixed bugs, and implemented new functionalities, resolving 10% of open defects.
          </li>
        </ul>
      </div>

      {/* University Section */}
      <div className="experience-box">
        <h3>The University of Maryland, Baltimore County</h3>
        <p className="position">Graduate Student Assistant</p>
        <p className="duration">September 2021 - May 2022</p>
        <ul className="details">
          <li>Graded assignments for courses in Java and C++ programming.</li>
          <li>
            Assisted the professor in teaching classes and provided guidance to students.
          </li>
          <li>
            Collaborated with faculty members on research projects, conducting literature reviews and data analysis.
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="experience-box skills-section">
        <h3>Professional Skillset</h3>
        <div className="skills-carousel">
          {[
            "Python",
            "Java",
            "JavaScript",
            "React.js",
            "Node.js",
            "Spring Boot",
            "MongoDB",
            "Git",
            "PostgreSQL",
            "Google Cloud Platform",
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
