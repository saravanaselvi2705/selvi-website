"use client";

import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X, Sparkles, Brain } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  tag: string;
  completedDate?: string;
  description: string;
  modules: string[];
  logoType?: 'guvi' | 'google' | 'coursera';
  credentialUrl?: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certifications: Certificate[] = [
    {
      id: "cert-guvi",
      title: "Certified Full Stack Development Programme",
      issuer: "IIT-M Pravartak + GUVI",
      tag: "Full Stack Development",
      description: "A comprehensive professional certification program from IIT Madras Pravartak & GUVI covering end-to-end full stack development modules, database management, and cloud operations.",
      modules: ["React.js", "Node.js", "MongoDB", "JavaScript", "Advanced JavaScript", "Database", "HTML", "CSS", "Tailwind CSS"],
      logoType: "guvi"
    },
    {
      id: "cert-google-pm",
      title: "Foundations of Project Management",
      issuer: "Google",
      platform: "Coursera",
      tag: "Project Management",
      completedDate: "July 2026",
      description: "Professional training certified by Google validating operational skills required for managing complex projects across lifecycle phases.",
      modules: ["Project Lifecycle", "Agile", "Project Planning", "Stakeholder Communication", "Project Documentation", "Risk Management"],
      logoType: "google",
      credentialUrl: "https://www.coursera.org"
    },
    {
      id: "cert-coursera-ba",
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      platform: "Coursera",
      tag: "Business Analysis",
      completedDate: "January 2024",
      description: "Specialized training addressing analytical workflows, requirements verification, process metrics analysis, and business process improvements.",
      modules: ["Business Analysis", "Requirement Analysis", "Process Improvement", "Workflow Optimization"],
      logoType: "coursera",
      credentialUrl: "https://www.coursera.org"
    }
  ];



  const renderLogo = (type?: 'guvi' | 'google' | 'coursera') => {
    switch (type) {
      case 'google':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-sm" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        );
      case 'coursera':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#2A73CC]" fill="currentColor">
            <path d="M12.012 3c-4.968 0-9.006 4.032-9.006 9s4.038 9 9.006 9c2.466 0 4.704-.996 6.33-2.616l-2.022-2.022A6.136 6.136 0 0 1 12.012 18c-3.306 0-5.994-2.694-5.994-6s2.688-6 5.994-6c1.614 0 3.084.642 4.164 1.68l2.022-2.022C16.632 3.996 14.412 3 12.012 3z" />
          </svg>
        );
      case 'guvi':
      default:
        return <Award className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#0B1121] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Verified <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Academic credentials and professional certifications validating full stack development, project coordination, and analytical business capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#121A2F] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header Illustration */}
              <div className="p-1.5 bg-slate-800/40 border-b border-slate-700/50">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-cyan-950/30 via-slate-900 to-[#0B1121] flex flex-col items-center justify-center p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl"></div>

                  {renderLogo(cert.logoType)}
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase mt-4">Certificate of Accomplishment</span>
                  <h4 className="text-sm font-bold text-white text-center max-w-[220px] mt-1.5 leading-snug line-clamp-2">
                    {cert.title}
                  </h4>

                  {/* Verified Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B1121] border border-cyan-400/30 text-[9px] font-bold text-cyan-400 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>VERIFIED CREDENTIAL</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {cert.issuer}
                    </span>
                    {cert.completedDate && (
                      <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-[#0B1121] text-slate-400 border border-slate-700/80">
                        {cert.completedDate}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors duration-200 mb-3 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* View Details Action */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 rounded-lg border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 font-semibold text-xs transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

      {/* Certification details modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#121A2F] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Header controls */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Credential Verified</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="text-left space-y-5">
              <h3 className="font-bold text-2xl text-white leading-snug">
                {selectedCert.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                <div className="space-y-1.5">
                  <span className="font-semibold text-slate-400 block">Issued By:</span>
                  <span className="px-3 py-1.5 rounded-md bg-[#0B1121] text-slate-200 font-mono text-[11px] border border-slate-700 inline-block">
                    {selectedCert.issuer}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <span className="font-semibold text-slate-400 block">Category:</span>
                  <span className="px-3 py-1.5 rounded-md bg-[#0B1121] text-cyan-400 text-[11px] font-bold border border-slate-700 inline-block">
                    {selectedCert.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Credential Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Modules covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.modules.map((mod, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-[11px] font-medium tracking-wide rounded-md bg-[#0B1121] text-slate-300 border border-slate-700"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-end space-x-3 border-t border-slate-700/50 mt-2">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors font-semibold text-xs flex items-center space-x-1.5"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}