'use client';

import React, { useRef, useEffect } from 'react';
import styles from './SnowEffect.module.css';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  density: number;
  opacity: number;
}

const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakes = useRef<Snowflake[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const snowflakeCount = 150; // Adjust density as needed

    // Initialize snowflakes only if the array is empty
    if (snowflakes.current.length === 0) {
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 3 + 1, // radius range 1-4px
          density: Math.random() * snowflakeCount, // used for speed/drift
          opacity: Math.random() * 0.5 + 0.3 // opacity range 0.3-0.8
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // Use flake opacity for individual styling
      snowflakes.current.forEach((flake) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.beginPath();
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
        ctx.fill(); // Fill inside the loop for individual opacity
      });
      update();
      animationFrameId.current = requestAnimationFrame(draw);
    };

    const update = () => {
      snowflakes.current.forEach((flake, i) => {
        // Basic falling + subtle wind effect
        flake.y += Math.pow(flake.density / snowflakeCount, 2) * 0.5 * flake.radius;
        flake.x += Math.sin(i + flake.y * 0.01) * flake.radius * 0.1; // Gentle side drift

        // Reset snowflake if it falls off screen
        if (flake.y > height) {
          snowflakes.current[i] = { ...flake, x: Math.random() * width, y: -10 };
        }
        // Reset if it drifts too far horizontally (optional)
        if (flake.x > width + 10) {
            snowflakes.current[i] = { ...flake, x: -10, y: Math.random() * height };
        } else if (flake.x < -10) {
            snowflakes.current[i] = { ...flake, x: width + 10, y: Math.random() * height };
        }
      });
    };

    // Handle resize
    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        if (canvasRef.current) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            // Optional: Re-initialize or reposition snowflakes on resize if needed
        }
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    draw();

    // Cleanup function
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      // Setting length to 0 is safer than assigning a new array to the ref's .current
      // This clears the array for potential remounts without violating ref rules.
      snowflakes.current.length = 0;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <canvas ref={canvasRef} className={styles.snowCanvas} />;
};

export default SnowEffect; 