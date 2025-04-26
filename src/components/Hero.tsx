'use client'; // Needed for the animation library

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css'; // Import CSS Module

const HeroSection: React.FC = () => {

  // Function to scroll to the About section
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    // Scroll down one viewport height + a bit to reach the next section
    window.scrollTo({
      top: heroHeight * 0.9, // Not quite to the next full section (teleport effect)
      behavior: 'smooth'
    });
  };

  // Force-render the arrow regardless of state for debugging
  return (
    // Apply styles from the CSS Module
    <section className={styles.heroSection}>
      <h1 className={styles.mainHeading}>
        Filip Koražija
      </h1>
      <div className={styles.subHeading}>
        I am a{" "}
        <TypeAnimation
          sequence={[
            // You might want to customize these roles further
            'Developer',
            1500,
            'Computer Scientist', // Updated based on occupation
            1500,
            'Creator',
            1500,
            'Gamer', // Added from hobbies
            1500,
            'Tech Enthusiast',
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }} // Keep default style
          repeat={Infinity}
          cursor={true}
        />
      </div>
      {/* Always show the arrow for now (removed conditional) */}
      <button 
        onClick={scrollToNextSection}
        className={styles.scrollPrompt}
        aria-label="Scroll down"
      >
        <span className={styles.arrow}>↓</span>
      </button>
    </section>
  );
};

export default HeroSection; 