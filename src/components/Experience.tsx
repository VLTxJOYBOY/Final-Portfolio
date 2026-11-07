'use client';

import React from 'react';
import { experiences } from '../data/content';
import SpotlightCard from './SpotlightCard';
import { Briefcase, Building2, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-3 py-1 text-xs font-mono text-purple-300">
            <Briefcase className="h-3.5 w-3.5 text-purple-400" />
            <span>INDUSTRY & CAMPUS INTERNSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Contributions
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Practical development experience integrating LLM APIs, building responsive frontend interfaces with React/Next.js, and deploying campus web platforms.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-[#030712] shadow-sm shadow-indigo-500" />

              {/* Side date tag on desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-indigo-400/90 font-medium">
                {exp.period}
              </div>

              <SpotlightCard className="p-6 sm:p-7 border-white/[0.08] bg-[#0c1220]/60 space-y-4">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <span className="md:hidden inline-block mb-1 text-xs font-mono text-indigo-400">
                      {exp.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1 text-slate-300 font-medium">
                        <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300 border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="h-3 w-3 text-emerald-400" />
                    <span>KEY RESPONSIBILITIES & DELIVERABLES</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack used */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
