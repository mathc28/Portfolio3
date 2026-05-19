'use client';

import './style.css';
import { SectionLabel } from "../label/Label";
import { RevealTitle } from "../revealtitle/RevealTitle";
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

export function SkillsSection() {
  const { lang } = useLang();
  const tr = translations[lang].skills;

  return (
    <section id="section-02" className="skills">
      <SectionLabel num="02" label={tr.sectionLabel} />

      <div className="skills-header">
        <RevealTitle className="section-title">
          <span className="line-mask">
            <span className="line-inner skills-title">
              {tr.title} <span className="skills-title-accent">{tr.titleAccent}</span>
            </span>
          </span>
        </RevealTitle>
      </div>

      <div className="skills-grid">
        {tr.categories.map((s) => (
          <div key={s.cat} className={`skills-card skills-card--${s.variant}`}>
            <span className="skills-num">{s.num}</span>
            <p className="skills-cat">{s.cat}</p>
            <ul className="skills-list">
              {s.items.map((item) => (
                <li key={item} className="skills-item">
                  <span>{item}</span>
                  <span className="skills-arrow">→</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
