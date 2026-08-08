"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Award, CheckCircle, Database, Cpu } from 'lucide-react';
import SkillsCarousel from './SkillsCarousel';
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const achievements = [
    {
      value: "3+",
      label: "Years Experience",
      icon: <Award className="w-5 h-5 text-cyan-400" />
    },
    {
      value: "10+",
      label: "Projects Built",
      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />
    },
    {
      value: "MERN",
      label: "Primary Stack",
      icon: <Database className="w-5 h-5 text-cyan-400" />
    },
    {
      value: "Agile",
      label: "Project Delivery",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    }
  ];

  // Updated secondary roles to complement the new, stronger main headline
  const secondaryRoles = [
    "Business Analysis",
    "Agile & Scrum Methodology",
    "SEO & Web Optimization",
    "MERN Stack Solutions"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % secondaryRoles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [secondaryRoles.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#0B1121] font-sans">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow behind name */}
        <div
          className="absolute top-20 sm:top-30 left-1/2 -translate-x-1/2 sm:left-32 sm:translate-x-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full bg-cyan-400/10 blur-[100px] sm:blur-[120px]"
        />
        <div
          className="absolute bottom-10 sm:bottom-16 right-1/2 translate-x-1/2 sm:right-20 sm:translate-x-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-blue-500/5 blur-[100px] sm:blur-[120px]"
        />
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">

        {/* Left Column: Wording & CTAs */}
        <div className="lg:col-span-7 text-left w-full min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#121A2F] border border-cyan-400/30 mb-4 sm:mb-6 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-cyan-400 uppercase break-words">
                Available for Freelance & Full-Time
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-4 sm:mb-5 break-words"
          >
            <span className="block text-slate-400 font-medium text-lg sm:text-2xl md:text-3xl tracking-wide mb-1 sm:mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-1">
              Saravana Selvi
            </span>
          </motion.h1>

          <div className="mt-3 sm:mt-4 space-y-2">
            {/* Powerful Combined Primary Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 leading-snug break-words">
              Full-Stack Developer & <br className="hidden lg:block" /> Technical Project Coordinator
            </h2>

            {/* Secondary Roles / Specializations */}
            <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4 min-h-[32px]">
              <span className="text-slate-400 text-sm sm:text-base md:text-lg">
                Specializing in
              </span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={secondaryRoles[currentRole]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg tracking-wide"
                >
                  {secondaryRoles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-2xl"
          >
            I build scalable web applications and business software that help
            companies streamline operations, improve user experiences, and
            transform ideas into reliable digital products.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-full min-w-0"
          >
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-slate-700 bg-[#121A2F] text-white font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-slate-700 bg-[#121A2F] text-white font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Continuously Scrolling Skills Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-12 md:mt-16 w-full max-w-full overflow-hidden"
          >
            <SkillsCarousel />
          </motion.div>
        </div>

        {/* Right Column: Achievements stats */}
        <div className="lg:col-span-5 w-full min-w-0 mt-8 sm:mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full min-w-0">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="
                  group
                  bg-[#121A2F] 
                  border border-slate-700/50 
                  p-4 sm:p-5 
                  rounded-2xl 
                  shadow-sm 
                  backdrop-blur-sm 
                  flex items-center space-x-3.5 sm:space-x-4 
                  hover:-translate-y-1.5
                  hover:border-cyan-400/40 
                  hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]
                  transition-all duration-300
                "
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B1121] border border-slate-700/80 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/30 transition-colors">
                  {item.icon}
                </div>
                <div className="text-left min-w-0">
                  <h4 className="font-bold text-xl sm:text-2xl text-white leading-none mb-1">
                    {item.value}
                  </h4>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-400 uppercase truncate block">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}