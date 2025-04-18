import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "../constants";

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen mx-auto py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">About Me</p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">Who I Am</h2>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-secondary text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {personalInfo.about}
            </p>
            <p className="text-secondary text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              With a strong foundation in ReactJS, JavaScript, and various
              backend technologies, I specialize in building responsive,
              real-time applications with clean user interfaces. My problem-solving
              skills and attention to detail allow me to create solutions that
              are both functional and user-friendly.
            </p>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Education</h3>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={`education-${index}`}
                    className="border-l-2 sm:border-l-4 border-blue-500 pl-4 sm:pl-6 py-2"
                  >
                    <h4 className="text-white font-bold text-lg sm:text-xl">{edu.title}</h4>
                    <p className="text-blue-400 mt-1 text-sm sm:text-base">{edu.degree}</p>
                    <p className="text-secondary mt-1 text-sm sm:text-base">{edu.date}</p>
                    <p className="text-white-100 mt-2 text-sm sm:text-base">{edu.description}</p>
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
            <div className="w-[220px] h-[220px] xs:w-[280px] xs:h-[280px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-2 sm:border-4 border-blue-500 shadow-lg shadow-blue-500/20">
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