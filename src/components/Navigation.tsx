'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import styles from './Navigation.module.css';

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-10% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className={styles.header}>
      <div className={'container ' + styles.inner}>
        <Link href={isHome ? '#home' : '/#home'} onClick={() => setOpen(false)} className={styles.identity} aria-label="Filip Koražija home">[fk.]</Link>
        <nav id="site-navigation" aria-label="Main navigation" className={styles.nav + (open ? ' ' + styles.open : '')}
          onKeyDown={event => {
            if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
          }}>
          {links.map(link => <Link key={link.id} href={(isHome ? '' : '/') + '#' + link.id}
            onClick={() => setOpen(false)}
            aria-current={isHome && active === link.id ? 'location' : undefined}>{link.label}</Link>)}
          <Link href="/ai" onClick={() => setOpen(false)} aria-current={pathname === '/ai' ? 'page' : undefined}>AI</Link>
          <a href="https://github.com/filipkorazija" target="_blank" rel="noopener noreferrer" className={styles.github}>GitHub</a>
        </nav>
        <button ref={menuButton} type="button" className={styles.menu}
          aria-expanded={open} aria-controls="site-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}>
          {open ? <Icon name="close" /> : <><span /><span /></>}
        </button>
      </div>
    </header>
  </>;
}
