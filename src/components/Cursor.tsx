import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const Cursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });
  const trailX = useSpring(x, { stiffness: 90, damping: 20, mass: 1 });
  const trailY = useSpring(y, { stiffness: 90, damping: 20, mass: 1 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('has-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        'a, button, [data-cursor], input, textarea'
      );
      setHovering(!!target);
      setLabel(target?.dataset.cursor ?? null);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setHidden(true);

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = label ? 92 : hovering ? 64 : 38;

  return (
    <div className={`cursor-layer ${hidden ? 'is-hidden' : ''}`} aria-hidden="true">
      <motion.div className="cursor-anchor" style={{ x: trailX, y: trailY }}>
        <div className="cursor-trail" />
      </motion.div>
      <motion.div className="cursor-anchor" style={{ x: ringX, y: ringY }}>
        <motion.div
          className={`cursor-ring ${label ? 'has-label' : ''}`}
          animate={{ width: ringSize, height: ringSize, scale: pressed ? 0.82 : 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        >
          <AnimatePresence>
            {label && (
              <motion.span
                key={label}
                className="cursor-label"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div className="cursor-anchor" style={{ x, y }}>
        <motion.div
          className="cursor-dot"
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </div>
  );
};

export default Cursor;
