import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isHovered, setIsHovered] = useState(false); // State to track hover on the logo

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Close menu on desktop view
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    hover: { scale: 1.2, y: -5, transition: { type: "spring", stiffness: 300 } },
  };

  const linkVariants = {
    hover: {
      y: -5, // Bubble effect
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <motion.div
        className="logo"
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)} // Show "Balakrishna M" on hover
        onHoverEnd={() => setIsHovered(false)} // Revert to "@ code by Bala" when hover ends
      >
        {isHovered ? "© Balakrishna Mangala" : "© code by Bala"}
      </motion.div>

      {/* Right Section: Navigation Links */}
      <div className="right-section">
        {isMobileView && (
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
        )}

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["Home", "About Me", "Experience", "Academics", "Projects"].map(
            (link, index) => (
              <motion.li
                key={index}
                className="nav-item"
                variants={linkVariants}
                whileHover="hover"
              >
                <a href={`#${link.toLowerCase().replace(" ", "-")}`}>
                  {link}
                </a>
              </motion.li>
            )
          )}
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
              />
            </a>
          </div>
          <a href="mailto:example@example.com" className="connect-btn">
            Let's Connect <span>→</span>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
