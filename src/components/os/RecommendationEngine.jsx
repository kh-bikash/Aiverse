import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { recommendations } from '../../data/osRoutes.js';

export function RecommendationEngine() {
  return (
    <div className="neo-panel p-5">
      <div className="mb-4 flex items-center gap-3">
        <Sparkles aria-hidden="true" className="text-primary" size={22} />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">AI Recommendations</p>
          <h2 className="text-2xl font-bold text-text">Next best learning actions</h2>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {recommendations.map((item) => (
          <Link key={item.title} to={item.href} className="neo-button bg-surface p-4 hover:text-primary">
            <strong className="text-text">{item.title}</strong>
            <span className="mt-2 block font-mono text-xs leading-6 text-text/68">{item.reason}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
