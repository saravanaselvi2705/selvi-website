import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Saravana's hybrid skill set is rare. She coordinates development sprints with agile precision while diving straight into the MERN code when features need styling or API adjustments. A reliable, multi-talented professional.",
      author: "Engineering Director",
      context: "Lymdata Labs Pvt. Ltd."
    },
    {
      quote: "Managing international schedules and operations requires exceptional communication. Saravana streamlined our client agenda workflows, reducing communication bottlenecks by 30% and coordinating deliverables smoothly.",
      author: "US Client Lead Manager",
      context: "GD Innovative Solutions Client"
    },
    {
      quote: "A detail-oriented systems thinker. During our workflow optimization sprints, Saravana mapped dozens of complex business requirements into clear, implementation-ready software requirement specifications (SRS).",
      author: "Senior Product Manager",
      context: "Process Operations Team"
    }
  ];

  return (
    <section className="py-28 bg-[#0f172a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-gray mb-4 tracking-tight">
            Professional <span className="text-primary">Endorsements</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-text text-sm md:text-base mt-4 max-w-xl mx-auto">
            Feedback and recommendations from engineering leads, client managers, and team members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b]/40 border border-slate-800 p-6 md:p-8 rounded-3xl hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between text-left relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-slate-800 mb-6" />

                <p className="text-slate-text text-sm md:text-base leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center space-x-3.5">
                {/* Mock avatar initial circle */}
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-primary font-display font-bold flex items-center justify-center flex-shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white leading-none">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-slate-text font-medium mt-1.5 block">
                    {item.context}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
