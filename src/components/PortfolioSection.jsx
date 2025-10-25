import React from 'react';
import dashboardImg from '../assets/images/dashboard.jpeg';
import landingImg from '../assets/images/landing.jpeg';
import motionImg from '../assets/images/motion.jpeg';

function PortfolioSection() {
  const projects = [
    {
      title: 'Dashboard Web App',
      category: 'UI/UX, Frontend',
      label: 'UI Design',
      image: dashboardImg,
    },
    {
      title: 'Mobile App Landing',
      category: 'Design, Branding',
      label: 'Mobile App',
      image: landingImg,
    },
    {
      title: 'Motion Graphic',
      category: 'Animation, Branding',
      label: 'Motion',
      image: motionImg,
    },
  ];

  return (
    <section className="px-6 py-10 md:px-10 md:py-14 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#23394B] mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute top-3 right-3 bg-[#7755FF] text-white text-xs px-2 py-1 rounded">
              {project.label}
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-[#23394B]">{project.title}</h3>
              <p className="text-sm text-[#5A6778]">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dribbble Button */}
      <div className="mt-8 text-center">
        <a
          href="https://dribbble.com/nindya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7755FF] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          More on Dribbble
        </a>
      </div>
    </section>
  );
}

export default PortfolioSection;