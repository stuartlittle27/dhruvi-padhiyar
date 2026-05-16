import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-800 ${
      isScrolled 
        ? 'bg-gray-900/90 shadow-sm' 
        : 'bg-gray-900/70'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 cursor-pointer tracking-tight"
          onClick={() => scrollToSection('home')}
        >
          Dhruvi Padhiyar
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-2 py-1 text-base font-medium transition-all duration-200 hover:text-blue-500 focus:outline-none ${
                activeSection === link.id 
                  ? 'text-blue-500' 
                  : 'text-gray-300'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="block h-0.5 w-full bg-blue-500 rounded-full mt-1"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? 
              <X className="w-6 h-6 text-gray-400" /> : 
              <Menu className="w-6 h-6 text-gray-400" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 bg-gray-900/95 border-t border-gray-800 shadow-xl">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-6 py-3 text-base font-medium transition-colors duration-200 hover:text-blue-500 focus:outline-none ${
                activeSection === link.id 
                  ? 'text-blue-500' 
                  : 'text-gray-300'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="block h-0.5 w-full bg-blue-500 rounded-full mt-1"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;