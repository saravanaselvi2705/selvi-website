import React from 'react';
import { GraduationCap, Briefcase, Heart, Target, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const narrativePillars = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      content: "B.Tech in Electronics & Communication Engineering (2022), Government Engineering College, Idukki. Foundation in logic design, electronics systems, and processes."
    },
    {
      title: "Professional Journey",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      content: "Evolved from process optimization as a Process Analyst to full stack web development, agile sprint operations, and executive client management."
    },
    {
      title: "Current Role",
      icon: <Heart className="w-5 h-5 text-primary" />,
      content: "Providing Freelance Consultancy, Full Stack MERN development, client requirement capturing, SEO analytics reporting, and Agile project coordination."
    },
    {
      title: "Passion & Future Goals",
      icon: <Target className="w-5 h-5 text-primary" />,
      content: "Combining full-stack software development with artificial intelligence integrations (AI-assisted coding, agentic LLM pipelines) and Scrum operations."
    }
  ];

  const corePillars = [
    "Full Stack Development",
    "Project Coordination",
    "Requirement Gathering",
    "Agile Methodology",
    "SEO Analytics",
    "AI Development"
  ];

  return (
    <section id="about" className="py-28 bg-[#0b0f19] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Professional <span className="text-primary">Story</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            An overview of my education, career milestones, specialized competencies, and project execution philosophy.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-display text-2xl font-bold text-dark-gray mb-2">
              Bridging Technical Engineering and Strategic Execution
            </h3>
            <p className="text-slate-text text-base leading-relaxed">
              My engineering background enables me to approach development systematically. By understanding both hardware logic and software layers, I build highly cohesive solutions that solve real business problems. 
            </p>
            <p className="text-slate-text text-base leading-relaxed">
              With experience at Lymdata Labs and international agencies, I don't just write code; I analyze workflows, map client functional specifications, manage Agile development boards (Jira & ClickUp), configure API systems, and oversee financial parameters using Zoho Books. 
            </p>
            <p className="text-slate-text text-base leading-relaxed">
              This diverse skillset is designed for organizations looking for professionals who can coordinate development lifecycles, communicate with stakeholders, and write production-ready React and Node.js solutions.
            </p>

            {/* Core Pillars badges */}
            <div className="pt-4">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Core Competencies</span>
              <div className="flex flex-wrap gap-2">
                {corePillars.map((pillar, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#1e293b]/40 border border-slate-800 text-slate-200 hover:border-primary hover:text-primary transition-colors duration-200 shadow-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary mr-1" />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Details cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {narrativePillars.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1e293b]/40 p-6 rounded-2xl border border-slate-800/80 shadow-sm hover:shadow-md hover:border-slate-700 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-dark-gray mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-text text-xs md:text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
