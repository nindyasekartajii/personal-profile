import React from 'react';
import profile from '../assets/images/profile.jpg'; // ganti sesuai nama file kamu
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function ProfileCard() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-white rounded-xl shadow-xl px-6 py-10 md:px-10 md:py-14">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#23394B]">
            Hello, I'm <span className="text-[#7755FF]">Nindya Sekartaji</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#5A6778]">
            Creative Designer & Frontend Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5A6778] max-w-md mx-auto md:mx-0">
            Passionate in creating beautiful and functional digital experiences. I love blending creativity with technology to make impactful solutions for users and brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <button className="bg-[#7755FF] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
              See My Work
            </button>
            <button className="border border-[#7755FF] text-[#7755FF] px-4 py-2 rounded-lg hover:bg-[#7755FF] hover:text-white transition">
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-[#7755FF] text-xl">
            <FaInstagram className="hover:opacity-70 cursor-pointer" />
            <FaLinkedin className="hover:opacity-70 cursor-pointer" />
            <FaGithub className="hover:opacity-70 cursor-pointer" />
            <FaEnvelope className="hover:opacity-70 cursor-pointer" />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Nindya Sekartaji"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-[#7755FF] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;