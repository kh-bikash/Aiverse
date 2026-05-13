import { motion } from 'framer-motion';

export function FloatingParticles({ count = 36 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_18px_rgba(0,102,102,0.55)]"
          style={{
            left: `${(index * 31) % 100}%`,
            top: `${(index * 47) % 100}%`,
          }}
          animate={{
            y: [0, -24 - (index % 5) * 8, 0],
            opacity: [0.25, 0.85, 0.25],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 4 + (index % 6),
            repeat: Infinity,
            delay: index * 0.08,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
