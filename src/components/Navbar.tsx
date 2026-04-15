import { useState } from 'react';
import styles from './Navbar.module.scss';
import studioLogo from '../assets/Asgs_Logo.svg';
import MenuIcon from '../assets/Menu_Icon.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <img src={studioLogo} alt="A.S Graphics Studio Logo" className={styles.logo}></img>

      <button 
        className={styles.menuButton} 
        onClick={toggleMenu} 
        aria-expanded={isMenuOpen} 
        aria-label="Toggle navigation menu"
      >
        <img src={MenuIcon} alt="Menu" />
      </button>

      <ul className={styles.navList} data-open={isMenuOpen}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink} onClick={(e) => { e.preventDefault(); closeMenu();}}>
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
