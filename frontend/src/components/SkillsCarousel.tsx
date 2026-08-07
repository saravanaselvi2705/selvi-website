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
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3 md:gap-4">
        {duplicatedSkills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-[#1e293b]/60 border border-primary/30 text-primary backdrop-blur-md hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 cursor-default whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
