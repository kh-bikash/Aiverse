import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { learningSteps } from '../../data/osRoutes.js';

export function InteractiveLearningFlow({ activeIndex = 0 }) {
  return (
    <div className="neo-panel p-5">
      <h2 className="text-xl font-bold text-text">Interactive learning flow</h2>
      <div className="mt-5 grid gap-3 lg:grid-cols-7">
        {learningSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;
          return (
            <motion.div
              key={step}
              className={`neo-inset min-h-28 p-3 ${isActive ? 'text-primary' : 'text-text'}`}
              animate={{ y: isActive ? [0, -6, 0] : 0 }}
              transition={{ duration: 2.2, repeat: isActive ? Infinity : 0 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]">Step {index + 1}</span>
                {isDone && <CheckCircle2 aria-hidden="true" className="text-success" size={16} />}
              </div>
              <p className="mt-3 text-sm font-bold leading-5">{step}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
