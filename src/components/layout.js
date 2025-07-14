// src/components/layout.js
import React from 'react';
import useLocoScroll from './use-loco-scroll.js';

const Layout = ({ children }) => {
  // Initialize the custom hook. We pass 'true' to start the scroll engine.
  useLocoScroll(true);

  return (
    <div id="main-container" data-scroll-container>
      {/* We will add Header and Footer here later */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;