import { motion } from 'framer-motion';
import { Pause, Play, RotateCcw, Save } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ControlSlider } from '../ui/ControlSlider.jsx';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function UniversalSimulationEngine({ route }) {
  const [speed, setSpeed] = useState(62);
  const [complexity, setComplexity] = useState(48);
  const [noise, setNoise] = useState(12);
  const [running, setRunning] = useState(true);
  const saveSimulation = useAiverseStore((state) => state.saveSimulation);
  const nodes = useMemo(() => Array.from({ length: 28 }, (_, index) => ({ id: index, x: (index * 37) % 100, y: (index * 53) % 100 })), []);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="neo-panel relative min-h-[430px] overflow-hidden p-5">
        <div className="absolute inset-0 scan-grid opacity-40" aria-hidden="true" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          {nodes.slice(0, -1).map((node, index) => {
            const next = nodes[index + 1];
            return (
              <motion.line
                key={node.id}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="var(--color-primary)"
                strokeWidth="1"
                animate={{ opacity: running ? [0.12, 0.52, 0.12] : 0.14 }}
                transition={{ duration: 2.8 - speed / 60, repeat: Infinity, delay: index * 0.04 }}
              />
            );
          })}
        </svg>
        <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Universal Simulation Engine</p>
            <h2 className="mt-2 text-3xl font-bold text-text">{route.title} runtime</h2>
            <p className="mt-3 max-w-2xl font-mono text-sm leading-7 text-text/72">{route.identity}</p>
          </div>
          <div className="grid grid-cols-4 gap-3 md:grid-cols-7">
            {nodes.slice(0, 14).map((node, index) => (
              <motion.button
                key={node.id}
                className="neo-button aspect-square rounded-full bg-surface"
                aria-label={`Inspect simulation node ${index + 1}`}
                animate={running ? { scale: [1, 1.15, 1], opacity: [0.74, 1, 0.74] } : { scale: 1 }}
                transition={{ duration: 1.5 + index * 0.03, repeat: Infinity, delay: index * 0.08 }}
              />
            ))}
          </div>
        </div>
      </div>
      <aside className="neo-panel grid content-start gap-4 p-5">
        <h3 className="text-xl font-bold text-text">Simulation controls</h3>
        <ControlSlider label="Runtime speed" value={speed} min={10} max={100} onChange={setSpeed} />
        <ControlSlider label="System complexity" value={complexity} min={10} max={100} onChange={setComplexity} />
        <ControlSlider label="Noise / uncertainty" value={noise} min={0} max={50} onChange={setNoise} />
        <div className="grid grid-cols-3 gap-2">
          <button className="neo-button grid h-12 place-items-center bg-surface text-primary" onClick={() => setRunning((value) => !value)} aria-label={running ? 'Pause simulation' : 'Run simulation'}>
            {running ? <Pause aria-hidden="true" size={18} /> : <Play aria-hidden="true" size={18} />}
          </button>
          <button className="neo-button grid h-12 place-items-center bg-surface text-primary" onClick={() => setNoise(0)} aria-label="Reset simulation">
            <RotateCcw aria-hidden="true" size={18} />
          </button>
          <button className="neo-button grid h-12 place-items-center bg-primary text-secondary" onClick={() => saveSimulation(`${route.title.toLowerCase()}-${Date.now()}`)} aria-label="Save simulation">
            <Save aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="neo-inset p-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">Live telemetry</p>
          <div className="mt-3 grid gap-2 font-mono text-xs text-text/75">
            <span>Signal quality: {Math.max(1, 100 - noise)}%</span>
            <span>Active particles: {Math.round((speed + complexity) / 4)}</span>
            <span>Experiment mode: challenge-ready</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
