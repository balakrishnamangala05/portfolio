import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SectionHeading } from './Motion3D';
import { JOBS, Job } from '../data';

const JobCard: React.FC<{ job: Job; i: number; total: number; progress: MotionValue<number> }> = ({
  job,
  i,
  total,
  progress,
}) => {
  const start = i / total;
  const targetScale = 1 - (total - 1 - i) * 0.045;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const rotateX = useTransform(progress, [start, 1], [0, (total - 1 - i) * 3.5]);
  const brightness = useTransform(progress, [start, 1], [1, 1 - (total - 1 - i) * 0.12]);
  const filter = useTransform(brightness, b => `brightness(${b})`);

  return (
    <div className="job-sticky" style={{ top: `calc(14vh + ${i * 28}px)` }}>
      <motion.article className={`job ${job.current ? 'is-current' : ''}`} style={{ scale, rotateX, filter }}>
        <span className="job-ghost" aria-hidden="true">
          {job.company.charAt(0)}
        </span>
        <header className="job-head">
          <p className="job-period">
            {job.current && <span className="pulse" aria-hidden="true" />}
            {job.period}
          </p>
          <h3 className="job-role">{job.role}</h3>
          <p className="job-company">
            {job.company}
            {job.client && <span className="job-client">Client: {job.client}</span>}
          </p>
          <p className="job-location">{job.location}</p>
        </header>
        <div className="job-body">
          <ul>
            {job.bullets.map((b, k) => (
              <li key={k}>{b}</li>
            ))}
          </ul>
          <div className="job-stack">
            {job.stack.map(s => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="experience container">
      <SectionHeading title="Experience" kicker="Four companies, one thread: getting real systems into production." />
      <div className="jobs" ref={ref}>
        <div className="jobs-rail" aria-hidden="true">
          <motion.span style={{ height: line }} />
        </div>
        {JOBS.map((job, i) => (
          <JobCard key={job.id} job={job} i={i} total={JOBS.length} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
