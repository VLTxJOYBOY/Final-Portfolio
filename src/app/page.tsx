'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import EducationCertifications from '@/components/EducationCertifications';
import ApiConsole from '@/components/ApiConsole';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ArchitectureModal from '@/components/ArchitectureModal';
import ResumeModal from '@/components/ResumeModal';
import CommandPalette from '@/components/CommandPalette';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global keyboard shortcut for Command Palette (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background ambient lighting network */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-sky-950/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] -left-40 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-purple-950/10 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-[65%] -right-40 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-sky-950/10 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Hero Section */}
        <main className="flex-grow">
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

          {/* Featured Projects */}
          <Projects onSelectProject={(p) => setSelectedProject(p)} />

          {/* Technical Skills Matrix */}
          <TechStack />

          {/* Experience & Internships */}
          <Experience />

          {/* Education, Certifications, Achievements & Extra-Curricular */}
          <EducationCertifications />

          {/* Live Full-Stack API Console */}
          <ApiConsole />

          {/* Contact & Inquiries */}
          <ContactForm />
        </main>

        {/* Formal Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />
    </div>
  );
}
