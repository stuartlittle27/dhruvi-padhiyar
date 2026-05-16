import React from 'react';
import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import { socialLinks as baseSocialLinks } from './socialLinks';

const techIcons = [
  { icon: () => <span className="text-white text-2xl">⚛️</span>, label: 'React', style: 'bg-blue-500' },
  { icon: () => <span className="text-white text-2xl">JS</span>, label: 'JavaScript', style: 'bg-yellow-500' },
  { icon: () => <span className="text-white text-2xl">🐍</span>, label: 'Python', style: 'bg-green-500' },
  { icon: () => <span className="text-white text-2xl">🔥</span>, label: 'Firebase', style: 'bg-red-500' },
  { icon: () => <span className="text-white text-2xl">🐘</span>, label: 'PostgreSQL', style: 'bg-indigo-500' },
];

const socialLinks = [
  ...baseSocialLinks,
  { icon: Eye, href: `${import.meta.env.BASE_URL}assets/resume.pdf`, label: 'View Resume' }
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const imageUrl = `${import.meta.env.BASE_URL}assets/coding_girl_ai.png`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Soft, multi-layered circular background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl absolute" />
        <div className="w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-2xl absolute" />
      </div>
      <div className="w-full max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - no background boxes */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <p className="text-lg text-gray-300 mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gray-100">Dhruvi Padhiyar</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-medium">
                Full Stack Developer
              </p>
            </div>

            <div className="mt-2 mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-lg text-gray-300">
                Passionate about creating exceptional digital experiences through clean code and innovative solutions.
                Specializing in modern web technologies and user-centered design.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all duration-200 border border-gray-600"
              >
                View My Work
              </button>
              <button
                onClick={() => window.location.href = 'mailto:dhruvipadhiyar274@gmail.com'}
                className="px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with improved floating icons */}
          <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative flex items-center justify-center" style={{ minHeight: 420 }}>
              {/* Main Profile Circle with double border and shadow */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                {/* Floating Tech Icons - improved */}
                {/* Top (Firebase) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 bg-red-500 hover:bg-red-600 transition-colors duration-200">
                    <span className="text-white text-2xl">🔥</span>
                  </div>
                </div>
                {/* Top-right (React) */}
                <div className="absolute top-8 right-0 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 bg-blue-500 hover:bg-blue-600 transition-colors duration-200">
                    <span className="text-white text-2xl">⚛️</span>
                  </div>
                </div>
                {/* Bottom-right (PostgreSQL) */}
                <div className="absolute bottom-8 right-0 translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200">
                    <span className="text-white text-2xl">🐘</span>
                  </div>
                </div>
                {/* Bottom (JS) */}
                <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200">
                    <span className="text-white text-2xl">JS</span>
                  </div>
                </div>
                {/* Bottom-left (Python) */}
                <div className="absolute bottom-8 left-0 translate-y-1/2">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 bg-green-500 hover:bg-green-600 transition-colors duration-200">
                    <span className="text-white text-2xl">🐍</span>
                  </div>
                </div>
                {/* Main Profile Image with double border and drop shadow */}
                <div className="w-full h-full rounded-full flex items-center justify-center border-4 border-blue-400/40 shadow-2xl bg-gray-900">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-xl flex items-center justify-center bg-gray-800">
                    <img 
                      src={imageUrl}
                      alt="Female Developer" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="hidden w-full h-full flex items-center justify-center text-4xl text-gray-400">
                      👩‍💻
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
