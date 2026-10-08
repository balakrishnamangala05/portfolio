import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as any).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

const NavigationBar: React.FC<{ show: boolean }> = ({ show }) => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(l => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <a href="#home" className="nav-mark" onClick={e => go(e, 'home')} aria-label="Back to top">
          <span className="nav-mark-cube" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </span>
          <span className="nav-mark-text">BM</span>
        </a>

        <nav className="nav-pill" aria-label="Sections">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={e => go(e, l.id)}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {active === l.id && (
                <motion.span layoutId="nav-active" className="nav-active" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="nav-label">{l.label}</span>
            </a>
          ))}
        </nav>

        <a className="nav-resume" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={e => go(e, l.id)}
                initial={{ opacity: 0, y: 40, rotateX: -50 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
              >
                {l.label}
              </motion.a>
            ))}
            <a className="nav-overlay-resume" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
