import './style.css';
import { SectionLabel } from "../label/Label";
import { RevealTitle } from "../revealtitle/RevealTitle";


type Skill = {
  num: string;
  cat: string;
  items: string[];
  variant: 'blue' | 'navy' | 'white';
};

const skills: Skill[] = [
  { num: "01", cat: "Front-End",     items: ["React & Next.js", "TypeScript", "JavaScript", "HTML / CSS"], variant: "blue" },
  { num: "02", cat: "Animation",    items: ["GSAP", "ScrollTrigger", "CSS animations"],                  variant: "navy" },
  { num: "03", cat: "CMS / Backend", items: ["WordPress", "PHP", "Thèmes sur mesure"],                         variant: "blue" },
  { num: "04", cat: "Outils",       items: ["Git / GitHub", "Figma", "Vercel"],                  variant: "white" },
];

export function SkillsSection() {
  return (
    <section id="section-02" className="skills">
      <SectionLabel num="02" label="COMPÉTENCES" />

      <div className="skills-header">
        <RevealTitle className="section-title">
          <span className="line-mask">
            <span className="line-inner skills-title">
              Une stack <span className="skills-title-accent">maîtrisée.</span>
            </span>
          </span>
        </RevealTitle>       
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
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
