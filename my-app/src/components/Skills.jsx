import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const SkillCard = ({ index, title, icon: Icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full xs:w-[260px] sm:w-[280px] md:w-[300px] bg-tertiary p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
        <Icon className="text-blue-500 text-2xl sm:text-3xl" />
      </div>
      <h3 className="text-white font-bold text-lg sm:text-xl">{title}</h3>
      <p className="text-secondary mt-2 sm:mt-3 text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">WHAT I BRING</p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">Technical Skills</h2>
          <p className="text-secondary text-sm sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            My technical toolkit includes various languages, frameworks, and technologies
            that I use to build responsive and efficient applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 