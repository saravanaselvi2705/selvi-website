"use client";

import React from 'react';
import { Calendar, Briefcase, Award, Terminal, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Project Coordinator | SEO Analyst",
      company: "LYM Data Labs Pvt. Ltd.",
      period: "Sept 2025 – Present",
      icon: <Workflow className="w-5 h-5 text-cyan-400" />,
      summary:
        "Directing software lifecycles, team tasking, and digital execution to bridge client requirements with technical deliverables.",
      points: [
        "Coordinated project phases and client onboarding for platforms including YatraBay and Launch72.",
        "Managed Jira workflows, task allotments, and performance reviews for the development team.",
        "Directed APK build testing, resolving functional errors in image viewing and deletion capabilities.",
        "Authored detailed SRS documentation and executed targeted SEO and analytics strategies."
      ],
      techs: ["Jira", "Agile", "SRS", "APK Testing", "WordPress", "SEO"],
    },

    {
      role: "Administrative Assistant",
      company: "GD Innovative Solutions",
      period: "Feb 2024 – Aug 2025",
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      summary:
        "Managed client communication, documentation, reporting, and day-to-day business operations.",
      points: [
        "Managed USA client communication and cross-functional workflow coordination.",
        "Refined administrative report formats and executive summaries to meet strict professional standards.",
        "Streamlined operational process management and business documentation."
      ],
      techs: ["Microsoft Office", "Reporting", "Process Operations"],
    },

    {
      role: "Process Analyst",
      company: "Spengeotec Pvt. Ltd.",
      period: "Aug 2022 – Jan 2024",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      summary:
        "Improved software processes through KPI analysis, issue tracking, and Agile workflows.",
      points: [
        "KPI monitoring & Root Cause Analysis",
        "Jira ticket & defect management",
        "Agile workflow & change management",
      ],
      techs: ["Jira", "Agile", "KPI", "RCA"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0B1121] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="
                group
                bg-[#121A2F] 
                border border-slate-700/50 
                rounded-2xl 
                p-6 md:p-8
                hover:border-cyan-400/50
                hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] 
                transition-all duration-300
                flex flex-col sm:flex-row gap-6
                relative overflow-hidden
                h-full
              "
            >
              {/* Subtle top glow line to match the target lighting */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

              {/* Icon Section */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-sm group-hover:border-cyan-400/30 transition-colors">
                  {exp.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Title & Company */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.company} <span className="text-slate-400 font-medium block sm:inline mt-1 sm:mt-0">| {exp.role}</span>
                </h3>

                {/* Period */}
                <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-semibold mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Key Points */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {exp.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5 opacity-80" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50 mt-auto">
                  {exp.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        px-3 py-1
                        rounded-md
                        bg-[#0B1121]
                        border border-slate-700/80
                        text-slate-300
                        text-[11px] font-medium tracking-wide
                        group-hover:border-cyan-400/30 transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}