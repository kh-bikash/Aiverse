import { NavLink } from 'react-router-dom';
import { AppWindow, BrainCircuit, LayoutDashboard, Search, Settings } from 'lucide-react';
import { useAiverseStore } from '../../store/useAiverseStore.js';

const dockItems = [
  { path: '/dashboard', label: 'Dash', icon: LayoutDashboard },
  { path: '/transformers', label: 'Xform', icon: BrainCircuit },
  { path: '/playgrounds', label: 'Labs', icon: AppWindow },
  { path: '/settings', label: 'Prefs', icon: Settings },
];

export function MobileDock() {
  const setCommandOpen = useAiverseStore((state) => state.setCommandOpen);

  return (
    <nav className="fixed bottom-3 left-3 right-3 z-50 grid grid-cols-5 gap-2 rounded-neo bg-surface/85 p-2 shadow-neo backdrop-blur-xl xl:hidden" aria-label="Mobile quick navigation">
      {dockItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `grid min-h-12 place-items-center rounded-neo font-mono text-[10px] font-bold ${isActive ? 'text-primary shadow-neo-inset' : 'text-text/65 shadow-neo-soft'}`
            }
          >
            <Icon aria-hidden="true" size={17} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
      <button className="grid min-h-12 place-items-center rounded-neo font-mono text-[10px] font-bold text-primary shadow-neo-soft" onClick={() => setCommandOpen(true)}>
        <Search aria-hidden="true" size={17} />
        <span>Find</span>
      </button>
    </nav>
  );
}
