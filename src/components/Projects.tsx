'use client'; // Mark as client component because it uses framer-motion

import React from 'react';
import AnimatedSection from './AnimatedSection'; // Import the animation wrapper
import { motion } from 'framer-motion'; // Import motion for individual card animation
import styles from './Projects.module.css'; // Import CSS Module

// Define an interface for Project props for type safety
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  projectUrl?: string; // Optional link to live project
  repoUrl?: string; // Optional link to GitHub repo
}

// Reusable Project Card component - now wrapped with motion.div
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, repoUrl }) => {
  // Define animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      // Initial and animate props will be controlled by the parent AnimatedSection's stagger
      // Add hover scale effect directly via Tailwind or Framer Motion's whileHover
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {imageUrl && (
        <img src={imageUrl} alt={`${title} screenshot`} className={styles.projectImage} />
      )}
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.linksContainer}>
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
            GitHub Repo
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Main Projects Section component
const ProjectsSection: React.FC = () => {
  // Placeholder project data - replace with your actual projects
  const projects: ProjectCardProps[] = [
    {
      title: "Project One",
      description: "A brief description of Project One. What it does, technologies used, etc.",
      imageUrl: "/placeholder-project1.png", // Replace with actual image path
      projectUrl: "#", // Replace with actual URL
      repoUrl: "#", // Replace with actual URL
    },
    {
      title: "Project Two",
      description: "An overview of Project Two, highlighting key features and challenges.",
      imageUrl: "/placeholder-project2.png", // Replace with actual image path
      projectUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Three",
      description: "Details about Project Three.",
      // No image for this one as an example
      projectUrl: "#",
      repoUrl: "#",
    },
  ];

  // Define stagger animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children by 0.2s
      },
    },
  };

  return (
    // Wrap the main section content
    <AnimatedSection
      id="projects"
      className={styles.projectsSection}
    >
      <h2 className={styles.heading}>My Projects</h2>
      {/* Use motion.div for the grid container to apply stagger animation */}
      <motion.div
        className={styles.gridContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate children when the container becomes visible
      >
        {projects.map((project, index) => (
          // ProjectCard itself is now a motion component, it will inherit animation control
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default ProjectsSection; 