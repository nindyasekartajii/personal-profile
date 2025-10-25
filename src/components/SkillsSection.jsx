import React from 'react';
import { FaPenNib, FaCode, FaPalette, FaFilm } from 'react-icons/fa';

function SkillsSection() {
  const skills = [
    {
      title: 'UI/UX Design',
      tools: 'Figma, Adobe XD, Sketch',
      icon: <FaPenNib />,
      bg: 'bg-purple-100',
    },
    {
      title: 'Frontend Dev',
      tools: 'React, Vue, Tailwind',
      icon: <FaCode />,
      bg: 'bg-blue-100',
    },
    {
      title: 'Branding',
      tools: 'Logo, Identity, Print',
      icon: <FaPalette />,
      bg: 'bg-yellow-100',
    },
    {
      title: 'Motion Graphic',
      tools: 'After Effects, Lottie',
      icon: <FaFilm />,
      bg: 'bg-purple-200',
    },
  ];

  return (
    <section className="px-6 py-10 md:px-10 md:py-14 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#23394B] mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} p-6 rounded-xl shadow-md text-center space-y-3`}
          >
            <div className="text-3xl text-[#7755FF]">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-[#23394B]">{skill.title}</h3>
            <p className="text-sm text-[#5A6778]">{skill.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;