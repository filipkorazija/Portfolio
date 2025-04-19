import React from 'react';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import ProjectsSection from '@/components/Projects';
import SkillsSection from '@/components/Skills';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import styles from './Page.module.css';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
