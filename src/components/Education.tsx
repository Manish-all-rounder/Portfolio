import { certifications, education } from '../data/resume';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="section-label">Education & Certifications</span>
        <h2 className="section-title">Academic background & credentials</h2>

        <div className="education__grid">
          <div className="education__block">
            <h3 className="education__heading">Education</h3>
            {education.map((item) => (
              <article key={item.institution} className="card education__card">
                <div className="education__score">{item.score}</div>
                <h4>{item.degree}</h4>
                <p className="education__institution">{item.institution}</p>
                <p className="education__location">{item.location}</p>
              </article>
            ))}
          </div>

          <div className="education__block">
            <h3 className="education__heading">Certifications</h3>
            {certifications.map((cert) => (
              <article key={cert.name} className="card cert__card">
                <span className="cert__icon">🏅</span>
                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.provider}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
