// src/components/use-loco-scroll.js
import { useEffect } from 'react';
// Do NOT import the SCSS here. We will do it in gatsby-browser.js

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    // We are dynamically importing LocomotiveScroll here to ensure it's only loaded on the client
    import('locomotive-scroll').then((LocomotiveScroll) => {
      const scrollEl = document.querySelector('#main-container');
      
      const locoScroll = new LocomotiveScroll.default({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-ready',
      });

      // Cleanup function to destroy the scroll instance
      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    });
  }, [start]);
}