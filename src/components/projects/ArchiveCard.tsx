import { Project } from '../../data/projectsData';

type Props = {
  project: Project;
};

export function ArchiveCard({ project }: Props) {
  const isLive = project.link && project.link !== '#';

  return (
    
    <a href={isLive ? project.link : undefined}
      target={isLive ? '_blank' : undefined}
      rel={isLive ? 'noreferrer' : undefined}
      className={`archive-card ${isLive ? '' : 'archive-card--no-link'}`}
    >
      <div className="archive-card-header">
        <h3 className="archive-card-title">{project.title}</h3>
        {isLive && <span className="archive-card-arrow">↗</span>}
      </div>
      <p className="archive-card-desc">{project.miniDescription}</p>
      <div className="archive-card-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="archive-card-tag">{tech}</span>
        ))}
      </div>
    </a>
  );
}