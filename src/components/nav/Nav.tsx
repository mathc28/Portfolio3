"use client";

import { useState } from 'react';
import './style.css';
import Logo from "../../assets/logo-mc.png";

const NAV_ITEMS = ["À propos", "Compétences", "Projets", "Contact"];

export function Nav({ lang, setLang }: { lang: "FR" | "EN"; setLang: (l: "FR" | "EN") => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">

        <a href="#" className="nav-logo" onClick={close}>
          <img src={Logo.src} alt="logo MC Dev" />
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((item, i) => (
            <a key={item} href={`#section-0${i + 1}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="nav-availability">
            <span className="nav-dot" />
            Disponible
          </div>
          <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="nav-lang"
          >
            {lang === "FR" ? "FR / EN" : "EN / FR"}
          </button>
          <a href="#" className="nav-cv">CV ↓</a>
          <button
            className={`nav-burger${isOpen ? " nav-burger--open" : ""}`}
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>

      </div>

      <div className={`nav-mobile${isOpen ? " nav-mobile--open" : ""}`} aria-hidden={!isOpen}>
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item}
            href={`#section-0${i + 1}`}
            className="nav-mobile-link"
            onClick={close}
          >
            {item}
          </a>
        ))}
        <div className="nav-mobile-footer">
          <button
            onClick={() => { setLang(lang === "FR" ? "EN" : "FR"); close(); }}
            className="nav-lang"
          >
            {lang === "FR" ? "FR / EN" : "EN / FR"}
          </button>
          <a href="#" className="nav-cv" onClick={close}>CV ↓</a>
        </div>
      </div>
    </nav>
  );
}
