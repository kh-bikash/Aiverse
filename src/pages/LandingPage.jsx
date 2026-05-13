import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { AIChatTutor } from '../components/ai/AIChatTutor.jsx';
import { AIModelCard } from '../components/ai/AIModelCard.jsx';
import { HeroSection } from '../components/dashboard/HeroSection.jsx';
import { LearningCommandCenter } from '../components/dashboard/LearningCommandCenter.jsx';
import { AdaptiveQuiz } from '../components/learning/AdaptiveQuiz.jsx';
import { AgentMissionSimulator } from '../components/playground/AgentMissionSimulator.jsx';
import { AIWorkflowBuilder } from '../components/playground/AIWorkflowBuilder.jsx';
import { RagInspector } from '../components/playground/RagInspector.jsx';
import { ArchitectureTimeline } from '../components/shared/ArchitectureTimeline.jsx';
import { Footer } from '../components/shared/Footer.jsx';
import { SiteHeader } from '../components/shared/SiteHeader.jsx';
import { SectionShell } from '../components/ui/SectionShell.jsx';
import { modelGallery, principles, safetyPillars } from '../data/aiverseData.js';

const DatasetVisualizer = lazy(() => import('../components/charts/DatasetVisualizer.jsx').then((module) => ({ default: module.DatasetVisualizer })));
const InteractiveCodeEditor = lazy(() => import('../components/playground/InteractiveCodeEditor.jsx').then((module) => ({ default: module.InteractiveCodeEditor })));
const LearningRoadmap = lazy(() => import('../components/roadmap/LearningRoadmap.jsx').then((module) => ({ default: module.LearningRoadmap })));
const ModelComparisonLab = lazy(() => import('../components/learning/ModelComparisonLab.jsx').then((module) => ({ default: module.ModelComparisonLab })));
const NeuralNetworkCanvas = lazy(() => import('../components/simulations/NeuralNetworkCanvas.jsx').then((module) => ({ default: module.NeuralNetworkCanvas })));
const PromptPlayground = lazy(() => import('../components/playground/PromptPlayground.jsx').then((module) => ({ default: module.PromptPlayground })));
const Transformer3DScene = lazy(() => import('../components/visualizers/Transformer3DScene.jsx').then((module) => ({ default: module.Transformer3DScene })));
const TransformerVisualizer = lazy(() => import('../components/visualizers/TransformerVisualizer.jsx').then((module) => ({ default: module.TransformerVisualizer })));

function ModuleFallback({ label }) {
  return (
    <div className="neo-panel grid min-h-64 place-items-center p-6 font-mono text-sm font-bold text-primary" role="status">
      Loading {label}
    </div>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />

      <SectionShell
        id="command"
        eyebrow="Learner Command"
        title="Personalized AI Learning OS"
        description="Track module mastery, mark lessons complete, and search the concept graph before jumping into labs."
      >
        <LearningCommandCenter />
      </SectionShell>

      <SectionShell
        id="roadmap"
        eyebrow="Section 02"
        title="Interactive AI Roadmap"
        description="Zoom through a React Flow powered curriculum map that unlocks machine learning, deep learning, LLMs, agents, safety, and MLOps pathways."
      >
        <Suspense fallback={<ModuleFallback label="roadmap" />}>
          <LearningRoadmap />
        </Suspense>
      </SectionShell>

      <SectionShell
        id="llm"
        eyebrow="Section 03"
        title="Live LLM Visualization Engine"
        description="Adjust model parameters and watch tokenization, attention, context windows, hidden states, and next-token probabilities update as an inspectable system."
      >
        <Suspense fallback={<ModuleFallback label="transformer lab" />}>
          <TransformerVisualizer />
        </Suspense>
      </SectionShell>

      <SectionShell
        id="simulator"
        eyebrow="Section 04"
        title="Neural Network Simulator"
        description="A tactile TensorFlow Playground style simulator for activations, gradients, loss, forward propagation, and live training intuition."
      >
        <Suspense fallback={<ModuleFallback label="simulator" />}>
          <NeuralNetworkCanvas />
        </Suspense>
      </SectionShell>

      <SectionShell
        id="labs"
        eyebrow="Extended Labs"
        title="Model Tradeoffs and Knowledge Checks"
        description="Compare architecture choices, inspect model tradeoffs, and test understanding with adaptive feedback."
      >
        <div className="grid gap-5">
          <Suspense fallback={<ModuleFallback label="model comparison" />}>
            <ModelComparisonLab />
          </Suspense>
          <AdaptiveQuiz />
        </div>
      </SectionShell>

      <SectionShell
        id="gallery"
        eyebrow="Section 05"
        title="AI Architecture Gallery"
        description="Compare the mental models behind foundational architectures across language, vision, speech, diffusion, detection, and multimodal intelligence."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modelGallery.map((model) => (
            <AIModelCard key={model.name} model={model} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="playground"
        eyebrow="Section 06"
        title="Generative AI Playground"
        description="Compose prompts, embeddings, vector search, retrieval, model calls, and final responses as a keyboard-friendly workflow canvas."
      >
        <div className="grid gap-5">
          <AIWorkflowBuilder />
          <RagInspector />
          <AgentMissionSimulator />
          <Suspense fallback={<ModuleFallback label="prompt lab" />}>
            <PromptPlayground />
          </Suspense>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <AIChatTutor />
            <Suspense fallback={<ModuleFallback label="code editor" />}>
              <InteractiveCodeEditor />
            </Suspense>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="world"
        eyebrow="3D Mode"
        title="Architecture Worlds"
        description="Rotate, zoom, and inspect a floating transformer world with animated token particles, depth fog, and soft neural lighting."
      >
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Suspense fallback={<ModuleFallback label="3D world" />}>
            <Transformer3DScene />
          </Suspense>
          <div className="neo-panel grid content-start gap-4 p-5">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.label}
                className="neo-inset p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <h3 className="font-bold text-text">{principle.label}</h3>
                <p className="mt-2 font-mono text-xs leading-6 text-text/72">{principle.value}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="datasets"
        eyebrow="Dataset Lab"
        title="Dataset Visualization"
        description="Explore clustering, PCA, distributions, correlations, and embeddings with upload-ready panels designed for future dataset services."
      >
        <Suspense fallback={<ModuleFallback label="dataset lab" />}>
          <DatasetVisualizer />
        </Suspense>
      </SectionShell>

      <SectionShell
        id="timeline"
        eyebrow="Section 07"
        title="AI Timeline"
        description="Trace the path from the Turing Test and perceptrons to transformers, diffusion models, RAG systems, and agentic AI."
      >
        <ArchitectureTimeline />
      </SectionShell>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="safety-title">
        <div className="neo-panel mx-auto max-w-7xl p-6">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">AI Safety Layer</p>
              <h2 id="safety-title" className="mt-3 text-3xl font-bold text-text">
                Safety is part of the interface.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {safetyPillars.map(({ icon: Icon, label }) => (
                <div key={label} className="neo-inset flex items-center gap-3 p-4 font-mono text-xs font-bold text-text">
                  <Icon className="text-primary" aria-hidden="true" size={20} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
