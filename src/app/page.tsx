import { LangProvider } from "@/context/LangContext";
import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/About";
import { SkillsSection } from "@/components/skills/Skills";
import { ProjectsSection } from "@/components/projects/Projects";
import { ContactSection } from "@/components/contact/Section";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <LangProvider>
      <div>
        <Nav />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </LangProvider>
  );
}
