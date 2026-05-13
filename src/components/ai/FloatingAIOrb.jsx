import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export function FloatingAIOrb() {
  return (
    <motion.div
      className="neo-panel grid h-32 w-32 place-items-center rounded-full"
      animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="neo-inset grid h-20 w-20 place-items-center rounded-full text-primary">
        <BrainCircuit size={38} />
      </div>
    </motion.div>
  );
}
