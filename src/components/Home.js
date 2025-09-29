import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.png"; 

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-text">
        <h1 className="animated-heading">Balakrishna Mangala</h1>
        <h2 className="title-container">
          <span className="static-text">I'm a</span>
          <span className="dynamic-text-wrapper">
            <Typewriter
              words={[
                "Software Engineer",
                "Web Developer",
                "Full-Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="home-description">
          <p>💠 Software Development Engineer with 3+ years of experience building robust Java microservices and full-stack applications.</p>
          <p>💠 Master's in Computer Science from UMBC (GPA: 3.533) and currently working as Full Stack Developer at Xeddy Inc.</p>
          <p>💠 Passionate about cloud-native development, microservices architecture, and delivering scalable solutions using modern technologies!</p>
        </div>
        <a
          href="/Balakrishna_Mangala_SDE_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn animated-resume-btn"
        >
          Resume
        </a>
      </div>

      <div className="home-image">
        <img src={profileImage} alt="Balakrishna Mangala" className="profile-image" />
      </div>
    </div>
  );
};

export default Home;
