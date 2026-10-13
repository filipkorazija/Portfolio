import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import ProjectsSection from '@/components/Projects';
import SkillsSection from '@/components/Skills';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import styles from './Page.module.css';
export default function Home() {
  return <><Navigation /><main id="main" className={styles.mainContainer}><HeroSection /><ProjectsSection /><AboutSection /><SkillsSection /><ContactSection /><Footer /></main></>;
}