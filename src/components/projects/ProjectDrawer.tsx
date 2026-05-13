import * as Dialog from '@radix-ui/react-dialog';
import { Project } from '../../data/projectsData';
import Image from 'next/image';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDrawer({ project, onClose }: Props) {
  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content" aria-describedby={undefined}>
          {project && (
            <>
              <div className="drawer-header">
                <Dialog.Title className="drawer-title">{project.title}</Dialog.Title>
                <Dialog.Close className="drawer-close" aria-label="Fermer">
                  ✕
                </Dialog.Close>
              </div>

              <div className="drawer-body">
                <div className="drawer-image">
                  <Image  src={project.image} alt={project.title} />
                </div>

                {/* Métadonnées projet */}
                {(project.client || project.year || project.role) && (
                  <dl className="drawer-meta">
                    {project.client && (
                      <>
                        <dt>Client</dt>
                        <dd>{project.client}</dd>
                      </>
                    )}
                    {project.year && (
                      <>
                        <dt>Année</dt>
                        <dd>{project.year}</dd>
                      </>
                    )}
                    {project.role && (
                      <>
                        <dt>Rôle</dt>
                        <dd>{project.role}</dd>
                      </>
                    )}
                  </dl>
                )}

                {/* Contexte */}
                {project.context && (
                  <section className="drawer-section">
                    <h4 className="drawer-section-title">Le besoin</h4>
                    <p>{project.context}</p>
                  </section>
                )}

                {/* Actions */}
                {project.actions && project.actions.length > 0 && (
                  <section className="drawer-section">
                    <h4 className="drawer-section-title">Ce que j'ai fait</h4>
                    <ul className="drawer-list">
                      {project.actions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Résultats */}
                {project.results && project.results.length > 0 && (
                  <section className="drawer-section">
                    <h4 className="drawer-section-title">Le résultat</h4>
                    <ul className="drawer-list">
                      {project.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Stack */}
                <section className="drawer-section">
                  <h4 className="drawer-section-title">Stack</h4>
                  <div className="drawer-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="drawer-tag">{tech}</span>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                {project.link && project.link !== '#' && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="drawer-cta"
                  >
                    Voir le site en ligne ↗
                  </a>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}