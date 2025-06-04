import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { FaGithub, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus } from "react-icons/si";

const Hero = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) throw new Error('Failed to fetch resume');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Moosa_Khalil_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[80vh] mx-auto overflow-hidden flex flex-col items-center bg-gradient-to-br from-blue-100 via-blue-50 to-yellow-50 w-full max-w-full overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/60 via-blue-100/40 to-yellow-100/30 z-0" />
      
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 w-full max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-gray-900 font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-gray-800 font-medium text-base xs:text-lg sm:text-xl lg:text-2xl mt-2 sm:mt-4">
                {personalInfo.tagline}
              </p>
              
              <p className="text-gray-600 text-sm xs:text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
                {personalInfo.about}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-3 px-6 sm:px-8 rounded-xl font-bold shadow-lg text-base sm:text-lg transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 group border-2 border-blue-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-0.5 transition-transform text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <div className="relative w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] transition-all duration-300">
              {/* Background gradient circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-blue-400/30 blur-2xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100/60 to-yellow-100/40 blur-xl" />
              
              {/* Tech stack icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {/* GitHub Icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <FaGithub className="text-white text-3xl sm:text-4xl" />
                  </div>
                </div>
                
                {/* JavaScript Icon */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <SiJavascript className="text-yellow-500 text-3xl sm:text-4xl" />
                  </div>
                </div>
                
                {/* HTML Icon */}
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl" />
                  </div>
                </div>
                
                {/* CSS Icon */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <FaCss3Alt className="text-blue-500 text-3xl sm:text-4xl" />
                  </div>
                </div>
                
                {/* C++ Icon */}
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <SiCplusplus className="text-blue-600 text-3xl sm:text-4xl" />
                  </div>
                </div>
                
                {/* Python Icon */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
                    <FaPython className="text-green-500 text-3xl sm:text-4xl" />
                  </div>
                </div>
              </motion.div>
              
              {/* Center circle with code icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center shadow-xl transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="block"
        >
          <div className="w-8 h-14 sm:w-10 sm:h-16 rounded-full border-2 border-yellow-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-yellow-400"
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 