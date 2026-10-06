import { useState } from 'react';
import Card, { Prompt } from './Card.jsx';
import { jobs } from '../data.js';

export default function Experience() {
  const [activeId, setActiveId] = useState(jobs[0].id);
  const job = jobs.find((j) => j.id === activeId);

  return (
    <section id="experience" aria-labelledby="exp-h" className="grid scroll-mt-6 grid-cols-12 gap-4">
      <div className="col-span-12 flex flex-col gap-1.5">
        <Prompt>$ history --work</Prompt>
        <h2 id="exp-h" className="m-0 font-mono text-[28px] text-fg-bright">Experience</h2>
      </div>

      <div role="tablist" aria-label="Jobs" className="col-span-12 flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
        {jobs.map((j) => {
          const active = j.id === activeId;
          return (
            <button
              key={j.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveId(j.id)}
              className={`flex min-h-16 min-w-[220px] cursor-pointer flex-col gap-1 rounded-xl border px-4 py-3.5 text-left transition-colors lg:min-w-0 ${
                active ? 'border-term bg-term-soft text-fg-bright' : 'border-line bg-panel text-[#b9cbbd] hover:border-term'
              }`}
            >
              <span className="font-mono text-sm font-bold">{j.company}</span>
              <span className="text-[13px] text-[#8aa392]">{j.role}</span>
            </button>
          );
        })}
      </div>

      <Card role="tabpanel" className="col-span-12 flex flex-col gap-3.5 p-6 lg:col-span-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="m-0 font-mono text-xl text-fg-bright">
            {job.role} <span className="text-term">@ {job.company}</span>
          </h3>
          <span className="font-mono text-[13px] text-dim">{job.dates} · {job.place}</span>
        </div>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {job.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-[#b9cbbd]">
              <span className="flex-none font-mono text-term">→</span><span>{pt}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
