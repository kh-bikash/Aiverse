import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const skillData = [
  { week: 'W1', transformers: 35, rag: 22, agents: 12 },
  { week: 'W2', transformers: 48, rag: 31, agents: 24 },
  { week: 'W3', transformers: 63, rag: 46, agents: 38 },
  { week: 'W4', transformers: 82, rag: 70, agents: 66 },
];

export function ProfileAnalytics() {
  return (
    <div className="neo-panel p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Profile Analytics</p>
      <h2 className="mt-2 text-2xl font-bold text-text">AI skill profile</h2>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="neo-inset h-72 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={skillData}>
              <CartesianGrid stroke="rgba(0,102,102,0.16)" />
              <XAxis dataKey="week" tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
              <YAxis tick={{ fill: 'var(--color-text)', fontSize: 11 }} />
              <Tooltip />
              <Area dataKey="transformers" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.22} />
              <Area dataKey="rag" stroke="var(--color-success)" fill="var(--color-success)" fillOpacity={0.2} />
              <Area dataKey="agents" stroke="var(--color-warning)" fill="var(--color-warning)" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-3">
          {[
            ['Strongest domain', 'Transformers'],
            ['Weakness analysis', 'Diffusion sampler math'],
            ['Certification next', 'RAG Systems'],
            ['Simulation mastery', '73%'],
          ].map(([label, value]) => (
            <div key={label} className="neo-inset p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-text/55">{label}</span>
              <strong className="mt-1 block text-primary">{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
