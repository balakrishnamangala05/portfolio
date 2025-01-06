import React, { useState } from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeSection, setActiveSection] = useState("company");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const skills = [
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
  ];

  return (
    <div className="experience-container" id="experience">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-button ${activeSection === "company" ? "active" : ""}`}
          onClick={() => handleSectionClick("company")}
        >
          Capgemini
        </button>
        <button
          className={`tab-button ${activeSection === "university" ? "active" : ""}`}
          onClick={() => handleSectionClick("university")}
        >
          UMBC
        </button>
        <button
          className={`tab-button ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => handleSectionClick("skills")}
        >
          Skills
        </button>
      </div>

      {/* Content */}
      <div className="content-box">
        {activeSection === "company" && (
          <motion.div
            className="company-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Capgemini</h2>
            <h3>Software Engineer Intern</h3>
            <p>June 2022 - January 2023</p>
            <ul>
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
          </motion.div>
        )}
        {activeSection === "university" && (
          <motion.div
            className="university-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>University of Maryland, Baltimore County</h2>
            <h3>Graduate Student Assistant</h3>
            <p>September 2021 - May 2022</p>
            <ul>
              <li>Graded assignments for courses in Java and C++ programming.</li>
              <li>Assisted the professor in teaching classes and provided guidance to students.</li>
              <li>
                Collaborated with faculty members on research projects, conducting literature reviews and data analysis.
              </li>
            </ul>
          </motion.div>
        )}
        {activeSection === "skills" && (
          <motion.div
            className="skills-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Professional Skillset</h2>
            <div className="carousel">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
