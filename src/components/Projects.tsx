import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TiltCard, SectionHeading } from './Motion3D';
import { PROJECTS, Project, PROFILE } from '../data';

const Cube: React.FC<{ hue: number; label: string }> = ({ hue, label }) => (
  <div className="cube-stage" style={{ '--h': hue } as React.CSSProperties}>
    <div className="cube">
      {['front', 'back', 'right', 'left', 'top', 'bottom'].map(f => (
        <span key={f} className={`cube-face cube-${f}`}>
          {f === 'front' || f === 'back' ? label : ''}
        </span>
      ))}
    </div>
    <div className="cube-shadow" />
  </div>
);

const initials = (t: string) =>
  t
    .replace(/[^A-Za-z ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

const ProjectCard: React.FC<{ p: Project }> = ({ p }) => (
  <TiltCard className={`project ${p.featured ? 'is-featured' : ''}`} max={10} cursor={p.github ? 'Code' : 'View'}>
    <div className="project-media" style={{ '--h': p.hue } as React.CSSProperties}>
      {p.image ? (
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
      ) : (
        <Cube hue={p.hue} label={initials(p.title)} />
      )}
      {p.featured && <span className="project-badge">Featured</span>}
    </div>
    <div className="project-body">
      <p className="project-tagline">{p.tagline}</p>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.description}</p>
      <div className="project-tech">
        {p.tech.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {(p.github || p.live) && (
        <div className="project-links">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              View source on GitHub
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer">
              Open live app
            </a>
          )}
        </div>
      )}
    </div>
  </TiltCard>
);

const Projects: React.FC = () => {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

  useLayoutEffect(() => {
    const check = () =>
      setHorizontal(window.innerWidth >= 960 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useLayoutEffect(() => {
    if (!horizontal || !track.current) return;
    const el = track.current;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [horizontal]);

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  if (!horizontal) {
    return (
      <div className="projects container">
        <SectionHeading title="Projects" kicker="Things I've built outside the day job." />
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
        <a className="btn btn-ghost projects-more" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
          See everything on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="projects-pin" ref={outer} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="projects-sticky">
        <div className="container projects-top">
          <SectionHeading title="Projects" kicker="Things I've built outside the day job. Keep scrolling." />
          <div className="projects-progress" aria-hidden="true">
            <motion.span style={{ width: bar }} />
          </div>
        </div>
        <motion.div className="projects-track" ref={track} style={{ x }}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
          <div className="projects-end">
            <p>There's more on GitHub, including the code behind this site.</p>
            <a className="btn btn-solid" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              Open my GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
