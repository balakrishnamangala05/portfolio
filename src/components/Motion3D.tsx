import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

/* Pulls its child toward the pointer while hovered. */
export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; className?: string }> = ({
  children,
  strength = 0.35,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className ?? ''}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

/* Card that rotates in 3D toward the pointer with a moving light glare. */
export const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  max?: number;
  style?: React.CSSProperties;
  cursor?: string;
}> = ({ children, className, max = 12, style, cursor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const gx = useTransform(sx, [0, 1], [0, 100]);
  const gy = useTransform(sy, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="tilt-perspective" style={style}>
      <motion.div
        ref={ref}
        className={`tilt-card ${className ?? ''}`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onPointerMove={onMove}
        onPointerLeave={reset}
        data-cursor={cursor}
      >
        {children}
        <motion.div className="tilt-glare" style={{ background: glare }} aria-hidden="true" />
      </motion.div>
    </div>
  );
};

/* Splits a string into letters that flip up in 3D. */
export const SplitText: React.FC<{ text: string; delay?: number; className?: string; play?: boolean }> = ({
  text,
  delay = 0,
  className,
  play = true,
}) => (
  <span className={`split ${className ?? ''}`} aria-label={text}>
    {text.split('').map((ch, i) => (
      <span className="split-mask" key={i} aria-hidden="true">
        <motion.span
          className="split-char"
          initial={{ y: '110%', rotateX: -90, opacity: 0 }}
          animate={play ? { y: '0%', rotateX: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.9, delay: delay + i * 0.035, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      </span>
    ))}
  </span>
);

/* Section heading that rises from a 3D tilt as it scrolls into view. */
export const SectionHeading: React.FC<{ index?: string; title: string; kicker?: string }> = ({ index, title, kicker }) => (
  <div className="section-heading">
    {index && <motion.span
      className="section-index"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.6 }}
    >
      {index}
    </motion.span>}
    <motion.h2
      initial={{ opacity: 0, rotateX: -60, y: 60 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {title}
    </motion.h2>
    {kicker && <p className="section-kicker">{kicker}</p>}
  </div>
);
