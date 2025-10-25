import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar tetap di atas */}
      <Navbar />

      {/* Konten utama */}
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-5xl mx-auto space-y-10">
          <main className="space-y-8">
            <ProfileCard />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;