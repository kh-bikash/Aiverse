import { Link } from 'react-router-dom';
import { LearningCommandCenter } from '../components/dashboard/LearningCommandCenter.jsx';
import { ChallengeBoard } from '../components/learning/ChallengeBoard.jsx';
import { VisualChallengeSystem } from '../components/learning/VisualChallengeSystem.jsx';
import { AIModelMechanics } from '../components/os/AIModelMechanics.jsx';
import { AIModelSelectorPanel } from '../components/os/AIModelSelectorPanel.jsx';
import { AITerminal } from '../components/os/AITerminal.jsx';
import { CollaborationHub } from '../components/os/CollaborationHub.jsx';
import { Marketplace } from '../components/os/Marketplace.jsx';
import { ProfileAnalytics } from '../components/os/ProfileAnalytics.jsx';
import { RecommendationEngine } from '../components/os/RecommendationEngine.jsx';
import { VoiceTutor } from '../components/os/VoiceTutor.jsx';
import { WorkspaceSystem } from '../components/os/WorkspaceSystem.jsx';
import { UniversalSimulationEngine } from '../components/simulations/UniversalSimulationEngine.jsx';
import { osRoutes } from '../data/osRoutes.js';

const dashboardRoute = osRoutes.find((route) => route.path === '/dashboard');

export function OSDashboard() {
  const priorityRoutes = osRoutes.filter((route) => ['/transformers', '/rag', '/agents', '/neural-networks', '/generative-ai', '/ai-safety'].includes(route.path));

  return (
    <div className="grid gap-6">
      <section className="neo-panel p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">AIVerse Learning OS</p>
        <h2 className="mt-3 text-4xl font-bold text-text lg:text-6xl">Your AI operating system is live.</h2>
        <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-text/74">
          Launch domain labs, track mastery, search every concept, save simulations, and build a visual-first AI skill graph.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {priorityRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <Link key={route.path} to={route.path} className="neo-button bg-surface p-4 hover:text-primary">
                <Icon aria-hidden="true" className="text-primary" size={22} />
                <strong className="mt-3 block text-text">{route.title}</strong>
                <span className="mt-1 block font-mono text-xs leading-5 text-text/66">{route.domain}</span>
              </Link>
            );
          })}
        </div>
      </section>
      <AIModelSelectorPanel />
      <AIModelMechanics />
      <WorkspaceSystem />
      <LearningCommandCenter />
      <RecommendationEngine />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AITerminal />
        <VoiceTutor />
      </div>
      <ProfileAnalytics />
      <UniversalSimulationEngine route={dashboardRoute} />
      <VisualChallengeSystem />
      <ChallengeBoard route={dashboardRoute} />
      <CollaborationHub />
      <Marketplace />
    </div>
  );
}
