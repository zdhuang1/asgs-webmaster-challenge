import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Main site footer">
      <p className={styles.footerText}>
        MADE WITH ♡ BY A.S. GRAPHIC STUDIO
      </p>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <a href="#home" className={styles.footerLink} onClick={(e) => e.preventDefault()}>
            EMAIL
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#about" className={styles.footerLink} onClick={(e) => e.preventDefault()}>
            RESUME
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#contact" className={styles.footerLink} onClick={(e) => e.preventDefault()}>
            INSTAGRAM
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#work" className={styles.footerLink} onClick={(e) => e.preventDefault()}>
            LINKEDIN
          </a>
        </li>
      </ul>
    </footer>
  );
}
