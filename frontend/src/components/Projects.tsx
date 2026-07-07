import React, { useState } from 'react';
import { Code, ExternalLink, ChevronRight, Eye, Sparkles, X } from 'lucide-react';
import { Github } from './Icons';
import StackPilot from './StackPilot';

export interface ProjectType {
  id: string;
  title: string;
  category: 'Enterprise SaaS' | 'Portfolios' | 'Business & Creative' | 'Learning & Finance';
  displayCategory: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  hasCaseStudy: boolean;
  isFeatured?: boolean;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Enterprise SaaS' | 'Portfolios' | 'Business & Creative' | 'Learning & Finance'>('All');
  const [showStackPilotCase, setShowStackPilotCase] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Chronological Progression from Learning to Enterprise SaaS
  const featuredProjects: ProjectType[] = [
    {
      id: "notes-app",
      title: "Notes Application",
      category: "Learning & Finance",
      displayCategory: "Learning Project",
      description: "A CRUD Notes application developed during the GUVI Full Stack Development course to understand state management, component architecture, and local data persistence.",
      tags: ["React", "JavaScript", "CRUD", "Local Storage"],
      githubUrl: "https://github.com/saravanaselvi2705/notesapp",
      liveUrl: "https://notesapp-pearl-nu.vercel.app/",
      hasCaseStudy: false
    },
    {
      id: "expense-tracker",
      title: "Smart Expense Tracker",
      category: "Learning & Finance",
      displayCategory: "Finance Application",
      description: "A responsive expense management application for tracking income, expenses, budgets, and financial summaries with an intuitive dashboard.",
      tags: ["React", "JavaScript", "Charts", "Responsive Design"],
      githubUrl: "https://github.com/saravanaselvi2705/smart-expense-tracker",
      liveUrl: "https://vocal-crisp-ff6daf.netlify.app/",
      hasCaseStudy: false
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "Portfolios",
      displayCategory: "Portfolio",
      description: "My personal portfolio website showcasing my skills, projects, certifications, and professional growth.",
      tags: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/saravanaselvi2705",
      liveUrl: "https://candid-fudge-74ec78.netlify.app/",
      hasCaseStudy: false
    },
    {
      id: "love-story",
      title: "Cinematic Love Story",
      category: "Business & Creative",
      displayCategory: "Creative Website",
      description: "A personalized interactive gifting website featuring animations, storytelling, gallery sections, and a memorable digital experience.",
      tags: ["React", "Framer Motion", "CSS", "Animations"],
      githubUrl: "https://github.com/saravanaselvi2705",
      liveUrl: "https://cinematic-love-story-ido8.vercel.app/",
      hasCaseStudy: false
    },
    {
      id: "ashidh-qa",
      title: "Portfolio for Test Engineer",
      category: "Portfolios",
      displayCategory: "Professional Portfolio",
      description: "Designed and developed a professional portfolio website tailored for a Software Test Engineer, highlighting experience, technical skills, certifications, and QA projects.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/saravanaselvi2705/AshidhTestEngineer",
      liveUrl: "https://ashidh-test-engineer.vercel.app/",
      hasCaseStudy: false
    },
    {
      id: "keerthika-portfolio",
      title: "Portfolio for Graphic Designer",
      category: "Portfolios",
      displayCategory: "Client Portfolio",
      description: "Designed and developed a modern personal portfolio website for a client featuring responsive layouts, project showcase, and professional branding.",
      tags: ["React", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/saravanaselvi2705/keerthika-portfolio",
      liveUrl: "https://keerthika-portfolio-8ucn.vercel.app/",
      hasCaseStudy: false
    },
    {
      id: "auronex-business",
      title: "Auronex Business Website",
      category: "Business & Creative",
      displayCategory: "Business Website",
      description: "Developed a modern corporate website prototype for a client with a clean UI, service showcase, responsive design, and business-focused presentation.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/saravanaselvi2705",
      liveUrl: "https://auronex-next.vercel.app/",
      hasCaseStudy: false
    },
    {
      id: "stackpilot-ai",
      title: "⭐ StackPilot AI",
      category: "Enterprise SaaS",
      displayCategory: "Enterprise SaaS Platform",
      description: "An AI-powered enterprise business management platform combining CRM, Project Management, Requirement Management, Documentation, AI Assistant, Reporting, Analytics, and Business Operations into a single modern SaaS application.",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"],
      githubUrl: "https://github.com/saravanaselvi2705/stackpilot-ai",
      liveUrl: "https://stackpilot-ai-seven.vercel.app/",
      hasCaseStudy: true,
      isFeatured: true
    }
  ];

  const categories: Array<'All' | 'Enterprise SaaS' | 'Portfolios' | 'Business & Creative' | 'Learning & Finance'> = [
    'All', 'Enterprise SaaS', 'Portfolios', 'Business & Creative', 'Learning & Finance'
  ];

  const filteredProjects = activeTab === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeTab);

