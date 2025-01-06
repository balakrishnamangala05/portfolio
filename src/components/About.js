import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container-wrapper" id="about-me">
      <motion.h2
        className="about-title-outside"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Launching Dreams into Code
      </motion.h2>

      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        whileHover={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
      >
        <motion.p
          className="about-description"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm Balakrishna Mangala, a passionate problem solver driven by a
          relentless pursuit of innovation. I am pursuing a Master's Degree in
          Computer Science from UMBC currently holding a GPA of 3.46. My expertise spans from
          cutting-edge algorithms to intuitive user experiences.
        </motion.p>

        <motion.p
          className="about-description"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          👨‍💻 I worked as a Associate-II Software Engineer at Capgemini in India.
        </motion.p>

        <motion.div
          className="about-skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3>My Skills:</h3>
          <ul>
            <li>C++</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </motion.div>

        <motion.div
          className="connect-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h3>🌟 Let's Connect</h3>
          <p>
            I'm not just looking for a job; I'm on a mission to contribute to
            transformative projects that make a difference. If you're seeking a
            dynamic problem solver with a passion for innovation, let's connect
            and explore the possibilities together!
          </p>
          <a href="mailto:balakrishna.mangala@outlook.com" className="connect-btn1">
            Connect!
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
