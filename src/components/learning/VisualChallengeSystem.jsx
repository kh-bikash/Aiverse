import { ArrowRight, CheckCircle2, Move, Puzzle } from 'lucide-react';

const challenges = [
  { title: 'Assemble RAG Flow', type: 'flow completion', prompt: 'Place retrieval before context injection.', icon: ArrowRight },
  { title: 'Token Prediction', type: 'probability challenge', prompt: 'Choose the next likely token after temperature changes.', icon: CheckCircle2 },
  { title: 'Debug Network', type: 'neural repair', prompt: 'Find the layer causing gradient collapse.', icon: Puzzle },
  { title: 'Match Architecture', type: 'visual matching', prompt: 'Connect encoder, decoder, retrieval, and tool stages.', icon: Move },
];

export function VisualChallengeSystem() {
  return (
    <div className="neo-panel p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Interactive Quiz System</p>
      <h2 className="mt-2 text-2xl font-bold text-text">Visual challenge labs</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {challenges.map(({ title, type, prompt, icon: Icon }) => (
          <button key={title} className="neo-button min-h-52 bg-surface p-4 text-left">
            <Icon aria-hidden="true" className="text-primary" size={24} />
            <span className="mt-4 block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{type}</span>
            <strong className="mt-2 block text-text">{title}</strong>
            <span className="mt-2 block font-mono text-xs leading-6 text-text/68">{prompt}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
