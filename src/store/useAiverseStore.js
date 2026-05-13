import { create } from 'zustand';

export const useAiverseStore = create((set) => ({
  temperature: 0.72,
  contextWindow: 8192,
  layers: 12,
  embeddingSize: 768,
  heads: 12,
  simulatorLayers: 4,
  neurons: 8,
  activation: 'ReLU',
  selectedRoadmapNode: 'ai',
  completedModules: ['tokenization', 'attention'],
  quizAnswers: {},
  selectedAgentStep: 'plan',
  ragQuery: 'How does attention help a transformer reason over context?',
  commandOpen: false,
  bookmarks: ['/transformers', '/rag', '/agents'],
  savedSimulations: ['attention-beam-replay', 'rag-ranking-run', 'gradient-descent-07'],
  xp: 12840,
  streak: 12,
  density: 'compact',
  learningMode: 'visual',
  selectedModel: 'gpt4',
  visualizationType: 'Attention Graph',
  difficulty: 'Intermediate',
  simulationQuality: 'High',
  theme: 'Matrix',
  terminalHistory: [{ command: 'simulate transformer', output: 'Transformer simulation is ready. Token flow and attention beams are online.' }],
  recentCommands: ['simulate transformer', 'launch rag-lab', 'visualize embeddings'],
  activeWorkspacePanels: ['simulation', 'tutor', 'notes', 'terminal', 'architecture'],
  setTemperature: (temperature) => set({ temperature }),
  setContextWindow: (contextWindow) => set({ contextWindow }),
  setLayers: (layers) => set({ layers }),
  setEmbeddingSize: (embeddingSize) => set({ embeddingSize }),
  setHeads: (heads) => set({ heads }),
  setSimulatorLayers: (simulatorLayers) => set({ simulatorLayers }),
  setNeurons: (neurons) => set({ neurons }),
  setActivation: (activation) => set({ activation }),
  setSelectedRoadmapNode: (selectedRoadmapNode) => set({ selectedRoadmapNode }),
  toggleModule: (moduleId) =>
    set((state) => ({
      completedModules: state.completedModules.includes(moduleId)
        ? state.completedModules.filter((id) => id !== moduleId)
        : [...state.completedModules, moduleId],
    })),
  answerQuiz: (questionId, answer) =>
    set((state) => ({
      quizAnswers: { ...state.quizAnswers, [questionId]: answer },
    })),
  setSelectedAgentStep: (selectedAgentStep) => set({ selectedAgentStep }),
  setRagQuery: (ragQuery) => set({ ragQuery }),
  setCommandOpen: (commandOpen) => set({ commandOpen }),
  toggleBookmark: (path) =>
    set((state) => ({
      bookmarks: state.bookmarks.includes(path) ? state.bookmarks.filter((item) => item !== path) : [...state.bookmarks, path],
    })),
  saveSimulation: (simulationId) =>
    set((state) => ({
      savedSimulations: state.savedSimulations.includes(simulationId) ? state.savedSimulations : [...state.savedSimulations, simulationId],
      xp: state.xp + 120,
    })),
  setDensity: (density) => set({ density }),
  setLearningMode: (learningMode) => set({ learningMode }),
  setSelectedModel: (selectedModel) => set({ selectedModel }),
  setVisualizationType: (visualizationType) => set({ visualizationType }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setSimulationQuality: (simulationQuality) => set({ simulationQuality }),
  setTheme: (theme) => set({ theme }),
  runTerminalCommand: (command, output) =>
    set((state) => ({
      terminalHistory: [...state.terminalHistory, { command, output }],
      recentCommands: [command, ...state.recentCommands.filter((item) => item !== command)].slice(0, 5),
      xp: state.xp + 40,
    })),
  toggleWorkspacePanel: (panelId) =>
    set((state) => ({
      activeWorkspacePanels: state.activeWorkspacePanels.includes(panelId)
        ? state.activeWorkspacePanels.filter((item) => item !== panelId)
        : [...state.activeWorkspacePanels, panelId],
    })),
}));
