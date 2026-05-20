import { profile } from '../data/resume';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. Power BI Developer.
        </p>
        <p className="footer__location">{profile.location}</p>
      </div>
    </footer>
  );
}
