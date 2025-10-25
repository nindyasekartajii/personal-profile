import React from 'react';
import { FaInstagram, FaPinterest, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-white rounded-xl shadow-xl px-6 py-10 md:px-10 md:py-14">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#23394B]">Contact Me</h2>
          <p className="text-sm sm:text-base text-[#5A6778] max-w-md">
            Interested working together? Let's talk about your project and make something amazing!
          </p>
          <div className="text-sm text-[#23394B] space-y-1">
            <p>Email: <span className="text-[#7755FF]">nindiasekartaji@gmail.com</span></p>
            <p>Phone: <span className="text-[#7755FF]">+62 882-2617-1131</span></p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-[#7755FF] text-xl">
            <FaInstagram className="hover:opacity-70 cursor-pointer" />
            <FaPinterest className="hover:opacity-70 cursor-pointer" />
            <FaGithub className="hover:opacity-70 cursor-pointer" />
            <FaLinkedin className="hover:opacity-70 cursor-pointer" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#7755FF] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;