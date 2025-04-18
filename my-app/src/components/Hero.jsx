import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link to the resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Moosa_Khalil_Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Top Content */}
      <div className="absolute top-[120px] w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-blue-500" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-500" />
          </div>

          <div>
          <h1 className="text-white font-black text-4xl xs:text-5xl sm:text-6xl lg:text-8xl mt-2">
  Hi, I'm <span className="text-blue-500">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
</h1>

            <p className="text-white font-medium text-base xs:text-lg lg:text-xl mt-2 text-white-100">
              {personalInfo.tagline}
            </p>
            <p className="text-white-100 text-sm xs:text-base sm:text-lg max-w-2xl mt-4 xs:mt-6">
              {personalInfo.about}
            </p>
          </div>
        </div>
      </div>

      {/* Center Circle and Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full flex flex-col items-center">
        <div className="w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
          <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
            <div className="w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <h3 className="text-white text-2xl xs:text-4xl md:text-5xl font-bold">MK</h3>
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
          className="mt-8 bg-blue-500 text-white py-3 px-8 rounded-xl font-bold shadow-lg text-base hover:bg-blue-600 transition-colors duration-300"
        >
          Download Resume
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 