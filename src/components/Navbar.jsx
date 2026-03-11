import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>M · I · S</a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ''}></span>
        <span className={menuOpen ? styles.burgerOpen : ''}></span>
        <span className={menuOpen ? styles.burgerOpen : ''}></span>
      </button>
    </nav>
  );
}
