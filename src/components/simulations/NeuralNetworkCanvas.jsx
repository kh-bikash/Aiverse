import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useMemo } from 'react';
import { GradientFlowAnimation } from '../animations/GradientFlowAnimation.jsx';
import { NeoButton } from '../ui/NeoButton.jsx';
import { TrainingMetricsChart } from './TrainingMetricsChart.jsx';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function NeuralNetworkCanvas() {
  const { simulatorLayers, neurons, activation, setSimulatorLayers, setNeurons, setActivation } = useAiverseStore();
  const layers = useMemo(() => Array.from({ length: simulatorLayers }, (_, layer) => Array.from({ length: neurons }, (_, neuron) => `${layer}-${neuron}`)), [simulatorLayers, neurons]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="neo-panel overflow-hidden p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-text">Neural Network Simulator</h3>
            <p className="font-mono text-xs text-text/70">forward pass, gradient flow, activation probes</p>
          </div>
          <div className="flex gap-2">
            <NeoButton aria-label="Remove layer" onClick={() => setSimulatorLayers(Math.max(2, simulatorLayers - 1))}>
              <Minus size={16} aria-hidden="true" />
            </NeoButton>
            <NeoButton aria-label="Add layer" onClick={() => setSimulatorLayers(Math.min(7, simulatorLayers + 1))}>
              <Plus size={16} aria-hidden="true" />
            </NeoButton>
          </div>
        </div>
        <div className="neo-inset relative min-h-[360px] overflow-hidden p-6">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            {layers.slice(0, -1).flatMap((layer, layerIndex) =>
              layer.flatMap((_, neuronIndex) =>
                layers[layerIndex + 1].map((__, nextIndex) => (
                  <motion.line
                    key={`${layerIndex}-${neuronIndex}-${nextIndex}`}
                    x1={`${12 + layerIndex * (76 / Math.max(1, layers.length - 1))}%`}
                    y1={`${12 + neuronIndex * (76 / Math.max(1, neurons - 1))}%`}
                    x2={`${12 + (layerIndex + 1) * (76 / Math.max(1, layers.length - 1))}%`}
                    y2={`${12 + nextIndex * (76 / Math.max(1, neurons - 1))}%`}
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    animate={{ opacity: [0.08, 0.34, 0.08] }}
                    transition={{ duration: 2, repeat: Infinity, delay: (neuronIndex + nextIndex) * 0.02 }}
                  />
                )),
              ),
            )}
          </svg>
          <div className="relative z-10 grid h-full" style={{ gridTemplateColumns: `repeat(${layers.length}, minmax(0, 1fr))` }}>
            {layers.map((layer, layerIndex) => (
              <div key={layerIndex} className="flex flex-col items-center justify-between gap-2">
                {layer.map((id, neuronIndex) => (
                  <motion.button
                    key={id}
                    className="neo-button h-8 w-8 rounded-full bg-surface"
                    aria-label={`Inspect neuron ${neuronIndex + 1} in layer ${layerIndex + 1}`}
                    animate={{ scale: [1, 1.12, 1], backgroundColor: ['#e7e5e4', '#f1f2f5', '#e7e5e4'] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: (layerIndex + neuronIndex) * 0.08 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className="neo-panel grid content-start gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-sm font-bold text-text">Neurons</span>
          <input
            className="w-24 rounded-neo bg-surface px-3 py-2 shadow-neo-inset"
            type="number"
            min="3"
            max="12"
            value={neurons}
            onChange={(event) => setNeurons(Math.max(3, Math.min(12, Number(event.target.value))))}
            aria-label="Neuron count"
          />
        </div>
        <label className="grid gap-2 font-mono text-sm font-bold text-text">
          Activation
          <select className="rounded-neo bg-surface px-3 py-3 shadow-neo-inset" value={activation} onChange={(event) => setActivation(event.target.value)}>
            {['ReLU', 'Sigmoid', 'Tanh', 'Softmax'].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <GradientFlowAnimation />
        <TrainingMetricsChart />
      </aside>
    </div>
  );
}
