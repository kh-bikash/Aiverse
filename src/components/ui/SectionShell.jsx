import { motion } from 'framer-motion';

export function SectionShell({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-text/75">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
