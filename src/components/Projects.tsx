'use client';

import React, { useState } from 'react';
import { Project } from '../types';
import { projects } from '../data/content';
import SpotlightCard from './SpotlightCard';
import { GithubIcon } from './Icons';
import { 
  Code2, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Cpu,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & LangGraph' },
    { id: 'fullstack', label: 'Full-Stack (Next.js/Node)' },
    { id: 'web', label: 'Database & Web Systems' },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/30 px-3 py-1 text-xs font-mono text-sky-300">
            <Code2 className="h-3.5 w-3.5 text-sky-400" />
            <span>FEATURED WORK & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Software Engineering Projects
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on applications demonstrating stateful AI multi-agent routing, real-time campus event management, and normalized database platforms.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                filter === c.id
                  ? 'border-sky-500/60 bg-sky-600/20 text-white shadow-lg shadow-sky-500/10'
                  : 'border-white/[0.08] bg-[#0c1220]/50 text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(56, 189, 248, 0.15)"
              className="flex flex-col justify-between border-white/[0.09] bg-[#0c1322]/70 p-6 group"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-sky-500/30 bg-sky-950/40 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-sky-300">
                        {project.year}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 rounded-md border border-indigo-500/30 bg-indigo-950/40 px-2 py-0.5 text-[10px] font-mono text-indigo-300">
                          <Sparkles className="h-2.5 w-2.5" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 shrink-0"
                    title="View Project Architecture & Features"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {project.subtitle}
                </p>

                {/* Bullets preview */}
                <ul className="space-y-1.5 pt-1">
                  {project.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300/90 leading-snug">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06]">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center p-1.5 rounded-lg bg-white/[0.02]">
                      <div className="text-xs font-bold font-mono text-emerald-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.06] mt-6">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Deep Dive</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/30 text-xs font-medium text-indigo-200 hover:bg-indigo-600/50 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
