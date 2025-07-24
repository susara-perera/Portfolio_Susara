import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/susara-perera",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/susara-perera",
      name: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:susara.perera@outlook.com",
      name: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gradient mb-2">Susara Perera</h3>
              <p className="text-gray-400 text-lg">Software Engineering Student</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about creating innovative solutions through technology. 
              Currently pursuing my degree in Software Engineering and actively 
              seeking opportunities to grow and contribute to meaningful projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:susara.perera@outlook.com"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  susara.perera@outlook.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a 
                  href="tel:+94719069003"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  +94 71 906 9003
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Diyawala, Kirindiwela</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Susara Perera. Made with
            </p>
            <FaHeart className="text-red-500 animate-pulse" />
            <p className="text-gray-400">and lots of ☕</p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <button 
              onClick={() => window.open('/privacy', '_blank')}
              className="hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => window.open('/terms', '_blank')}
              className="hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS, and deployed with ❤️
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
