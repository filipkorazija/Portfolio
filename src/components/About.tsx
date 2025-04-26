import React from 'react';
import AnimatedSection from './AnimSection'; // Import the animation wrapper
import styles from './About.module.css'; // Import CSS Module
import Image from 'next/image'; // Import Next.js Image component

const AboutSection: React.FC = () => {
  return (
    // Wrap the section content with AnimatedSection
    <AnimatedSection
      id="about"
      className={styles.aboutSection}
    >
      {/* New container for text and image */}
      <div className={styles.aboutContentContainer}>
        {/* Image Wrapper */}
        <div className={styles.imageWrapper}>
          {/* Use Next.js Image for optimization */}
          <Image
            src="/profile.png" // Remember to replace!
            alt="Profile Picture"
            width={300} // Specify width
            height={300} // Specify height (should match aspect ratio or adjust objectFit)
            className={styles.aboutImage}
            // Optional: add priority if it's above the fold
            // priority
          />
        </div>

        {/* Text Content Wrapper */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            Hello! I&apos;m Filip Koražija, passionate about Computer Science. 
            I enjoy building things for the web, solving complex problems, and learning new technologies.
          </p>
          <p className={styles.paragraph}>
            In my free time, I like coding personal projects, gaming, and spending time on hobbies.
            Feel free to look around!
          </p>
          {/* Add more paragraphs or details as needed */}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection; 