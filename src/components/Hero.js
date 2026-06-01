import React from 'react';
import { FaArrowRight, FaFilePdf, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 py-24 sm:pb-32">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-400/15 to-transparent" />
      <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl hero-blob" />
      <div className="absolute right-0 top-14 h-80 w-80 rounded-full bg-slate-700/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-10 lg:flex-row lg:items-end">
        <div className="w-full lg:w-1/2" data-reveal>
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-emerald-300/80" style={{ animation: 'fade-in-left 0.8s ease-out' }}>
            ML ENGINEER · SOFTWARE DEVELOPER · AI ENTHUSIAST
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl" style={{ animation: 'fade-in-left 0.8s ease-out 0.1s both' }}>
            Transforming ideas into intelligent digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl" style={{ animation: 'fade-in-left 0.8s ease-out 0.2s both' }}>
            Specializing in Machine Learning, AI-driven applications, and full-stack web development, I create scalable, efficient, and user-centric solutions. My work focuses on leveraging technology to solve meaningful challenges and deliver impactful digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4" style={{ animation: 'fade-in-left 0.8s ease-out 0.3s both' }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-300/80 hover:bg-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Let's talk
              <FaArrowRight className="ml-3 h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/resume.jpg`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-emerald-300/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              Download resume
              <FaFilePdf className="ml-3 h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/snehatd15"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-emerald-300/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              View LinkedIn
              <FaLinkedin className="ml-3 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2" data-reveal style={{ animation: 'fade-in-right 0.8s ease-out' }}>
          <div className="group relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl transition hover:border-emerald-300/30 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/10 via-transparent to-slate-700/10 opacity-80" />
            <img
              src={`${process.env.PUBLIC_URL}/sneha1.jpg`}
              alt="Sneha"
              className="relative h-full w-full rounded-[1.75rem] object-cover shadow-2xl transition duration-1000 ease-in-out hover:scale-[1.05] hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

