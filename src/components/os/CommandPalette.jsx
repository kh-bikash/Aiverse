import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Pin, Search, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { commandPaletteItems } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function CommandPalette() {
  const { commandOpen, setCommandOpen, recentCommands } = useAiverseStore();
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return commandPaletteItems.slice(0, 9);
    return commandPaletteItems.filter((item) => `${item.label} ${item.detail} ${item.type}`.toLowerCase().includes(value)).slice(0, 12);
  }, [query]);
  const groupedResults = useMemo(
    () =>
      results.reduce((groups, item) => {
        const key = item.type;
        return { ...groups, [key]: [...(groups[key] || []), item] };
      }, {}),
    [results],
  );

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          className="fixed inset-0 z-[80] bg-text/22 px-4 py-20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="AIVerse command palette"
        >
          <motion.div
            className="neo-panel mx-auto max-w-3xl p-4"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            <div className="neo-inset flex items-center gap-3 px-4 py-3">
              <Search aria-hidden="true" className="text-primary" size={18} />
              <input
                className="min-w-0 flex-1 bg-transparent font-mono text-sm outline-none"
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search routes, lessons, simulations, visualizers..."
              />
              <button className="neo-button grid h-9 w-9 place-items-center bg-surface text-primary" onClick={() => setCommandOpen(false)} aria-label="Close search">
                <X aria-hidden="true" size={16} />
              </button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-[0.75fr_1.25fr]">
              <aside className="grid content-start gap-3">
                <div className="neo-inset p-3">
                  <p className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                    <Clock aria-hidden="true" size={13} /> Recent
                  </p>
                  {recentCommands.map((item) => (
                    <button key={item} className="block w-full rounded-neo px-2 py-1.5 text-left font-mono text-[11px] text-text/70 hover:text-primary">
                      {item}
                    </button>
                  ))}
                </div>
                <div className="neo-inset p-3">
                  <p className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                    <Pin aria-hidden="true" size={13} /> Pinned
                  </p>
                  {['Transformer Playground', 'RAG Simulator', 'AI Tutor'].map((item) => (
                    <p key={item} className="rounded-neo px-2 py-1.5 font-mono text-[11px] text-text/70">{item}</p>
                  ))}
                </div>
              </aside>
              <div className="grid max-h-[55vh] gap-3 overflow-auto pr-1">
                {Object.entries(groupedResults).map(([group, items]) => (
                  <section key={group}>
                    <h3 className="mb-2 flex items-center gap-2 px-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                      <Sparkles aria-hidden="true" size={13} />
                      {group}
                    </h3>
                    <div className="grid gap-2">
                      {items.map((item) => (
                        <Link
                          key={`${item.type}-${item.label}`}
                          className="neo-button bg-surface p-4 hover:text-primary"
                          to={item.href}
                          onClick={() => setCommandOpen(false)}
                        >
                          <span className="flex items-center justify-between gap-3">
                            <strong className="text-sm text-text">{item.label}</strong>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{item.type}</span>
                          </span>
                          <span className="mt-1 block font-mono text-xs leading-5 text-text/65">{item.detail}</span>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
