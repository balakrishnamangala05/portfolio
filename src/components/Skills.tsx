import React, { useEffect, useMemo, useRef, useState } from 'react';
import { SectionHeading } from './Motion3D';
import { SKILL_GROUPS } from '../data';

interface Tag {
  text: string;
  group: string;
  x: number;
  y: number;
  z: number;
}

const SkillSphere: React.FC<{ highlight: string | null }> = ({ highlight }) => {
  const stage = useRef<HTMLDivElement>(null);
  const els = useRef<(HTMLSpanElement | null)[]>([]);
  const tags = useMemo<Tag[]>(() => {
    const all = SKILL_GROUPS.flatMap(g => g.skills.map(s => ({ text: s, group: g.title })));
    const n = all.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return all.map((t, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      return { ...t, x: Math.cos(th) * r, y, z: Math.sin(th) * r };
    });
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ax = 0.0016;
    let ay = 0.0032;
    let targetAx = ax;
    let targetAy = ay;
    let rotX = 0;
    let rotY = 0;
    let raf = 0;
    let dragging = false;
    let lx = 0;
    let ly = 0;

    const el = stage.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (dragging) {
        targetAy = (e.clientX - lx) * 0.0009;
        targetAx = -(e.clientY - ly) * 0.0009;
        lx = e.clientX;
        ly = e.clientY;
        return;
      }
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      targetAy = dx * 0.02;
      targetAx = -dy * 0.02;
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const onUp = () => {
      dragging = false;
    };
    const onLeave = () => {
      targetAx = 0.0016;
      targetAy = 0.0032;
    };

    const render = () => {
      ax += (targetAx - ax) * 0.06;
      ay += (targetAy - ay) * 0.06;
      rotX += ax;
      rotY += ay;
      const radius = Math.min(el.clientWidth, el.clientHeight) * 0.42;
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      tags.forEach((t, i) => {
        const node = els.current[i];
        if (!node) return;
        const y1 = t.y * cx - t.z * sx;
        const z1 = t.y * sx + t.z * cx;
        const x2 = t.x * cy + z1 * sy;
        const z2 = -t.x * sy + z1 * cy;
        const depth = (z2 + 1) / 2;
        node.style.transform = `translate3d(${x2 * radius}px, ${y1 * radius}px, ${z2 * radius}px) translate(-50%, -50%)`;
        node.style.opacity = String(0.25 + depth * 0.75);
        node.style.zIndex = String(Math.round(depth * 100));
      });
      if (!reduced) raf = requestAnimationFrame(render);
    };
    render();

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [tags]);

  return (
    <div className="sphere" ref={stage} data-cursor="Drag" aria-hidden="true">
      <div className="sphere-core" />
      {tags.map((t, i) => (
        <span
          key={t.text}
          ref={el => (els.current[i] = el)}
          className={`sphere-tag ${highlight ? (highlight === t.group ? 'is-on' : 'is-off') : ''}`}
        >
          {t.text}
        </span>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  const [hl, setHl] = useState<string | null>(null);
  return (
    <div className="skills container">
      <SectionHeading title="Skills" kicker="Hover a group to find it in the sphere, or drag the sphere to spin it." />
      <div className="skills-grid">
        <SkillSphere highlight={hl} />
        <ul className="skill-groups">
          {SKILL_GROUPS.map(g => (
            <li
              key={g.title}
              onPointerEnter={() => setHl(g.title)}
              onPointerLeave={() => setHl(null)}
              onFocus={() => setHl(g.title)}
              onBlur={() => setHl(null)}
              tabIndex={0}
              className={hl === g.title ? 'is-on' : ''}
            >
              <h3>{g.title}</h3>
              <p>{g.skills.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
