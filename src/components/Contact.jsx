import { Phone, Mail } from 'lucide-react';
import Card, { Prompt } from './Card.jsx';
import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="ct-h" className="grid scroll-mt-6 grid-cols-12 gap-4">
      <Card className="col-span-12 flex flex-col gap-3.5 p-6 lg:col-span-7">
        <Prompt>$ ./contact.sh</Prompt>
        <h2 id="ct-h" className="m-0 font-mono text-[28px] text-fg-bright">Let’s build something.</h2>
        <p className="m-0 max-w-[52ch] text-[15px] leading-relaxed text-[#b9cbbd]">{profile.contactBlurb}</p>
        <div className="flex flex-wrap gap-2.5">
          <a href={profile.phoneHref} className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-term px-4 font-mono text-sm font-bold text-[#04130a] no-underline">
            <Phone size={16} aria-hidden="true" /> {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-[#2f3a32] px-4 font-mono text-sm text-fg no-underline hover:border-term hover:text-term">
            <Mail size={16} aria-hidden="true" /> {profile.email}
          </a>
        </div>
      </Card>
      <Card className="col-span-12 flex flex-col gap-3 p-6 lg:col-span-5">
        <Prompt>$ cat toolbox.txt</Prompt>
        <p className="m-0 font-mono text-[17px] text-fg-bright">Tools &amp; Training</p>
        <p className="m-0 text-sm text-muted">{profile.training}</p>
        <p className="m-0 text-sm leading-relaxed text-muted">{profile.tools}.</p>
      </Card>
    </section>
  );
}
