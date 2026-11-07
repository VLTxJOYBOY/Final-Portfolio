'use client';

import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Code
} from 'lucide-react';

type Endpoint = {
  method: 'GET' | 'POST';
  path: string;
  name: string;
  description: string;
};

export default function ApiConsole() {
  const endpoints: Endpoint[] = [
    {
      method: 'GET',
      path: '/api/profile',
      name: 'Candidate Profile & Resume Data',
      description: 'Returns candidate summary, academic background, tech stack, and project catalog.',
    },
    {
      method: 'GET',
      path: '/api/health',
      name: 'Server Diagnostics & Telemetry',
      description: 'Live production uptime, memory usage, runtime environment, and API health.',
    },
  ];

  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(endpoints[0]);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const executeRequest = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);
    setLatency(null);

    const startTime = performance.now();
    try {
      const res = await fetch(selectedEndpoint.path, {
        method: selectedEndpoint.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const endTime = performance.now();
      const elapsed = Math.round(endTime - startTime);
      setLatency(elapsed);
      setStatus(res.status);

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err: unknown) {
      const endTime = performance.now();
      setLatency(Math.round(endTime - startTime));
      setStatus(500);
      setResponse(JSON.stringify({ error: 'Failed to fetch API endpoint', details: String(err) }, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="api-console" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span>FULL-STACK API RUNTIME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Full-Stack API Console
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            This portfolio is backed by active Next.js App Router API routes. Test live server endpoints to inspect JSON serialization and response times in real-time.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-3xl border border-white/10 bg-[#070b14]/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top terminal bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                api.ompatil.internal • Next.js 15 Backend
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-400">API Operational</span>
            </div>
          </div>

          {/* Request Configurator */}
          <div className="p-5 sm:p-6 border-b border-white/10 bg-[#0a0f1d]/50 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                SELECT API TARGET:
              </span>
              <span className="text-xs text-slate-400">
                {selectedEndpoint.description}
              </span>
            </div>

            {/* Endpoint Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {endpoints.map((ep) => {
                const isSelected = selectedEndpoint.path === ep.path;
                return (
                  <button
                    key={ep.path}
                    onClick={() => {
                      setSelectedEndpoint(ep);
                      setResponse(null);
                      setStatus(null);
                      setLatency(null);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-150 border ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-950/40 text-white shadow-sm'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span className="font-bold text-emerald-400">{ep.method}</span>
                    <span>{ep.path}</span>
                  </button>
                );
              })}
            </div>

            {/* Execute Button Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 flex-grow sm:flex-grow-0">
                <span className="font-bold text-emerald-400">{selectedEndpoint.method}</span>
                <span className="text-slate-400">https://ompatil.dev</span>
                <span className="text-white font-semibold">{selectedEndpoint.path}</span>
              </div>

              <button
                onClick={executeRequest}
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-600 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 active:scale-95 disabled:opacity-50 transition-all duration-150"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Executing Request...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Send Live Request</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response Inspector */}
          <div className="p-5 sm:p-6 bg-black/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  HTTP RESPONSE
                </span>

                {status !== null && (
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono font-bold ${
                      status === 200
                        ? 'border border-emerald-500/30 bg-emerald-950/40 text-emerald-400'
                        : 'border border-rose-500/30 bg-rose-950/40 text-rose-400'
                    }`}
                  >
                    {status === 200 ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                    {status} {status === 200 ? 'OK' : 'ERROR'}
                  </span>
                )}

                {latency !== null && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="h-3 w-3 text-sky-400" />
                    {latency}ms
                  </span>
                )}
              </div>

              {response && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy JSON</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Code / JSON Display box */}
            <div className="relative rounded-xl border border-white/10 bg-[#03060c] p-4 font-mono text-xs text-slate-300 overflow-x-auto min-h-[200px]">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Resolving route & processing payload...</span>
                  </div>
                </div>
              )}

              {response ? (
                <pre className="text-emerald-300/90 whitespace-pre font-mono text-[11px] leading-relaxed">
                  {response}
                </pre>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 space-y-2">
                  <Code className="h-8 w-8 text-slate-600" />
                  <p className="text-xs">
                    Click "Send Live Request" above to test the live JSON payload from the Next.js API route.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
