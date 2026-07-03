import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X, ShieldAlert } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  tag: string;
  id: string;
  description: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certifications: Certificate[] = [
    {
      id: "cert-1",
      title: "IIT-M Pravartak Certified Full Stack Development Course With AI Tools",
      issuer: "GUVI HCL Zen Class",
      tag: "Full Stack Masterclass",
      description: "Comprehensive 3-month certification program from IIT Madras Pravartak & GUVI covering MERN stack structures, database design, REST APIs, and modern AI development frameworks."
    },
    {
      id: "cert-2",
      title: "ReactJS Core Architecture",
      issuer: "GUVI HCL Zen Class",
      tag: "React Architecture",
      description: "Focused training on advanced component patterns, custom hooks, React lifecycles, virtual DOM rendering, and state management pipelines."
    },
    {
      id: "cert-3",
      title: "Node.js Professional Certification",
      issuer: "GUVI HCL Zen Class",
      tag: "Backend Systems",
      description: "Specialized certification on server architectures, asynchronous event loops, Express server construction, API security configurations, and middlewares."
    },
    {
      id: "cert-4",
      title: "Database Engineering & Management",
      issuer: "GUVI HCL Zen Class",
      tag: "NoSQL & SQL Systems",
      description: "Covers schema structures, collections indexing, performance optimizations, aggregate pipelines, and query construction for MongoDB and MySQL databases."
    },
    {
      id: "cert-5",
      title: "Advanced JavaScript Systems",
      issuer: "GUVI HCL Zen Class",
      tag: "Advanced JS Engine",
      description: "Validates deep familiarity with JavaScript execution contexts, engines, closures, prototypal inheritance, and ES6+ asynchronous capabilities."
    },
    {
      id: "cert-6",
      title: "HTML, CSS, & Tailwind CSS Blueprinting",
      issuer: "GUVI HCL Zen Class",
      tag: "UI Engineering",
      description: "Mastery of modern responsive layouts, layout grids, CSS flexbox paradigms, and Tailwind utility systems to construct fluid components."
    }
  ];

  return (
    <section id="certifications" className="py-28 bg-[#0b0f19] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Verified <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            Academic achievements and professional credentials authenticated through GUVI HCL and IIT-M Pravartak training frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#1e293b]/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Card visual representing a premium certificate structure */}
              <div className="p-1.5 bg-slate-900/50 border-b border-slate-800">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-cyan-955/40 via-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  
                  {/* Styled Mock Certificate elements */}
                  <Award className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">Certificate of Accomplishment</span>
                  <h4 className="text-xs font-display font-bold text-white text-center max-w-[200px] mt-1.5 leading-snug line-clamp-2">
                    {cert.title}
                  </h4>
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-semibold text-primary">
                    <CheckCircle className="w-3 h-3 text-primary" />
                    <span>VERIFIED CREDENTIAL</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {cert.issuer}
                    </span>
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-900 text-primary border border-slate-800">
                      {cert.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors duration-200 mb-2.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-slate-text text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* View Action */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 rounded-lg border border-slate-700 hover:border-primary hover:text-primary text-slate-350 font-semibold text-xs transition-colors duration-200 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate detail modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-gray/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#131e35] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Header controls */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-2 text-primary-dark">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">Credential Authenticated</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-455 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="text-left space-y-4">
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white leading-snug">
                {selectedCert.title}
              </h3>
              
              <div className="flex items-center space-x-3 text-sm">
                <span className="font-semibold text-slate-400">Issued By:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800">
                  {selectedCert.issuer}
                </span>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <span className="font-semibold text-slate-400">Category:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-primary text-xs font-semibold border border-slate-800">
                  {selectedCert.tag}
                </span>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wider">Course Syllabus / Overview</h4>
                <p className="text-slate-text text-sm leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-lg bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
