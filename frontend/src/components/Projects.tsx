"use client";

import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft, Eye, Sparkles, X } from 'lucide-react';
import { Github } from './Icons';
import StackPilot from './StackPilot';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

type TabCategory = 'All' | 'Enterprise SaaS' | 'Portfolios' | 'Business & Creative' | 'Learning & Finance';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabCategory>('All');
  const [showStackPilotCase, setShowStackPilotCase] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

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
      id: "creovix-agency",
      title: "Creovix Digital Agency Website",
      category: "Business & Creative",
      displayCategory: "Agency Platform",
      description: "A modern, high-conversion agency platform showcasing full-stack SaaS engineering, web development services, project portfolios, and digital client solutions.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      githubUrl: "https://github.com/saravanaselvi2705/creovix-website",
      liveUrl: "https://creovix-website.vercel.app/",
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

  const categories: TabCategory[] = ['All', 'Enterprise SaaS', 'Portfolios', 'Business & Creative', 'Learning & Finance'];

  const filteredProjects = activeTab === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeTab);

  const getThumbnailColor = (id: string): string => {
    switch (id) {
      case 'stackpilot-ai': return 'from-cyan-900 via-indigo-950 to-slate-900';
      case 'creovix-agency': return 'from-violet-950 via-purple-900/60 to-slate-900';
      case 'auronex-business': return 'from-slate-800 to-slate-950';
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
            A chronological timeline of my engineering journey, spanning academic applications, client platforms, and enterprise solutions.
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
                }}
                className={`px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 ${activeTab === tab
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

      {/* Swiper Carousel Effect */}
      <div className="w-full relative pb-16">
        <Swiper
          key={activeTab}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          watchSlidesProgress={true} // <--- Fixes clicking issue on the left side clones
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          slideToClickedSlide={true}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-pagination-custom',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay]}
          className="w-full max-w-full"
        >
          {filteredProjects.map((project: ProjectType) => {
            const isStackPilot = project.id === 'stackpilot-ai';
            return (
              <SwiperSlide key={project.id} className="w-[85%] max-w-[400px] transition-opacity duration-300">
                <div
                  className={`
                    group h-full bg-[#121A2F] border rounded-3xl overflow-hidden 
                    transition-all duration-300 flex flex-col justify-between 
                    text-left
                    ${isStackPilot
                      ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                      : 'border-slate-700/50 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                    }
                  `}
                >
                  {/* Visual Thumbnail Header */}
                  <div className="p-1.5 bg-slate-800/40 border-b border-slate-700/50 aspect-[16/10]">
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-tr ${getThumbnailColor(project.id)} flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30 opacity-40 mix-blend-overlay"></div>
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>

                      {project.isFeatured && (
                        <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B1121] border border-cyan-400/30 text-[10px] font-bold text-cyan-400 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>FEATURED</span>
                        </div>
                      )}

                      <span className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">
                        {project.displayCategory}
                      </span>
                      <h3 className="font-bold text-xl md:text-2xl text-white text-center mt-2 tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-[#121A2F]">
                    <div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.slice(0, 4).map((tag: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-1 text-[10px] font-medium tracking-wide rounded-md bg-[#0B1121] text-slate-300 border border-slate-700/80"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-1 text-[10px] font-medium tracking-wide rounded-md bg-[#0B1121] text-cyan-400/70 border border-slate-700/80">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action links */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <div className="flex items-center space-x-4">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors">
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                              <span className="hidden sm:inline">Live Demo</span>
                            </a>
                          )}
                        </div>

                        {/* Details click */}
                        {project.hasCaseStudy ? (
                          <button onClick={() => setShowStackPilotCase(true)} className="flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                            <span>Case Study</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button onClick={() => setSelectedProject(project)} className="flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-cyan-400">
                            <span>Details</span>
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Controls (Arrows & Pagination) */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-[#121A2F] border border-slate-700 flex items-center justify-center text-cyan-400 hover:bg-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all z-10 cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="swiper-pagination-custom flex gap-2 items-center justify-center"></div>

          <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-[#121A2F] border border-slate-700 flex items-center justify-center text-cyan-400 hover:bg-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all z-10 cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modals */}
      {showStackPilotCase && (
        <StackPilot onClose={() => setShowStackPilotCase(false)} />
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#121A2F] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Project Details
              </span>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white transition-colors">
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

              <div className="space-y-2 pt-4 border-t border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack Integrated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, tIdx: number) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-medium tracking-wide rounded-md bg-[#0B1121] text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-between items-center border-t border-slate-700/50">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors font-semibold text-xs">
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
                <button onClick={() => setSelectedProject(null)} className="px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors">
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