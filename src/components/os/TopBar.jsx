import { Bookmark, Command, Menu, Save, Zap } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { osRoutes } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';
import { GlobalControls } from './GlobalControls.jsx';

export function TopBar() {
  const location = useLocation();
  const route = osRoutes.find((item) => item.path === location.pathname);
  const { bookmarks, toggleBookmark, setCommandOpen, xp, streak } = useAiverseStore();
  const isBookmarked = route && bookmarks.includes(route.path);

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-surface/75 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8 xl:ml-80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{route?.domain || 'AIVerse'}</p>
          <h1 className="truncate text-xl font-bold text-text sm:text-2xl">{route?.title || 'Master AI Visually'}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="neo-inset hidden px-3 py-2 font-mono text-xs font-bold text-primary md:block">
            <Zap aria-hidden="true" className="mr-1 inline" size={14} /> {xp.toLocaleString()} XP
          </div>
          <div className="neo-inset hidden px-3 py-2 font-mono text-xs font-bold text-primary md:block">{streak} day streak</div>
          <button className="neo-button grid h-10 w-10 place-items-center bg-surface text-primary xl:hidden" aria-label="Open navigation">
            <Menu aria-hidden="true" size={18} />
          </button>
          <button className="neo-button grid h-10 w-10 place-items-center bg-surface text-primary" onClick={() => setCommandOpen(true)} aria-label="Open command palette">
            <Command aria-hidden="true" size={18} />
          </button>
          {route && (
            <button
              className={`neo-button grid h-10 w-10 place-items-center bg-surface ${isBookmarked ? 'text-warning' : 'text-primary'}`}
              onClick={() => toggleBookmark(route.path)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark route'}
            >
              <Bookmark aria-hidden="true" size={18} />
            </button>
          )}
          <button className="neo-button hidden h-10 items-center gap-2 bg-primary px-4 font-mono text-xs font-bold text-secondary sm:inline-flex">
            <Save aria-hidden="true" size={16} />
            Save lab
          </button>
        </div>
      </div>
      <div className="mx-auto mt-3 hidden max-w-7xl xl:block">
        <GlobalControls />
      </div>
    </header>
  );
}
