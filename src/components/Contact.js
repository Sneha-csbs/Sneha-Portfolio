import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const contactMethods = [
  {
    label: 'Phone',
    info: '+91 9865977796',
    href: 'tel:+919865977796',
    icon: <FaPhone />,
  },
  {
    label: 'Email',
    info: 'sneha.td2024csbs@sece.ac.in',
    href: 'mailto:sneha.td2024csbs@sece.ac.in',
    icon: <FaEnvelope />,
  },
  {
    label: 'LinkedIn',
    info: 'linkedin.com/in/snehatd15',
    href: 'https://www.linkedin.com/in/snehatd15',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    info: 'github.com/sneha-csbs',
    href: 'https://github.com/sneha-csbs',
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div data-reveal className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Contact</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Let’s create something refined.</h2>
          <p className="max-w-2xl text-slate-400 leading-7">
            Ready to collaborate, share ideas, or discuss your next product? Choose the channel that works best for you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {contactMethods.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ animation: `scale-fade-in 0.6s ease-out ${idx * 0.1}s both` }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-8 text-left transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-400/10 text-emerald-300 transition duration-300 group-hover:bg-emerald-400/20 group-hover:scale-110">
                {item.icon}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-emerald-300/80 transition group-hover:text-emerald-200">{item.label}</p>
              <p className="mt-3 text-base font-medium text-slate-100 transition group-hover:text-emerald-300">{item.info}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
