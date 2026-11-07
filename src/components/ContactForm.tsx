'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/content';
import SpotlightCard from './SpotlightCard';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone,
  CheckCircle2, 
  AlertCircle, 
  Clock,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleType: 'fulltime-sde',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#38bdf8', '#10b981', '#ffffff'],
        });
      } else {
        setErrorMessage(data.error || 'Failed to deliver message. Please try directly via email.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please contact directly at ' + personalInfo.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3.5 py-1 text-xs font-mono text-indigo-300">
            <Mail className="h-3.5 w-3.5 text-indigo-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Conversation or Inquire
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Currently open to entry-level software engineering roles, full-stack development opportunities, and collaborative technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-7 border-white/[0.08] bg-[#0c1220]/70 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-lg font-bold text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-300">
                  {personalInfo.roleSubtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-slate-200 hover:text-indigo-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Phone Number</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="font-mono text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-sky-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Location</div>
                    <span className="text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Response Time</div>
                    <span className="text-slate-200">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-950/30 text-indigo-300 hover:bg-indigo-900/40 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download CV</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-sky-500/30 bg-sky-950/20 text-sky-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right interactive form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-7 sm:p-8 border-white/[0.1] bg-[#0c1220]/80">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                    Thank you for reaching out. I have received your message and will reply via email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        roleType: 'fulltime-sde',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl border border-rose-500/30 bg-rose-950/30 text-rose-300 text-xs">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Tech Corp / Startup"
                        className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiting@company.com"
                        className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs"
                      >
                        <option value="fulltime-sde" className="bg-[#090e1a] text-white">
                          Full-Time Software Engineering Role
                        </option>
                        <option value="internship" className="bg-[#090e1a] text-white">
                          Software Development Internship
                        </option>
                        <option value="freelance" className="bg-[#090e1a] text-white">
                          Project Collaboration / Hackathon
                        </option>
                        <option value="other" className="bg-[#090e1a] text-white">
                          General Discussion / Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Opportunity / Tech Discussion"
                      className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share brief details regarding the position, project, or schedule."
                      className="w-full rounded-xl glass-input px-3.5 py-2.5 text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-gradient-to-r from-indigo-600 to-sky-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-sky-500 active:scale-[0.99] disabled:opacity-50 transition-all duration-200"
                  >
                    {loading ? (
                      <span>Sending message via API...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
