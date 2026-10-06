import { Terminal } from 'lucide-react';
import { profile } from '../data.js';

const links = [['projects', './jobs'], ['experience', './experience'], ['contact', './contact']];

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-[#070a08] px-5 py-3">
      <div className="flex items-center gap-2.5 font-mono text-sm text-term">
        <Terminal size={18} aria-hidden="true" />
        <span>{profile.handle}</span>
      </div>
      <nav aria-label="Primary" className="flex flex-wrap gap-1 font-mono text-[13px]">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="rounded-md px-3 py-3 text-muted no-underline transition-colors hover:text-term">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
