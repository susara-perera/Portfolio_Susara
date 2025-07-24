import React from 'react';
import { FaGraduationCap, FaSchool, FaAward, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Sri Lanka Institute of Information Technology",
      degree: "BSc (Hons) Degree in Information Technology",
      specialization: "Software Engineering (Undergraduate)",
      duration: "2022 - Present",
      gpa: "2.95",
      status: "Current",
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
      description: "Specializing in Software Engineering with focus on modern development practices, algorithms, and system design."
    },
    {
      institution: "Aquinas College of Higher Education",
      degree: "English Diploma (Intermediate Level)",
      duration: "2022 - 2023",
      status: "Completed",
      icon: <FaAward className="text-3xl text-green-500" />,
      description: "Enhanced English communication skills for professional and academic purposes."
    },
    {
      institution: "British Way English Academy",
      degree: "Spoken English Certificate Level",
      duration: "2019 - 2020",
      status: "Completed",
      icon: <FaAward className="text-3xl text-purple-500" />,
      description: "Developed fluency in spoken English and communication skills."
    },
    {
      institution: "Kirimathwa National School (G.C.E. A/L)",
      degree: "Advanced Level Examination",
      subjects: "Logic, Political Science, Economics, English",
      duration: "2021 - 2022",
      status: "Completed",
      icon: <FaSchool className="text-3xl text-orange-500" />,
      description: "Completed Advanced Level studies with focus on logical reasoning and social sciences."
    },
    {
      institution: "Kirimathwa National School (G.C.E. O/L)",
      degree: "Ordinary Level Examination",
      subjects: "Mathematics (A), Science (B), Sinhala (B), English (C), Commerce (B), Health (A), Dance (A), History (A), Buddhism (A)",
      duration: "2018",
      status: "Completed",
      icon: <FaSchool className="text-3xl text-red-500" />,
      description: "Strong academic foundation with excellent performance in Mathematics and Sciences."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            My academic journey and continuous learning path in technology and beyond
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.status}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <FaCalendarAlt className="mr-1" />
                            {item.duration}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.degree}
                        </h3>
                        
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {item.institution}
                        </h4>
                        
                        {item.specialization && (
                          <p className="text-gray-700 font-medium mb-2">
                            {item.specialization}
                          </p>
                        )}
                        
                        {item.subjects && (
                          <p className="text-gray-600 text-sm mb-2">
                            <strong>Subjects:</strong> {item.subjects}
                          </p>
                        )}
                        
                        {item.gpa && (
                          <p className="text-gray-600 text-sm mb-2">
                            <strong>Current GPA:</strong> {item.gpa}
                          </p>
                        )}
                        
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl" data-aos="fade-up">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700">Years of Study</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl font-bold text-green-600 mb-2">2.95</div>
            <div className="text-gray-700">Current GPA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-700">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
