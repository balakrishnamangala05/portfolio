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
          <p>💠 A Computer Science Graduate Student at UMBC passionate about building and enhancing software products.</p>
          <p>💠 Currently working as a Software Developer Intern at Xeddy in Baltimore.</p>
          <p>💠 I love coding, learning new technologies, and solving challenging problems!</p>
        </div>
        <a
          href="/Balakrishna_Mangala_Resume_Doc_docx.pdf"
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
