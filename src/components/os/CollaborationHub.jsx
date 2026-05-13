import { Users } from 'lucide-react';
import { collaborators } from '../../data/osRoutes.js';

export function CollaborationHub() {
  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex items-center gap-3">
        <Users aria-hidden="true" className="text-primary" size={22} />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Multiplayer Learning</p>
          <h2 className="text-2xl font-bold text-text">Live lab collaborators</h2>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {collaborators.map((person) => (
          <article key={person.name} className="neo-inset p-4">
            <div className="neo-button grid h-12 w-12 place-items-center rounded-full bg-surface font-bold text-primary">{person.name.slice(0, 1)}</div>
            <h3 className="mt-3 font-bold text-text">{person.name}</h3>
            <p className="font-mono text-xs text-primary">{person.role}</p>
            <p className="mt-2 font-mono text-xs leading-5 text-text/68">{person.status}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
