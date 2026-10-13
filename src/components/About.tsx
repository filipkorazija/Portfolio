import Image from 'next/image';
import styles from './About.module.css';

export default function AboutSection() {
  return <section id="about" className={'container ' + styles.about}>
    <div className={styles.portrait}>
      <Image src="/profile.jpg" alt="Filip Koražija outdoors" fill
        sizes="(max-width: 640px) 90vw, 340px"
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
    </div>
    <div className={styles.story}>
      <h2>About Filip</h2>
      <p>I enjoy building for the web, solving complex problems, and learning new technologies.</p>
      <p>My work spans multiplayer networks, cloud anti-cheat systems, enterprise applications, mobile games, and AI-assisted tools. I also explore robotics and virtual reality through university projects.</p>
      <p>Outside of coding, I spend my time gaming and getting outdoors.</p>
      <a href="https://www.linkedin.com/in/filip-verk-kora%C5%BEija-8818112b5/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-link">Find me on LinkedIn</a>
    </div>
  </section>;
}
