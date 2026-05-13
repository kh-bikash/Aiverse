import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/aiverseData.js';

export function ArchitectureTimeline() {
  return (
    <div className="neo-panel overflow-hidden p-5">
      <ol className="grid gap-4 lg:grid-cols-4">
        {timelineEvents.map((event, index) => (
          <motion.li
            key={event.year}
            className="neo-inset p-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <time className="font-mono text-lg font-bold text-primary">{event.year}</time>
            <h3 className="mt-2 text-base font-bold text-text">{event.title}</h3>
            <p className="mt-2 font-mono text-xs leading-6 text-text/72">{event.detail}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
