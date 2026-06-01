import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const educationList = [
  {
    school: 'Sri Eshwar College of Engineering',
    degree: 'B.Tech CSBS',
    cgpa: '8.0 CGPA',
    period: '2024-2028',
  },
  {
    school: 'SVB Higher Sec School',
    degree: 'HSC',
    cgpa: '90%',
    period: '2022-2024',
  },
  {
    school: 'Avvai KSR Matric High School',
    degree: 'SSLC',
    cgpa: '80.1%',
    period: '2021-2024',
  },
];

const achievements = [
  {
    title: 'Best Role Player of Toastmaster Meet 180',
    detail: 'held at SECE Toastmasters Club',
    year: '2025',
  },
  {
    title: 'IVth Runner Up of SelfE Hackaton’24',
    detail: 'held at Sri Eshwar College of Engineering',
    year: '2024',
  },
  {
    title: 'Finalist in Cause 2026 Innovation Challenge',
    detail: 'held at CMR University, Bangalore',
    year: '2026',
  },
];

const codingProfiles = [
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Sneha_TD/',
    description: 'Solved 120+ problems | Max Rating : 1,508 | Global rank : 347,989',
  },
  {
    label: 'SkillRack',
    href: 'http://www.skillrack.com/profile/514834/0ee514248e3a69441b406768472cc757aeac25b1',
    description: 'Solved 950+ problems | Received 4 certificates | 280+ Bronzes',
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/sneha_td2024csbs',
    description: '3 star C | 2 star SQL | Problem Solver - Bronze Badge',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <div data-reveal className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">About</p>
                <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">SNEHA T.D</h2>
                <p className="text-slate-300 leading-8">
                  I am a B.Tech CSBS student at Sri Eshwar College of Engineering, building premium web applications and AI-enabled solutions with a modern, minimalist design language.
                  My process is rooted in clear information hierarchy, polished frontend interfaces, and scalable backend integration.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 transition hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-500/10 group">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 transition group-hover:text-emerald-200">Achievements</p>
                  <ul className="mt-3 space-y-4 text-slate-300">
                    {achievements.map((item, idx) => (
                      <li 
                        key={item.title} 
                        style={{ animation: `fade-in-left 0.5s ease-out ${0.1 + idx * 0.08}s both` }}
                        className="rounded-2xl bg-slate-900/80 p-4 transition duration-300 hover:bg-slate-850 hover:border-l-2 hover:border-emerald-300"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-100 transition group-hover:text-emerald-300">{item.title}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">{item.detail}</p>
                          </div>
                          {item.year ? (
                            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-200 transition group-hover:bg-emerald-400/20">
                              {item.year}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 transition hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-500/10 group">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 transition group-hover:text-emerald-200">Coding profile</p>
                  <ul className="mt-3 space-y-4 text-slate-300">
                    {codingProfiles.map((item, idx) => (
                      <li 
                        key={item.label} 
                        style={{ animation: `fade-in-right 0.5s ease-out ${0.1 + idx * 0.08}s both` }}
                        className="rounded-2xl bg-slate-900/80 p-4 transition duration-300 hover:bg-slate-850 hover:border-r-2 hover:border-emerald-300"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-semibold text-slate-100 transition hover:text-emerald-300 hover:gap-3"
                        >
                          {item.label}
                          <FaExternalLinkAlt className="h-3.5 w-3.5 text-slate-400 transition group-hover:text-emerald-300" />
                        </a>
                        <p className="mt-2 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-inner shadow-slate-950/20">
                <h3 className="text-lg font-semibold text-slate-100">Value proposition</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  I deliver web products that are functional, fast, and visually refined. I combine frontend expertise with backend engineering to launch complete digital experiences that are built to scale.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">Education</p>
                <div className="mt-4 space-y-3">
                  {educationList.map((item) => (
                    <div key={item.school} className="border-t border-slate-700/40 pt-3 first:border-t-0 first:pt-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-100">{item.school}</p>
                          <p className="mt-1 text-sm text-slate-400">{item.degree}</p>
                        </div>
                        <span className="text-xs text-emerald-300/70">{item.period}</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-400">{item.cgpa}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
