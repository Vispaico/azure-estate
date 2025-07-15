// src/components/footer.js
import React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} data-scroll-section>
      <p>&copy; {new Date().getFullYear()} Azure Estates. All rights reserved.</p>
    </footer>
  );
};

export default Footer;