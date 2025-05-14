import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Force the window to scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const logoVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    hover: { scale: 1.2, y: -5, transition: { type: "spring", stiffness: 300 } },
  };

  const linkVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={(e) => scrollToSection(e, "home")}
      >
        {isHovered ? "© Balakrishna Mangala" : "© code by Bala"}
      </motion.div>
      <div className="right-section">
        {isMobileView && (
          <div className="hamburger" onClick={toggleMenu}>☰</div>
        )}

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {[
            { id: "home", label: "Home" },
            { id: "about-me", label: "About Me" },
            { id: "experience", label: "Experience" },
            { id: "academics", label: "Academics" },
            { id: "projects", label: "Projects" },
          ].map((link, index) => (
            <motion.li
              key={index}
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
            >
              <a href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>
                {link.label}
              </a>
            </motion.li>
          ))}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/balakrishnamangala/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
            </a>

            <a
              href="https://www.instagram.com/balachenni_balakrishna/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"/>
            </a>

            <a
              href="https://github.com/balakrishnamangala05"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub"/>
            </a>

          </div>
          
          <a href="mailto: balakrishna.mangala@outlook.com" className="connect-btn">Let's Connect <span>→</span> </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
