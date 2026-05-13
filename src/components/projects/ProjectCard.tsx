import { Project } from '../../data/projectsData';
import Image from 'next/image';

type Props = {
  project: Project;
  onClick: () => void;
};

export function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={onClick}
      aria-label={`Voir le détail du projet ${project.title}`}
    >
      <div className="project-card-image">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="project-card-img"
        />      
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.miniDescription}</p>
        <div className="project-card-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card-tag">{tech}</span>
          ))}
        </div>
      </div>
    </button>
  );
}