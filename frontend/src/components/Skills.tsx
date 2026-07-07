import React from 'react';
import { Layout, Server, Database as DbIcon, Wrench, Calendar, Globe, Cpu, BookOpen, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Database",
      icon: <DbIcon className="w-5 h-5 text-primary" />,
      skills: ["MongoDB", "Mongoose", "MySQL"]
    },
    {
      title: "CMS",
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      skills: ["WordPress", "Website Management", "Content Management", "Blog Publishing", "Theme Customization", "Plugin Management", "Website Maintenance", "SEO Optimization"]
    },
    {
      title: "Project Management",
      icon: <Calendar className="w-5 h-5 text-primary" />,
      skills: ["Agile Methodology", "Scrum Fundamentals", "Project Planning", "Project Lifecycle", "Requirement Gathering", "Software Requirement Specification (SRS)", "Project Coordination", "Stakeholder Communication", "Risk Awareness", "Project Monitoring", "Jira"]
    },
    {
      title: "Business Analysis",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      skills: ["Business Analysis", "Requirement Analysis", "Process Management", "Process Improvement", "Workflow Design", "Business Documentation", "Stakeholder Engagement"]
    },
    {
      title: "SEO & Analytics",
      icon: <Globe className="w-5 h-5 text-primary" />,
      skills: ["Google Analytics", "Google Search Console", "Google Business Profile (GMB)", "Technical SEO", "On-page SEO", "Keyword Research", "Blog SEO", "SEO Reporting"]
    },
    {
      title: "AI Tools",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: ["ChatGPT", "Prompt Engineering", "Antigravity", "AI Assisted Development", "AI Documentation", "AI Productivity", "AI Workflow Optimization"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Jira", "MongoDB Compass", "Vercel", "Netlify", "Zoho books", "Microsoft Tools", "Trello", "Mailchimp"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-[#0b0f19] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Skills &amp; <span className="text-primary">Competencies</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            A comprehensive overview of my capabilities categorized by engineering, product management, and tooling.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-350 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-base text-dark-gray">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills badges list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:border-primary/50 hover:text-primary transition-all duration-200"
                    >
                      {skill}
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
