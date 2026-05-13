import { motion } from 'framer-motion';
import { modelMechanics } from '../../data/osRoutes.js';

export function AIModelMechanics() {
  return (
    <div className="neo-panel p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">How ChatGPT, Gemini, Claude and modern AI assistants work</p>
      <h2 className="mt-2 text-2xl font-bold text-text">Model mechanics timeline</h2>
      <div className="mt-5 grid gap-3 lg:grid-cols-6">
        {modelMechanics.map((stage, index) => (
          <motion.article
            key={stage.stage}
            className="neo-inset min-h-44 p-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">0{index + 1}</span>
            <h3 className="mt-3 text-sm font-bold text-text">{stage.stage}</h3>
            <p className="mt-2 font-mono text-[11px] leading-5 text-text/68">{stage.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
