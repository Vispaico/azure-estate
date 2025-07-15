// src/components/layout.js
import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Header from './header.js';
import Footer from './footer.js';

const Layout = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
      }}
      watch={[]} // Add elements to watch for size changes
      containerRef={containerRef}
    >
      <div id="main-container" data-scroll-container ref={containerRef}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Layout;