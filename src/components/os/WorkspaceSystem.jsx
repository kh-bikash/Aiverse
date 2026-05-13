import { Maximize2, PanelLeftClose, Save } from 'lucide-react';
import { workspacePanels } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function WorkspaceSystem() {
  const { activeWorkspacePanels, toggleWorkspacePanel } = useAiverseStore();
  const visiblePanels = workspacePanels.filter((panel) => activeWorkspacePanels.includes(panel.id));

  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Dockable Workspace</p>
          <h2 className="mt-2 text-2xl font-bold text-text">AI workstation layout</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {workspacePanels.map((panel) => (
            <button
              key={panel.id}
              className={`neo-button bg-surface px-3 py-2 font-mono text-[11px] font-bold ${activeWorkspacePanels.includes(panel.id) ? 'text-primary' : 'text-text/55'}`}
              onClick={() => toggleWorkspacePanel(panel.id)}
              aria-pressed={activeWorkspacePanels.includes(panel.id)}
            >
              {panel.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid auto-rows-[minmax(180px,auto)] gap-4 lg:grid-cols-3">
        {visiblePanels.map((panel) => (
          <section key={panel.id} className={`neo-inset neural-loader p-4 ${panel.span}`}>
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-text">{panel.title}</h3>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{panel.status}</p>
              </div>
              <div className="flex gap-2">
                <button className="neo-button grid h-9 w-9 place-items-center bg-surface text-primary" aria-label={`Fullscreen ${panel.title}`}>
                  <Maximize2 aria-hidden="true" size={15} />
                </button>
                <button className="neo-button grid h-9 w-9 place-items-center bg-surface text-primary" aria-label={`Dock ${panel.title}`}>
                  <PanelLeftClose aria-hidden="true" size={15} />
                </button>
              </div>
            </div>
            <p className="relative z-10 mt-6 font-mono text-sm leading-7 text-text/72">{panel.content}</p>
          </section>
        ))}
      </div>
      <button className="neo-button mt-4 inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-xs font-bold text-secondary">
        <Save aria-hidden="true" size={16} />
        Save workspace preset
      </button>
    </div>
  );
}
