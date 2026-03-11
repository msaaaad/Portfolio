import { PROJECTS } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">04 — What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {PROJECTS.map(p => (
            <div key={p.num} className={`${styles.card} ${p.highlight ? styles.highlight : ''}`}>
              <span className={styles.num}>{p.num}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.sub}>{p.sub}</p>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tech}>
                  {p.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
