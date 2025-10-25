import React from 'react';
import profile from '../assets/images/profile.jpg'; 
import { FaCommentDots } from 'react-icons/fa';

function AboutSection() {
  return (
    <section className="bg-white rounded-xl shadow-xl px-6 py-10 md:px-10 md:py-14">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Nindya Sekartaji"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-[#7755FF] shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#23394B]">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5A6778] max-w-xl mx-auto md:mx-0">
            Hi! I’m Nindya, a passionate designer and frontend developer based in Jakarta. With a background in visual design and a love for coding, I specialize in building websites and apps that are not only stunning but also user-friendly.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <span className="bg-[#7755FF] text-white px-3 py-1 rounded-full text-sm">✓ UI/UX Design</span>
            <span className="bg-[#7755FF] text-white px-3 py-1 rounded-full text-sm">✓ Web Development</span>
            <span className="bg-[#7755FF] text-white px-3 py-1 rounded-full text-sm">✓ Branding</span>
            <span className="bg-[#7755FF] text-white px-3 py-1 rounded-full text-sm">✓ Motion Graphics</span>
          </div>

          {/* Connect Button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#7755FF] to-[#A78BFA] text-white px-5 py-2 rounded-lg hover:opacity-90 transition mx-auto md:mx-0">
              <FaCommentDots />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;