import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import profileImage from '../assets/prof.JPG';

const Home: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="home-text">
          <p className="home-greeting">Hi, I'm</p>
          <h1 className="home-name">Balakrishna Mangala</h1>
          <h2 className="home-role">
            <span className="role-prefix">I'm a </span>
            <span className="role-typed">
              <Typewriter
                words={[
                  'Software Engineer',
                  'Full-Stack Developer',
                  'AI/ML Engineer',
                  'Cloud Architect',
                  'Backend Engineer',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="home-summary">
            Software Engineer with <span>3+ years</span> of industry experience delivering
            production-grade backend systems, cloud-native architectures, and AI-integrated applications.
            MS in Computer Science from UMBC. Certified across <span>AWS, Azure & Oracle Cloud</span>.
          </p>
          <div className="home-actions">
            <a
              href="/Balakrishna_Mangala_Google_SWE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn-outline" onClick={scrollToContact}>
              Get In Touch
            </a>
          </div>
          <div className="home-socials">
            <a href="https://www.linkedin.com/in/balakrishnamangala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/balakrishnamangala05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
            <a href="mailto:mangalabalakrishna04@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="home-image-wrapper">
          <div className="home-image-glow" />
          <div className="home-image-frame">
            <img src={profileImage} alt="Balakrishna Mangala" />
          </div>
        </div>
      </div>

      <div className="home-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </div>
  );
};

export default Home;
