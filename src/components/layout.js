// src/components/layout.js
import React from 'react'; // We no longer need useEffect
import Header from './header.js';
import Footer from './footer.js';
import '../styles/global.css';

const Layout = ({ children, location }) => {
  // The useEffect for scrolling has been REMOVED.
  // gatsby-browser.js now handles this correctly.

  return (
    <div>
      <Header location={location} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;