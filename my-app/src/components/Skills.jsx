import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const SkillCard = ({ index, title, icon: Icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full md:w-[300px] bg-tertiary p-6 rounded-xl shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
        <Icon className="text-blue-500 text-3xl" />
      </div>
      <h3 className="text-white font-bold text-xl">{title}</h3>
      <p className="text-secondary mt-3">{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-semibold text-lg">WHAT I BRING</p>
          <h2 className="text-white font-bold text-4xl mt-2">Technical Skills</h2>
          <p className="text-secondary text-lg mt-4 max-w-2xl mx-auto">
            My technical toolkit includes various languages, frameworks, and technologies
            that I use to build responsive and efficient applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 