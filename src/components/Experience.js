import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Capgemini");

  const skills = [
    "C++",
    "SQL",
    "JavaScript",
    "Java",
    "HTML,/CSS",
    "Angular",
    "React.js",
    "Node.js",
    "MongoDB",
    "Git",
    "PostgreSQL",
    "Machine Learning",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector(".carousel");
      if (carousel) {
        carousel.scrollBy({ left: 20, behavior: "smooth" });
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const tabVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
    bubble: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="experience-container" id="experience">
      <div className="experience-tabs">
        <motion.button
          className={`tab-button ${activeTab === "Capgemini" ? "active" : ""}`}
          onClick={() => setActiveTab("Capgemini")}
          variants={tabVariants}
          whileHover="hover"
        >
          Capgemini
          {activeTab === "Capgemini" && (
            <motion.span
              className="bubble-dot"
              variants={tabVariants}
              animate="bubble"
            />
          )}
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === "UMBC" ? "active" : ""}`}
          onClick={() => setActiveTab("UMBC")}
          variants={tabVariants}
          whileHover="hover"
        >
          UMBC
          {activeTab === "UMBC" && (
            <motion.span
              className="bubble-dot"
              variants={tabVariants}
              animate="bubble"
            />
          )}
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === "Skills" ? "active" : ""}`}
          onClick={() => setActiveTab("Skills")}
          variants={tabVariants}
          whileHover="hover"
        >
          Skills
          {activeTab === "Skills" && (
            <motion.span
              className="bubble-dot"
              variants={tabVariants}
              animate="bubble"
            />
          )}
        </motion.button>
      </div>

      <div className="experience-content">
        {activeTab === "Capgemini" && (
          <div className="content-box capgemini-theme">
            <img
              src="https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491"
              alt="Capgemini Logo"
              className="company-logo"
            />
            <h2>Capgemini</h2>
            <h3>Associate-II Software Engineer</h3>
            <p>March 2022 - August 2023</p>
            <ul>
              <li><span>Developed and maintained components for both front-end and back-end of applications using the react.js and node.js.Conducted code reviews and contributed to the continuous improvement of development processes. </span></li>
              <li><span>Worked on back-end development tasks, including server coding and database management. Participated in agile Software development, prototyped and code reviews with a small team of developers.</span></li>
              <li><span>Designed new features and performance enhancements for existing systems. Designed and implemented dynamic solutions to visualize and deliver daily test result reports to team members using React.</span></li>
            </ul>
          </div>
        )}

        {activeTab === "UMBC" && (
          <div className="content-box umbc-theme">
            <img
              src="https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/03/UMBC-vertical-logo-CMYK-on-black.png"
              alt="UMBC Logo"
              className="company-logo"
            />
            <h2>University of Maryland, Baltimore County</h2>
            <h3>Master's in Computer Science</h3>
            <p>September 2023 - May 2025</p>
            <ul>
              <li><span>Relevant Project1: SAFE-MD-- Statistical Analysis and Forecasting of Crime Events in Maryland.
              This project has demonstrated the potential of using machine learning techniques to predict crime rates in Maryland counties, providing valuable insights that can inform public safety strategies and policy decisions.</span></li>
              <li><span>Relevant Project1: REACT PORTFOLIO PROJECT-- Designed and developed a responsive portfolio website using React and Framer Motion to showcase projects, skills, and achievements, integrating smooth animations for an engaging user experience across all devices.</span></li>
            </ul>
          </div>
        )}

        {activeTab === "Skills" && (
          <div className="content-box skills-theme">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7947/7947194.png"
              alt="Skills Icon"
              className="company-logo"
            />
            <h2>Professional Skillset</h2>
            <div className="carousel">
              {skills.map((skill, index) => (
                <div className="carousel-item" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
