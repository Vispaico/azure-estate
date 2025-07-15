// src/components/hero.js
import React from 'react';
import * as styles from './hero.module.css';
import heroVideo from '../videos/hero-video1.mp4';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.video}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.headline}>
          Experience Exceptional Living
        </h1>
      </div>
    </section>
  );
};

export default Hero;