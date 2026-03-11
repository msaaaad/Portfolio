import { useState } from 'react';
import { EXPERIENCE } from '../data';
import styles from './Experience.module.css';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const exp = EXPERIENCE[activeExp];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">03 — Where I've Worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="divider" />
        </div>

        <div className={styles.layout}>
          {/* Tab selector */}
          <div className={styles.tabs}>
            {EXPERIENCE.map((e, i) => (
              <button
                key={e.company}
                className={`${styles.tab} ${activeExp === i ? styles.tabActive : ''}`}
                onClick={() => setActiveExp(i)}
              >
                <span className={styles.tabPeriod}>{e.period}</span>
                <span className={styles.tabCompany}>{e.company.split('·')[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className={styles.content} key={activeExp}>
            <p className={styles.period}>{exp.period}</p>
            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.company}>{exp.company}</p>

            <div className={styles.projects}>
              {exp.projects.map(p => (
                <div key={p.name} className={styles.project}>
                  <div className={styles.projectHeader}>
                    <h4 className={styles.projectName}>{p.name}</h4>
                    <p className={styles.projectRole}>{p.role}</p>
                  </div>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.tech}>
                    {p.tech.map(t => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
