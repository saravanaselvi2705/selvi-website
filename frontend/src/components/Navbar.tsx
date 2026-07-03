import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'resume', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-[#0f172a]/85 border-b border-slate-800/80 py-3.5 shadow-sm' 
        : 'bg-[#0f172a]/40 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-slate-950 font-black shadow-md shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
            <span className="font-display font-extrabold text-sm tracking-tight">SS</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-dark-gray group-hover:text-primary transition-colors duration-300">
            Saravana Selvi
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-250 relative py-1 ${
                  isActive ? 'text-primary' : 'text-slate-text hover:text-dark-gray'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></span>
              </a>
            );
          })}
          <a
            href="#resume"
            className="flex items-center space-x-1.5 px-4.5 py-2 text-xs font-bold rounded-lg bg-primary text-slate-950 hover:bg-primary-dark hover:shadow-md transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-text hover:text-primary focus:outline-none p-1.5 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[69px] left-0 w-full bg-[#0f172a] border-b border-slate-800 shadow-lg z-40 lg:hidden"
          >
            <div className="flex flex-col py-6 px-8 space-y-4">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-2.5 border-b border-slate-800 transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-slate-text hover:text-dark-gray'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#resume"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-1.5 mt-2 w-full py-3 text-sm font-bold rounded-lg bg-primary text-slate-950 hover:bg-primary-dark transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
