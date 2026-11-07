'use client';

import React, { useState } from 'react';
import { skillCategories } from '../data/content';
import SpotlightCard from './SpotlightCard';
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  BookOpen, 
  CheckCircle, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Code2, Layout, Database, Cpu, BookOpen];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-950/30 px-3 py-1 text-xs font-mono text-indigo-300">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            <span>TECHNICAL COMPETENCIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Engineering Toolkit
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive overview of programming languages, full-stack frameworks, database design, AI tools, and core computer science fundamentals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeTab === idx;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'border-indigo-500/60 bg-indigo-600/20 text-white shadow-lg shadow-indigo-500/10'
                    : 'border-white/[0.08] bg-[#0c1220]/50 text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <SpotlightCard
              key={skill.name}
              className={`p-5 transition-all duration-200 ${
                skill.highlight
                  ? 'border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0c1220]/70'
                  : 'border-white/[0.08] bg-[#0c1220]/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-white tracking-tight">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="flex items-center gap-1 rounded bg-indigo-500/20 border border-indigo-500/30 px-1.5 py-0.5 text-[10px] font-mono text-indigo-300">
                        <Sparkles className="h-2.5 w-2.5" />
                        Key Skill
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-indigo-300 font-medium">{skill.level}</span>
                  </div>
                </div>

                <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
              </div>

              {/* Visual Indicator */}
              <div className="mt-4 w-full bg-white/[0.05] rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    skill.highlight
                      ? 'w-[90%] bg-gradient-to-r from-indigo-500 to-sky-400'
                      : 'w-[75%] bg-gradient-to-r from-sky-500 to-emerald-400'
                  }`}
                />
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Engineering Philosophy Bento */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0c1220]/40 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Problem Solving
              </span>
              <h4 className="text-sm font-semibold text-white">
                100+ DSA in C++ & HackerRank 4-Star
              </h4>
              <p className="text-xs text-slate-400">
                Rigorous grounding in algorithmic complexity, data structures, recursion, dynamic programming, and spatial efficiency.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                Full-Stack Architecture
              </span>
              <h4 className="text-sm font-semibold text-white">
                Next.js, React, Node.js & Databases
              </h4>
              <p className="text-xs text-slate-400">
                Clean separation of concerns, normalized database schemas in MySQL/MongoDB, and responsive user-centric frontends.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Modern AI Integration
              </span>
              <h4 className="text-sm font-semibold text-white">
                LangGraph, Groq & LLM APIs
              </h4>
              <p className="text-xs text-slate-400">
                Hands-on experience orchestrating stateful AI agents with human-in-the-loop safeguards and prompt optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
