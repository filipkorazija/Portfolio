'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
  id?: string; // Allow passing id for navigation
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, id }) => {
  const ref = useRef(null);
  // useInView tracks if the element is in the viewport
  const isInView = useInView(ref, {
    once: true, // Only trigger the animation once
    amount: 0.2, // Trigger when 20% of the element is visible
    margin: "-50px 0px -50px 0px" // Adjust viewport margin if needed
  });

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Animate to visible and original position
  };

  return (
    // Use motion.section for semantic HTML
    <motion.section
      ref={ref}
      id={id}
      className={className} // Apply passed class names
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on viewport visibility
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 