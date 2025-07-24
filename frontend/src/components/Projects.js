import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiKotlin, SiAndroid } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      category: "web",
      github: "https://github.com/susara-perera/portfolio",
      live: "https://susara-perera.netlify.app",
      status: "Completed",
      icons: [<FaReact />, <SiTailwindcss />]
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Platform",
      description: "Complete e-commerce solution with React frontend, Node.js backend, user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
      category: "web",
      github: "https://github.com/susara-perera/ecommerce-fullstack",
      live: "https://ecommerce-demo.netlify.app",
      status: "In Progress",
      icons: [<FaReact />, <SiMongodb />]
    },
    {
      id: 3,
      title: "Task Management Mobile App",
      description: "Android application for task management with features like task creation, categorization, reminders, and progress tracking. Built with Kotlin.",
      image: "/api/placeholder/400/250",
      technologies: ["Kotlin", "Android SDK", "SQLite", "Material Design"],
      category: "mobile",
      github: "https://github.com/susara-perera/task-manager-android",
      status: "Completed",
      icons: [<SiKotlin />, <SiAndroid />]
    },
    {
      id: 4,
      title: "Student Information System",
      description: "Desktop application for managing student records, grades, and academic information. Features include data visualization and report generation.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "JavaFX", "MySQL", "JFreeChart"],
      category: "desktop",
      github: "https://github.com/susara-perera/student-info-system",
      status: "Completed",
      icons: [<FaJava />, <SiMysql />]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Responsive design for all devices.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      category: "web",
      github: "https://github.com/susara-perera/weather-app",
      live: "https://weather-forecast-sp.netlify.app",
      status: "Completed",
      icons: [<FaReact />]
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "Python-based application for tracking personal expenses, income, and financial goals with data visualization and budget analysis.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Tkinter", "Matplotlib", "SQLite"],
      category: "desktop",
      github: "https://github.com/susara-perera/finance-tracker",
      status: "Completed",
      icons: [<FaPython />]
    },
    {
      id: 7,
      title: "Real-Time Chat Application",
      description: "Full-stack real-time messaging app with Socket.io, user authentication, group chats, file sharing, and message encryption.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Express"],
      category: "web",
      github: "https://github.com/susara-perera/chat-app",
      live: "https://realtime-chat-sp.netlify.app",
      status: "Completed",
      icons: [<FaReact />, <SiMongodb />]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'desktop', label: 'Desktop Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        {/* Technology Icons */}
        <div className="flex items-center space-x-2 mb-4">
          {project.icons.map((icon, index) => (
            <div key={index} className="text-xl text-blue-500">
              {icon}
            </div>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm"
          >
            <FaGithub />
            <span>Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm"
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            A showcase of my development work and technical projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="600">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/susara-perera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl" data-aos="fade-up">
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
            <div className="text-gray-700">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.status === 'Completed').length}
            </div>
            <div className="text-gray-700">Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {projects.filter(p => p.live).length}
            </div>
            <div className="text-gray-700">Live Demos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
