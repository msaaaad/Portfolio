import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.left}>
          © {new Date().getFullYear()} <span>Moinul Islam Shad</span>. All rights reserved.
        </p>
        <p className={styles.right}>
          Built with <span>React</span> + <span>Vite</span> · Hosted on <span>Vercel</span>
        </p>
      </div>
    </footer>
  );
}
