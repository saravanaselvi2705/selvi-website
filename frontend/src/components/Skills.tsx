import React from 'react';
import { Layout, Server, Database as DbIcon, Wrench, Calendar, Globe, Cpu, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Databases",
      icon: <DbIcon className="w-5 h-5 text-cyan-400" />,
      skills: ["MongoDB", "Mongoose", "MySQL"]
    },
    {
      title: "Content Management",
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      skills: ["WordPress", "Website Management", "Blog Publishing", "Theme Customization", "SEO Optimization"]
    },
    {
      title: "Project Management",
      icon: <Calendar className="w-5 h-5 text-cyan-400" />,
      skills: ["Agile Methodology", "Scrum Fundamentals", "SRS Documentation", "Stakeholder Communication", "Jira"]
    },
    {
      title: "Business Analysis",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      skills: ["Requirement Analysis", "Process Management", "Workflow Design", "Business Documentation"]
    },
    {
      title: "SEO & Analytics",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      skills: ["Google Analytics", "Search Console", "Technical SEO", "On-page SEO", "Keyword Research"]
    },
    {
      title: "AI Tools",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      skills: ["ChatGPT", "Prompt Engineering", "AI Assisted Development", "AI Productivity"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-cyan-400" />,
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0B1121] font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl text-white tracking-widest uppercase outline-text">
            Technologies <span className="text-cyan-400">&</span> Knowledge
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            A structured overview of my technical capabilities and project management tools.
          </p>
        </motion.div>

        {/* Tree Structure Container */}
        <div className="relative md:ml-12">

          {/* Main Vertical Trunk Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-0 w-px bg-cyan-400/50 z-0"
          ></motion.div>

          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 md:pl-16 pb-16 last:pb-0 group"
            >
              {/* Horizontal branch from trunk to Title */}
              <div className="absolute top-5 left-0 w-8 md:w-16 h-px bg-cyan-400/50"></div>

              <div className="flex flex-col">

                {/* Category Title Header */}
                <div className="flex items-center gap-3 mb-6 relative">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white border-b border-cyan-400/30 pb-1 pr-4 inline-flex items-center gap-3">
                    {cat.icon}
                    {cat.title}
                  </h3>
                </div>

                {/* Sub-branch and Skills Box */}
                <div className="relative pl-6 md:pl-12">

                  {/* The 'L' Shaped Connector Line dropping into the box */}
                  <div className="absolute left-2 md:left-6 top-[-1.5rem] bottom-1/2 w-4 md:w-6 border-l border-b border-cyan-400/50 transition-colors duration-300 group-hover:border-cyan-300"></div>

                  {/* Glowing Skills Box */}
                  <div className="
                    relative 
                    border border-cyan-400/30 
                    bg-[#121A2F]/90 
                    p-5 md:p-6 
                    rounded-sm
                    inline-flex flex-wrap gap-2 md:gap-3
                    shadow-[0_0_15px_rgba(34,211,238,0.05)]
                    group-hover:border-cyan-400/60
                    group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                    transition-all duration-300
                    max-w-4xl
                  ">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="
                          px-3 py-1.5 
                          text-xs md:text-sm font-medium tracking-wide
                          rounded-md
                          bg-[#0B1121] 
                          border border-slate-700/80 
                          text-slate-300 
                          hover:border-cyan-400 
                          hover:text-cyan-300 
                          transition-colors duration-200
                          cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Bottom horizontal finish line for the trunk */}
          <div className="absolute bottom-0 left-0 w-12 h-px bg-cyan-400/50"></div>
        </div>
      </div>
    </section>
  );
}