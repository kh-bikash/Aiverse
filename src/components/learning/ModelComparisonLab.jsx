import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { comparisonModels } from '../../data/aiverseData.js';

function toRadarData(model) {
  return [
    { metric: 'Latency', value: model.latency },
    { metric: 'Context', value: model.context },
    { metric: 'Grounding', value: model.grounding },
    { metric: 'Cost', value: model.cost },
  ];
}

export function ModelComparisonLab() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {comparisonModels.map((model) => (
        <article key={model.name} className="neo-panel p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-text">{model.name}</h3>
              <p className="mt-1 font-mono text-xs text-text/66">Compare operating tradeoffs before choosing a system design.</p>
            </div>
            <span className="neo-inset px-3 py-2 font-mono text-xs font-bold text-primary">{model.grounding}% grounded</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={toRadarData(model)}>
                <PolarGrid stroke="rgba(0,102,102,0.22)" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'var(--color-text)', fontSize: 10 }} />
                <Tooltip />
                <Radar dataKey="value" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.38} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </article>
      ))}
    </div>
  );
}
