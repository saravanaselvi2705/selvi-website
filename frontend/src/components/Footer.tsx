import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0b0f19] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display font-bold text-sm text-white tracking-wider uppercase">
            Saravana Selvi
          </span>
          <span className="text-[11px] text-slate-text mt-1">
            Full Stack MERN Developer | WordPress Developer | Project Coordinator | Business Analyst
          </span>
        </div>

        {/* Middle Credits */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-text">
          <span>Built using</span>
          <span className="font-semibold text-primary">React</span>
          <span>•</span>
          <span className="font-semibold text-primary">Node</span>
          <span>•</span>
          <span className="font-semibold text-primary">Express</span>
          <span>•</span>
          <span className="font-semibold text-primary">MongoDB</span>
          <span>•</span>
          <span className="font-semibold text-primary">Tailwind CSS</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-3.5">
          <a
            href="https://github.com/saravanaselvi2705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/45 transition-all duration-200"
            title="GitHub Portfolio"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/45 transition-all duration-200"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:saravanaselvi2705@gmail.com"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/45 transition-all duration-200"
            title="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-[10px] text-slate-500 mt-8">
        &copy; {new Date().getFullYear()} Saravana Selvi Sudalaikani. All rights reserved.
      </div>
    </footer>
  );
}
