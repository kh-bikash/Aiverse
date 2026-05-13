import { BrainCircuit, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../../constants/navigation.js';

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="neo-panel mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Primary">
        <a href="#hero" className="inline-flex items-center gap-3 font-bold text-text" aria-label="AIVerse home">
          <span className="neo-inset grid h-10 w-10 place-items-center text-primary">
            <BrainCircuit aria-hidden="true" size={20} />
          </span>
          <span>AIVerse</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="rounded-neo px-3 py-2 font-mono text-xs font-bold text-text/75 hover:text-primary" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Link to="/dashboard" className="neo-button hidden bg-primary px-4 py-2 font-mono text-xs font-bold text-secondary sm:inline-flex">
          Enter Lab
        </Link>
        <button className="neo-button grid h-10 w-10 place-items-center bg-surface md:hidden" aria-label="Open navigation">
          <Menu aria-hidden="true" size={20} />
        </button>
      </nav>
    </header>
  );
}
