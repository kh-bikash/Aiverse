import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, BrainCircuit, ChevronDown, Command, Lock, Pin } from 'lucide-react';
import { useState } from 'react';
import { curriculumGroups, osRouteGroups } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function Sidebar() {
  const { bookmarks, setCommandOpen } = useAiverseStore();
  const [openGroups, setOpenGroups] = useState(() => new Set(['AI Fundamentals', 'Deep Learning', 'Interactive Labs']));

  function toggleGroup(label) {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-80 overflow-y-auto border-r border-white/50 bg-surface/80 p-4 shadow-neo backdrop-blur-xl xl:block">
      <div className="neo-panel p-4">
        <NavLink to="/" className="flex items-center gap-3" aria-label="AIVerse home">
          <span className="neo-inset grid h-11 w-11 place-items-center text-primary">
            <BrainCircuit aria-hidden="true" size={22} />
          </span>
          <span>
            <span className="block text-lg font-bold text-text">AIVerse OS</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Interactive AI University</span>
          </span>
        </NavLink>
        <button className="neo-button mt-4 flex w-full items-center justify-between bg-surface px-4 py-3 font-mono text-xs font-bold text-text" onClick={() => setCommandOpen(true)}>
          <span className="inline-flex items-center gap-2">
            <Command aria-hidden="true" size={16} />
            Command palette
          </span>
          <span className="text-primary">Ctrl K</span>
        </button>
      </div>

      <nav className="mt-5 grid gap-5" aria-label="AIVerse OS navigation">
        <section>
          <h2 className="mb-2 px-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-text/55">Learning Matrix</h2>
          <div className="grid gap-2">
            {curriculumGroups.map((group) => {
              const isOpen = openGroups.has(group.label);
              return (
                <div key={group.label} className="rounded-neo">
                  <button
                    className="neo-button flex w-full items-center justify-between bg-surface px-3 py-2.5 font-mono text-xs font-bold text-text"
                    onClick={() => toggleGroup(group.label)}
                    aria-expanded={isOpen}
                  >
                    {group.label}
                    <ChevronDown className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" size={15} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="mt-2 grid gap-1 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {group.items.map((item) => (
                          <NavLink
                            key={item.title}
                            to={item.href}
                            className="grid grid-cols-[1fr_auto] gap-2 rounded-neo px-3 py-2 text-left font-mono text-[11px] text-text/70 hover:bg-surface hover:text-primary hover:shadow-neo-soft"
                          >
                            <span>
                              <span className="flex items-center gap-2 font-bold">
                                {!item.unlocked && <Lock aria-hidden="true" size={12} />}
                                {item.title}
                              </span>
                              <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-secondary shadow-neo-inset">
                                <span className="block h-full bg-primary" style={{ width: `${item.progress}%` }} />
                              </span>
                            </span>
                            <span className="text-right text-[10px] text-primary">
                              {item.progress}%<br />
                              {item.xp} XP<br />
                              {item.minutes}m<br />
                              {item.difficulty}
                            </span>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {osRouteGroups.map((group) => (
          <section key={group.label}>
            <h2 className="mb-2 px-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-text/55">{group.label}</h2>
            <div className="grid gap-1">
              {group.routes.map((route) => {
                const Icon = route.icon;
                const isBookmarked = bookmarks.includes(route.path);
                return (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) =>
                      `group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-neo px-3 py-2.5 font-mono text-xs font-bold transition ${
                        isActive ? 'bg-surface text-primary shadow-neo-inset' : 'text-text/72 hover:bg-surface hover:text-primary hover:shadow-neo-soft'
                      }`
                    }
                  >
                    <Icon aria-hidden="true" size={16} />
                    <span>{route.title}</span>
                    {isBookmarked ? <Bookmark aria-hidden="true" size={14} /> : <Pin aria-hidden="true" className="opacity-0 group-hover:opacity-70" size={14} />}
                  </NavLink>
                );
              })}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
}
