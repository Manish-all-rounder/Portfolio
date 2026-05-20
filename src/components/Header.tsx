import { useEffect, useState } from 'react';
import { getNameParts, navLinks, profile } from '../data/resume';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { first, last, initials } = getNameParts(profile.name);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (mq.matches) closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    mq.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      mq.removeEventListener('change', onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <button type="button" className="header__logo" onClick={() => scrollTo('hero')}>
          <span className="header__logo-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="header__logo-text">
            <span className="header__logo-first">{first}</span>
            {last ? <span className="header__logo-last">{last}</span> : null}
          </span>
        </button>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="header__link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
