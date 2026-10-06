import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import ProjectDrawer from './components/ProjectDrawer.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data.js';

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <div className="min-h-screen p-2.5 sm:p-5 lg:p-7">
      {/* Grey rounded frame around the whole site */}
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[22px] border border-frame bg-shell">
        <Navbar />
        <main className="flex flex-col gap-12 p-4 sm:p-6 lg:p-8">
          <Hero />
          <Projects onOpen={setOpenProject} />
          <Experience />
          <Contact />
        </main>
        <footer className="flex flex-wrap justify-between gap-2 border-t border-line px-6 py-4 font-mono text-xs text-dim">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>built with react + vite + tailwind</span>
        </footer>
      </div>
      <ProjectDrawer project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
