import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award, Users, Coffee, Sparkles, Target } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, color: 'from-orange-500 to-blue-600' },
    { name: 'UI/UX Design', level: 80, color: 'from-purple-500 to-purple-600' },
    { name: 'React', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 87, color: 'from-blue-500 to-blue-700' },
    { name: 'Responsive Design', level: 94, color: 'from-green-500 to-green-600' },
    { name: 'Performance Optimization', level: 85, color: 'from-red-500 to-pink-500' },
    { name: 'Git & GitHub', level: 88, color: 'from-blue-900 to-blue-900' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 sm:space-y-20 lg:space-y-24"
        >
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              About <span className="text-purple-600">Me</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20">
            
            {/* Introduction */}
            <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Passionate Developer & Designer
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg sm:text-xl">
                    I'm Ahmed Abdelaziz, a passionate Front-End Developer based in Egypt. I specialize in building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, and React.

                  </p>
                  <p className="text-lg sm:text-xl">
                    My focus is on transforming ideas into clean, functional, and engaging digital experiences. I’m constantly learning and expanding my skills, currently diving deeper into the MERN Stack and exploring UI/UX best practices to deliver both aesthetic and practical solutions.

                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h4>
                <p className="text-gray-600">Technologies and tools I work with</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    index < 4 && (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                    )
                  ))}
                </div>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    index >= 4 && (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index - 3) * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: (index - 3) * 0.1 + 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                    )
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
              <div className="text-center mt-12">
                <a
                  href="/Ahmed-Mohamed-Abdelaziz-CV.pdf"
                  download
                  className="inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base font-bold cursor-pointer tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-5 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-900 group"
                >
                  Download CV
                </a>
              </div>

          </div>
          </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;