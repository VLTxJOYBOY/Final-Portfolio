'use client';

import React from 'react';
import { personalInfo, stats } from '../data/content';
import SpotlightCard from './SpotlightCard';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  FileText, 
  Cpu, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-10 right-10 w-[500px] h-[300px] bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 text-xs text-emerald-300 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide text-emerald-200">
              Open to Software Engineering & Full-Stack Roles
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/30 px-3 py-1.5 text-xs text-sky-300 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3 py-1.5 text-xs text-indigo-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>PCCOE Pune • B.Tech (2023 – 2027)</span>
          </div>
        </div>

        {/* Main Title & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                Hi, I am {personalInfo.name}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  Building Scalable Web Apps
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-emerald-300">
                  & Intelligent AI Systems.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Direct PDF Download */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-500 hover:scale-[1.02] active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* View Resume in Modal */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 active:scale-95"
              >
                <FileText className="h-4 w-4 text-indigo-400" />
                <span>Preview Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>

              <a
                href="#api-console"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-950/20 px-4 py-3 text-sm font-medium text-emerald-300 backdrop-blur-xl hover:bg-emerald-900/30 transition-all duration-200"
              >
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs">Live API</span>
              </a>
            </div>

            {/* Contact & Profiles */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="text-slate-400 font-medium">Connect & Verify:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>github.com/VLTxJOYBOY</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>linkedin.com/in/om-patil</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="inline-flex items-center gap-1 text-slate-400 font-mono">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </span>
            </div>
          </div>

          {/* Right Bento Highlights */}
          <div className="lg:col-span-4 space-y-4">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.2)"
              className="border-sky-500/20 bg-gradient-to-b from-sky-950/20 to-slate-900/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-sky-400 flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5" />
                  FULL-STACK & AI ARCHITECTURE
                </span>
                <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-mono text-sky-300 border border-sky-500/20">
                  Hands-on LLMs
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                Production experience developing with React, Next.js, and Node.js, combined with LangGraph multi-agent orchestration and LLM APIs (OpenAI, Claude, Groq).
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['React', 'Next.js', 'Node.js', 'LangGraph', 'MongoDB', 'MySQL', 'Python', 'C++'].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.2)"
              className="border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-slate-900/40"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5" />
                  ALGORITHMIC PROBLEM SOLVER
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                HackerRank 4-Star in Problem Solving with 100+ Data Structures & Algorithms problems solved in C++. Strong grounding in OOP, DBMS, and system optimization.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* Bento Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <SpotlightCard
              key={idx}
              className="p-5 text-center bg-black/40 border-white/[0.07]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 font-mono tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-200 font-medium">
                {s.label}
              </div>
              <div className="text-[10px] text-indigo-400 font-mono mt-0.5">
                {s.highlight}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
