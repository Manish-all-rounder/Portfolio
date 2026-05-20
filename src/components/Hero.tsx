import { getNameParts, profile } from '../data/resume';
import './Hero.css';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { first, last, initials } = getNameParts(profile.name);

  return (
    <section id="hero" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__mesh" />
        <div className="hero__grid" />
      </div>
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Power BI Developer · Data Analyst</p>
          <h1 className="hero__title">
            <span className="hero__title-name">
              <span className="hero__title-first">{first}</span>
              {last ? <span className="hero__title-last">{last}</span> : null}
            </span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__location">{profile.location}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button type="button" className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
            <a href={`${import.meta.env.BASE_URL}AtharvaPBI.pdf`} download className="btn btn-outline">
              Download Resume
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero__stat">
              <strong>15+</strong>
              <span>Skills & Tools</span>
            </div>
            <div className="hero__stat">
              <strong>3</strong>
              <span>Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-border" aria-hidden="true" />
          <div className="hero__avatar">
            <span className="hero__avatar-ring" aria-hidden="true" />
            <span>{initials}</span>
          </div>
          <p className="hero__card-name">{profile.name}</p>
          <p className="hero__card-role">{profile.title}</p>
          <ul className="hero__contact-list">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
