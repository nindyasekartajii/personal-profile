import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-500">MyProfile</h1>
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#about" className="hover:text-pink-500">About</a>
        <a href="#skills" className="hover:text-pink-500">Skills</a>
        <a href="#portfolio" className="hover:text-pink-500">Portfolio</a>
        <a href="#contact" className="hover:text-pink-500">Contact</a>
      </nav>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600">
        Hire Me <FaArrowRight />
      </button>
    </header>
  );
};

export default Navbar;