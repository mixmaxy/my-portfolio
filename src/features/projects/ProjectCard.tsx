import type { ProjectProps } from "./projects.data";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  technologies,
  projectUrl,
}: ProjectProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden group hover:border-primary-container transition-colors relative">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>
      <div className="h-48 overflow-hidden relative z-10 border-b border-surface-container-high">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 mix-blend-screen"
          src={imageUrl}
        />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl text-on-surface mb-2 font-mono-label tracking-widest uppercase glow-text-cyan">
          {title}
        </h3>
        <p className="font-body-md text-on-surface-variant mb-6 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              className="font-mono-label text-[10px] bg-[#1A0033] text-secondary-container px-2 py-1 rounded-[2px] border border-secondary-container/30 uppercase tracking-wider"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          className="text-primary-container font-mono-label text-sm uppercase tracking-widest hover:glow-cyan inline-flex items-center gap-1 transition-all group-hover:text-primary-fixed"
          href={projectUrl}
        >
          View Project
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
