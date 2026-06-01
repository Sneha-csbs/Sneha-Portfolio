import React from 'react';

const projects = [
  {
    title: 'EVALUI',
    desc: 'Automated frontend evaluation platform that benchmarks HTML, CSS, and JavaScript assignments using DOM and visual comparison.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Puppeteer'],
  },
  {
    title: 'Guardian AI',
    desc: 'AI-powered surveillance system with keyword spotting, emotion recognition, IoT alerts, and automated evidence capture.',
    tech: ['Python', 'AI models', 'ESP32', 'IoT'],
  },
  {
    title: 'Meetsure',
    desc: 'Meeting accountability assistant that converts live captions into tasks, deadlines, and insights with automated email reminders.',
    tech: ['React.js', 'Chrome Extension', 'FastAPI', 'WebSocket', 'MongoDB'],
  },
  {
    title: 'QuickTube',
    desc: 'Intelligent video summarization application that leverages transformer-based AI models to extract key insights from YouTube videos and generate accurate summaries in seconds.',
    tech: ['Python', 'Django', 'Hugging Face', 'NLP', 'AI'],
  },
  {
    title: 'PharmaFind',
    desc: 'Smart pharmacy locator and medicine availability platform with price comparison, alternate medicine search, and real-time pharmacy details.',
    tech: ['React', 'FastAPI', 'Python', 'SQLite', 'EasyOCR', 'OpenCV'],
  },
  {
    title: 'Online Examination System',
    desc: 'Secure auto-grading portal featuring role-based access, automated objective evaluation, real-time monitoring, instant results, and feedback management.',
    tech: ['Java', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Authentication', 'Database Management'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div data-reveal className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Projects</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Recent work</h2>
          <p className="max-w-2xl text-slate-400 leading-7">
            These projects showcase a focus on modern UI, lightweight architecture, and scalable feature sets for real-world use.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              style={{ animation: `scale-fade-in 0.6s ease-out ${index * 0.1}s both` }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 transition group-hover:text-emerald-200">Project {index + 1}</div>
                <h3 className="text-2xl font-semibold text-slate-100 transition group-hover:text-emerald-300">{project.title}</h3>
                <p className="text-slate-400 leading-7 transition group-hover:text-slate-300">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, tagIdx) => (
                    <span 
                      key={tag} 
                      style={{ animation: `tag-entrance 0.4s ease-out ${0.3 + tagIdx * 0.05}s both` }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 transition group-hover:border-emerald-300/30 group-hover:bg-emerald-400/5 group-hover:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
