import styles from './Education.module.css';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">05 — Where I Studied</p>
          <h2 className="section-title">Education</h2>
          <div className="divider" />
        </div>

        <div className={styles.card}>
          <div className={styles.year}>
            <span>2017</span>
            <div className={styles.yearLine} />
            <span>2021</span>
          </div>
          <div className={styles.body}>
            <p className={styles.degree}>BSc in Computer Science &amp; Engineering</p>
            <p className={styles.school}>
              Mawlana Bhashani Science and Technology University
              <span className={styles.location}> · Santosh, Tangail, Bangladesh</span>
            </p>
            <p className={styles.desc}>
              Four-year undergraduate programme covering software engineering, algorithms,
              data structures, machine learning, and systems design. Active in project-based
              learning with a focus on real-world applications.
            </p>
            <div className={styles.project}>
              <p className={styles.projectLabel}>Final Year Project</p>
              <p className={styles.projectTitle}>Deep Fake Video Generation</p>
              <p className={styles.projectDesc}>
                Developed a machine learning model for generating synthetic video content
                using deep learning techniques — exploring adversarial networks and
                video synthesis pipelines.
              </p>
            </div>
            <span className={styles.cgpa}>CGPA: 3.04 / 4.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
