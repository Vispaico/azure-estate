// src/components/header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

// The Header now accepts the 'location' prop from the Layout
const Header = ({ location }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // This effect tracks the user's scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // THE CORE LOGIC:
  // 1. Check if we are on the homepage.
  const isHomepage = location.pathname === '/';
  // 2. The header should be solid if we have scrolled OR if we are NOT on the homepage.
  const isSolid = isScrolled || !isHomepage;

  return (
    // We apply the 'solid' class based on our new logic
    <header className={`${styles.header} ${isSolid ? styles.solid : ''}`}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          AZURE
        </Link>
        <nav className={styles.nav}>
          {/* We need to create these pages next */}
          <Link to="/properties">Properties</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;