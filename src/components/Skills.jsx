import { SKILLS } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">02 — What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {SKILLS.map(s => (
            <div key={s.cat} className={styles.card}>
              <p className={styles.catTitle}>{s.cat}</p>
              <div className={styles.tags}>
                {s.items.map(item => (
                  <span key={item} className={`badge ${styles.tag}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
