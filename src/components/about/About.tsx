'use client';

import './style.css';
import { SectionLabel } from "../label/Label";
import { RevealTitle } from "../revealtitle/RevealTitle";
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

export function AboutSection() {
  const { lang } = useLang();
  const tr = translations[lang].about;

  return (
    <section id="section-01" className="about">
      <SectionLabel num="01" label={tr.sectionLabel} />

      <RevealTitle className="section-title">
        <span className="line-mask">
          <span className="line-inner about-title">
            {tr.title} <span className="about-title-accent">{tr.titleAccent}</span>
          </span>
        </span>
      </RevealTitle>

      <div className="about-grid">
        <div className="about-bio-card">
          <p className="about-bio-label">{tr.bioLabel}</p>
          <p className="about-bio-primary">{tr.bioPrimary}</p>
          <p className="about-bio-secondary">
            {tr.bioSecondary1}
            <br /><br />
            {tr.bioSecondary2}
          </p>
        </div>

        <div className="about-stats-grid">
          <div className="about-card about-card--blue">
            <p className="about-card-label">{tr.basedLabel}</p>
            <p className="about-card-value">Lyon<br /><span className="about-card-dot">•</span> Remote</p>
          </div>

          <div className="about-card about-card--dark">
            <p className="about-card-label">{tr.clientsLabel}</p>
            <div>
              <p className="about-card-value">{tr.clientsValue1}<br />{tr.clientsValue2}</p>
            </div>
          </div>

          <div className="about-card about-card--light">
            <p className="about-card-label">{tr.responseLabel}</p>
            <p className="about-card-number">48h</p>
          </div>

          <div className="about-card about-card--white">
            <p className="about-card-label">LIGHTHOUSE</p>
            <div>
              <p className="about-card-number">90+</p>
              <p className="about-card-sub">{tr.average}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
