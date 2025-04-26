'use client';

import { useEffect, useState } from 'react';
import styles from './Snowfall.module.css';

interface SnowflakeProps {
  left: string;
  animationDelay: string;
  animationDuration: string;
  opacity: number;
  size: number;
}

// Function to generate snowflakes
const generateSnowflakes = (count: number): SnowflakeProps[] => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${5 + Math.random() * 10}s`,
    opacity: Math.random() * 0.7 + 0.3,
    size: Math.random() * 5 + 3
  }));
};

export default function Snowfall() {
  // Start with empty array to avoid hydration mismatch
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Only generate snowflakes on the client-side after first render
  useEffect(() => {
    setIsClient(true);
    setSnowflakes(generateSnowflakes(50));
  }, []);

  // Only render snowflakes on the client to avoid hydration mismatch
  if (!isClient) {
    return <div className={styles.container}></div>;
  }

  return (
    <div className={styles.container}>
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className={styles.snowflake}
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay,
            animationDuration: flake.animationDuration,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`
          }}
        />
      ))}
    </div>
  );
} 