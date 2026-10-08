import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TiltCard, SectionHeading } from './Motion3D';
import profileImage from '../assets/profile-new.png';

const stats = [
  { value: 4, suffix: '+', label: 'Years building production software' },
  { value: 4, suffix: '', label: 'Companies, from datacenters to AI' },
  { value: 6, suffix: '', label: 'Industry certifications' },
  { value: 3.6, suffix: '', label: 'GPA, MS Computer Science, UMBC', decimals: 1 },
];

const Counter: React.FC<{ to: number; decimals?: number; suffix?: string }> = ({ to, decimals = 0, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1400);
      setV(to * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const chips = [
  { text: 'LLMs', x: '-12%', y: '14%', z: 90 },
  { text: 'RAG', x: '78%', y: '8%', z: 120 },
  { text: 'FastAPI', x: '82%', y: '70%', z: 70 },
  { text: 'AWS', x: '-8%', y: '78%', z: 110 },
];

const About: React.FC = () => (
  <div className="about container">
    <SectionHeading title="About" kicker="The engineer behind the systems." />
    <div className="about-grid">
      <TiltCard className="about-photo" max={14}>
        <div className="about-photo-frame">
          <img src={profileImage} alt="Portrait of Balakrishna Mangala" loading="lazy" />
          <div className="about-photo-holo" aria-hidden="true" />
        </div>
        {chips.map(c => (
          <span
            key={c.text}
            className="about-chip"
            style={{ left: c.x, top: c.y, transform: `translateZ(${c.z}px)` }}
          >
            {c.text}
          </span>
        ))}
      </TiltCard>

      <div className="about-copy">
        <motion.p
          className="about-lead"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8 }}
        >
          I'm an AI Engineer at Securiti AI, building the LLM services and retrieval pipelines behind
          AI-driven data governance.
        </motion.p>
        <p>
          My work sits where models meet production. I put OpenAI GPT and Gemini behind FastAPI services with
          failover, build RAG pipelines with LangChain that stay grounded in sensitive enterprise data, and ship it
          all through CI/CD on AWS and Azure.
        </p>
        <p>
          Before Securiti, I built backend services and React dashboards for client teams at Marlabs, data services
          for Sainsbury's at Capgemini, and infrastructure automation at CtrlS Datacenters. I hold an MS in Computer
          Science from the University of Maryland Baltimore County.
        </p>

        <dl className="about-stats">
          {stats.map(s => (
            <div className="about-stat" key={s.label}>
              <dt>
                <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default About;
