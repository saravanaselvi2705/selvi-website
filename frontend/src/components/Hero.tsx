import React from 'react';
import { ArrowRight, FileText, Mail, Award, CheckCircle, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const achievements = [
    { value: '3+', label: 'Years Experience', icon: <Award className="w-5 h-5 text-primary" /> },
    { value: '10+', label: 'Projects Delivered', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
    { value: '15+', label: 'Technologies Mastered', icon: <Database className="w-5 h-5 text-primary" /> },
    { value: '100%', label: 'Responsive Apps', icon: <Cpu className="w-5 h-5 text-primary" /> }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#0f172a]">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Wording & CTAs */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#1e293b]/60 border border-slate-800 text-primary text-xs font-bold tracking-wider uppercase mb-5">
              Available for Full-time & Consultancies
            </span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 md:gap-3 mb-6"
          >
            <span className="text-base md:text-lg font-semibold text-slate-text">Full Stack MERN Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block"></span>
            <span className="text-base md:text-lg font-semibold text-slate-text">WordPress Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block"></span>
            <span className="text-base md:text-lg font-semibold text-slate-text">Project Coordinator</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block"></span>
            <span className="text-base md:text-lg font-semibold text-slate-text">Business Analyst</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-text text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Full Stack Developer with 3+ years of professional experience in software development, project coordination, SEO operations, business analysis, and client communication. Skilled in building scalable MERN applications, WordPress websites, CRM systems, CMS platforms, and AI-powered business solutions. Passionate about creating modern software products that solve real business problems.
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
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6.5 py-4.5 rounded-xl bg-transparent border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-400" />
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
                className="bg-[#1e293b]/40 border border-slate-800/80 p-5 rounded-2xl shadow-md backdrop-blur-sm flex items-center space-x-3.5 hover:bg-slate-800/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-xl md:text-2xl text-white leading-none">
                    {item.value}
                  </h4>
                  <span className="text-xs text-slate-text mt-0.5 block font-medium">
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
