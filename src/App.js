import React from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  useScrollReveal();

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-emerald-400/30 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
