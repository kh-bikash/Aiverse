import { useMemo, useState } from 'react';
import Editor from '@monaco-editor/react';
import { WandSparkles } from 'lucide-react';
import { NeoButton } from '../ui/NeoButton.jsx';

export function PromptPlayground() {
  const [prompt, setPrompt] = useState('Explain multi-head attention with a short visual analogy.');
  const preview = useMemo(() => {
    const words = prompt.split(/\s+/).filter(Boolean).slice(0, 10);
    return words.map((word, index) => ({ word, weight: 0.25 + ((index * 17) % 70) / 100 }));
  }, [prompt]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="neo-panel overflow-hidden p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-text">Prompt Engineering Lab</h3>
          <NeoButton variant="primary">
            <WandSparkles aria-hidden="true" size={16} />
            Simulate
          </NeoButton>
        </div>
        <div className="overflow-hidden rounded-neo shadow-neo-inset">
          <Editor
            height="260px"
            defaultLanguage="markdown"
            value={prompt}
            onChange={(value) => setPrompt(value || '')}
            options={{ minimap: { enabled: false }, fontFamily: 'JetBrains Mono', fontSize: 14, wordWrap: 'on', lineNumbers: 'off' }}
          />
        </div>
      </div>
      <div className="neo-panel p-5">
        <h3 className="text-lg font-bold text-text">Embedding Probe</h3>
        <div className="mt-4 grid gap-3">
          {preview.map((item) => (
            <div key={item.word} className="grid grid-cols-[7rem_1fr] items-center gap-3">
              <span className="truncate font-mono text-xs font-bold text-text">{item.word}</span>
              <span className="neo-inset h-5 overflow-hidden">
                <span className="block h-full bg-primary" style={{ width: `${item.weight * 100}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
