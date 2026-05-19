'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './style.css';
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

const stack = ["React", "Next.js", "TypeScript", "GSAP", "WordPress", "PHP", "Figma", "Vercel"];

export function Hero() {
  const { lang } = useLang();
  const tr = translations[lang].hero;

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([line1Ref.current, line2Ref.current], {
        yPercent: 100,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid">

        {/* Row 1 — Big blue heading block */}
        <div className="hero-card hero-heading">
          <h1 className="hero-title">
            <span className="line-mask">
              <span ref={line1Ref} className="line-inner">Mathieu Cocu,</span>
            </span>
            <span className="line-mask">
              <span ref={line2Ref} className="line-inner">{tr.job}</span>
            </span>
          </h1>
        </div>

        {/* Row 2 — Now */}
        <div className="hero-card hero-now">
          <p className="hero-label hero-label--faded">{tr.nowLabel}</p>
          <div className="hero-now-status">
            <span className="hero-now-pulse"></span>
            <span className="hero-now-available">{tr.available}</span>
          </div>
          <p className="hero-now-current">{tr.currentWork}</p>
          <p className="hero-now-date">{tr.updatedAt}</p>
        </div>

        {/* Row 2 — 15+ stats */}
        <div className="hero-card hero-stats">
          <p className="hero-label">{tr.projectsLabel}</p>
          <div>
            <p className="hero-stat-number">15+</p>
            <p className="hero-stat-sub">{tr.projectsSub}</p>
          </div>
        </div>

        {/* Row 2 — Bio */}
        <div className="hero-card hero-bio">
          <p className="hero-label hero-label--blue">{tr.bioLabel}</p>
          <p className="hero-bio-text">{tr.bio}</p>
        </div>

        {/* Row 3 — Statut */}
        <div className="hero-card hero-status">
          <p className="hero-label hero-label--faded">{tr.basedLabel}</p>
          <p className="hero-status-title">Lyon,</p>
          <p className="hero-status-badge">France</p>
        </div>

        {/* Row 3 — Stack */}
        <div className="hero-card hero-stack">
          <p className="hero-label">{tr.stackLabel}</p>
          <div className="hero-tags">
            {stack.map(s => (
              <span key={s} className="hero-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Row 3 — Contact */}
        <a href="#section-04" className="hero-card hero-contact">
          <p className="hero-label">{tr.contactLabel}</p>
          <div className="hero-contact-bottom">
            <span className="hero-contact-title">Contact</span>
            <span className="hero-contact-arrow">→</span>
          </div>
        </a>

      </div>
    </section>
  );
}
