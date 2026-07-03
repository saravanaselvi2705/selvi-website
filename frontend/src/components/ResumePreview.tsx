import React from 'react';
import { FileText, Download, Eye, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function ResumePreview() {
  return (
    <section id="resume" className="py-28 bg-[#0b0f19] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Professional <span className="text-primary">Resume</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            Review my experience details, education history, and competencies. Download the print-ready PDF version.
          </p>
        </div>

        {/* Resume Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Mockup of Resume */}
          <div className="lg:col-span-8 bg-[#131e35] border border-slate-800 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto text-left space-y-8 font-sans">
            
            {/* Header branding */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-800 gap-4">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">Saravana Selvi</h3>
                <p className="text-sm font-semibold text-primary mt-1">Full Stack MERN Developer | Project Coordinator | Technical Consultant</p>
              </div>
              <div className="text-slate-text text-xs space-y-1 font-mono">
                <div>saravanaselvi2705@gmail.com</div>
                <div>+91 (Contact via Email)</div>
                <div>Kerala, India</div>
              </div>
            </div>

            {/* Resume Section 1: Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest">Professional Summary</h4>
              <p className="text-slate-text text-xs md:text-sm leading-relaxed">
                Detail-oriented B.Tech Electronics & Communication graduate (2022) with 3+ years of experience across web development, Scrum coordination, client relations, and digital content operations. Adept at transforming business requirements into scalable web applications using the MERN stack while aligning cross-functional teams via Agile methodologies.
              </p>
            </div>

            {/* Resume Section 2: Experience */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest flex items-center">
                <Briefcase className="w-4 h-4 text-primary mr-1.5" />
                <span>Professional Experience</span>
              </h4>
              
              <div className="space-y-4.5">
                <div className="text-xs md:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>Administrative Assistant / Executive</span>
                    <span className="font-mono text-xs font-medium text-slate-text">Sept 2022 - Present</span>
                  </div>
                  <div className="text-primary font-semibold text-xs mt-0.5">Lymdata Labs Pvt. Ltd.</div>
                  <ul className="list-disc pl-5 mt-1.5 text-slate-text text-xs space-y-1.5 leading-relaxed">
                    <li>Analyze and document client requirements into SRS specs for engineers.</li>
                    <li>Coordinate daily agile sprint meetings using JIRA and ClickUp pipelines.</li>
                    <li>Style layout components and frontend features using React and HTML.</li>
                  </ul>
                </div>

                <div className="text-xs md:text-sm text-slate-350">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>Administrative Assistant</span>
                    <span className="font-mono text-xs font-medium text-slate-text">Feb 2024 - Present</span>
                  </div>
                  <div className="text-primary font-semibold text-xs mt-0.5">GD Innovative Solutions Pvt. Ltd. (US Client)</div>
                  <ul className="list-disc pl-5 mt-1.5 text-slate-text text-xs space-y-1.5 leading-relaxed">
                    <li>Supervise communications schedules and support calendar syncs for stakeholders.</li>
                    <li>Reduce CRM response delays through workflow scheduling templates.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resume Section 3: Education */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest flex items-center">
                <GraduationCap className="w-4 h-4 text-primary mr-1.5" />
                <span>Education</span>
              </h4>
              <div className="text-xs md:text-sm">
                <div className="flex justify-between items-baseline font-bold text-white">
                  <span>B.Tech in Electronics & Communication Engineering</span>
                  <span className="font-mono text-xs font-medium text-slate-text">2018 - 2022</span>
                </div>
                <div className="text-slate-text text-xs mt-0.5">Government Engineering College, Idukki</div>
              </div>
            </div>

            {/* Resume Section 4: Certifications */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-455 uppercase tracking-widest flex items-center">
                <Award className="w-4 h-4 text-primary mr-1.5" />
                <span>Certified Credentials</span>
              </h4>
              <p className="text-slate-text text-xs leading-relaxed">
                IIT-M Pravartak Full Stack Development with AI Tools • ReactJS Core Architecture • Node.js Backend • Database Engineering (GUVI HCL Zen Class Suite)
              </p>
            </div>

          </div>

          {/* Right Column: PDF Actions & Links */}
          <div className="lg:col-span-4 bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm text-left space-y-6">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            
            <h3 className="font-display font-bold text-xl text-white">Download Options</h3>
            <p className="text-slate-text text-xs md:text-sm leading-relaxed">
              Access the PDF print-ready version of my resume to share with your HR recruitment pipeline or technical team.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-slate-800">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center space-x-2 w-full py-4.5 rounded-xl bg-primary text-slate-950 font-bold text-xs hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/10 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Print PDF</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-4.5 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-colors duration-200 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Online Version</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
