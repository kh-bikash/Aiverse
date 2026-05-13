import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = Array.from({ length: 18 }, (_, index) => ({
  epoch: index + 1,
  loss: Number((0.92 * Math.exp(-index / 7) + 0.04 * Math.sin(index)).toFixed(3)),
}));

export function TrainingMetricsChart() {
  return (
    <div className="neo-inset h-52 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(0,102,102,0.16)" />
          <XAxis dataKey="epoch" tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
          <YAxis tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="loss" stroke="var(--color-primary)" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
