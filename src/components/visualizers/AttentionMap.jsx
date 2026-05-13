import { motion } from 'framer-motion';
import { attentionMatrix } from '../../data/aiverseData.js';

export function AttentionMap() {
  return (
    <div className="neo-inset p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-text">Attention Heatmap</h3>
        <span className="font-mono text-xs font-bold text-primary">self-attention</span>
      </div>
      <div className="grid grid-cols-6 gap-2" role="img" aria-label="Attention matrix heatmap">
        {attentionMatrix.flatMap((row, rowIndex) =>
          row.map((value, colIndex) => (
            <motion.span
              key={`${rowIndex}-${colIndex}`}
              className="aspect-square rounded-[4px] border border-white/50"
              style={{ backgroundColor: `rgba(0, 102, 102, ${0.12 + value * 0.78})` }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: (rowIndex + colIndex) * 0.05 }}
            />
          )),
        )}
      </div>
    </div>
  );
}
