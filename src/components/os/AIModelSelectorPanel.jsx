import { motion } from 'framer-motion';
import { aiModels } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function AIModelSelectorPanel() {
  const { selectedModel, setSelectedModel } = useAiverseStore();
  const activeModel = aiModels.find((model) => model.id === selectedModel) || aiModels[0];

  return (
    <div className="neo-panel p-5">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Global Model Selector</p>
          <h2 className="mt-2 text-2xl font-bold text-text">{activeModel.name}</h2>
          <p className="mt-2 font-mono text-xs leading-6 text-text/70">{activeModel.family} · {activeModel.style}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="neo-inset p-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-text/60">Params</span>
              <strong className="mt-1 block text-primary">{activeModel.params}</strong>
            </div>
            <div className="neo-inset p-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-text/60">Context</span>
              <strong className="mt-1 block text-primary">{activeModel.context}</strong>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="grid gap-2 sm:grid-cols-3">
            {aiModels.map((model) => (
              <button
                key={model.id}
                className={`neo-button bg-surface px-3 py-2 text-left font-mono text-xs font-bold ${model.id === selectedModel ? 'neo-pressed text-primary' : 'text-text/72'}`}
                onClick={() => setSelectedModel(model.id)}
                aria-pressed={model.id === selectedModel}
              >
                {model.name}
              </button>
            ))}
          </div>
          <div className="neo-inset p-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">Inference flow</p>
            <div className="mt-4 grid gap-2 md:grid-cols-5">
              {activeModel.flow.map((stage, index) => (
                <motion.div
                  key={stage}
                  className="neo-button bg-surface p-3 text-center font-mono text-[11px] font-bold text-text"
                  animate={{ y: [0, -4, 0], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.12 }}
                >
                  {stage}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
