import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { conceptIndex, learningModules } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function LearningCommandCenter() {
  const [query, setQuery] = useState('');
  const { completedModules, toggleModule } = useAiverseStore();
  const filteredConcepts = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return conceptIndex.slice(0, 4);
    return conceptIndex.filter((item) => `${item.term} ${item.domain} ${item.detail}`.toLowerCase().includes(value));
  }, [query]);
  const completion = Math.round((completedModules.length / learningModules.length) * 100);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="neo-panel p-5" aria-labelledby="command-progress">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Learner OS</p>
            <h3 id="command-progress" className="mt-2 text-2xl font-bold text-text">
              Mastery cockpit
            </h3>
          </div>
          <div className="neo-inset grid h-24 w-24 place-items-center rounded-full text-center">
            <strong className="text-2xl text-primary">{completion}%</strong>
            <span className="-mt-5 font-mono text-[10px] font-bold text-text/65">complete</span>
          </div>
        </div>
        <div className="mt-5 grid gap-3">
          {learningModules.map((module, index) => {
            const isDone = completedModules.includes(module.id);
            return (
              <motion.button
                key={module.id}
                className="neo-button grid gap-3 bg-surface p-4 text-left sm:grid-cols-[auto_1fr_auto]"
                onClick={() => toggleModule(module.id)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                aria-pressed={isDone}
              >
                <span className={`mt-1 ${isDone ? 'text-success' : 'text-primary'}`}>
                  {isDone ? <CheckCircle2 aria-hidden="true" size={20} /> : <Circle aria-hidden="true" size={20} />}
                </span>
                <span>
                  <span className="block font-bold text-text">{module.title}</span>
                  <span className="mt-1 block font-mono text-xs leading-5 text-text/68">{module.skill}</span>
                  <span className="mt-3 block h-2 overflow-hidden rounded-full bg-secondary shadow-neo-inset">
                    <span className="block h-full bg-primary" style={{ width: `${isDone ? 100 : module.progress}%` }} />
                  </span>
                </span>
                <span className="flex items-center gap-2 font-mono text-xs font-bold text-primary">
                  <Clock aria-hidden="true" size={15} />
                  {module.minutes}m
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="neo-panel p-5" aria-labelledby="concept-search">
        <h3 id="concept-search" className="text-2xl font-bold text-text">
          Concept search
        </h3>
        <label className="neo-inset mt-4 flex items-center gap-3 px-4 py-3">
          <Search className="text-primary" aria-hidden="true" size={18} />
          <span className="sr-only">Search AI concepts</span>
          <input
            className="min-w-0 flex-1 bg-transparent font-mono text-sm text-text outline-none placeholder:text-text/45"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search KV cache, LoRA, RAG..."
          />
        </label>
        <div className="mt-5 grid gap-3">
          {filteredConcepts.map((concept) => (
            <article key={concept.term} className="neo-inset p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-bold text-text">{concept.term}</h4>
                <span className="rounded-neo px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-neo-soft">
                  {concept.domain}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs leading-6 text-text/72">{concept.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
