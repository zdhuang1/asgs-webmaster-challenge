import styles from './Footer.module.scss';
import GmailIcon from '../assets/GmailIcon.svg';
import ResumeIcon from '../assets/ResumeIcon.svg';
import InstagramIcon from '../assets/InstagramIcon.svg';
import LinkedInIcon from '../assets/LinkedInIcon.svg';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Main site footer">
      <p className={styles.footerText}>
        MADE WITH ♡ BY A.S. GRAPHIC STUDIO
      </p>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <a href="#home" className={styles.footerLink} onClick={(e) => e.preventDefault()} aria-label="Email">
            <span className={styles.linkText}>EMAIL</span>
            <img src={GmailIcon} alt="" className={styles.linkIcon} aria-hidden="true" />
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#about" className={styles.footerLink} onClick={(e) => e.preventDefault()} aria-label="Resume">
            <span className={styles.linkText}>RESUME</span>
            <img src={ResumeIcon} alt="" className={styles.linkIcon} aria-hidden="true" />
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#contact" className={styles.footerLink} onClick={(e) => e.preventDefault()} aria-label="Instagram">
            <span className={styles.linkText}>INSTAGRAM</span>
            <img src={InstagramIcon} alt="" className={styles.linkIcon} aria-hidden="true" />
          </a>
        </li>

        <li className={styles.footerItem}>
          <a href="#work" className={styles.footerLink} onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
            <span className={styles.linkText}>LINKEDIN</span>
            <img src={LinkedInIcon} alt="" className={styles.linkIcon} aria-hidden="true" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
