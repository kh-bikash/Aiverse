import { datasetPoints } from '../../data/aiverseData.js';

export function EmbeddingExplorer() {
  return (
    <div className="neo-inset p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-text">Embedding Space</h3>
        <span className="font-mono text-xs font-bold text-primary">PCA projection</span>
      </div>
      <svg className="h-64 w-full" role="img" aria-label="Dataset embedding clusters">
        <rect width="100%" height="100%" rx="8" fill="rgba(241,242,245,0.45)" />
        {datasetPoints.map((point) => (
          <circle
            key={point.id}
            cx={`${point.cx}%`}
            cy={`${point.cy}%`}
            r={point.cluster === 0 ? 5 : point.cluster === 1 ? 7 : 4}
            fill={point.cluster === 0 ? 'var(--color-primary)' : point.cluster === 1 ? 'var(--color-success)' : 'var(--color-warning)'}
            opacity="0.78"
          />
        ))}
      </svg>
    </div>
  );
}
