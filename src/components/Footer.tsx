import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <p>
          &copy; {currentYear} Filip Koražija. All rights reserved.
        </p>
        {/* Optional: Add links to social media or other relevant pages */}
        {/* <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>GitHub</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 