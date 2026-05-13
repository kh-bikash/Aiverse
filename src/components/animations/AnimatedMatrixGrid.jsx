import { motion } from 'framer-motion';

export function AnimatedMatrixGrid() {
  return (
    <motion.div
      className="scan-grid pointer-events-none absolute inset-0 opacity-70"
      aria-hidden="true"
      animate={{ backgroundPosition: ['0px 0px', '42px 42px'] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
    />
  );
}
