import { agentSteps } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function AgentMissionSimulator() {
  const { selectedAgentStep, setSelectedAgentStep } = useAiverseStore();
  const activeStep = agentSteps.find((step) => step.id === selectedAgentStep) || agentSteps[0];

  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Agent Workflow Builder</p>
          <h3 className="mt-2 text-2xl font-bold text-text">Mission control</h3>
        </div>
        <span className="neo-inset px-4 py-3 font-mono text-xs font-bold text-primary">tool-safe loop</span>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3 sm:grid-cols-5">
          {agentSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === selectedAgentStep;
            return (
              <button
                key={step.id}
                className={`neo-button grid min-h-28 place-items-center gap-2 bg-surface p-3 text-center ${isActive ? 'neo-pressed text-primary' : 'text-text'}`}
                onClick={() => setSelectedAgentStep(step.id)}
                aria-pressed={isActive}
              >
                <Icon aria-hidden="true" size={22} />
                <span className="font-mono text-xs font-bold">{step.label}</span>
              </button>
            );
          })}
        </div>
        <article className="neo-inset p-5">
          <h4 className="text-xl font-bold text-text">{activeStep.label}</h4>
          <p className="mt-3 font-mono text-sm leading-7 text-text/74">{activeStep.output}</p>
          <div className="mt-5 grid gap-2">
            {['observable state', 'permission boundary', 'failure recovery'].map((item) => (
              <span key={item} className="rounded-neo px-3 py-2 font-mono text-xs font-bold text-primary shadow-neo-soft">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
