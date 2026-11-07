'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/content';
import { 
  Terminal, 
  Menu, 
  X, 
  Code2, 
  Briefcase, 
  Layers, 
  GraduationCap,
  Send,
  Search,
  Download,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: "Projects", icon: Code2 },
    { href: "#skills", label: "Skills", icon: Layers },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#education", label: "Education & Certs", icon: GraduationCap },
    { href: "#api-console", label: "Live API", icon: Terminal },
    { href: "#contact", label: "Contact", icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-95"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent p-[1px] shadow-sm shadow-indigo-500/20 backdrop-blur-md">
              <span className="text-sm font-black tracking-tighter text-white group-hover:text-indigo-300 transition-colors">
                OP
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
                {personalInfo.shortName}
              </span>
              <span className="text-[10px] text-indigo-400 font-mono tracking-wider">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#0c1220]/60 px-3 py-1.5 backdrop-blur-xl shadow-glass-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                >
                  <Icon className="h-3.5 w-3.5 text-slate-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all duration-150"
              title="Open Command Palette (⌘K)"
            >
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span className="hidden xl:inline text-[11px] text-slate-400">Search</span>
              <kbd className="hidden sm:inline-block rounded bg-white/10 px-1 py-0.5 text-[10px] font-mono text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* View Resume Modal Button */}
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Direct Download Resume CTA Button */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-indigo-400/30 bg-gradient-to-r from-indigo-600 to-sky-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-indigo-500/40 active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-indigo-100" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="p-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/30 text-indigo-200 text-xs font-medium flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#060913]/95 backdrop-blur-2xl px-4 py-4 space-y-2 mt-2">
          <div className="pb-2 mb-2 border-b border-white/10 flex justify-between items-center">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center gap-1 text-xs text-slate-400 border border-white/10 px-2 py-1 rounded bg-white/5"
            >
              <Search className="h-3 w-3" /> ⌘K
            </button>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.06]"
              >
                <Icon className="h-4 w-4 text-indigo-400" />
                <span>{link.label}</span>
              </a>
            );
          })}

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full text-center py-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-medium text-xs flex items-center justify-center gap-1"
            >
              <FileText className="h-3.5 w-3.5 text-indigo-400" />
              <span>Preview Resume</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 rounded-xl bg-indigo-600 text-white font-medium text-xs flex items-center justify-center gap-1"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
