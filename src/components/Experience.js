import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Xeddy");

  const skills = [
    "Python",
    "Java",
    "C/C++",
    "HTML/CSS",
    "JavaScript",
    "Golang",
    "SQL",
    "React",
    "Angular",
    "Node.js",
    "Spring Boot",
    "MongoDB",
    "Azure DevOps",
    "GitHub Actions",
    "Docker",
    "REST APIs",
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
          className={`tab-button ${activeTab === "Xeddy" ? "active" : ""}`}
          onClick={() => setActiveTab("Xeddy")}
          variants={tabVariants}
          whileHover="hover"
        >
          Xeddy
          {activeTab === "Xeddy" && (
            <motion.span
              className="bubble-dot"
              variants={tabVariants}
              animate="bubble"
            />
          )}
        </motion.button>
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
        {activeTab === "Xeddy" && (
          <div className="content-box xeddy-theme">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQGbVrBL2DFEFQ/company-logo_200_200/company-logo_200_200/0/1732348397682/xeddy_logo?e=1752710400&v=beta&t=kBcTur_1ElBUsl4Wv-mzd00Us08RcCPLnA8v9UNzETk"
              alt="Xeddy Logo"
              className="company-logo"
            />
            <h2>Xeddy</h2>
            <h3>Software Developer Intern</h3>
            <p>January 2025 - Present</p>
            <ul>
              <li><span>Designed and delivered customer-facing features for a web-based food ordering app, increasing user engagement by 15%.</span></li>
              <li><span>Engineered scalable RESTful APIs using Golang, boosting backend request throughput by 20%.</span></li>
              <li><span>Refactored frontend using React with lazy loading and performance optimizations, reducing load time by 30%.</span></li>
              <li><span>Built CI/CD pipelines on Azure DevOps integrated with GitHub Actions, reducing release time by 40%.</span></li>
            </ul>
          </div>
        )}

        {activeTab === "Capgemini" && (
          <div className="content-box capgemini-theme">
            <img
              src="https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491"
              alt="Capgemini Logo"
              className="company-logo"
            />
            <h2>Capgemini Engineering</h2>
            <h3>Associate-II Software Engineer / Senior Analyst</h3>
            <p>July 2022 - August 2023</p>
            <ul>
              <li><span>Developed and maintained scalable RESTful and SOAP APIs using Java, Spring Boot, and Hibernate for enterprise-grade applications.</span></li>
              <li><span>Conducted unit testing and contributed to CI/CD pipelines using Jenkins and GitHub Actions.</span></li>
              <li><span>Built secure, maintainable microservices hosted on Pivotal Cloud Foundry, resulting in improved system resilience.</span></li>
              <li><span>Participated in agile software development, prototyping and peer code reviews with a team of 6+ developers.</span></li>
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
