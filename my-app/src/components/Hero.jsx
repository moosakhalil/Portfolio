import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blue-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-500" />
        </div>

        <div>
          <h1 className="text-white font-black text-4xl xs:text-5xl sm:text-6xl lg:text-8xl mt-2">
            Hi, I'm <span className="text-blue-500">{personalInfo.name.split(' ')[0]}</span>
          </h1>
          <p className="text-white font-medium text-base xs:text-lg lg:text-xl mt-2 text-white-100">
            {personalInfo.tagline}
          </p>
          <p className="text-white-100 text-sm xs:text-base sm:text-lg max-w-2xl mt-4 xs:mt-6">
            {personalInfo.about}
          </p>
          <div className="mt-6 xs:mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 xs:py-3 xs:px-8 rounded-xl font-bold shadow-lg text-sm xs:text-base"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 top-[280px] xs:top-[350px] sm:top-[300px] xl:top-[250px] flex items-center justify-center">
        <div className="w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center animate-pulse">
          <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
            <div className="w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <h3 className="text-white text-2xl xs:text-4xl md:text-6xl font-bold">MK</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[44px] xs:w-[35px] xs:h-[64px] rounded-3xl border-2 xs:border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 