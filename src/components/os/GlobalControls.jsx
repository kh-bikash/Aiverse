import { aiModels, learningModes, visualizationDropdowns } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';
import { NeoSelect } from '../ui/NeoSelect.jsx';

export function GlobalControls({ compact = false }) {
  const {
    learningMode,
    selectedModel,
    visualizationType,
    difficulty,
    simulationQuality,
    theme,
    setLearningMode,
    setSelectedModel,
    setVisualizationType,
    setDifficulty,
    setSimulationQuality,
    setTheme,
  } = useAiverseStore();

  return (
    <div className={`grid gap-3 ${compact ? 'xl:grid-cols-2' : 'md:grid-cols-3 xl:grid-cols-6'}`}>
      <NeoSelect compact={compact} label="How to learn" value={learningMode} options={learningModes} onChange={setLearningMode} />
      <NeoSelect compact={compact} label="AI model" value={selectedModel} options={aiModels} onChange={setSelectedModel} />
      <NeoSelect compact={compact} label="Visualization" value={visualizationType} options={visualizationDropdowns.visualization} onChange={setVisualizationType} />
      <NeoSelect compact={compact} label="Difficulty" value={difficulty} options={visualizationDropdowns.difficulty} onChange={setDifficulty} />
      <NeoSelect compact={compact} label="Quality" value={simulationQuality} options={visualizationDropdowns.quality} onChange={setSimulationQuality} />
      <NeoSelect compact={compact} label="Theme" value={theme} options={visualizationDropdowns.theme} onChange={setTheme} />
    </div>
  );
}
