// src/components/layout.js
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Header from './header.js';
import Footer from './footer.js';
import '../styles/global.css';

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header location={location} />
      {/* This motion.main component will wrap our page content */}
      <motion.main
        key={location.pathname} // A unique key is crucial for the animation to re-run on page change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;