import styles from './Footer.module.css';

export default function Footer({ topHref = '#home' }: { topHref?: string }) {
  return <footer className={'container ' + styles.footer}>
    <p>© {new Date().getFullYear()} Filip Koražija</p>
    <a href={topHref}>Back to top</a>
  </footer>;
}
