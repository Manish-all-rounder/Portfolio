import { skills } from '../data/resume';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Tools, technical & soft skills</h2>

        <div className="skills__grid">
          <div className="skills__group card">
            <h3>Tools</h3>
            <div className="skills__chips">
              {skills.tools.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__group card">
            <h3>Technical Skills</h3>
            <div className="skills__chips">
              {skills.technical.map((skill) => (
                <span key={skill} className="chip chip--gold">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__group card skills__group--wide">
            <h3>Soft Skills</h3>
            <div className="skills__chips">
              {skills.soft.map((skill) => (
                <span key={skill} className="chip chip--outline">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
