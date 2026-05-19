'use client';

import { useState } from 'react';
import { featuredProjects, archiveProjects, Project } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ArchiveCard } from './ArchiveCard';
import { ProjectDrawer } from './ProjectDrawer';
import { SectionLabel } from '../label/Label';
import './style.css';
import { RevealTitle } from "../revealtitle/RevealTitle";
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang } = useLang();
  const tr = translations[lang].projects;

  return (
    <section id="section-03" className="projects">
      <SectionLabel num="03" label={tr.sectionLabel} />

      <RevealTitle className="section-title">
        <span className="line-mask">
          <span className="line-inner skills-title">
            {tr.titleWord} <span className="skills-title-accent">{tr.titleAccent}</span>
          </span>
        </span>
      </RevealTitle>

      {/* ─── Featured ─── */}
      <div className="projects-featured">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* ─── Séparateur ─── */}
      <div className="projects-separator">
        <span className="projects-separator-label">{tr.separator}</span>
      </div>

      {/* ─── Archive ─── */}
      <div className="projects-archive">
        {archiveProjects.map((project) => (
          <ArchiveCard key={project.slug} project={project} />
        ))}
      </div>

      {/* ─── Drawer ─── */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
