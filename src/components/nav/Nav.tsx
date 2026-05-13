"use client";

import './style.css';
import Logo from "../../assets/logo-mc.png";

export function Nav({ lang, setLang }: { lang: "FR" | "EN"; setLang: (l: "FR" | "EN") => void }) {
  return (
    <nav className="nav">
      <div className="nav-inner">

        <a href="#" className="nav-logo">
          <img src={Logo.src} alt="logo MC Dev" />
        </a>

        <div className="nav-links">
          {["À propos", "Compétences", "Projets", "Contact"].map((item, i) => (
            <a key={item} href={`#section-0${i + 1}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="nav-lang"
          >
            {lang === "FR" ? "FR / EN" : "EN / FR"}
          </button>
          <a href="#" className="nav-cv">CV ↓</a>
        </div>

      </div>
    </nav>
  );
}
