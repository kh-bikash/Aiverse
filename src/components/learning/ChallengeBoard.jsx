import { Trophy, Zap } from 'lucide-react';
import { achievements } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function ChallengeBoard({ route }) {
  const { xp, streak, savedSimulations } = useAiverseStore();

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="neo-panel p-5">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Challenge System</p>
        <h2 className="mt-2 text-2xl font-bold text-text">{route.title} mastery</h2>
        <div className="mt-5 grid gap-3">
          <div className="neo-inset flex items-center justify-between p-4">
            <span className="font-mono text-xs font-bold text-text">XP balance</span>
            <strong className="text-primary">{xp.toLocaleString()}</strong>
          </div>
          <div className="neo-inset flex items-center justify-between p-4">
            <span className="font-mono text-xs font-bold text-text">Learning streak</span>
            <strong className="text-primary">{streak} days</strong>
          </div>
          <div className="neo-inset flex items-center justify-between p-4">
            <span className="font-mono text-xs font-bold text-text">Saved simulations</span>
            <strong className="text-primary">{savedSimulations.length}</strong>
          </div>
        </div>
      </div>
      <div className="neo-panel p-5">
        <div className="mb-4 flex items-center gap-3">
          <Trophy aria-hidden="true" className="text-primary" size={22} />
          <h2 className="text-2xl font-bold text-text">Achievements</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map(({ title, detail, icon: Icon }) => (
            <article key={title} className="neo-inset p-4">
              <div className="flex items-start gap-3">
                <span className="neo-button grid h-10 w-10 place-items-center bg-surface text-primary">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <div>
                  <h3 className="font-bold text-text">{title}</h3>
                  <p className="mt-1 font-mono text-xs leading-5 text-text/68">{detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="neo-button mt-4 inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-xs font-bold text-secondary">
          <Zap aria-hidden="true" size={16} />
          Launch boss challenge
        </button>
      </div>
    </div>
  );
}
