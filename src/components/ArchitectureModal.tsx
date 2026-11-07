'use client';

import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Layers, Cpu, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#090d16]/95 p-6 sm:p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl z-10 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-2.5 py-0.5 text-[11px] font-mono text-indigo-300 mb-2">
              <Cpu className="h-3 w-3" />
              <span>PROJECT ARCHITECTURE & DEEP DIVE</span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Project Overview */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
            System Overview
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Architecture Details */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-300">
              <Layers className="h-3.5 w-3.5" />
              SYSTEM TOPOLOGY & INTEGRATION FLOW
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Verified Stack</span>
          </div>

          <div className="rounded-xl border border-white/5 bg-[#03060c] p-4 text-xs font-mono text-indigo-200">
            {project.architecture}
          </div>
        </div>

        {/* Special Features & Innovations */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-5 space-y-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Key Features & Technical Implementations
          </span>
          <ul className="space-y-2">
            {project.specialFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Benchmark Metrics */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Key Metrics & Impact
          </span>
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-sky-300">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
