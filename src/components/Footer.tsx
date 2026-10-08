import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from './Motion3D';
import { PROFILE } from '../data';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const shift = useTransform(scrollYProgress, [0.7, 1], ['0%', '-25%']);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer className="contact">
      <div className="contact-marquee" aria-hidden="true">
        <motion.div style={{ x: shift }}>
          <span>Let's build something that ships</span>
          <span>Let's build something that ships</span>
        </motion.div>
      </div>

      <div className="container contact-inner">
        <p className="contact-lede">
          I'm open to AI Engineer, Forward Deployed Engineer, and Solutions Engineer roles. If you're hiring or just
          want to talk about LLM systems, my inbox is open.
        </p>

        <Magnetic strength={0.2} className="contact-mail-wrap">
          <a className="contact-mail" href={`mailto:${PROFILE.email}`} data-cursor="Write">
            {PROFILE.email}
          </a>
        </Magnetic>

        <div className="contact-actions">
          <button className="btn btn-ghost" onClick={copy} aria-live="polite">
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <div className="contact-bottom">
          <span>Designed and built by {PROFILE.name}</span>
          <span>React, Three.js, and Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
