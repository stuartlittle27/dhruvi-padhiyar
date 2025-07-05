import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
 // Entire Experience.tsx updated as per Aipxperts details

  const experiences = [
    {
      title: 'Laravel Developer',
      company: 'Aipxperts Technolabs',
      location: 'Remote',
      period: 'Apr 2024 – Present',
      description:
        'Working on backend development using Laravel, building RESTful APIs, database design, and implementing secure business logic.',
      achievements: [
        'Developed backend APIs for Legiit (legiit.com) using Laravel + React.',
        'Enhanced backend interactivity on Yokohama Malaysia website (Laravel + Livewire).',
        'Implemented custom modules for casino-related platforms.',
        'Collaborated across teams for optimized performance delivery.'
      ],
      technologies: ['Laravel', 'React', 'Livewire', 'PHP', 'MySQL']
    },
    {
      title: 'Laravel Trainee',
      company: 'Aipxperts Technolabs',
      location: 'Remote',
      period: 'Nov 2023 – Apr 2024',
      description:
        'Focused on learning Laravel fundamentals including MVC, Eloquent ORM, REST APIs, and authentication while contributing to internal tasks.',
      achievements: [
        'Completed multiple demo projects using Laravel.',
        'Supported internal backend development and gained real-world experience.'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL']
    }
  ];


  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Marker */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>
              
              {/* Content Card */}
              <div className="md:ml-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:text-right">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
      </div>
    </section>
  );
};

export default Experience;