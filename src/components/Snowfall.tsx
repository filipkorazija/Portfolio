'use client';
import { useState, useSyncExternalStore } from 'react';
import type { CSSProperties } from 'react';
import Icon from './Icon';
import styles from './Snowfall.module.css';
const flakes = Array.from({ length: 30 }, (_, i) => ({ left: ((i * 37 + 13) % 100) + '%', duration: (18 + (i * 7) % 20) + 's', delay: (-((i * 13) % 35)) + 's', size: 1 + i % 3, opacity: .12 + (i % 5) * .04 }));
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}
export default function Snowfall() {
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia('(prefers-reduced-motion: reduce)').matches, () => true);
  const [enabled, setEnabled] = useState<boolean | null>(null);
  // Respect the system default until the visitor explicitly chooses otherwise.
  const active = enabled ?? !reducedMotion;
  return <>
    <div className={styles.container} aria-hidden="true" data-motion-enabled={active}>
      {active && flakes.map((flake, i) => <span key={i} className={styles.flake} style={{
        left: flake.left, width: flake.size, height: flake.size, opacity: flake.opacity,
        '--fall-duration': flake.duration, '--fall-delay': flake.delay,
      } as CSSProperties} />)}
    </div>
    <button type="button" className={styles.toggle} onClick={() => setEnabled(!active)}
      aria-label={active ? 'Pause snowfall' : 'Enable snowfall'} aria-pressed={active}
      title={active ? 'Pause snowfall' : 'Enable snowfall'}>
      <Icon name="snow" size={16} /><span>{active ? 'Pause snow' : 'Enable snow'}</span>
    </button>
  </>;
}
