import { Project } from '../../data/projectsData';

type Props = {
  project: Project;
};

export function ArchiveCard({ project }: Props) {
  const hasLinks = Boolean(project.link || project.repo);

  return (
    <article className="archive-card">
      <div className="archive-card-header">
        <h3 className="archive-card-title">{project.title}</h3>
      </div>
      <p className="archive-card-desc">{project.miniDescription}</p>
      <div className="archive-card-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="archive-card-tag">{tech}</span>
        ))}
      </div>

      {hasLinks && (
        <div className="archive-card-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="archive-card-btn archive-card-btn--site"
              aria-label={`Voir le site en ligne de ${project.title} (nouvel onglet)`}
            >
              Site ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="archive-card-btn archive-card-btn--code"
              aria-label={`Voir le code de ${project.title} sur GitHub (nouvel onglet)`}
            >
              Code &lt;/&gt;
            </a>
          )}
        </div>
      )}
    </article>
  );
}
