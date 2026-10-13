import styles from './Hero.module.css';

export default function HeroSection() {
  return <section id="home" className={'container ' + styles.hero}>
    <h1>Filip Koražija</h1>
    <div className={styles.introduction}>
      <p>Developer &amp; computer scientist.</p>
      <p>Web, games, enterprise software,<br className={styles.desktopBreak} /> mobile apps, and AI experiments.</p>
    </div>
  </section>;
}