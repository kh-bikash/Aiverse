import { motion } from 'framer-motion';
import { tokenSequence } from '../../data/aiverseData.js';

export function TokenFlowAnimation() {
  return (
    <div className="neo-inset relative h-24 overflow-hidden p-3" aria-label="Animated token stream">
      {tokenSequence.map((token, index) => (
        <motion.span
          key={token}
          className="absolute top-8 rounded-neo bg-secondary px-3 py-2 font-mono text-xs font-bold text-primary shadow-neo-soft"
          initial={{ x: -140, opacity: 0 }}
          animate={{ x: ['-12rem', '44rem'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: index * 0.75, ease: 'linear' }}
        >
          {token}
        </motion.span>
      ))}
    </div>
  );
}
