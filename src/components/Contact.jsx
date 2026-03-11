import { CONTACT } from '../data';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">06 — Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.intro}>
              I'm open to full-time roles, freelance contracts, and interesting
              collaborations. Whether you have a project in mind or just want
              to connect — feel free to reach out.
            </p>
            <a href="mailto:mshad732@gmail.com" className={styles.cta}>
              Send an Email →
            </a>
          </div>

          <div className={styles.cards}>
            {CONTACT.map(c => (
              <a
                key={c.label}
                href={c.href}
                className={styles.card}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className={styles.cardIcon}>{c.icon}</span>
                <div>
                  <p className={styles.cardLabel}>{c.label}</p>
                  <p className={styles.cardValue}>{c.value}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
