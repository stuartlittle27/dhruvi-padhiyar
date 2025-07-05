import React from 'react';
import { Github, Linkedin, Mail, Eye, ChevronDown } from 'lucide-react';
import { socialLinks as baseSocialLinks } from './socialLinks';

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

  // Debug: Log the image URL being used
  const imageUrl = `${import.meta.env.BASE_URL}assets/coding_girl_ai.png`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"></div>
      </div>

      <div className="w-full max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <p className="text-lg text-gray-400 mb-2 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Dhruvi Padhiyar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium animate-fade-in-up animation-delay-200">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Passionate about creating exceptional digital experiences through clean code and innovative solutions.
              Specializing in modern web technologies and user-centered design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => window.location.href = 'mailto:dhruvipadhiyar274@gmail.com'}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up animation-delay-800">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white group"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                {/* Floating Tech Icons */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg animate-float">
                    <span className="text-white text-lg sm:text-2xl font-bold">⚛️</span>
                  </div>
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg animate-float animation-delay-1000">
                    <span className="text-white text-lg sm:text-2xl font-bold">JS</span>
                  </div>
                  <div className="absolute top-1/2 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg animate-float animation-delay-2000">
                    <span className="text-white text-lg sm:text-2xl font-bold">🐍</span>
                  </div>
                  <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg animate-float animation-delay-[3000ms]">
                    <span className="text-white text-lg sm:text-2xl font-bold">🔥</span>
                  </div>
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg animate-float animation-delay-[4000ms]">
                    <span className="text-white text-lg sm:text-2xl font-bold">🐘</span>
                  </div>
                </div>

                {/* Main Profile Circle */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={imageUrl}
                      alt="Female Developer" 
                      className="w-full h-full object-cover rounded-full shadow-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // console.error('Image failed to load:', target.src);
                        // Fallback to a placeholder
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                      onLoad={() => {
                        // console.log('Image loaded successfully');
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        {/* <ChevronDown className="w-6 h-6 text-gray-400" /> */}
      </div>
    </section>
  );
};

export default Hero;
