import React from "react";
import "./Projects.css";
import whatsappImage from "../assets/wca-ml project.png";
import nlpImage from "../assets/nlp-examination.png";
import multiplexImage from "../assets/multiplex-booking.png";
import safeMdImage from "../assets/safe-md.png";

const Projects = () => {
  const projectData = [
    {
      title: "Whatsapp Chat Analyzer using ML",
      description:
        "A machine learning-based application that analyzes WhatsApp chat data to extract meaningful insights such as user activity, sentiment analysis, and word usage patterns.",
      image: whatsappImage,
      link: "https://github.com/balakrishnamangala05/WhatsApp-Chat-Analyzer-using-Natural-Language-Processing-Techniques",
    },
    {
      title: "Descriptive Examination System using NLP",
      description:
        "A system utilizing NLP techniques to analyze and grade descriptive answers automatically based on pre-set criteria, providing quick and efficient assessment.",
      image: nlpImage,
      link: "https://github.com/balakrishnamangala05/Descriptive-Examination-System-using-Natural-Language-Processing", 
    },
    {
      title: "Multiplex Booking System",
      description:
        "An online platform for seamless movie ticket booking at multiplexes, offering real-time seat availability and multiple payment options for user convenience.",
      image: multiplexImage,
      link: "https://github.com/your-github/multiplex-booking",
    },
    {
      title: "SAFE-MD: Statistical Analysis and Forecasting of Crime Events in Maryland",
      description:
        "A data-driven solution leveraging statistical methods to analyze crime data and predict future trends for better public safety measures in Maryland.",
      image: safeMdImage,
      link: "https://github.com/your-github/safe-md",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image"/>
            <p className="project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button"> View Project </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
