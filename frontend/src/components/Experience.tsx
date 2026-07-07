import React from 'react';
import { Calendar, Briefcase, Award, Terminal, Workflow } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Project Coordinator | SEO Analyst",
      company: "LYM Data Labs Pvt. Ltd.",
      period: "Sept 2022 – Present",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Gather client requirements through meetings and convert business needs into technical documentation (SRS).",
        "Coordinate with MERN Stack developers, designers, and QA teams throughout the project lifecycle.",
        "Manage Jira tasks, project tracking, and stakeholder communication.",
        "Perform SEO analysis using Google Analytics, Google Search Console, and Google Business Profile (GMB).",
        "Manage WordPress websites, blog publishing, content updates, and website maintenance.",
        "Prepare project documentation, invoices (Zoho Books), reports, and support day-to-day administrative operations."
      ],
      achievements: [
        "Successfully coordinated multiple client software projects from requirement gathering to delivery.",
        "Improved project communication through effective documentation, Jira management, and stakeholder coordination.",
        "Enhanced website visibility through SEO optimization and WordPress content management."
      ],
      techs: ["React Collaboration", "MERN Workflow", "WordPress", "Jira", "Google Analytics", "Google Search Console", "GMB", "Zoho Books", "SRS", "Project Coordination"]
    },
    {
      role: "Administrative Assistant",
      company: "GD Innovative Solutions",
      period: "Feb 2024 – Present",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Supervised general administration, business agendas, and daily process coordination.",
        "Managed communication channels and direct client communication with USA stakeholders.",
        "Compiled, updated, and organized business documentation and detailed reporting.",
        "Utilized Microsoft Office suite (Word, Excel, PowerPoint) to analyze operational data and prepare presentations."
      ],
      achievements: [
        "Strengthened client communication workflows and query response times through structured reporting schedules.",
        "Maintained high efficiency in administrative processes and documentation control."
      ],
      techs: ["Microsoft Office", "Client Communication", "Reporting", "Process Coordination", "Documentation"]
    },
    {
      role: "Process Analyst",
      company: "Spengeotec Pvt. Ltd.",
      period: "Aug 2022 – Jan 2024",
      icon: <Terminal className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Monitored KPIs and performed Root Cause Analysis (RCA) to improve project and process performance.",
        "Verified and managed Jira tickets for automotive software development projects.",
        "Supported Change Management activities, defect tracking, workflow optimization, and technical documentation.",
        "Collaborated with development teams in an Agile software development environment."
      ],
      achievements: [
        "Contributed to process improvements through KPI monitoring and Root Cause Analysis.",
        "Ensured accurate issue tracking and workflow management across automotive software projects."
      ],
      techs: ["Jira", "Agile", "KPI Monitoring", "Root Cause Analysis", "Change Management", "Automotive Software", "Process Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-28 bg-[#0f172a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            A chronological roadmap showing my career history, specific responsibilities, achievements, and toolkits.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group text-left">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[49px] md:-left-[65px] top-1 w-10 h-10 rounded-full bg-[#0f172a] border border-slate-800 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* Header details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-dark-gray group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-200 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full w-fit text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Subheadings split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-wider mb-3">Responsibilities</h4>
                    <ul className="space-y-2.5 text-slate-text text-sm leading-relaxed">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start">
                          <span className="mr-2.5 mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-wider mb-3">Key Achievements</h4>
                    <ul className="space-y-2.5 text-slate-text text-sm leading-relaxed">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start">
                          <Award className="w-4 h-4 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-semibold text-slate-450 mr-2">Key Tech:</span>
                  {exp.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-slate-900 text-slate-200 text-xs border border-slate-800 hover:border-primary/40 hover:text-primary transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
