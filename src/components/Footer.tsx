import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mangalabalakrishna04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-contact">
          <h2 className="footer-title">Get In <span>Touch</span></h2>
          <p className="footer-sub">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi,
            my inbox is always open!
          </p>
          <a href="mailto:mangalabalakrishna04@gmail.com" className="btn-primary footer-mailto">
            Say Hello →
          </a>
          <button className="copy-email" onClick={copyEmail}>
            {copied ? '✓ Copied!' : '📋 Copy email'}
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            Designed & Built by <span>Balakrishna Mangala</span>
          </p>
          <div className="footer-links">
            <a href="https://github.com/balakrishnamangala05" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/balakrishnamangala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mangalabalakrishna04@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
