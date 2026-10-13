'use client';
import { motion, useReducedMotion } from 'framer-motion';
export default function AnimatedSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.section id={id} className={className} initial={false} whileInView={reducedMotion ? undefined : { opacity: [0.7, 1], y: [15, 0] }} viewport={{ once: true, amount: .08 }} transition={{ duration: .65, ease: 'easeOut' }}>{children}</motion.section>;
}