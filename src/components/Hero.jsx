import { STATS } from '../data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* background glow */}
      <div className={styles.glow} />

      <div className={`container ${styles.grid}`}>
        {/* Left: Text */}
        <div className={styles.left}>
          <p className={`fade-up delay-1 ${styles.location}`}>
            <span className={styles.dot} /> Dhaka, Bangladesh — Available for Work
          </p>
          <h1 className={`fade-up delay-2 ${styles.name}`}>
            Moinul<br />Islam Shad
          </h1>
          <p className={`fade-up delay-3 ${styles.title}`}>
            Full Stack Engineer &amp; Technical Lead
          </p>
          <p className={`fade-up delay-4 ${styles.desc}`}>
            3+ years building scalable web applications across SaaS, legal tech,
            e-learning, and e-commerce. I lead teams, architect systems, and ship
            products that work.
          </p>
          <div className={`fade-up delay-5 ${styles.btns}`}>
            <a href="#contact" className={styles.btnPrimary}>Get In Touch</a>
            <a href="#experience" className={styles.btnOutline}>View My Work</a>
          </div>
        </div>

        {/* Right: Stats */}
        <div className={`fade-up delay-3 ${styles.stats}`}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className={styles.scrollHint} aria-label="Scroll down">
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
