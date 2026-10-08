import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TiltCard, SectionHeading } from './Motion3D';
import { EDUCATION, CERTIFICATIONS } from '../data';

const CertCard: React.FC<{ c: (typeof CERTIFICATIONS)[number]; i: number }> = ({ c, i }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="cert"
      style={{ '--c': c.color } as React.CSSProperties}
      initial={{ opacity: 0, rotateY: -70, y: 40 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className={`cert-inner ${flipped ? 'is-flipped' : ''}`}
        onPointerEnter={e => e.pointerType === 'mouse' && setFlipped(true)}
        onPointerLeave={e => e.pointerType === 'mouse' && setFlipped(false)}
      >
        <button
          className="cert-face cert-front"
          onClick={() => setFlipped(f => !f)}
          aria-label={`${c.name}, ${c.issuer}. Show verification link`}
        >
          <span className="cert-code">{c.code}</span>
          <span className="cert-name">{c.name}</span>
          <span className="cert-issuer">{c.issuer}</span>
          <span className="cert-orb" aria-hidden="true" />
        </button>
        <div className="cert-face cert-back">
          <span className="cert-category">{c.category}</span>
          <span className="cert-issuer">{c.issuer}</span>
          <a href={c.link} target="_blank" rel="noopener noreferrer" data-cursor="Verify">
            Verify credential
          </a>
          <button className="cert-flip-back" onClick={() => setFlipped(false)}>
            Back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => (
  <div className="education container">
    <SectionHeading title="Education" kicker="Degrees, and the certifications I've earned since." />
    <div className="edu-grid">
      {EDUCATION.map(e => (
        <TiltCard key={e.short} className="edu" max={8}>
          <div className="edu-gpa" aria-label={`GPA ${e.gpa} out of ${e.scale}`}>
            <span className="edu-gpa-num">{e.gpa}</span>
            <span className="edu-gpa-scale">/ {e.scale} GPA</span>
          </div>
          <span className="edu-short" aria-hidden="true">
            {e.short}
          </span>
          <h3>{e.degree}</h3>
          <p className="edu-school">{e.school}</p>
          <div className="edu-courses">
            {e.courses.map(c => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </TiltCard>
      ))}
    </div>

    <h3 className="cert-heading">Certifications</h3>
    <div className="cert-grid">
      {CERTIFICATIONS.map((c, i) => (
        <CertCard key={c.code} c={c} i={i} />
      ))}
    </div>
  </div>
);

export default Education;
