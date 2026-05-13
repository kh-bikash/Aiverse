import { useAiverseStore } from '../store/useAiverseStore.js';
import { GlobalControls } from '../components/os/GlobalControls.jsx';
import { AIModelSelectorPanel } from '../components/os/AIModelSelectorPanel.jsx';

export function SettingsPage() {
  const { density, setDensity, bookmarks, savedSimulations } = useAiverseStore();

  return (
    <div className="grid gap-6">
      <section className="neo-panel p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">OS Preferences</p>
        <h2 className="mt-3 text-4xl font-bold text-text">Settings</h2>
        <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-text/74">
          Tune the learning interface for density, accessibility, saved simulations, bookmarks, and future API integrations.
        </p>
      </section>
      <GlobalControls />
      <AIModelSelectorPanel />
      <div className="grid gap-5 lg:grid-cols-3">
        <section className="neo-panel p-5">
          <h3 className="text-xl font-bold text-text">Density</h3>
          <div className="mt-4 grid gap-2">
            {['compact', 'comfortable', 'presentation'].map((option) => (
              <button
                key={option}
                className={`neo-button bg-surface px-4 py-3 text-left font-mono text-xs font-bold ${density === option ? 'neo-pressed text-primary' : 'text-text'}`}
                onClick={() => setDensity(option)}
                aria-pressed={density === option}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
        <section className="neo-panel p-5">
          <h3 className="text-xl font-bold text-text">Bookmarks</h3>
          <div className="mt-4 grid gap-2 font-mono text-xs text-text/72">
            {bookmarks.map((bookmark) => (
              <span key={bookmark} className="neo-inset px-3 py-2">{bookmark}</span>
            ))}
          </div>
        </section>
        <section className="neo-panel p-5">
          <h3 className="text-xl font-bold text-text">Saved simulations</h3>
          <div className="mt-4 grid gap-2 font-mono text-xs text-text/72">
            {savedSimulations.map((simulation) => (
              <span key={simulation} className="neo-inset px-3 py-2">{simulation}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
