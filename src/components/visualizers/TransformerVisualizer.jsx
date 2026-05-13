import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GitBranch, Layers3, Sigma } from 'lucide-react';
import { ControlSlider } from '../ui/ControlSlider.jsx';
import { TokenFlowAnimation } from '../ai/TokenFlowAnimation.jsx';
import { AttentionMap } from './AttentionMap.jsx';
import { probabilityData } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function TransformerVisualizer() {
  const { temperature, contextWindow, layers, embeddingSize, heads, setTemperature, setContextWindow, setLayers, setEmbeddingSize, setHeads } = useAiverseStore();

  return (
    <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
      <aside className="neo-panel grid content-start gap-4 p-5">
        <h3 className="text-xl font-bold text-text">LLM Controls</h3>
        <ControlSlider label="Temperature" value={temperature} min={0} max={1.5} step={0.01} onChange={setTemperature} />
        <ControlSlider label="Context Window" value={contextWindow} min={2048} max={32768} step={1024} onChange={setContextWindow} />
        <ControlSlider label="Layer Count" value={layers} min={4} max={48} step={1} onChange={setLayers} />
        <ControlSlider label="Embedding Size" value={embeddingSize} min={256} max={4096} step={128} onChange={setEmbeddingSize} />
        <ControlSlider label="Head Count" value={heads} min={2} max={32} step={1} onChange={setHeads} />
      </aside>
      <div className="grid gap-5">
        <div className="neo-panel p-5">
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Layers3, label: `${layers} decoder layers` },
              { icon: GitBranch, label: `${heads} attention heads` },
              { icon: Sigma, label: `${embeddingSize}D embeddings` },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="neo-inset flex items-center gap-3 p-4 font-mono text-xs font-bold text-text">
                <Icon className="text-primary" aria-hidden="true" size={18} />
                {label}
              </div>
            ))}
          </div>
          <TokenFlowAnimation />
        </div>
        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <AttentionMap />
          <div className="neo-inset p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-text">Next Token Distribution</h3>
              <span className="font-mono text-xs font-bold text-primary">top-k + top-p</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={probabilityData}>
                  <CartesianGrid stroke="rgba(0,102,102,0.16)" />
                  <XAxis dataKey="token" tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
                  <YAxis tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
                  <Tooltip cursor={{ fill: 'rgba(0,102,102,0.08)' }} />
                  <Bar dataKey="probability" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
