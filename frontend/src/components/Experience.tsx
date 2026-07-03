import React from 'react';
import { Calendar, Briefcase, Award, Terminal, Workflow } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Administrative Assistant / Executive",
      company: "Lymdata Labs Pvt. Ltd.",
      period: "Sept 2022 - Present",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Systematically capture and document client functional requirements to map directly into technical development phases.",
        "Oversee daily agile sprints, resource allocations, and timeline milestones across design, development, and testing teams using JIRA/ClickUp.",
        "Code structural layouts and web components utilizing HTML and React-based frameworks."
      ],
      achievements: [
        "Successfully reduced runtime workflow bottlenecks by 15% through optimized resource deployment.",
        "Integrated financial pipelines tracking via Zoho Books alongside real-time CMS content updates."
      ],
      techs: ["React.js", "Node.js", "HTML5", "Tailwind CSS", "Jira", "ClickUp", "Zoho Books"]
    },
    {
      role: "Administrative Assistant (Remote - USA Client)",
      company: "GD Innovative Solutions Pvt. Ltd.",
      period: "Feb 2024 - Present",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Supervise core communication flows, business agendas, and operational data logging schedules for international stakeholders.",
        "Review and update customer relations logs and coordinate calendar workflows."
      ],
      achievements: [
        "Strengthened query response times by 30% through structured CRM scheduling schemas."
      ],
      techs: ["HubSpot CRM", "Trello", "Google Workspace", "Agile Sprints"]
    },
    {
      role: "Process Analyst",
      company: "Spengeotec Pvt. Ltd.",
      period: "Aug 2022 - Jan 2024",
      icon: <Terminal className="w-5 h-5 text-primary" />,
      responsibilities: [
        "Managed root cause analysis and workflow optimization protocols to reduce runtime bottlenecks.",
        "Documented technical specifications and compiled client-side process maps."
      ],
      achievements: [
        "Mapped 40+ complex client systems to structural SRS specifications."
      ],
      techs: ["SRS Specification", "Flowcharts", "MS Office", "Agile Execution"]
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
                      className="px-2.5 py-1 rounded bg-slate-900 text-slate-200 text-xs border border-slate-800"
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
