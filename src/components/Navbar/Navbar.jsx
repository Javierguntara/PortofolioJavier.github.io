import React, {useState} from 'react'   

import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);

  return <nav className={styles.navbar}>
    <a className={styles.title} href='/'>PORTOFOLIO JAVIER </a>
    <div className={styles.menu}>
        <img 
        className={styles.menuBtn} 
        src={
          menuOpen 
          ? '/assets/icon/icons8-close-50.png'
          : '/assets/icon/icons8-menu-50.png'
        } 
        alt="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          <li>
                <a href="#about">TENTANG SAYA</a>
            </li>  
            <li>
                <a href="#experience">PENGALAMAN</a>
            </li>  
            <li>
                <a href="#projects">PROJECTS</a>
            </li>
            <li>
                <a href="#contact">KONTAK</a>
            </li>
        </ul>
    </div>
  </nav>
};
