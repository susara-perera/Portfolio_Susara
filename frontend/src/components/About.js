import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaClock, FaServer, FaMobile } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpeg';

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies including React, Node.js, Express, and databases"
    },
    {
      icon: <FaServer className="text-3xl text-green-500" />,
      title: "Backend Architecture",
      description: "Skilled in designing RESTful APIs, database management, and server-side application development"
    },
    {
      icon: <FaMobile className="text-3xl text-purple-500" />,
      title: "Mobile Development",
      description: "Creating responsive web apps and native mobile applications using modern frameworks"
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and creative problem-solving abilities with attention to detail"
    },
    {
      icon: <FaUsers className="text-3xl text-pink-500" />,
      title: "Team Collaboration",
      description: "Excellent communication skills and experience working in collaborative development environments"
    },
    {
      icon: <FaClock className="text-3xl text-cyan-500" />,
      title: "Project Management",
      description: "Proven ability to manage multiple projects, meet deadlines, and deliver quality solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4" data-aos="fade-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="aspect-square rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={ProfileImage}
                      alt="Susara Perera"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">Diyawala, Kirindiwela</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Role:</span>
                  <span className="font-medium">Software Engineering Intern</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium">Sri Lanka Port Authority</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-medium">Third Year (2nd Semester)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GPA:</span>
                  <span className="font-medium">2.95</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                I am a Third-year second-semester Software Engineering student at SLIIT with a strong passion for 
                technology and problem-solving. Currently, I am gaining valuable industry experience through a 
                Software Engineering Internship at Sri Lanka Port Authority, where I contribute to the design and 
                development of official websites, focusing on responsive design, user-friendly navigation, and secure data handling.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                My technical expertise spans multiple programming languages including Java, JavaScript, Python, C++, 
                PHP, and mobile development with Flutter and Kotlin. I have hands-on experience with modern frameworks 
                like React, Node.js, Angular, Spring Boot, and databases including SQL, MongoDB, and Firebase. This 
                diverse skill set allows me to tackle full-stack development challenges effectively.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Through my internship and academic projects, I have developed and implemented comprehensive systems 
                including Employee Management Systems, Food Ordering platforms using MERN stack and microservices 
                architecture, Hospital Management Systems, E-Commerce platforms, and mobile applications. My goal 
                is to enhance my skills, learn new technologies, and grow as a developer through hands-on experience 
                in professional environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
