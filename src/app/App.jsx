import { lazy, Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { OSLayout } from '../components/os/OSLayout.jsx';
import { osRoutes } from '../data/osRoutes.js';

const DomainPage = lazy(() => import('../pages/DomainPage.jsx').then((module) => ({ default: module.DomainPage })));
const LandingPage = lazy(() => import('../pages/LandingPage.jsx').then((module) => ({ default: module.LandingPage })));
const OSDashboard = lazy(() => import('../pages/OSDashboard.jsx').then((module) => ({ default: module.OSDashboard })));
const SettingsPage = lazy(() => import('../pages/SettingsPage.jsx').then((module) => ({ default: module.SettingsPage })));

function AppFallback() {
  return (
    <div className="grid min-h-screen place-items-center bg-surface p-6">
      <div className="neo-panel neural-loader p-8 text-center font-mono text-sm font-bold text-primary">Booting AIVerse OS</div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Suspense fallback={<AppFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<OSLayout />}>
            <Route path="/dashboard" element={<OSDashboard />} />
            <Route path="/settings" element={<SettingsPage />} />
            {osRoutes
              .filter((route) => !['/dashboard', '/settings'].includes(route.path))
              .map((route) => (
                <Route key={route.path} path={route.path} element={<DomainPage />} />
              ))}
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
