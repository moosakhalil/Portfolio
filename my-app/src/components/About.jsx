import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "../constants";

const About = () => {
  return (
    <section id="about" className="relative w-full py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">About Me</p>
          <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mt-2">Who I Am</h2>
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {personalInfo.about}
            </p>
            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              With a strong foundation in <span className="text-blue-600 font-semibold">ReactJS</span>, <span className="text-yellow-500 font-semibold">JavaScript</span>, and various backend technologies, I specialize in building responsive, real-time applications with clean user interfaces. My problem-solving skills and attention to detail allow me to create solutions that are both functional and user-friendly.
            </p>
            <div className="mt-8 sm:mt-12">
              <h3 className="text-blue-700 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Education</h3>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={`education-${index}`}
                    className="border-l-4 border-blue-300 pl-6 py-2 bg-white/60 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {index < 2 && (
                        <img
                          src={index === 0 ? "/uni.jpg" : "/college.jpg"}
                          alt={`${edu.title} logo`}
                          className="w-10 h-10 rounded-full object-cover border border-blue-200 bg-white"
                          loading="lazy"
                        />
                      )}
                      <h4 className="text-gray-900 font-bold text-lg sm:text-xl">{edu.title}</h4>
                    </div>
                    <p className="text-blue-500 mt-1 text-sm sm:text-base">{edu.degree}</p>
                    <p className="text-gray-500 mt-1 text-sm sm:text-base">{edu.date}</p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-[220px] h-[220px] xs:w-[280px] xs:h-[280px] md:w-[340px] md:h-[340px] overflow-hidden rounded-full border-4 border-blue-300 shadow-lg bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
              <img
                src="/Moosa.jpg"
                alt="Moosa Khalil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 