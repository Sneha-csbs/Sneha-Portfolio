import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const internships = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Personal experience',
    period: '2025',
    details: 'Built MERN web apps; developed REST APIs and shipped the DONATE2SAVE full-stack platform.',
    projectLink: 'https://donate2save.netlify.app/',
  },
  {
    role: 'MLOps Intern',
    company: 'June 2026',
    period: '2026',
    details: 'Contributed to ML deployment and automation for production models.',
  },
];

const certifications = [
  'NPTEL: Problem Solving using C; Modern Programming in C++ (2025)',
  'NPTEL: Design Thinking (2026)',
  'Udemy: Python for Data Science & ML (2026)',
  'SQL basics — Hackerrank / Sololearn (2025)'
];

export default function Resume() {
  return (
    <section id="experience" className="relative py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <div data-reveal className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Experience</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Career Highlights</h2>
          <p className="max-w-2xl text-slate-400 leading-7">
            Work background with a strong focus on full-stack web development, AI product design, and practical deployment experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <article data-reveal className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 group">
              <h3 className="text-xl font-semibold text-slate-100 transition group-hover:text-emerald-300">Internships</h3>
              <div className="mt-6 space-y-5">
                {internships.map((item, idx) => (
                  <div 
                    key={item.role} 
                    style={{ animation: `fade-in-left 0.5s ease-out ${0.1 + idx * 0.1}s both` }}
                    className="rounded-3xl bg-slate-950/80 p-5 transition duration-300 hover:bg-slate-900 hover:border-l-2 hover:border-emerald-300"
                  >
                    <div className="flex items-start justify-between gap-4 sm:items-center">
                      <div>
                        <h4 className="text-base font-semibold text-slate-100 transition group-hover:text-emerald-300">{item.role}</h4>
                        <p className="mt-1 text-slate-400 transition group-hover:text-slate-300">{item.company}</p>
                      </div>
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-slate-400 leading-7 transition group-hover:text-slate-300">{item.details}</p>
                    {item.projectLink && (
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200 hover:gap-3"
                      >
                        View Project
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article data-reveal className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 group">
              <h3 className="text-xl font-semibold text-slate-100 transition group-hover:text-emerald-300">Certifications</h3>
              <ul className="mt-6 space-y-4 text-slate-400">
                {certifications.map((item, idx) => (
                  <li 
                    key={item} 
                    style={{ animation: `fade-in-right 0.5s ease-out ${0.1 + idx * 0.1}s both` }}
                    className="rounded-3xl bg-slate-950/80 p-5 transition duration-300 hover:bg-slate-900 hover:border-r-2 hover:border-emerald-300 group-hover:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
