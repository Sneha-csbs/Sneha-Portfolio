import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const menu = ['Home', 'Experience', 'Projects', 'About', 'Skills', 'Contact'];

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-6" style={{ animation: 'fade-in-down 0.8s ease-out' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 shadow-2xl backdrop-blur-xl transition hover:border-emerald-300/20">
        <div className="flex items-center gap-4 font-medium tracking-[0.2em] text-slate-300 uppercase">
          <span className="text-emerald-300">Sneha</span>
          <span className="hidden sm:inline">T D</span>
        </div>

        <ul className="hidden items-center gap-5 md:flex">
          {menu.map((item, idx) => (
            <li key={item} style={{ animation: `fade-in-down 0.8s ease-out ${0.1 + idx * 0.05}s both` }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative transition hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 text-slate-300">
          <a href="mailto:snehadhuraitd@gmail.com" className="relative transition hover:text-emerald-300 hover:scale-110">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sneha-csbs" target="_blank" rel="noreferrer" className="relative transition hover:text-emerald-300 hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/snehatd15" target="_blank" rel="noreferrer" className="relative transition hover:text-emerald-300 hover:scale-110">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
