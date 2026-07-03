import React from 'react';
import { X, CheckCircle, HelpCircle, Lightbulb, GitBranch, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';
import { Github } from './Icons';

interface StackPilotProps {
  onClose: () => void;
}

export default function StackPilot({ onClose }: StackPilotProps) {
  return (
    <div className="fixed inset-0 z-50 bg-dark-gray/60 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-[#131e35] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-250 my-8">

        {/* Top Window Header */}
        <div className="flex items-center justify-between bg-slate-900 px-6 py-4.5 border-b border-slate-800">
          <div className="flex items-center space-x-2 text-primary-dark">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">Enterprise Case Study Deep Dive</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-450 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Case Study Content */}
        <div className="p-6 md:p-10 space-y-10 text-left overflow-y-auto max-h-[80vh]">

          {/* Main Header Title */}
          <div>
            <span className="px-3 py-1 rounded-md bg-slate-900 text-primary text-xs font-bold uppercase tracking-wider border border-slate-800">
              Featured Solution
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mt-3 tracking-tight">
              StackPilot AI
            </h2>
            <p className="text-slate-text text-base md:text-lg mt-2 max-w-3xl">
              An enterprise-grade CRM, CMS, and AI-powered workflow sprint coordinator built to map and automate technical development documentation pipelines.
            </p>
          </div>

          {/* Grid Layout: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-red-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white">The Problem</h4>
              </div>
              <p className="text-slate-text text-sm leading-relaxed">
                Enterprise development cycles suffer from disconnects between business requirements (SRS documents) and actual code repositories. Manual documentation drift, outdated JIRA task states, and lack of automated context mapping often lead to sprint delays and delivery misalignments.
              </p>
            </div>

            <div className="bg-cyan-955/10 border border-primary/20 p-6 rounded-2xl">
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-display font-bold text-base text-white">The Solution</h4>
              </div>
              <p className="text-slate-text text-sm leading-relaxed">
                StackPilot AI resolves documentation drift by using LLMs to sync business specs, user stories, and codebase files. By embedding prompt engineering structures, the platform maps requirements directly into tasks, code outlines, and validation steps.
              </p>
            </div>
          </div>

          {/* Tech Stack Modules */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Technologies Integrated</h4>
            <div className="flex flex-wrap gap-2.5">
              {["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "OpenAI REST API", "Git/GitHub Core"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Modules Breakdown */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">System Modules</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Module 1 */}
              <div className="p-6 border border-slate-800 bg-slate-900/30 rounded-2xl">
                <h5 className="font-display font-bold text-base text-white mb-2">Enterprise CRM Suite</h5>
                <p className="text-slate-text text-xs leading-relaxed">
                  Manages communication channels, captures client request parameters, tracks status progress, and updates billing parameters.
                </p>
              </div>

              {/* Module 2 */}
              <div className="p-6 border border-slate-800 bg-slate-900/30 rounded-2xl">
                <h5 className="font-display font-bold text-base text-white mb-2">Dynamic CMS Engine</h5>
                <p className="text-slate-text text-xs leading-relaxed">
                  Generates technical templates, organizes technical documentation hierarchies, and reviews formatting indices.
                </p>
              </div>

              {/* Module 3 */}
              <div className="p-6 border border-slate-800 bg-slate-900/30 rounded-2xl">
                <h5 className="font-display font-bold text-base text-white mb-2">AI Sprint Coordinator</h5>
                <p className="text-slate-text text-xs leading-relaxed">
                  Synthesizes user requests using prompt templates to produce ready-to-use task backlogs, saving 20%+ scheduling time.
                </p>
              </div>

            </div>
          </div>

          {/* Architecture & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Architecture Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <GitBranch className="w-5 h-5 text-primary" />
                <h4 className="font-display font-bold text-base text-white">Architecture Design</h4>
              </div>
              <p className="text-slate-text text-xs md:text-sm leading-relaxed">
                The platform is designed around a decoupled client-server architecture with state caching. The frontend makes secure REST API requests to the Node.js router. AI outputs are contextualized via structured payloads before query evaluation in MongoDB.
              </p>
            </div>

            {/* Technical Challenges */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <h4 className="font-display font-bold text-base text-white">Key Challenges &amp; Resolution</h4>
              </div>
              <p className="text-slate-text text-xs md:text-sm leading-relaxed">
                *Token Context Drift:* Mapping large system specifications exceeded standard API context lengths. Resolved by chunking inputs dynamically and executing targeted vector lookups before prompt completion.
              </p>
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h4 className="font-display font-bold text-base text-white">Business Impact &amp; Metrics</h4>
              </div>
              <p className="text-slate-text text-xs md:text-sm leading-relaxed">
                Integrated into active client lifecycle procedures, reducing documentation drafting overheads by 40% and shortening Agile sprint setup times from days to hours.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-end justify-center min-w-[140px]">
              <div className="text-3xl font-display font-extrabold text-primary">40%</div>
              <span className="text-[10px] font-semibold text-slate-450 uppercase">Overhead Reduced</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-all duration-200"
              >
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/saravanaselvi2705/stackpilot-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-xs"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-[#1e293b] hover:bg-slate-800 text-slate-200 font-semibold text-xs cursor-pointer"
            >
              Close Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
