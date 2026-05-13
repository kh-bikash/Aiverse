import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Upload } from 'lucide-react';
import { EmbeddingExplorer } from './EmbeddingExplorer.jsx';

const distribution = [
  { label: 'A', value: 42 },
  { label: 'B', value: 58 },
  { label: 'C', value: 35 },
  { label: 'D', value: 76 },
  { label: 'E', value: 49 },
];

export function DatasetVisualizer() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <EmbeddingExplorer />
      <div className="neo-inset p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-text">Dataset Distribution</h3>
          <button className="neo-button inline-flex items-center gap-2 bg-surface px-3 py-2 font-mono text-xs font-bold text-primary">
            <Upload aria-hidden="true" size={16} />
            Upload
          </button>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distribution}>
              <CartesianGrid stroke="rgba(0,102,102,0.16)" />
              <XAxis dataKey="label" tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
              <YAxis tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
