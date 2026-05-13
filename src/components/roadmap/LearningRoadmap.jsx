import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { aiDomains, roadmapEdges } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

const nodes = aiDomains.map((domain) => ({
  id: domain.id,
  position: { x: domain.x, y: domain.y },
  data: { label: `${domain.label}\n${domain.depth} | ${domain.status}` },
  style: {
    border: '1px solid rgba(0,102,102,0.28)',
    borderRadius: 8,
    background: 'var(--color-surface)',
    color: 'var(--color-text)',
    boxShadow: 'var(--shadow-neo-soft)',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 12,
    fontWeight: 700,
    padding: 12,
    whiteSpace: 'pre-line',
    width: 176,
  },
}));

const edges = roadmapEdges.map(([source, target]) => ({
  id: `${source}-${target}`,
  source,
  target,
  animated: true,
  style: { stroke: 'var(--color-primary)', strokeWidth: 2 },
}));

export function LearningRoadmap() {
  const setSelectedRoadmapNode = useAiverseStore((state) => state.setSelectedRoadmapNode);

  return (
    <div className="neo-panel h-[620px] overflow-hidden p-2" role="application" aria-label="Interactive AI learning roadmap">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        minZoom={0.45}
        maxZoom={1.7}
        onNodeClick={(_, node) => setSelectedRoadmapNode(node.id)}
      >
        <Background color="rgba(0,102,102,0.28)" gap={28} />
        <MiniMap nodeColor="var(--color-primary)" maskColor="rgba(231,229,228,0.64)" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
