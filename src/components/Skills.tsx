import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 90 },
        { name: 'CodeIgniter', level: 80 },
        { name: 'Livewire', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JQuery', level: 80 },
        { name: 'MERN Stack', level: 70 }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'RESTful APIs', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Web Scraping', level: 65 }
      ]
    },
    {
      title: 'Version Control & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Pusher', level: 75 },
        { name: 'Socket.io', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Pandas', level: 70 },
        { name: 'NumPy', level: 70 },
        { name: 'Matplotlib', level: 65 }
      ]
    }
  ];
  

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Chrome Extensions",
              "Jira API",
              "Bootstrap Docs",
              "Figma",
              "NumPy",
              "Pandas",
              "VSCode",
              "Linux",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
