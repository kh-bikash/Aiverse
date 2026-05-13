import { Mic, Volume2 } from 'lucide-react';
import { useState } from 'react';

const voices = ['Researcher', 'Teacher', 'Engineer', 'Assistant'];

export function VoiceTutor() {
  const [voice, setVoice] = useState('Teacher');
  const [narrating, setNarrating] = useState(false);

  return (
    <div className="neo-panel p-5">
      <div className="mb-4 flex items-center gap-3">
        <Volume2 aria-hidden="true" className="text-primary" size={22} />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Voice AI Tutor</p>
          <h2 className="text-2xl font-bold text-text">Narration mode</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-4">
        {voices.map((item) => (
          <button key={item} className={`neo-button bg-surface px-4 py-3 font-mono text-xs font-bold ${voice === item ? 'neo-pressed text-primary' : 'text-text'}`} onClick={() => setVoice(item)}>
            {item}
          </button>
        ))}
      </div>
      <button className="neo-button mt-4 inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-xs font-bold text-secondary" onClick={() => setNarrating((value) => !value)}>
        <Mic aria-hidden="true" size={16} />
        {narrating ? `Stop ${voice}` : `Start ${voice}`}
      </button>
      <p className="mt-4 font-mono text-xs leading-6 text-text/70">
        {narrating ? `${voice} voice is narrating the active architecture walkthrough.` : 'Enable narrated explanations for labs, diagrams, and code walkthroughs.'}
      </p>
    </div>
  );
}
