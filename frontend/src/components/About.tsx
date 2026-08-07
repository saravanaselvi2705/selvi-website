import React from 'react';
import {
  Cpu,
  Users,
  Lightbulb,
  CheckCircle
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
      icon: <Cpu className="w-5 h-5 text-primary" />,
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
      icon: <Users className="w-5 h-5 text-primary" />,
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


  return (
    <section id="about" className="py-28 bg-[#0b0f19] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-gray">
            My <span className="text-primary">Approach</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-lg max-w-2xl mx-auto leading-relaxed">
            My approach to building scalable software, collaborating with clients,
            and delivering business-focused digital solutions.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 gap-6">

          {/* Left Column: Narrative description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-display text-3xl font-bold text-dark-gray leading-tight">
              Building Software That Solves Business Problems
            </h3>
            <p className="text-slate-text text-base md:text-lg leading-8 mt-5">
              I believe great software starts with understanding the business problem before writing code.
              My background in business analysis and project coordination helps me translate client
              requirements into scalable, user-focused applications. Rather than simply developing
              features, I focus on creating solutions that are practical, maintainable, and aligned
              with real business goals.
            </p>
          </div>

          {/* Right Column: Key Details cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilityCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
                className="bg-[#1e293b]/40 p-8 rounded-2xl border border-slate-800/80 shadow-sm hover:shadow-md hover:border-slate-700 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-2xl text-dark-gray mb-2">
                    {item.title}
                  </h4>
                  <ul className="space-y-4 mt-4">
                    {item.items.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
