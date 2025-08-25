import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ index, title, company, dates, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/80 p-4 sm:p-5 rounded-2xl w-full sm:w-[320px] md:w-[360px] transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/40 border border-blue-100"
  >
    <div className="relative w-full h-[180px] sm:h-[230px] overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <img
        src={`/${image}`}
        alt={`${company} work`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
    <div className="mt-4 sm:mt-5 text-left">
      <h3 className="text-gray-900 font-bold text-xl sm:text-2xl">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <p className="text-blue-600 font-semibold text-sm">{company}</p>
        <span className="text-gray-400">•</span>
        <p className="text-gray-600 text-sm">{dates}</p>
      </div>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm">{description}</p>
    </div>
  </motion.div>
);

const WorkExperience = () => {
  return (
    <section id="experience" className="relative w-full py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">MY EXPERIENCE</p>
          <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mt-2">Work Experience</h2>
          <p className="text-gray-700 text-sm sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            Roles and contributions that shaped my skills and impact.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`exp-${index}`} index={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
