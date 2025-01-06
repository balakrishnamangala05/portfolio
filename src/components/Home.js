import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.png"; // Transparent image

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-text">
        <h1 className="animated-heading">Balakrishna Mangala</h1>
        <h2>
          I'm a,{" "}
          <span className="dynamic-text">
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
          <p>⭐ A Computer Science Student passionate about building and enhancing software products.</p>
          <p>⭐ I love coding, learning new technologies, and solving challenging problems!</p>
          <p>⭐ I live in Baltimore, Maryland.</p>
        </div>
        <a
          href="/assets/Balakrishna_s_Resume_docs.pdf"
          download="Balakrishna_s_Resume_docs.pdf"
          className="resume-btn animated-resume-btn"
        >
          Resume
        </a>
      </div>

      <div className="home-image">
        <img
          src={profileImage}
          alt="Balakrishna Mangala"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Home;
