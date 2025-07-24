import React from 'react';
import { 
  FaReact, 
  FaJava, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase,
  FaMobile,
  FaTools,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaComments
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss,
  SiKotlin,
  SiCplusplus,
  SiAndroid,
  SiVisualstudiocode,
  SiPhp,
  SiFlutter,
  SiAngular,
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiCanva
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 90 },
        { name: "Python", icon: <FaPython className="text-blue-500" />, level: 80 },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" />, level: 75 },
        { name: "PHP", icon: <SiPhp className="text-purple-600" />, level: 70 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <FaReact className="text-2xl" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
        { name: "Angular", icon: <SiAngular className="text-red-600" />, level: 75 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: 70 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-2xl" />,
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, level: 80 },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, level: 75 },
        { name: "React Native", icon: <FaReact className="text-blue-400" />, level: 70 },
        { name: "Android", icon: <SiAndroid className="text-green-500" />, level: 80 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase className="text-2xl" />,
      skills: [
        { name: "SQL", icon: <SiMysql className="text-blue-600" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" />, level: 75 },
        { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-800" />, level: 85 },
        { name: "Postman", icon: <SiPostman className="text-orange-600" />, level: 85 }
      ]
    },
    {
      title: "Design Tools",
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: "Figma", icon: <SiFigma className="text-purple-500" />, level: 75 },
        { name: "Canva", icon: <SiCanva className="text-blue-400" />, level: 80 },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" />, level: 90 }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Project Management",
      icon: <FaUsers className="text-blue-500" />,
      description: "Experience in planning and managing development projects"
    },
    {
      name: "Teamwork",
      icon: <FaUsers className="text-green-500" />,
      description: "Collaborative approach to problem-solving and development"
    },
    {
      name: "Time Management",
      icon: <FaClock className="text-purple-500" />,
      description: "Efficient task prioritization and deadline management"
    },
    {
      name: "Critical Thinking",
      icon: <FaLightbulb className="text-yellow-500" />,
      description: "Analytical approach to complex technical challenges"
    },
    {
      name: "Communication",
      icon: <FaComments className="text-pink-500" />,
      description: "Clear and effective communication in technical contexts"
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {skill.icon}
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Technical Skills
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{category.title}</h4>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-full">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white" data-aos="fade-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always eager to learn new technologies and improve my existing skills. 
              Currently exploring advanced React patterns, cloud technologies, and AI/ML integration.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-80">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm opacity-80">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">∞</div>
                <div className="text-sm opacity-80">Motivation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
