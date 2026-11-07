'use client';

import React from 'react';
import { educationList, certifications, achievements, extraCurricular, languages } from '../data/content';
import SpotlightCard from './SpotlightCard';
import { GraduationCap, Award, ShieldCheck, Trophy, HeartHandshake, Languages } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3.5 py-1 text-xs font-mono text-indigo-300">
            <GraduationCap className="h-3.5 w-3.5 text-indigo-400" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Certifications & Recognition
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A verified record of computer engineering coursework, professional developer certifications, competitive problem solving, and leadership roles.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Education & Achievements */}
          <div className="space-y-6">
            {/* Education Card */}
            <SpotlightCard className="p-7 border-white/[0.08] bg-[#0c1220]/70 space-y-5">
              <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400">Undergraduate & Schooling</p>
                </div>
              </div>

              <div className="space-y-5">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 border-l-2 border-indigo-500/40 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="text-sm font-bold text-white">{edu.institution}</h4>
                      <span className="text-xs font-mono text-indigo-400">{edu.period}</span>
                    </div>
                    <div className="text-xs text-indigo-200 font-medium">{edu.degree}</div>
                    {edu.score && (
                      <div className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
                        Score: {edu.score}
                      </div>
                    )}
                    {edu.details && (
                      <p className="text-xs text-slate-400 pt-0.5 leading-relaxed">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Achievements Card */}
            <SpotlightCard className="p-7 border-emerald-500/20 bg-gradient-to-br from-emerald-950/15 via-[#0c1220]/70 to-[#0c1220]/70 space-y-4">
              <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Competitive Achievements</h3>
                  <p className="text-xs text-slate-400">Problem Solving & Coding Metrics</p>
                </div>
              </div>

              <div className="space-y-3">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{ach.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 pl-3.5 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Certifications, Extra-Curricular & Languages */}
          <div className="space-y-6">
            {/* Certifications Card */}
            <SpotlightCard className="p-7 border-white/[0.08] bg-[#0c1220]/70 space-y-4">
              <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Verified Certifications</h3>
                  <p className="text-xs text-slate-400">Professional Courses Completed</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 flex flex-col justify-between hover:border-purple-500/40 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white leading-snug">
                        {cert.title}
                      </div>
                      {cert.issuer && (
                        <div className="text-[10px] text-purple-300 font-mono mt-1">
                          {cert.issuer}
                        </div>
                      )}
                    </div>
                    <span className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <Award className="h-3 w-3" /> Certified
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Extra-Curricular & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 border-white/[0.08] bg-[#0c1220]/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <HeartHandshake className="h-4 w-4" />
                  <span>EXTRA-CURRICULAR</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {extraCurricular.map((ec, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-semibold text-white">{ec.title}</div>
                      <div className="text-[11px] text-indigo-300 font-mono">{ec.role}</div>
                      <div className="text-[11px] text-slate-400 leading-snug">{ec.description}</div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5 border-white/[0.08] bg-[#0c1220]/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <Languages className="h-4 w-4" />
                  <span>LANGUAGES</span>
                </div>
                <div className="space-y-2 text-xs">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

