import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { CommandPalette } from './CommandPalette.jsx';
import { MobileDock } from './MobileDock.jsx';
import { Sidebar } from './Sidebar.jsx';
import { TopBar } from './TopBar.jsx';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function OSLayout() {
  const setCommandOpen = useAiverseStore((state) => state.setCommandOpen);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setCommandOpen]);

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      <CommandPalette />
      <MobileDock />
      <main className="px-4 py-6 sm:px-6 lg:px-8 xl:ml-80">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
