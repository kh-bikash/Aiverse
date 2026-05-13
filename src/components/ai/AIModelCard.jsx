export function AIModelCard({ model }) {
  const Icon = model.icon;

  return (
    <article className="neo-panel group grid min-h-44 content-between p-5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-text">{model.name}</h3>
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">{model.type}</p>
        </div>
        <span className="neo-inset grid h-11 w-11 place-items-center text-primary">
          <Icon aria-hidden="true" size={22} />
        </span>
      </div>
      <p className="mt-8 font-mono text-sm leading-6 text-text/72">{model.metric}</p>
    </article>
  );
}
