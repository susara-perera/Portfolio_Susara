import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode, FaUsers, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      position: "Software Engineering Intern",
      company: "Sri Lanka Port Authority",
      duration: "May 2025 - Present",
      type: "Internship",
      status: "Current",
      icon: <FaBriefcase className="text-3xl text-blue-500" />,
      description: "Contributing to the design and development of the official Sri Lanka Ports Authority website, focusing on responsive design, user-friendly navigation, and secure data handling.",
      responsibilities: [
        "Developed and implemented comprehensive Employee Management System",
        "Improved HR operations by automating employee records and attendance tracking",
        "Gained hands-on experience in full-stack web development",
        "Collaborated with senior developers on real-world projects",
        "Enhanced technical skills through practical application in a professional environment"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Database Management", "Responsive Design"],
      achievements: [
        "Successfully automated manual HR processes",
        "Improved system efficiency and user experience",
        "Gained valuable industry experience in software development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4" data-aos="fade-up">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Professional experience and internships that have shaped my development journey
          </p>
        </div>

        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                {/* Left Side - Main Info */}
                <div className="lg:w-2/3 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          experience.status === 'Current' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {experience.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                          {experience.type}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaCalendarAlt className="mr-1" />
                          {experience.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.position}
                      </h3>
                      
                      <div className="flex items-center text-blue-600 mb-4">
                        <FaBuilding className="mr-2" />
                        <h4 className="text-lg font-semibold">{experience.company}</h4>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <FaCode className="mr-2 text-blue-500" />
                          Key Responsibilities
                        </h5>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <FaDatabase className="mr-2 text-green-500" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Achievements */}
                <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <FaUsers className="mr-2 text-purple-500" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Months of Experience</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className="text-gray-600">Professional Internship</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
