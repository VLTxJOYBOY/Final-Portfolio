'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/content';
import { 
  Search, 
  Code2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Mail, 
  Download, 
  FileText,
  X
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResumeModal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'download-resume',
      label: 'Download Resume (Official PDF)',
      category: 'Resume',
      icon: Download,
      run: () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumeUrl;
        link.download = personalInfo.resumeFileName;
        link.click();
        onClose();
      },
    },
    {
      id: 'preview-resume',
      label: 'Preview Resume & Education Credentials',
      category: 'Resume',
      icon: FileText,
      run: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      id: 'projects',
      label: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: Code2,
      run: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'skills',
      label: 'Inspect Technical Competencies & Skills',
      category: 'Navigation',
      icon: Layers,
      run: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'experience',
      label: 'View Work Experience & Internships',
      category: 'Navigation',
      icon: Briefcase,
      run: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'education',
      label: 'View Education, Certifications & Achievements',
      category: 'Navigation',
      icon: GraduationCap,
      run: () => {
        window.location.hash = '#education';
        onClose();
      },
    },
    {
      id: 'api-console',
      label: 'Launch Interactive Live API Console',
      category: 'Developer Tools',
      icon: Terminal,
      run: () => {
        window.location.hash = '#api-console';
        onClose();
      },
    },
    {
      id: 'contact',
      label: 'Send Inquiry / Contact Om Patil',
      category: 'Communication',
      icon: Mail,
      run: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
  ];

  const filteredActions = query.trim() === ''
    ? actions
    : actions.filter((a) =>
        a.label.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#0a0e1a]/95 shadow-2xl backdrop-blur-2xl z-10 overflow-hidden space-y-2">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
          <Search className="h-4 w-4 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (Esc to close)"
            className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-500 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto px-2 pb-3 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={action.run}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.07] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span>{action.label}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                    {action.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Bottom hints */}
        <div className="border-t border-white/10 px-4 py-2 bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
