import { projects } from '../data/resume';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Power BI dashboard work</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__visual">
                <div className="project-card__chart">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span className="project-card__label">Power BI</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary project-card__link"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
