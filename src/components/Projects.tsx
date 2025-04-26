'use client'; // Mark as client component because it uses framer-motion

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { createPortal } from 'react-dom'; // Import createPortal
import Image from 'next/image'; // Import Next.js Image
import AnimatedSection from './AnimSection'; // Import the animation wrapper
import { motion } from 'framer-motion'; // Import motion for individual card animation
import styles from './Projects.module.css'; // Import CSS Module

// Define an interface for Project props for type safety
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  projectUrl?: string; // Optional link to live project
  projectLinkLabel?: string; // Optional label for the project link
  repoUrl?: string; // Optional link to GitHub repo
  imageGalleryUrls?: string[]; // Optional array of images for gallery
  externalLinks?: { label: string; url: string }[]; // Optional array for external links (e.g., videos)
}

// Reusable Project Card component - now wrapped with motion.div
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, projectLinkLabel, repoUrl, imageGalleryUrls, externalLinks }) => {
  // State for modal visibility and current image index
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to track if component is mounted (for portal)
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state only on client-side
  useEffect(() => {
    setIsMounted(true);
    // Optional: Add cleanup for body overflow style if needed
    // return () => { document.body.style.overflow = 'auto'; };
  }, []);

  // Define animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handlers for modal
  const openModal = () => {
    setCurrentImageIndex(0); // Reset to first image
    setIsModalOpen(true);
    // Optional: Prevent body scroll when modal is open
    // document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Restore body scroll
    // document.body.style.overflow = 'auto';
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (imageGalleryUrls?.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (imageGalleryUrls?.length ?? 1) - 1 : prevIndex - 1
    );
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
        <div className={styles.projectImageWrapper}>
          <Image 
            src={imageUrl} 
            alt={`${title} screenshot`} 
            fill
            style={{ objectFit: 'cover' }}
            className={styles.projectImage} 
          />
        </div>
      )}
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.linksContainer}>
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            {projectLinkLabel || 'View Project'}
          </a>
        )}
        {imageGalleryUrls && imageGalleryUrls.length > 0 && (
          <button onClick={openModal} className={`${styles.projectLink} ${styles.buttonAsLink}`}>
            View Images
          </button>
        )}
        {/* Render external links */}
        {externalLinks && externalLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            {link.label}
          </a>
        ))}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
            GitHub Repo
          </a>
        )}
      </div>

      {/* Image Gallery Modal - Render using Portal only when mounted */}
      {isMounted && isModalOpen && imageGalleryUrls && imageGalleryUrls.length > 0 &&
        createPortal(
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking content */}
              {/* Inner Wrapper */}
              <div className={styles.modalInnerContent}>
                <button className={styles.closeButton} onClick={closeModal}>&times;</button>
                <Image
                  src={imageGalleryUrls[currentImageIndex]}
                  alt={`Project ${title} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className={styles.modalImage}
                  priority={true}
                />
                {imageGalleryUrls.length > 1 && (
                  <>
                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={showPrevImage}>&#10094;</button>
                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={showNextImage}>&#10095;</button>
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body // Render the modal directly into the body
        )
      }
    </motion.div>
  );
};

// Main Projects Section component
const ProjectsSection: React.FC = () => {
  // Placeholder project data - replace with your actual projects
  const projects: ProjectCardProps[] = [
    {
      title: "Portfolio",
      description: "A dynamic and fully responsive portfolio built with Next.js, CSS, and TypeScript — crafted to bring my work and ideas to life with smooth animations and clean design.",
      imageUrl: "/portfolio.png", // Replace with actual image path
      projectUrl: "#", // Replace with actual URL
    },
    {
      title: "Minecraft Server",
      description: "Founder and developer of ProjectIce, a Minecraft network that grew to over 150 players at peak times and built a strong daily community of 50+ players over three exciting years.",
      imageUrl: "/minecraft5.png", // Replace with actual image path
      // projectUrl: "#", // Removed projectUrl
      imageGalleryUrls: [
        "/minecraft-gallery/minecraft1.png", // Replace with actual image paths
        "/minecraft-gallery/minecraft2.png",
        "/minecraft-gallery/minecraft3.png",
        "/minecraft-gallery/minecraft4.png",
      ],
      externalLinks: [
        { label: "View Video", url: "https://www.youtube.com/watch?v=eZKA4ho3-ao" } // Replace with actual URL
      ],
    },
    {
      title: "E-Classroom (Noodle)",
      description: "Co-creator of Noodle, a collaborative project turned full-fledged e-learning platform, where teachers build classrooms, assign tasks, create exams, and students can partake.",
      imageUrl: "/eclassroom.png", // Replace with actual image path
      imageGalleryUrls: [
        "/eclassroom-gallery/eclassroom1.png", // Replace with actual image paths
        "/eclassroom-gallery/eclassroom2.png",
        "/eclassroom-gallery/eclassroom3.png",
        "/eclassroom-gallery/eclassroom4.png",
      ],
    },
    {
      title: "Archive",
      description: "Built a custom archive platform for a client, designed to organize detailed records of employees, their project assignments, accommodation history, dates, and key documentation — all in one easy-to-navigate system.",
      imageUrl: "/archive.png", // Replace with actual image path
    },
    {
      title: "CarbonSpigot",
      description: "Worked as a tester and bug reporter for CarbonSpigot, a high-performance Minecraft server fork that powered our network to handle 150 players and 90 plugins seamlessly — all with zero lag.",
      imageUrl: "/carbon.png", // Replace with actual image path
      projectUrl: "https://refinedev.xyz/resources/carbon.15/", // Added link placeholder
      projectLinkLabel: "View Product", // Added custom link label
      
    },
  ]

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