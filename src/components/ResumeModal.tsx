'use client';

import React from 'react';
import { personalInfo, experiences, skillCategories, projects, educationList, certifications, achievements, extraCurricular, languages } from '../data/content';
import { X, Printer, Download, FileText, CheckCircle2, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const resumeData = {
      personalInfo,
      educationList,
      skillCategories,
      experiences,
      projects,
      certifications,
      achievements,
      extraCurricular,
      languages,
      generatedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Om_Bhimrao_Patil_Resume.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#090d16] p-6 sm:p-10 shadow-2xl z-10 space-y-6">
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl border border-indigo-500/30 bg-indigo-950/40 text-indigo-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Resume & Curriculum Vitae</span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                  Verified Candidate
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {personalInfo.name} • {personalInfo.roleSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Download Official PDF */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/30"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Document (matching image / PDF) */}
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm font-sans bg-black/50 p-6 sm:p-8 rounded-2xl border border-white/10">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 text-center space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-xs text-slate-400">
              {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
            </p>
            <div className="flex justify-center items-center gap-4 text-xs font-mono text-indigo-400 pt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="h-3 w-3" />
                <span>linkedin.com/in/om-patil</span>
              </a>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GithubIcon className="h-3 w-3" />
                <span>github.com/VLTxJOYBOY</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5 border-b border-white/10 pb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2 border-b border-white/10 pb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              EDUCATION
            </h4>
            <div className="space-y-3">
              <div className="space-y-0.5">
                <div className="flex justify-between font-bold text-white text-xs sm:text-sm">
                  <span>Pimpri Chinchwad College of Engineering, Pune</span>
                  <span className="font-mono text-slate-400 text-xs">2023 – 2027</span>
                </div>
                <div className="text-xs text-slate-300">
                  Bachelor of Technology (B.Tech), Computer Engineering | Expected: June 2027
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-medium text-white">Secondary School Certificate (SSC)</span>
                  <span className="font-mono text-emerald-400">Percentage: 95.60%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 border-b border-white/10 pb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              TECHNICAL SKILLS
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div><b className="text-white">Programming Languages:</b> C++, JavaScript, Python</div>
              <div><b className="text-white">Frontend:</b> React, Next.js, HTML5, CSS3, Bootstrap, Tailwind CSS</div>
              <div><b className="text-white">Databases:</b> MySQL, MongoDB</div>
              <div><b className="text-white">Tools & Platforms:</b> Git, GitHub, AWS (EC2, S3), VS Code</div>
              <div><b className="text-white">AI / Productivity:</b> Prompt Engineering, LLM APIs (OpenAI, Claude), GitHub Copilot, Cursor, Claude Code</div>
              <div><b className="text-white">Core Concepts:</b> Data Structures & Algorithms, OOP, DBMS, Agile Fundamentals</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3 border-b border-white/10 pb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              EXPERIENCE
            </h4>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
                    <div>
                      <span>{exp.role}</span>, <span className="font-normal text-indigo-300">{exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3 border-b border-white/10 pb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              PROJECTS
            </h4>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400">{proj.year}</span>
                  </div>
                  <div className="text-[11px] font-mono text-indigo-300 italic">
                    {proj.techStack.join(', ')}
                  </div>
                  <div className="text-xs text-slate-300">
                    <b className="text-white">Overview:</b> {proj.overview}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 pt-0.5">
                    {proj.specialFeatures.map((sf, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{sf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                CERTIFICATIONS
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-400">•</span>
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                ACHIEVEMENTS
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">•</span>
                    <span>{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extra-Curricular & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                EXTRA-CURRICULAR ACTIVITIES
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {extraCurricular.map((ec, i) => (
                  <li key={i}>
                    • <b>{ec.title}</b> — {ec.role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                LANGUAGES
              </h4>
              <div className="text-xs text-slate-300">
                English (Professional Proficiency) | Hindi (Native) | Marathi (Native)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA in Modal */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <span className="text-xs text-slate-400 font-mono">
            Document: {personalInfo.resumeFileName} (PDF)
          </span>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
