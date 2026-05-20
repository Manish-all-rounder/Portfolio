import { profile } from '../data/resume';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__glow" aria-hidden="true" />
          <div className="contact__content">
            <span className="section-label contact__label">Contact</span>
            <h2 className="contact__title">Let's build something data-driven</h2>
            <p className="contact__text">
              Open to Power BI developer roles, freelance dashboard projects, and analytics
              collaborations. Reach out anytime.
            </p>

            <div className="contact__links">
              <a href={`mailto:${profile.email}`} className="contact__link">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__link">
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__link">
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
                <span>GitHub</span>
                <strong>View projects</strong>
              </a>
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary contact__cta">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
