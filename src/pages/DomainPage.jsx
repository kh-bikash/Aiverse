import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdaptiveQuiz } from '../components/learning/AdaptiveQuiz.jsx';
import { ChallengeBoard } from '../components/learning/ChallengeBoard.jsx';
import { DomainToolkit } from '../components/learning/DomainToolkit.jsx';
import { InteractiveLearningFlow } from '../components/learning/InteractiveLearningFlow.jsx';
import { VisualChallengeSystem } from '../components/learning/VisualChallengeSystem.jsx';
import { AIModelMechanics } from '../components/os/AIModelMechanics.jsx';
import { AIModelSelectorPanel } from '../components/os/AIModelSelectorPanel.jsx';
import { AITerminal } from '../components/os/AITerminal.jsx';
import { GlobalControls } from '../components/os/GlobalControls.jsx';
import { RecommendationEngine } from '../components/os/RecommendationEngine.jsx';
import { VoiceTutor } from '../components/os/VoiceTutor.jsx';
import { WorkspaceSystem } from '../components/os/WorkspaceSystem.jsx';
import { UniversalSimulationEngine } from '../components/simulations/UniversalSimulationEngine.jsx';
import { AIWorkflowBuilder } from '../components/playground/AIWorkflowBuilder.jsx';
import { AgentMissionSimulator } from '../components/playground/AgentMissionSimulator.jsx';
import { RagInspector } from '../components/playground/RagInspector.jsx';
import { osRoutes } from '../data/osRoutes.js';

const DatasetVisualizer = lazy(() => import('../components/charts/DatasetVisualizer.jsx').then((module) => ({ default: module.DatasetVisualizer })));
const NeuralNetworkCanvas = lazy(() => import('../components/simulations/NeuralNetworkCanvas.jsx').then((module) => ({ default: module.NeuralNetworkCanvas })));
const TransformerVisualizer = lazy(() => import('../components/visualizers/TransformerVisualizer.jsx').then((module) => ({ default: module.TransformerVisualizer })));

function LabFallback({ label }) {
  return (
    <div className="neo-panel neural-loader grid min-h-80 place-items-center p-6 font-mono text-sm font-bold text-primary" role="status">
      Loading {label}
    </div>
  );
}

function RouteSpecificLab({ route }) {
  if (route.path === '/transformers') {
    return (
      <Suspense fallback={<LabFallback label="transformer lab" />}>
        <TransformerVisualizer />
      </Suspense>
    );
  }
  if (route.path === '/rag') return <RagInspector />;
  if (route.path === '/agents') return <AgentMissionSimulator />;
  if (route.path === '/neural-networks') {
    return (
      <Suspense fallback={<LabFallback label="neural network sandbox" />}>
        <NeuralNetworkCanvas />
      </Suspense>
    );
  }
  if (route.path === '/datasets') {
    return (
      <Suspense fallback={<LabFallback label="dataset visualizer" />}>
        <DatasetVisualizer />
      </Suspense>
    );
  }
  if (route.path === '/playgrounds') return <AIWorkflowBuilder />;
  return <UniversalSimulationEngine route={route} />;
}

export function DomainPage() {
  const location = useLocation();
  const route = osRoutes.find((item) => item.path === location.pathname);

  if (!route) return <Navigate to="/dashboard" replace />;

  const Icon = route.icon;
  const activeStep = Math.min(6, Math.floor(route.mastery / 14));

  return (
    <div className="grid gap-6">
      <section className="neo-panel relative overflow-hidden p-6">
        <div className="absolute inset-0 scan-grid opacity-35" aria-hidden="true" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">{route.group}</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-text lg:text-6xl">{route.title}</h2>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-text/74">{route.identity}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="neo-inset px-4 py-3 font-mono text-xs font-bold text-primary">{route.xp.toLocaleString()} route XP</span>
              <span className="neo-inset px-4 py-3 font-mono text-xs font-bold text-primary">{route.mastery}% mastery</span>
              <span className="neo-inset px-4 py-3 font-mono text-xs font-bold text-primary">certification-ready</span>
            </div>
          </div>
          <motion.div
            className="neo-inset grid h-40 w-40 place-items-center justify-self-start rounded-full text-primary lg:justify-self-end"
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            aria-hidden="true"
          >
            <Icon size={64} />
          </motion.div>
        </div>
      </section>

      <div className="xl:hidden">
        <GlobalControls />
      </div>
      <AIModelSelectorPanel />
      <AIModelMechanics />
      <InteractiveLearningFlow activeIndex={activeStep} />
      <DomainToolkit route={route} />
      <RouteSpecificLab route={route} />
      <WorkspaceSystem />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AITerminal />
        <VoiceTutor />
      </div>
      <RecommendationEngine />
      <VisualChallengeSystem />
      <ChallengeBoard route={route} />
      <AdaptiveQuiz />
    </div>
  );
}
