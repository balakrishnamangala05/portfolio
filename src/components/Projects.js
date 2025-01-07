import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Whatsapp Chat Analyzer using ML",
    description:
      "A machine learning-based application that analyzes WhatsApp chat data to extract meaningful insights such as user activity, sentiment analysis, and word usage patterns.",
    image:
      "https://cdn.pixabay.com/photo/2015/02/23/18/56/chat-647686_1280.png",
  },
  {
    title: "Descriptive-Examination-System-using-Natural-Language-Processing",
    description:
      "A system utilizing NLP techniques to analyze and grade descriptive answers automatically based on pre-set criteria, providing quick and efficient assessment.",
    image:
      "https://cdn.pixabay.com/photo/2017/05/30/23/49/artificial-intelligence-2354472_1280.png",
  },
  {
    title: "Multiplex Booking System",
    description:
      "An online platform for seamless movie ticket booking at multiplexes, offering real-time seat availability and multiple payment options for user convenience.",
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/11/22/ticket-2558017_1280.png", 
  },
  {
    title: "SAFE-MD: Statistical Analysis and Forecasting of Crime Events in Maryland",
    description:
      "A data-driven solution leveraging statistical methods to analyze crime data and predict future trends for better public safety measures in Maryland.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/04/12/map-1869168_1280.png", // Replace with an appropriate image
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p className="project-description">{project.description}</p>
            <button className="project-button">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
