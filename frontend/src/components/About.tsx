"use client";

import React from 'react';
import {
  Cpu,
  Users,
  CheckCircle,
  GraduationCap,
  LibraryBig,
  MapPin
} from "lucide-react";
import { motion } from 'framer-motion';

export default function About() {
  interface CapabilityCard {
    title: string;
    icon: React.ReactNode;
    items: string[];
  }

  const capabilityCards: CapabilityCard[] = [
    {
      title: "Technical Expertise",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      items: [
        "MERN Stack Development",
        "REST API Development",
        "CRM & Business Applications",
        "Responsive UI Development",
        "Database Design",
        "Authentication & Authorization",
      ],
    },
    {
      title: "Professional Strengths",
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      items: [
        "Requirement Gathering",
        "Client Communication",
        "Business Analysis",
        "Agile Project Coordination",
        "Problem Solving",
        "Continuous Learning",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "Government Engineering College (GEC), Idukki",
      year: "Class of 2022",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
    },
    {
      degree: "Bachelor of Social Work (BSWG)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      year: "Ongoing (Distance Learning)",
      icon: <LibraryBig className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1121] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white tracking-tight">
            My <span className="text-cyan-400">Approach</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Building scalable software, collaborating seamlessly with clients,
            and delivering business-focused digital solutions.
          </p>
        </div>

        {/* Top Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

          {/* Narrative description */}
          <div className="lg:col-span-12 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/50 pb-4">
              <span>Building Software That Solves Business Problems</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#121A2F] border border-slate-700 text-cyan-400 w-fit">
                <MapPin className="w-3.5 h-3.5" />
                Originally from Munnar, Idukki
              </span>
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl">
              I believe great software starts with understanding the business problem before writing code.
              My background in business analysis and project coordination helps me translate client
              requirements into scalable, user-focused applications. Rather than simply developing
              features, I focus on creating solutions that are practical, maintainable, and aligned
              with real business goals.
            </p>
          </div>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {capabilityCards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-[#121A2F] p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all text-left flex flex-col relative overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

              <div>
                <div className="w-14 h-14 rounded-xl bg-[#0B1121] border border-slate-700/80 flex items-center justify-center mb-6 shadow-sm group-hover:border-cyan-400/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl md:text-2xl text-white mb-6">
                  {item.title}
                </h4>
                <ul className="space-y-4">
                  {item.items.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base text-slate-300"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 opacity-80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Background Integration */}
        <div className="border-t border-slate-800/60 pt-16">
          <div className="text-center mb-10">
            <h3 className="font-bold text-2xl md:text-3xl text-white">
              Education & Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#121A2F] border border-slate-700/50 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-start hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-slate-700 flex items-center justify-center flex-shrink-0">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm mb-3">{edu.institution}</p>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#0B1121] text-cyan-400 border border-slate-700/80">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}