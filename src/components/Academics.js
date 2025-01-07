import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Academics.css";

const Academics = () => {
  const [activeAcademicsTab, setActiveAcademicsTab] = useState("MS");

  const handleTabChange = (tab) => {
    setActiveAcademicsTab(tab);
  };

  const tabMotion = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="academics-section-container" id="academics">
      <div className="academics-tabs">
        <motion.button
          className={`academics-tab-button ${
            activeAcademicsTab === "MS" ? "active" : ""
          }`}
          onClick={() => handleTabChange("MS")}
          whileHover="hover"
          variants={tabMotion}
        >
          University of Maryland Baltimore County
        </motion.button>
        <motion.button
          className={`academics-tab-button ${
            activeAcademicsTab === "BTech" ? "active" : ""
          }`}
          onClick={() => handleTabChange("BTech")}
          whileHover="hover"
          variants={tabMotion}
        >
          Jawaharlal Nehru Technological University
        </motion.button>
        <motion.button
          className={`academics-tab-button ${
            activeAcademicsTab === "Certifications" ? "active" : ""
          }`}
          onClick={() => handleTabChange("Certifications")}
          whileHover="hover"
          variants={tabMotion}
        >
          Certifications
        </motion.button>
      </div>

      <div className="academics-content">
        {activeAcademicsTab === "MS" && (
          <div className="academics-content-box ms-theme">
            <h2>Master of Science in Computer Science</h2>
            <p><strong>GPA:</strong> 3.46</p>
            <ul>
              <li>Introduction to Data Science</li>
              <li>Design Analysis of Algorithms</li>
              <li>Machine Learning</li>
              <li>Advanced Computer Architecture</li>
              <li>Quantum Computation</li>
              <li>Malware Analysis</li>
              <li>Ethics in Software Engineering</li>
              <li>Fundamentals of Software Testing</li>
            </ul>
            <p><strong>Duration:</strong> September 2023 - May 2025</p>
          </div>
        )}

        {activeAcademicsTab === "BTech" && (
          <div className="academics-content-box btech-theme">
            <h2>Bachelor of Technology in Computer Science and Engineering</h2>
            <p><strong>GPA:</strong> 3.9</p>
            <ul>
              <li>Design and Analysis of Algorithms</li>
              <li>Data Structures</li>
              <li>Object-Oriented Design</li>
              <li>Database Management Systems</li>
              <li>Compiler Design</li>
              <li>Web Programming Languages</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
            </ul>
            <p><strong>Duration:</strong> August 2018 - May 2022</p>
          </div>
        )}

        {activeAcademicsTab === "Certifications" && (
          <div className="academics-content-box certifications-theme">
            <h2>Certifications</h2>
            <ul>
                <li> Database for Developers: Foundation - Oracle Academy</li>
                <li>Python 101 for Data Science</li>
                <li>SQL for Data Science</li>
                <li> Applied Machine Learning in Python</li>
                <li>PCAP: Programming Essentials in Python</li>
                <li>Cisco Networking Academy - IT Essentials</li>
            </ul>
            <h3>Workshops and Hackathons</h3>
            <ul>
                <li>Attended Maryland Technology Internship Program (MTIP Program) in Baltimore (2024)</li>
                <li>Participated in Data Science Workshop at Indian Institute of Technology, Hyderabad (2020).</li>
                <li>Participated in a Hackathon Chatbot development conducted by IBM (2019).</li>
                <li>Selected as a finalist in Model Making Expo Event (a college level technical event) (2019)</li>
            </ul>
            <h3>Extra-Curricular Activities & Hobbies</h3>
            <ul>
                <li>Volunteered in workshops.</li>
                <li>Skilled in creating visually appealing and user-friendly designs in figma.</li>
                <li>Avid chess enthusiast with strategic thinking skills, regularly playing and excelling in fast-paced rapid chess matches.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Academics;
