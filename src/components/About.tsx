import React from 'react';
import { Code2, Terminal, BarChart2, Code } from 'lucide-react';
import { socialLinks } from './socialLinks';

const About = () => {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '1+', label: 'Years of Experience' },
    { number: '100%', label: 'Learning Commitment' },
    { number: '2', label: 'Hackathon Participations' }
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Efficiently building Laravel APIs, database design, and secure logic.'
    },
    {
      icon: Terminal,
      title: 'Frontend & UI',
      description: 'Creating dynamic interfaces using Livewire, React & JavaScript.'
    },
    {
      icon: Code,
      title: 'Chrome Extensions',
      description: 'Built extensions for Jira exports and instant doc redirects.'
    },
    {
      icon: BarChart2,
      title: 'Data Analysis',
      description: 'Analyzed global suicide trends using Python, Pandas & Matplotlib.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-100">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm a Software Developer specializing in Laravel, JavaScript, and backend systems. I enjoy building real-world solutions, from backend APIs to Chrome extensions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  I started my development career with strong curiosity and dedication. Over time, I've worked on real-time apps, browser extensions, and Laravel-based platforms.
                </p>
                <p>
                  I thrive on building backend logic, integrating APIs, and optimizing performance. I'm also passionate about fast access to documentation and developer productivity tools.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-white">What I Do</h3>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
              title={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
