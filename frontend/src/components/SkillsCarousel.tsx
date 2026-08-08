import React from 'react';

const skills = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Firebase',
  'REST APIs',
  'Git',
  'GitHub',
  'Postman',
  'WordPress',
  'SEO',
  'Google Analytics',
  'Google Search Console',
  'Project Management',
  'Business Analysis',
  'Requirement Gathering',
  'AI Assisted Development'
];

export default function SkillsCarousel() {
  // Duplicate the skills array to create a seamless infinite marquee loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden py-3 select-none marquee-mask">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-2.5 sm:gap-4">
        {duplicatedSkills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#1e293b]/60 border border-cyan-400/30 text-cyan-400 backdrop-blur-md hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 transition-all duration-300 cursor-default whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
