// src/components/header.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { LocomotiveScrollContext } from 'react-locomotive-scroll';
import * as styles from './header.module.css';

const Header = () => {
  const { scroll } = useContext(LocomotiveScrollContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        // We set the header to be "scrolled" after scrolling 100px
        if (obj.scroll.y > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }
  }, [scroll]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          AZURE
        </Link>
        <nav className={styles.nav}>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;