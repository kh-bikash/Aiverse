import { motion } from 'framer-motion';

export function GradientFlowAnimation() {
  return (
    <div className="neo-inset relative h-16 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <motion.span
          key={index}
          className="absolute top-1/2 h-2 w-24 rounded-full bg-primary/40"
          style={{ left: `${index * 12}%` }}
          animate={{ x: [0, 42, 0], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.12 }}
        />
      ))}
    </div>
  );
}
