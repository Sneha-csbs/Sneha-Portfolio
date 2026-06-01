import React from 'react';

const skillGroups = [
  {
    title: 'Programming',
    items: ['C', 'C++', 'Python', 'Java'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Databases & Tools',
    items: ['MongoDB', 'MySQL', 'JDBC', 'Git', 'GitHub'],
  },
  {
    title: 'Design & Concepts',
    items: ['Figma', 'Canva', 'DSA', 'OOP', 'Machine Learning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div data-reveal className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Skills</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Technical categories</h2>
          <p className="max-w-2xl text-slate-400 leading-7">
            Practical capabilities for building modern digital products—organized into core areas so the skill set is easy to scan and instantly usable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <article 
              key={group.title} 
              data-reveal
              style={{ animation: `scale-fade-in 0.6s ease-out ${groupIdx * 0.1}s both` }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <h3 className="text-xl font-semibold text-slate-100 transition group-hover:text-emerald-300">{group.title}</h3>
              <div className="mt-5 space-y-3">
                {group.items.map((item, itemIdx) => (
                  <div 
                    key={item} 
                    style={{ animation: `fade-in-left 0.5s ease-out ${0.2 + itemIdx * 0.08}s both` }}
                    className="rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-300 transition duration-300 group-hover:bg-emerald-400/10 group-hover:text-emerald-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
