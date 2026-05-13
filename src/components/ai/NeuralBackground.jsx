import { motion } from 'framer-motion';

const nodes = [
  [8, 22],
  [18, 66],
  [36, 38],
  [52, 72],
  [66, 28],
  [82, 56],
  [92, 18],
];

export function NeuralBackground() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-75" aria-hidden="true">
      {nodes.slice(0, -1).map(([x1, y1], index) => {
        const [x2, y2] = nodes[index + 1];
        return (
          <motion.line
            key={`${x1}-${x2}`}
            x1={`${x1}%`}
            y1={`${y1}%`}
            x2={`${x2}%`}
            y2={`${y2}%`}
            stroke="var(--color-primary)"
            strokeWidth="1"
            strokeDasharray="8 10"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.18, 0.62, 0.18] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.25 }}
          />
        );
      })}
      {nodes.map(([x, y], index) => (
        <motion.circle
          key={`${x}-${y}`}
          cx={`${x}%`}
          cy={`${y}%`}
          r="6"
          fill="var(--color-surface)"
          stroke="var(--color-primary)"
          strokeWidth="2"
          animate={{ r: [5, 8, 5], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
        />
      ))}
    </svg>
  );
}
