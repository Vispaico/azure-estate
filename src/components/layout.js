// src/components/layout.js
import React, { useState, useEffect } from 'react';
import useLocoScroll from './use-loco-scroll.js';

const Layout = ({ children }) => {
  // We need state to tell our hook when it's safe to run
  const [preloader, setPreloader] = useState(true);

  // This effect will run once, only on the client, after the component mounts
  useEffect(() => {
    setPreloader(false);
  }, []);

  // We pass the OPPOSITE of preloader to our hook.
  // It will be 'false' on the server and during the initial load, then 'true' on the client.
  useLocoScroll(!preloader);

  return (
    <div id="main-container" data-scroll-container>
      {/* We will add a preloader here later if we want */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;