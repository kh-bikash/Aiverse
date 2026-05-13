import { Github, Linkedin, Twitter } from 'lucide-react';
import { footerLinks } from '../../data/aiverseData.js';

export function Footer() {
  return (
    <footer id="footer" className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="neo-panel mx-auto max-w-7xl p-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold text-text">AIVerse</h2>
            <p className="mt-3 max-w-md font-mono text-sm leading-7 text-text/72">
              A futuristic interactive AI university built for visual learners, builders, researchers, and teams.
            </p>
          </div>
          <nav aria-label="Footer links" className="grid gap-2">
            {footerLinks.map((link) => (
              <a key={link.href} className="font-mono text-sm font-bold text-text/75 hover:text-primary" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Community</p>
            <div className="mt-4 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <a key={index} className="neo-button grid h-11 w-11 place-items-center bg-surface text-primary" href="#hero" aria-label="Social link">
                  <Icon aria-hidden="true" size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 h-px bg-primary/30" />
        <p className="mt-5 font-mono text-xs text-text/60">© 2026 AIVerse. Visual AI learning systems.</p>
      </div>
    </footer>
  );
}
