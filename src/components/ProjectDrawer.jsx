import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Tag } from './Card.jsx';

const tabs = [{ id: 'why', label: 'Why' }, { id: 'execution', label: 'Execution' }, { id: 'results', label: 'Results' }];

export default function ProjectDrawer({ project, onClose }) {
  const [tab, setTab] = useState('why');
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    setTab('why');
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button type="button" aria-label="Close case file" onClick={onClose} className="absolute inset-0 cursor-pointer border-0 bg-black/65" />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="animate-slide-in relative flex h-full w-full max-w-[560px] flex-col gap-5 overflow-y-auto border-l border-frame bg-shell px-5 pb-10 pt-6 sm:px-8"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[13px] text-dim">$ cat ./jobs/{project.id}.md</span>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-[#2f3a32] bg-transparent text-fg hover:border-term hover:text-term"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-xs text-term">{project.category} · {project.year}</span>
          <h2 id="drawer-title" className="m-0 font-mono text-3xl text-fg-bright">{project.title}</h2>
          <p className="m-0 rounded-xl border border-[#1d4d2e] bg-term-soft px-4 py-3.5 text-[15px] leading-relaxed">{project.xyz}</p>
        </div>

        <div role="tablist" aria-label="Case file sections" className="grid grid-cols-3 gap-1.5 rounded-xl border border-line p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`min-h-11 cursor-pointer rounded-[9px] border-0 font-mono text-[13px] transition-colors ${
                tab === t.id ? 'bg-term font-bold text-[#04130a]' : 'bg-transparent text-muted hover:text-term'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="flex flex-col gap-3.5">
          {tab === 'why' && (
            <>
              <h3 className="m-0 font-mono text-[15px] text-term">// the why</h3>
              <p className="m-0 text-[15px] leading-7 text-[#b9cbbd]">{project.why}</p>
            </>
          )}
          {tab === 'execution' && (
            <>
              <h3 className="m-0 font-mono text-[15px] text-term">// the execution</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {project.execution.map((e) => (
                  <li key={e} className="flex gap-3 text-[15px] leading-relaxed text-[#b9cbbd]">
                    <span className="flex-none font-mono text-term">+</span><span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">{project.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </>
          )}
          {tab === 'results' && (
            <>
              <h3 className="m-0 font-mono text-[15px] text-term">// results &amp; impact</h3>
              <div className="grid grid-cols-3 gap-2.5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1 rounded-xl border border-line bg-panel p-3.5">
                    <span className="font-mono text-xl font-bold text-term sm:text-[22px]">{m.value}</span>
                    <span className="text-xs leading-snug text-[#8aa392]">{m.label}</span>
                  </div>
                ))}
              </div>
              <p className="m-0 text-[15px] leading-7 text-[#b9cbbd]">{project.impact}</p>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
