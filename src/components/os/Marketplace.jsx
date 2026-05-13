import { Download, Package } from 'lucide-react';
import { marketplaceItems } from '../../data/osRoutes.js';

export function Marketplace() {
  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex items-center gap-3">
        <Package aria-hidden="true" className="text-primary" size={22} />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">AI Marketplace</p>
          <h2 className="text-2xl font-bold text-text">Installable learning assets</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {marketplaceItems.map((item) => (
          <article key={item.title} className="neo-inset p-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{item.type}</span>
            <h3 className="mt-2 font-bold text-text">{item.title}</h3>
            <div className="mt-4 flex items-center justify-between gap-3 font-mono text-xs text-text/70">
              <span className="inline-flex items-center gap-1">
                <Download aria-hidden="true" size={14} />
                {item.downloads}
              </span>
              <strong className="text-primary">{item.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
