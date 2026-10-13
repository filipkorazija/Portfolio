'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

const email = 'verkkorazijaf@gmail.com';
const discord = '.astonic';

export default function ContactSection() {
  const [copied, setCopied] = useState<'email' | 'discord' | null>(null);
  const [copyError, setCopyError] = useState<'email' | 'discord' | null>(null);
  const copyContact = async (target: 'email' | 'discord') => {
    try {
      await navigator.clipboard.writeText(target === 'email' ? email : discord);
      setCopied(target); setCopyError(null);
    } catch { setCopyError(target); setCopied(null); }
  };
  return <section id="contact" className={'container ' + styles.contact}>
    <div className={styles.intro}>
      <h2>Let&apos;s talk.</h2>
      <p>Project ideas, questions, or a hello.</p>
    </div>
    <div className={styles.details}>
      <div className={styles.discord}>
        <p>Most active on Discord</p>
        <button type="button" onClick={() => copyContact('discord')} aria-label="Copy Discord username .astonic">
          <span className={styles.handle}>{discord}</span>
          <span className={styles.copyLabel}>{copied === 'discord' ? 'Copied' : 'Copy username'}</span>
        </button>
      </div>
      <a href={'mailto:' + email} className={styles.email}>{email}</a>
      <div className={styles.links}>
        <button type="button" onClick={() => copyContact('email')} aria-label="Copy email address">{copied === 'email' ? 'Copied' : 'Copy email'}</button>
        <a href="https://github.com/filipkorazija" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/filip-verk-kora%C5%BEija-8818112b5/?isSelfProfile=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className={styles.copyStatus} role="status">{copied === 'discord' ? 'Discord username copied to clipboard.' : copied === 'email' ? 'Email copied to clipboard.' : copyError === 'discord' ? 'Copy failed. My Discord username is .astonic.' : copyError === 'email' ? 'Copy failed. Select the email address to copy it.' : ''}</p>
    </div>
  </section>;
}
