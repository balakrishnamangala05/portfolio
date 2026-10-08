import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SplitText, Magnetic } from './Motion3D';
import { scrollToId } from './NavigationBar';
import { PROFILE } from '../data';

const HeroScene = lazy(() => import('./HeroScene'));

const focus = ['RAG pipelines', 'multi-provider LLM services', 'FastAPI backends', 'cloud delivery on AWS and Azure'];

const Home: React.FC<{ ready: boolean }> = ({ ready }) => {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 800], [0, 220]);
  const sceneScale = useTransform(scrollY, [0, 800], [1, 0.82]);
  const sceneOpacity = useTransform(scrollY, [0, 700], [1, 0.15]);
  const textY = useTransform(scrollY, [0, 800], [0, -120]);

  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % focus.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero">
      <motion.div className="hero-scene" style={{ y: sceneY, scale: sceneScale, opacity: sceneOpacity }}>
        {ready ? (
          <Suspense fallback={<div className="hero-scene-fallback" />}>
            <HeroScene />
          </Suspense>
        ) : (
          <div className="hero-scene-fallback" />
        )}
      </motion.div>

      <motion.div className="hero-copy" style={{ y: textY }}>
        <motion.p
          className="hero-status"
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="pulse" aria-hidden="true" />
          {PROFILE.role} at {PROFILE.company}, open to AI Engineer and FDE roles
        </motion.p>

        <h1 className="hero-name">
          <SplitText text={PROFILE.firstName} play={ready} delay={0.25} className="hero-name-line" />
          <SplitText text={PROFILE.lastName} play={ready} delay={0.55} className="hero-name-line is-outline" />
        </h1>

        <motion.div
          className="hero-focus"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span>I build</span>
          <span className="hero-focus-window">
            <AnimatePresence mode="wait">
              <motion.span
                key={focus[i]}
                className="hero-focus-word"
                initial={{ y: '100%', rotateX: -80, opacity: 0 }}
                animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                exit={{ y: '-100%', rotateX: 80, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {focus[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.25, duration: 0.7 }}
        >
          4+ years shipping production software across AI, backend, and cloud. I take an ambiguous problem,
          scope it with the people who have it, and get a working system into production.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <Magnetic>
            <a
              href="#projects"
              className="btn btn-solid"
              onClick={e => {
                e.preventDefault();
                scrollToId('projects');
              }}
            >
              See my projects
            </a>
          </Magnetic>
          <Magnetic>
            <a href={PROFILE.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <i />
      </motion.div>
    </div>
  );
};

export default Home;
