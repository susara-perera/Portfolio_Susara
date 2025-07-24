import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPhp, SiFlutter, SiFirebase } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Employee Attendance System",
      description: "A secure web-based attendance system using PHP and SQL to automate employee check-in/out, leave tracking, and reports. This replaced manual work, improved accuracy, and gave me hands-on experience in full-stack web development.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
      category: "web",
      github: "https://github.com/susara-perera/employee-attendance",
      status: "Completed",
      icons: [<SiPhp />, <SiMysql />]
    },
    {
      id: 2,
      title: "Food Ordering System - Microservices Architecture",
      description: "Developed a Food Ordering System using the MERN stack and Spring Boot with Microservices Architecture for better scalability. It includes a secure payment gateway and integrates ordering, payment, and user services for a smooth user experience.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Spring Boot", "Microservices", "Payment Gateway"],
      category: "web",
      github: "https://github.com/susara-perera/food-ordering-microservices",
      status: "Completed",
      icons: [<FaReact />, <SiMongodb />]
    },
    {
      id: 3,
      title: "Ayurveda Hospital Management System",
      description: "Developed an Ayurveda Hospital Management System using the Mern stack to manage patient records, appointments, billing, and treatment in one secure platform. This strengthened my full-stack JavaScript skills and improved hospital workflow by digitizing manual tasks.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication"],
      category: "web",
      github: "https://github.com/susara-perera/ayurveda-hospital-management",
      status: "Completed",
      icons: [<FaReact />, <SiMongodb />]
    },
    {
      id: 4,
      title: "E-Commerce System",
      description: "Developed an E-Commerce System using Java, MongoDB, and JavaScript to manage products, user accounts, shopping carts, and secure orders. This project improved my skills in backend development, database handling, and building dynamic user interfaces.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Java", "MongoDB", "JavaScript", "RESTful APIs"],
      category: "web",
      github: "https://github.com/susara-perera/ecommerce-java",
      status: "Completed",
      icons: [<FaJava />, <SiMongodb />]
    },
    {
      id: 5,
      title: "Mobile Application Development",
      description: "Developed mobile apps using Flutter, Kotlin, and React Native with Firebase for authentication, real-time data, and cloud storage. This strengthened my skills in building responsive, cross-platform apps with modern frameworks.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Flutter", "Kotlin", "React Native", "Firebase"],
      category: "mobile",
      github: "https://github.com/susara-perera/mobile-apps",
      status: "Completed",
      icons: [<SiFlutter />, <SiFirebase />]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, optimized performance, and showcases my projects and skills effectively.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript", "AOS Animation"],
      category: "web",
      github: "https://github.com/susara-perera/portfolio",
      live: "https://susara-perera.netlify.app",
      status: "Completed",
      icons: [<FaReact />, <SiTailwindcss />]
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            project.status === 'Completed' 
              ? 'bg-green-100/90 text-green-800' 
              : 'bg-blue-100/90 text-blue-800'
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
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
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
