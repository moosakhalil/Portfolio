import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

const ProjectCard = ({ index, title, description, tags, image, videoDemo, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-tertiary p-5 rounded-2xl w-full md:w-[360px] transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="relative w-full h-[230px] cursor-pointer overflow-hidden rounded-lg group">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          {title.charAt(0)}
        </div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub className="w-1/2 h-1/2 text-white" />
          </div>
        </div>

        {videoDemo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-blue-500 p-3 rounded-full">
              <FiPlay className="text-white text-2xl" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-2xl">{title}</h3>
        <p className="mt-2 text-secondary text-sm">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${title}-${tag}`}
            className="text-sm px-3 py-1 bg-black rounded-full text-blue-400"
          >
            #{tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-blue-500 font-semibold text-lg">MY WORK</p>
          <h2 className="text-white font-bold text-4xl mt-2">Projects</h2>
          <p className="text-secondary text-lg mt-4 max-w-2xl">
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies I've mastered. Click on the GitHub
            icon to check out the code.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 