// src/components/header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // This function will run every time the user scrolls
    const handleScroll = () => {
      // window.scrollY is the browser's native scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // This is a cleanup function that removes the event listener when the component unmounts
    // It's crucial for performance and preventing memory leaks.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect only runs once on mount and cleanup on unmount

  return (
    // We add the 'scrolled' class based on our state
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