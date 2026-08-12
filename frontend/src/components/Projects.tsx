"use client";

import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Eye, Sparkles, X } from 'lucide-react';
import { Github } from './Icons';
import StackPilot from './StackPilot';

export interface ProjectType {
  id: string;
  title: string;
  category: string;
  displayCategory: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  hasCaseStudy: boolean;
  isFeatured?: boolean;
  isFullStack?: boolean;
  keyFeatures?: string[];
}

type TabCategory = 'All' | 'Enterprise SaaS' | 'Portfolios' | 'Business & Creative' | 'Learning & Finance';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabCategory>('All');
  const [showStackPilotCase, setShowStackPilotCase] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // View All State
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const INITIAL_DISPLAY_COUNT = 3;

  const featuredProjects: ProjectType[] = [
    {
      id: "stackpilot-ai",
      title: "StackPilot AI",
      category: "Enterprise SaaS",
      displayCategory: "Full Stack SaaS",
      description: "Enterprise project management and business operations platform combining CRM, projects, requirements, documentation, reporting, and team workflows.",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"],
      githubUrl: "https://github.com/saravanaselvi2705/stackpilot-ai",
      liveUrl: "https://stackpilot-ai-seven.vercel.app/",
      hasCaseStudy: true,
      isFeatured: true,
      isFullStack: true,
      keyFeatures: [
        "CRM & client management",
        "Project & task management",
        "Requirement management",
        "Documentation",
        "Reporting & analytics",
        "Team workflows",
        "Business operations"
      ]
    },
    {
      id: "mern-auction-platform",
      title: "MERN Auction Platform",
      category: "Enterprise SaaS",
      displayCategory: "Full Stack Application",
      description: "Full-stack auction platform with authentication, product management, auctions, bidding workflows, winner selection, bid history, and buyer/seller dashboards.",
      tags: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "",
      liveUrl: "https://auction-platform-silk.vercel.app/",
      hasCaseStudy: false,
      isFullStack: true,
      keyFeatures: [
        "Authentication",
        "Product management",
        "Auction management",
        "Bidding system",
        "Bid validation",
        "Winner selection",
        "Bid history",
        "Buyer/seller dashboards"
      ]
    },
    {
      id: "crm-platform",
      title: "CRM Platform",
      category: "Enterprise SaaS",
      displayCategory: "Full Stack CRM",
      description: "Full-stack CRM platform designed to manage customer relationships, business workflows, and client information through a centralized web application.",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/saravanaselvi2705/StackCRM",
      liveUrl: "https://stack-crm-eight.vercel.app/",
      hasCaseStudy: false,
      isFullStack: true,
      keyFeatures: [
        "Customer relationship management",
        "Client contact & lead tracking",
        "Business workflow automation",
        "Centralized client database & reporting"
      ]
    },
    {
      id: "creovix-agency",
      title: "Creovix Digital Agency Website",
      category: "Business & Creative",
      displayCategory: "Agency Platform",
      description: "A modern, high-conversion agency platform showcasing full-stack SaaS engineering, web development services, project portfolios, and digital client solutions.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      githubUrl: "https://github.com/saravanaselvi2705/creovix-website",
      liveUrl: "https://creovix-website.vercel.app/",
      hasCaseStudy: false,
      keyFeatures: [
        "High-conversion agency platform",
        "Full-stack SaaS services showcase",
        "Interactive portfolio catalog",
        "Client solution booking workflows"
      ]
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
      hasCaseStudy: false,
      keyFeatures: [
        "Client portfolio layout",
        "Design asset gallery",
        "Responsive grid presentation",
        "Branding integration"
      ]
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
      hasCaseStudy: false,
      keyFeatures: [
        "QA engineering project showcase",
        "Test automation case studies",
        "Interactive skills roadmap",
        "Responsive layout"
      ]
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
      hasCaseStudy: false,
      keyFeatures: [
        "Responsive portfolio interface",
        "Dynamic project carousel",
        "Interactive experience timeline",
        "Contact form integration"
      ]
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
      hasCaseStudy: false,
      keyFeatures: [
        "Income and expense tracking",
        "Budget calculations & balance summaries",
        "Data visualization with charts",
        "Responsive mobile dashboard"
      ]
    },
    {
      id: "notes-app",
      title: "Notes Application",
      category: "Learning & Finance",
      displayCategory: "Learning Project",
      description: "A CRUD Notes application developed during the GUVI Full Stack Development course to understand state management, component architecture, and local data persistence.",
      tags: ["React", "JavaScript", "CRUD", "Local Storage"],
      githubUrl: "https://github.com/saravanaselvi2705/notesapp",
      liveUrl: "https://notesapp-pearl-nu.vercel.app/",
      hasCaseStudy: false,
      keyFeatures: [
        "Complete CRUD operations",
        "State management architecture",
        "Local Storage persistence",
        "Clean minimal interface"
      ]
    }
  ];

  const categories: TabCategory[] = ['All', 'Enterprise SaaS', 'Portfolios', 'Business & Creative', 'Learning & Finance'];

  const filteredProjects = activeTab === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeTab);

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const getThumbnailColor = (id: string): string => {
    switch (id) {
      case 'stackpilot-ai': return 'from-cyan-950 via-blue-950 to-slate-900';
      case 'mern-auction-platform': return 'from-emerald-950 via-teal-950 to-slate-900';
      case 'crm-platform': return 'from-indigo-950 via-slate-900 to-blue-950';
      case 'creovix-agency': return 'from-violet-950 via-purple-900/60 to-slate-900';
      case 'keerthika-portfolio': return 'from-rose-950/70 to-orange-900/60';
      case 'ashidh-qa': return 'from-cyan-950 to-blue-900/80';
      case 'personal-portfolio': return 'from-teal-950 to-cyan-900';
      case 'expense-tracker': return 'from-blue-950 to-slate-900';
      default: return 'from-yellow-950/70 to-amber-900/70';
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0B1121] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Professional <span className="text-cyan-400">Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Selected full-stack applications and digital products built with modern web technologies.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#121A2F] border border-slate-700/50 rounded-2xl">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedProject(null);
                  setShowAllProjects(false);
                }}
                className={`px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${activeTab === tab
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Grid Layout Effect */}
      <div className="w-full max-w-7xl mx-auto pb-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: ProjectType) => {
            const isStackPilot = project.id === 'stackpilot-ai';
            return (
              <div
                key={project.id}
                className={`
                  group flex flex-col h-full bg-[#121A2F] border rounded-3xl overflow-hidden 
                  transition-all duration-300 text-left
                  ${project.isFullStack || isStackPilot
                    ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                    : 'border-slate-700/50 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                  }
                `}
              >
                {/* Visual Thumbnail Header */}
                <div className="p-1.5 bg-slate-800/40 border-b border-slate-700/50 aspect-[16/9] shrink-0">
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-tr ${getThumbnailColor(project.id)} flex flex-col items-center justify-center p-5 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30 opacity-40 mix-blend-overlay"></div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                      {project.isFullStack && (
                        <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#0B1121]/90 border border-cyan-400/50 text-[10px] font-extrabold text-cyan-400 shadow-sm tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                          <span>FULL STACK</span>
                        </div>
                      )}
                      {project.isFeatured && (
                        <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-[#0B1121]/90 border border-amber-400/40 text-[10px] font-bold text-amber-400 shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>FEATURED</span>
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/60 uppercase">
                      {project.displayCategory}
                    </span>
                    <h3 className="font-bold text-xl md:text-2xl text-white text-center mt-1.5 tracking-tight px-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body - Now taking up remaining space */}
                <div className="p-6 flex-1 flex flex-col bg-[#121A2F]">
                  <div className="flex-1">
                    {/* Removed line-clamp so the full description is readable */}
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags - Showing all tags now instead of slicing */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-medium tracking-wide rounded-md bg-[#0B1121] text-slate-300 border border-slate-700/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action links anchored to the bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                    <div className="flex items-center space-x-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                          title="View Code"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                      ) : null}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Live Demo</span>
                        </a>
                      ) : null}
                    </div>

                    {/* Details click */}
                    {project.hasCaseStudy ? (
                      <button
                        onClick={() => setShowStackPilotCase(true)}
                        className="flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-cyan-400 cursor-pointer"
                      >
                        <span>Details</span>
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Button */}
        {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121A2F] border border-cyan-400/50 text-cyan-400 font-bold text-sm hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all cursor-pointer"
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAllProjects ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showStackPilotCase && (
        <StackPilot onClose={() => setShowStackPilotCase(false)} />
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#121A2F] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {selectedProject.isFullStack && (
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    FULL STACK
                  </span>
                )}
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {selectedProject.displayCategory}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-left space-y-4">
              <h3 className="font-bold text-2xl text-white leading-snug">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Key Features Section */}
              {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-slate-700/50">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedProject.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Complete Tech Stack */}
              <div className="space-y-2 pt-3 border-t border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Tech Stack ({selectedProject.tags.length})
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs font-medium tracking-wide rounded-md bg-[#0B1121] text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Repository & Live Deployment */}
              <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.githubUrl ? (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Repository</span>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors font-semibold text-xs bg-slate-800/50"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </div>
                  ) : null}

                  {selectedProject.liveUrl ? (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Live Deployment</span>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  ) : null}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 transition-colors cursor-pointer self-end sm:self-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}