  // Helper to generate visual thumbnail layout with gradients
  const getThumbnailColor = (id: string) => {
    switch (id) {
      case 'stackpilot-ai':
        return 'from-cyan-900 via-indigo-950 to-slate-900';
      case 'auronex-business':
        return 'from-slate-800 to-slate-950';
      case 'keerthika-portfolio':
        return 'from-rose-950/70 to-orange-900/60';
      case 'ashidh-qa':
        return 'from-cyan-950 to-blue-900/80';
      case 'love-story':
        return 'from-purple-950/70 to-pink-950/60';
      case 'personal-portfolio':
        return 'from-teal-950 to-cyan-900';
      case 'expense-tracker':
        return 'from-blue-950 to-slate-900';
      case 'notes-app':
      default:
        return 'from-yellow-950/70 to-amber-900/70';
    }
  };

  return (
    <section id="projects" className="py-28 bg-[#0f172a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Professional <span className="text-primary">Showcase</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            A chronological timeline of my engineering journey, spanning academic applications, client platforms, and enterprise solutions.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#1e293b]/60 border border-slate-800 rounded-2xl">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedProject(null);
                }}
                className={`px-5 py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${activeTab === tab
                  ? 'bg-primary text-slate-950 font-bold shadow-sm shadow-primary/10'
                  : 'text-slate-450 hover:text-white hover:bg-slate-800/50'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isStackPilot = project.id === 'stackpilot-ai';
            return (
              <div
                key={project.id}
                className={`group bg-[#1e293b]/40 border rounded-3xl overflow-hidden hover:border-primary/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md text-left ${isStackPilot
                  ? 'border-primary/40 ring-1 ring-primary/10 bg-[#1e293b]/60 md:col-span-2 lg:col-span-3'
                  : 'border-slate-800'
                  }`}
              >
                {/* Visual Thumbnail Header */}
                <div className={`p-1.5 bg-slate-900/40 border-b border-slate-800 ${isStackPilot ? 'h-40 md:h-48 lg:h-52' : 'aspect-[16/10]'}`}>
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-tr ${getThumbnailColor(project.id)} flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
                    {/* Visual accents */}
                    <div className="absolute inset-0 bg-black/30 opacity-40 mix-blend-overlay"></div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>

                    {project.isFeatured && (
                      <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-bold text-primary shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 fill-primary text-primary" />
                        <span>FEATURED SYSTEM</span>
                      </div>
                    )}

                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">
                      {project.displayCategory}
                    </span>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-white text-center mt-2 tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {project.displayCategory}
                      </span>
                    </div>

                    <p className="text-slate-text text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div className="flex items-center space-x-3.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-xs font-semibold text-slate-400 hover:text-primary transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      {/* Case study click */}
                      {project.hasCaseStudy ? (
                        <button
                          onClick={() => setShowStackPilotCase(true)}
                          className="flex items-center space-x-0.5 text-xs font-bold text-primary hover:text-primary-dark cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center space-x-0.5 text-xs font-bold text-slate-450 hover:text-primary cursor-pointer"
                        >
                          <span>Quick View</span>
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* StackPilot Deep Dive Modal */}
        {showStackPilotCase && (
          <StackPilot onClose={() => setShowStackPilotCase(false)} />
        )}

        {/* Generic Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-gray/60 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative w-full max-w-lg bg-[#131e35] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450">
                  Project Details
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-450 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-left space-y-4">
                <h3 className="font-display font-extrabold text-2xl text-white leading-snug">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-text text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wider">Tech Stack Integrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-900 text-slate-350 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-between items-center border-t border-slate-800">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-lg bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    Close View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
