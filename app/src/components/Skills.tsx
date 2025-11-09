// src/components/Skills.tsx

import { HiOutlineChip } from 'react-icons/hi';

// List of your confirmed skills
const yourSkills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Socket.io',
  'Docker',
  'JWT',
  'bcrypt.js',
  'Unit Testing',
  'Tailwind CSS' // Added this since we're using it
];

// Reusable component for the skill pill
function SkillPill({ skillName }: { skillName: string }) {
  return (
    <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200">
      {skillName}
    </span>
  );
}

export default function Skills() {
  return (
    // We give this an id="skills" so the navbar link can scroll to it
    <section id="skills" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <HiOutlineChip className="w-8 h-8 text-cyan-600" />
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-sm font-semibold">
            {yourSkills.length}+
          </span>
        </div>

        {/* Skill Pills Container */}
        <div className="flex flex-wrap gap-3">
          {yourSkills.map((skill) => (
            <SkillPill key={skill} skillName={skill} />
          ))}
        </div>
        
      </div>
    </section>
  );
}