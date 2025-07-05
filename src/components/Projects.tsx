import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'api', label: 'APIs' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Jira Backlog Export Extension',
      description: 'Chrome Extension to export all Jira backlog tasks to CSV by entering the board name, simplifying data sharing.',
      image: '📝',
      category: 'web',
      technologies: ['Chrome Extension', 'JavaScript', 'Jira API'],
      // demoUrl: 'https://github.com/stuartlittle27/jira-backlog-export',
      // githubUrl: 'https://github.com/stuartlittle27/jira-backlog-export',
      features: ['CSV Export', 'Board Selector', 'Easy Sharing']
    },
    {
      id: 2,
      title: 'LM Documentation Redirect Extension',
      description: 'Chrome Extension that redirects users to official Bootstrap or Laravel docs based on their search query.',
      image: '🔗',
      category: 'web',
      technologies: ['Chrome Extension', 'JavaScript', 'Bootstrap Docs', 'Laravel Docs'],
      // demoUrl: 'https://github.com/stuartlittle27/lm-extension',
      // githubUrl: 'https://github.com/stuartlittle27/lm-extension',
      features: ['Instant Redirect', 'Quick Search', 'Docs Navigation']
    },
    {
      id: 3,
      title: 'Suicide Rate Data Analysis',
      description: 'Analyzed and visualized global suicide rate data using Python and data science libraries.',
      image: '📊',
      category: 'api',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      // demoUrl: '#',
      githubUrl: 'https://github.com/stuartlittle27/DA-suiciderate',
      features: ['Data Visualization', 'Statistical Analysis', 'CSV Data Processing']
    },
    {
      id: 4,
      title: 'Real-Time Chat App (Laravel + Pusher)',
      description: 'A real-time chat application built with Laravel using Pusher for instant messaging.',
      image: '💬',
      category: 'web',
      technologies: ['Laravel', 'Pusher', 'WebSockets'],
      // demoUrl: '#',
      // githubUrl: '#',
      features: ['Real-Time Chat', 'Event Broadcasting', 'Instant Messaging']
    },
    {
      id: 5,
      title: 'Saral Health',
      description: 'A MERN-based system to digitize hospital paperwork, providing smart prescription suggestions to streamline and accelerate healthcare workflows.',
      image: '📡',
      category: 'web',
      technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redux', 'Tailwind CSS', 'Material UI'],
      // demoUrl: '#',
      githubUrl: 'https://github.com/stuartlittle27/SaralHealth',
      features: ['Smart Prescription Suggestions', 'Streamlined Healthcare Workflows', 'Digitized Hospital Paperwork']
    },
    {
      id: 6,
      title: 'Mind Your Health',
      description: 'An impactful project focused on raising awareness about mental health, analyzing trends, and addressing current mental health challenges through data-driven insights.',
      image: '🌌',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      // demoUrl: 'https://github.com/stuartlittle27/lsr1835',
      githubUrl: 'https://github.com/stuartlittle27/MindYourHealth',
      features: ['Data Visualization', 'Statistical Analysis', 'CSV Data Processing']
    }
  ];
  

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work showcasing different technologies and solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {filter.label}
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl relative overflow-hidden">
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a> */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/stuartlittle27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;