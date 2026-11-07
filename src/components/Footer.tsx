'use client';

import React from 'react';
import { personalInfo } from '../data/content';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Phone, ArrowUp, Download, FileText } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#02040a] relative overflow-hidden py-16 text-slate-400 text-xs">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-indigo-600/30 text-xs text-indigo-300">
                OP
              </span>
              <span>{personalInfo.name}</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Computer Engineering undergraduate (B.Tech, 2027) experienced in building web applications with React, Next.js and Node.js, with 100+ DSA problems solved in C++. Open to entry-level software engineering roles.
            </p>

            <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Software Engineering & Full-Stack Opportunities</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-white uppercase tracking-wider">
              NAVIGATION
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education & Certifications
                </a>
              </li>
              <li>
                <a href="#api-console" className="hover:text-white transition-colors">
                  Interactive API Console
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Profiles & Resume */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-white uppercase tracking-wider">
              CONNECT & RESUME
            </span>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-indigo-400 font-medium"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js 15, TypeScript & Tailwind Glassmorphism.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
