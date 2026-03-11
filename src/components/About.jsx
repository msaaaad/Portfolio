import { CONTACT } from '../data';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">01 — Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a <strong>results-driven Full Stack Software Engineer</strong> based in
              Dhaka, Bangladesh, with 3+ years of experience designing and delivering
              scalable web applications across diverse domains.
            </p>
            <p>
              Currently serving as a <strong>Technical Lead at Annonlab</strong>, I balance
              hands-on engineering with team leadership — guiding developers while
              architecting full-stack solutions for real-world clients in payroll, legal
              tech, and e-learning.
            </p>
            <p>
              I'm proficient across the entire stack — from Vue.js and React frontends
              to Node.js/Laravel backends, MySQL/PostgreSQL databases, and AWS cloud
              services. I care deeply about clean code, maintainability, and delivering
              on time.
            </p>
            <p>
              Fluent in <strong>Bangla</strong> (native) and <strong>English</strong> (professional working proficiency).
            </p>
          </div>

          <div className={styles.info}>
            <ul className={styles.contactList}>
              {CONTACT.map(c => (
                <li key={c.label} className={styles.contactItem}>
                  <span className={styles.icon}>{c.icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{c.label}</span>
                    <a href={c.href} className={styles.contactValue} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {c.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
