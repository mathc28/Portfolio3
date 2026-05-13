import './style.css';
import { SectionLabel } from "../label/Label";
import { RevealTitle } from "../revealtitle/RevealTitle";


export function AboutSection() {
  return (
    <section id="section-01" className="about">
      <SectionLabel num="01" label="À PROPOS" />

      <RevealTitle className="section-title">
        <span className="line-mask">
          <span className="line-inner about-title">
            L'humain <span className="about-title-accent">derrière le code.</span>
          </span>
        </span>
      </RevealTitle>    

      <div className="about-grid">
        <div className="about-bio-card">
          <p className="about-bio-label">BIO</p>
          <p className="about-bio-primary">
            Développeur web freelance basé à Lyon, j'aide les indépendants et les PME à créer ou refondre leurs sites — avec une vraie exigence sur le design, les performances et le SEO.  
          </p>
          <p className="about-bio-secondary">
            Ma façon de travailler tient en trois choses : un code propre et maintenable, une attention aux détails qui font la différence à l'usage, et une communication directe sans jargon inutile. Le but n'est pas de livrer un site, c'est de livrer un site qui fonctionne pour le client une fois que je suis parti.
            <br /><br />
            Grâce à mon parcours en marketing digital, je peux aussi prendre en charge la création de contenu : newsletters, articles de blog, posts sociaux, campagnes publicitaires. Pratique pour les clients qui veulent un seul interlocuteur du brief à la mise en ligne.          </p>
        </div>

        <div className="about-stats-grid">
          <div className="about-card about-card--blue">
            <p className="about-card-label">BASÉ À</p>
            <p className="about-card-value">Lyon<br /><span className="about-card-dot">•</span> Remote</p>
          </div>

          <div className="about-card about-card--dark">
            <p className="about-card-label">CLIENTS</p>
            <div>
              <p className="about-card-value">Français<br />& Suisses</p>
            </div>
          </div>

          <div className="about-card about-card--light">
            <p className="about-card-label">RÉPONSE EN</p>
            <p className="about-card-number">48h</p>
          </div>

          <div className="about-card about-card--white">
            <p className="about-card-label">LIGHTHOUSE</p>
            <div>
              <p className="about-card-number">90+</p>
              <p className="about-card-sub">en moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
