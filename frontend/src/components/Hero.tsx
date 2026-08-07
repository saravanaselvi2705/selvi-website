import React from 'react';
import { ArrowRight, FileText, Mail, Award, CheckCircle, Database, Cpu } from 'lucide-react';
import SkillsCarousel from './SkillsCarousel';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const achievements = [
    {
      value: "3+",
      label: "Years Experience",
      icon: <Award className="w-5 h-5 text-primary" />
    },

    {
      value: "10+",
      label: "Projects Built",
      icon: <CheckCircle className="w-5 h-5 text-primary" />
    },
    {
      value: "MERN",
      label: "Primary Stack",
      icon: <Database className="w-5 h-5 text-primary" />
    },
    {
      value: "Agile",
      label: "Project Delivery",
      icon: <Cpu className="w-5 h-5 text-primary" />
    }
  ];

  const secondaryRoles = [
    "Project Coordinator",
    "Business Analyst",
    "WordPress Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % secondaryRoles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#0f172a]">
      {/* Decorative background shapes */}
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Glow behind name */}
        <div
          className="
      absolute
      top-30
      left-32
      w-[500px]
      h-[500px]
      rounded-full
      bg-cyan-500/15
      blur-[110px]
    "
        />
        <div
          className="
      absolute
      bottom-16
      right-20
      w-[350px]
      h-[350px]
      rounded-full
      bg-blue-500/5
      blur-[120px]
    "
        />
      </div>


      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Wording & CTAs */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-sm font-medium text-primary">
                Available for Freelance & Full-Time
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-5"
          >
            <span className="block text-slate-text font-normal text-2xl md:text-3xl tracking-wide mb-1">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent pb-1">
              Saravana Selvi
            </span>
          </motion.h1>

          <div className="mt-4 space-y-2">

            {/* Primary Role */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Full Stack MERN Developer
            </h2>

            {/* Secondary Roles */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-slate-400 text-lg">
                Expertise includes
              </span>

              <AnimatePresence mode="wait">

                <motion.span
                  key={secondaryRoles[currentRole]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-primary font-semibold text-lg">
                  {secondaryRoles[currentRole]}
                </motion.span>

              </AnimatePresence>

            </div>

          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-text text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            I build scalable web applications and business software that help
            companies streamline operations, improve user experiences, and
            transform ideas into reliable digital products.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6.5 py-4.5 rounded-xl bg-primary text-slate-950 font-bold hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-lg cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6.5 py-4.5 rounded-xl border border-slate-700 bg-transparent text-white font-semibold hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6.5 py-4.5 rounded-xl bg-[#1e293b] text-primary font-semibold hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Continuously Scrolling Skills Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 md:mt-12"
          >
            <SkillsCarousel />
          </motion.div>
        </div>

        {/* Right Column: Achievements stats */}
        <div className="lg:col-span-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-[#1e293b]/40 border border-slate-800/80 p-5 rounded-2xl shadow-md backdrop-blur-sm flex items-center space-x-3.5 hover:-translate-y-2
hover:border-primary/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-xl md:text-2xl text-white leading-none">
                    {item.value}
                  </h4>
                  <span className="text-sm text-slate-text mt-0.5 block font-medium">
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
