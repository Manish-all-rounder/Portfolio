import { profile } from '../data/resume';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Data storyteller with a business mindset</h2>
        <div className="about__grid">
          <p className="about__text">{profile.summary}</p>
          <div className="about__highlights">
            <div className="about__highlight card">
              <span className="about__icon-wrap" aria-hidden="true">
                <span className="about__icon">📊</span>
              </span>
              <h3>Dashboard Development</h3>
              <p>End-to-end Power BI dashboards from requirements to delivery.</p>
            </div>
            <div className="about__highlight card">
              <span className="about__icon-wrap" aria-hidden="true">
                <span className="about__icon">⚡</span>
              </span>
              <h3>KPI & Reporting</h3>
              <p>Performance tracking, automation, and actionable insights.</p>
            </div>
            <div className="about__highlight card">
              <span className="about__icon-wrap" aria-hidden="true">
                <span className="about__icon">🤝</span>
              </span>
              <h3>Stakeholder Collaboration</h3>
              <p>Translating business needs into technical analytics solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
