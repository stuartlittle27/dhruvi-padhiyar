import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks } from './socialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-200"
            >
              Dhruvi Padhiyar
            </button>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200 group"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;