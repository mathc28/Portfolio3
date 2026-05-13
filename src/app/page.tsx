"use client";

import { useState } from "react";
import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/About";
import { SkillsSection } from "@/components/skills/Skills";
import { ProjectsSection } from "@/components/projects/Projects";
import { ContactSection } from "@/components/contact/Section";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <div>
      <Nav lang={lang} setLang={setLang} />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
