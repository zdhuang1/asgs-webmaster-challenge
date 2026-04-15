import styles from './Navbar.module.scss';
import studioLogo from '../assets/Asgs_Logo.svg'

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <img src={studioLogo} alt="A.S Graphics Studio Logo" className={styles.logo}></img>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            HOME
          </a>
        </li>

        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            ABOUT
          </a>
        </li>

        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            CONTACT
          </a>
        </li>

        <li className={styles.navItem}>
          <a href="#work" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            WORK
          </a>
        </li>
      </ul>
    </nav>
  );
}
