import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <img src="src/assets/Asgs_Logo.svg" className={styles.logo}></img>
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
