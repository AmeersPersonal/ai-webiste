import { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Card, { Prompt } from './Card.jsx';
import { filters, projects } from '../data.js';

function FilterTabs({ value, onChange }) {
  return (
    <div role="group" aria-label="Filter jobs" className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const active = f === value;
        return (
          <button
            key={f}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(f)}
            className={`min-h-11 cursor-pointer rounded-full border px-4 font-mono text-[13px] transition-colors ${
              active ? 'border-term bg-term font-bold text-[#04130a]' : 'border-[#2a352d] bg-transparent text-muted hover:border-term hover:text-term'
            }`}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, wide, onOpen }) {
  return (
    <Card
      as="article"
      className={`flex min-h-[250px] flex-col gap-3.5 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-term ${wide ? 'sm:col-span-2' : ''}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-md border border-[#1d4d2e] bg-term-soft px-2 py-1 font-mono text-xs text-term">{project.category}</span>
        <span className="font-mono text-xs text-dim">{project.year}</span>
      </div>
      <h3 className="m-0 font-mono text-[22px] text-fg-bright">{project.title}</h3>
      <p className="m-0 text-[15px] leading-relaxed text-[#b9cbbd]">{project.xyz}</p>
      <div className="flex flex-wrap gap-6">
        {project.highlights.map((m) => (
          <div key={m.label} className="flex flex-col">
            <span className="font-mono text-[22px] font-bold text-term">{m.value}</span>
            <span className="text-xs text-[#8aa392]">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs text-[#7d9785]">{project.stack.slice(0, 3).join(' · ')}</span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] border border-[#2f3a32] bg-shell px-3.5 font-mono text-[13px] text-fg transition-colors hover:border-term hover:text-term"
        >
          open case file <ChevronRight size={14} aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => projects.filter((p) => filter === 'All' || p.category === filter), [filter]);

  return (
    <section id="projects" aria-labelledby="proj-h" className="flex scroll-mt-6 flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Prompt>$ ls ./jobs --filter</Prompt>
          <h2 id="proj-h" className="m-0 font-mono text-[28px] text-fg-bright">Featured Jobs</h2>
        </div>
        <FilterTabs value={filter} onChange={setFilter} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} wide={p.featured && filter === 'All'} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
