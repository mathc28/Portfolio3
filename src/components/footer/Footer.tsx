'use client';

import './style.css';
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

export function Footer() {
  const { lang } = useLang();
  const tr = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">Mathieu Cocu — 2026</p>
        <p className="footer-tech">React & GSAP · {tr.rights}</p>
      </div>
    </footer>
  );
}
