import { experience } from '../data/resume';
import './Experience.css';

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Professional journey</h2>

        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="timeline__item card">
              <div className="timeline__marker">
                <span className={`timeline__dot ${job.current ? 'timeline__dot--active' : ''}`} />
              </div>
              <div className="timeline__body">
                <div className="timeline__header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <div className="timeline__meta">
                    {job.current && <span className="timeline__badge">Current</span>}
                    <span className="timeline__location">{job.location}</span>
                  </div>
                </div>
                <ul className="timeline__list">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
