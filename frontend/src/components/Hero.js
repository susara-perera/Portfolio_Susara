import React, { useEffect, useState, useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpeg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = useMemo(() => [
    'Full Stack Developer',
    'Software Engineering Student',
    'Frontend & Backend Developer',
    'Problem Solver',
    'Tech Innovator'
  ], []);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    
    if (currentIndex < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRoleText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentRole((currentRole + 1) % roles.length);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRole, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-pink-400/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-blue-400/15 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-36 h-36 bg-purple-400/15 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 mt-8" data-aos="fade-down">
            <div className="w-56 h-56 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden">
                  <img
                    src={ProfileImage}
                    alt="Susara Perera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 animate-pulse"></div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-5 h-5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6" data-aos="fade-up">
              Susara Perera
            </h1>
            
            <div className="h-20 flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl md:text-4xl text-white/90 font-light">
                I'm a{' '}
                <span className="text-cyan-300 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              A passionate Full Stack Developer and second-year Software Engineering student at SLIIT. 
              Specialized in creating end-to-end web solutions with modern technologies including React, 
              Node.js, and mobile development. Currently seeking internship opportunities to enhance my 
              skills and contribute to innovative projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8" data-aos="fade-up" data-aos-delay="600">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg neon-glow"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-cyan-300 text-cyan-300 font-semibold rounded-full hover:bg-cyan-300 hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8" data-aos="fade-up" data-aos-delay="800">
              <a
                href="https://github.com/susara-perera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/susara-perera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:susara.perera@outlook.com"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1000">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-light">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
