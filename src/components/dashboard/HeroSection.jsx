import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedMatrixGrid } from '../animations/AnimatedMatrixGrid.jsx';
import { FloatingParticles } from '../animations/FloatingParticles.jsx';
import { FloatingAIOrb } from '../ai/FloatingAIOrb.jsx';
import { NeuralBackground } from '../ai/NeuralBackground.jsx';
import { TokenFlowAnimation } from '../ai/TokenFlowAnimation.jsx';

const architectureCards = ['Tokenization', 'Attention', 'KV Cache', 'RAG Pipeline'];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8">
      <AnimatedMatrixGrid />
      <NeuralBackground />
      <FloatingParticles />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-neo px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-neo-inset">
            <Sparkles aria-hidden="true" size={16} />
            Neural University Interface
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.02] text-text sm:text-6xl lg:text-7xl">Master AI Visually</h1>
          <p className="mt-6 max-w-2xl font-mono text-base leading-8 text-text/78 sm:text-lg">
            Explore the internals of modern intelligence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/dashboard" className="neo-button inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 py-3 font-bold text-secondary">
              Go to Dashboard <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a href="#llm" className="neo-button inline-flex min-h-12 items-center justify-center gap-2 bg-surface px-6 py-3 font-bold text-text">
              Watch Transformer <Play aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {architectureCards.map((card, index) => (
              <motion.div
                key={card}
                className="neo-panel px-3 py-4 text-center font-mono text-xs font-bold text-text"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.22 }}
              >
                {card}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="neo-panel p-4 lg:p-6" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }}>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Live Preview</p>
              <h2 className="text-xl font-bold text-text">Transformer cockpit</h2>
            </div>
            <FloatingAIOrb />
          </div>
          <div className="grid gap-4">
            <TokenFlowAnimation />
            <div className="grid gap-4 md:grid-cols-3">
              {['12 layers', '8192 ctx', '12 heads'].map((metric) => (
                <div key={metric} className="neo-inset px-4 py-5 text-center font-mono text-sm font-bold text-primary">
                  {metric}
                </div>
              ))}
            </div>
            <div className="neo-inset h-56 p-4">
              <div className="grid h-full grid-cols-6 gap-2">
                {Array.from({ length: 36 }, (_, index) => (
                  <motion.span
                    key={index}
                    className="rounded-[4px] bg-primary"
                    animate={{ opacity: [0.16, 0.82, 0.16] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.035 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
