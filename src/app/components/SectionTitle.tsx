import { motion } from 'motion/react';

export function SectionTitle({ children, className = 'mb-16' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl tracking-tighter ${className}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
    >
      {children}
    </motion.h2>
  );
}
