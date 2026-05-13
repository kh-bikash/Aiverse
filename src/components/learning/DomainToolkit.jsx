import { motion } from 'framer-motion';
import { defaultToolkits, domainToolkits } from '../../data/osRoutes.js';

export function DomainToolkit({ route }) {
  const tools = domainToolkits[route.path] || defaultToolkits;

  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Dedicated Toolkit</p>
          <h2 className="mt-2 text-2xl font-bold text-text">{route.domain}</h2>
        </div>
        <span className="neo-inset px-3 py-2 font-mono text-xs font-bold text-primary">{tools.length} tools</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <motion.button
            key={tool}
            className="neo-button min-h-28 bg-surface p-4 text-left"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Interactive</span>
            <span className="mt-3 block text-lg font-bold text-text">{tool}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
