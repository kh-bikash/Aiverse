import { DatabaseZap, FileSearch, MessageSquareText } from 'lucide-react';
import { ragDocuments } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function RagInspector() {
  const { ragQuery, setRagQuery } = useAiverseStore();

  return (
    <div className="neo-panel p-5">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">RAG Pipeline Simulator</p>
          <h3 className="mt-2 text-2xl font-bold text-text">Query to grounded answer</h3>
          <label className="mt-5 grid gap-2 font-mono text-xs font-bold text-text" htmlFor="rag-query">
            User question
            <textarea
              id="rag-query"
              className="min-h-32 resize-y rounded-neo bg-surface p-4 font-mono text-sm leading-6 shadow-neo-inset"
              value={ragQuery}
              onChange={(event) => setRagQuery(event.target.value)}
            />
          </label>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: MessageSquareText, label: 'Embed' },
              { icon: DatabaseZap, label: 'Search' },
              { icon: FileSearch, label: 'Ground' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="neo-inset grid place-items-center gap-2 p-3 text-center font-mono text-xs font-bold text-primary">
                <Icon aria-hidden="true" size={18} />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {ragDocuments.map((document) => (
            <article key={document.id} className="neo-inset p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-bold text-text">{document.title}</h4>
                <span className="font-mono text-xs font-bold text-primary">{Math.round(document.score * 100)}%</span>
              </div>
              <span className="mt-3 block h-2 overflow-hidden rounded-full bg-secondary shadow-neo-inset">
                <span className="block h-full bg-primary" style={{ width: `${document.score * 100}%` }} />
              </span>
              <p className="mt-3 font-mono text-xs leading-6 text-text/72">{document.chunk}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
