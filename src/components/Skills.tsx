'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

// Updated Skills Data with proficiency levels (0-100)
// Replace with your actual skills and self-assessed levels!
const skillsData = [
  { name: "PHP", level: 75 },
  { name: "TSX / JS", level: 65 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 90 }, // Example 90%
  { name: "Node.js", level: 60 },
  { name: "C#", level: 50 },
  { name: "CSS3", level: 85 },
  { name: "SQL", level: 70 },
  { name: "Tailwind", level: 75 },
  // Add more skills...
];

// Animation variants for the list container (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation of each skill item
    },
  },
};

// Animation variants for each skill item (fade in up)
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection: React.FC = () => {
  return (
    <AnimatedSection id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>My Skills</h2>
      {/* Use motion.div for the container to enable variants */}
      <motion.div
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillsData.map((skill, index) => (
          <motion.div key={index} className={styles.skillItem} variants={itemVariants}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.progressBarContainer}>
              <motion.div
                className={styles.progressBarFill}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default SkillsSection; 