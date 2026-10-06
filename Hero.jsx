import { ArrowRight, Download } from 'lucide-react';
import Card, { Prompt, Tag } from './Card.jsx';
import { profile } from '../data.js';

export default function Hero() {
  const facts = [['trade', profile.trade], ['years', profile.years], ['based', profile.location], ['phone', profile.phone]];
  return (
    <section aria-label="Intro" className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 flex flex-col gap-5 p-6 sm:p-10 lg:col-span-8">
        <Prompt>&gt; whoami</Prompt>
        <h1 className="m-0 font-mono text-4xl leading-tight tracking-tight text-fg-bright sm:text-5xl lg:text-6xl">
          {profile.name}<span className="cursor" aria-hidden="true" />
        </h1>
        <p className="m-0 max-w-[60ch] text-base leading-relaxed text-[#b9cbbd] sm:text-lg">{profile.bio}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-term px-5 font-mono text-sm font-bold text-[#04130a] no-underline transition hover:brightness-110">
            View jobs <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="/resume.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-[#2f3a32] px-5 font-mono text-sm text-fg no-underline transition hover:border-term hover:text-term">
            <Download size={16} aria-hidden="true" /> Resume.pdf
          </a>
        </div>
      </Card>

      <Card className="col-span-12 flex flex-col gap-3.5 p-6 lg:col-span-4">
        <Prompt>$ cat status.txt</Prompt>
        <div className="flex items-center gap-2.5">
          <span className="size-2.5 rounded-full bg-term shadow-[0_0_10px_#4ade80]" aria-hidden="true" />
          <span className="font-mono text-sm text-fg-bright">{profile.status}</span>
        </div>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 font-mono text-[13px]">
          {facts.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-dim">{k}</dt>
              <dd className="m-0">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {profile.skills.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
      </Card>
    </section>
  );
}
