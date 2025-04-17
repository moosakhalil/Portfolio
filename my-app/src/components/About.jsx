import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "../constants";

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen mx-auto py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-blue-500 font-semibold text-lg">About Me</p>
          <h2 className="text-white font-bold text-4xl mt-2">Who I Am</h2>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              With a strong foundation in ReactJS, JavaScript, and various
              backend technologies, I specialize in building responsive,
              real-time applications with clean user interfaces. My problem-solving
              skills and attention to detail allow me to create solutions that
              are both functional and user-friendly.
            </p>

            <div className="mt-12">
              <h3 className="text-white font-bold text-2xl mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={`education-${index}`}
                    className="border-l-4 border-blue-500 pl-6 py-2"
                  >
                    <h4 className="text-white font-bold text-xl">{edu.title}</h4>
                    <p className="text-blue-400 mt-1">{edu.degree}</p>
                    <p className="text-secondary mt-1">{edu.date}</p>
                    <p className="text-white-100 mt-2">{edu.description}</p>
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
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold text-center px-4">
                  M
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 