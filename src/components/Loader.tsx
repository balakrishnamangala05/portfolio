import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 300 : 1700;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else window.setTimeout(onDone, 250);
    };
    raf = requestAnimationFrame(tick);
    const safety = window.setTimeout(onDone, duration + 1200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-inner">
        <span className="loader-name">Balakrishna Mangala</span>
        <span className="loader-count">{count}</span>
      </div>
      <div className="loader-bar">
        <span style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </motion.div>
  );
};

export default Loader;
