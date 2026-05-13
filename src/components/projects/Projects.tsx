'use client';

import { useState } from 'react';
import { featuredProjects, archiveProjects, Project } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ArchiveCard } from './ArchiveCard';
import { ProjectDrawer } from './ProjectDrawer';
import { SectionLabel } from '../label/Label';
import './style.css';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="section-03" className="projects">
      <SectionLabel num="03" label="PROJETS" />

      <h2 className="projects-title">
        <span className="line-mask">
          <span className="line-inner">
            Du <span className="projects-title-accent">concret.</span>
          </span>
        </span>
      </h2>

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
        <span className="projects-separator-label">Autres projets</span>
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