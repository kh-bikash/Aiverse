import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { workflowNodes } from '../../data/aiverseData.js';

export function AIWorkflowBuilder() {
  return (
    <div className="neo-panel p-5">
      <div className="grid gap-4 md:grid-cols-6">
        {workflowNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div key={node.id} className="relative">
              <motion.button
                className="neo-button grid min-h-32 w-full place-items-center gap-3 bg-surface p-4 text-center"
                whileHover={{ y: -4 }}
                aria-label={`Inspect ${node.label} workflow step`}
              >
                <span className="neo-inset grid h-12 w-12 place-items-center text-primary">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="font-mono text-xs font-bold text-text">{node.label}</span>
              </motion.button>
              {index < workflowNodes.length - 1 && (
                <ArrowDown className="mx-auto my-2 rotate-0 text-primary md:absolute md:-right-5 md:top-14 md:my-0 md:-rotate-90" aria-hidden="true" size={18} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
