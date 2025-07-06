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
    <section id="hero" className="relative w-full min-h-[90vh] mx-auto overflow-hidden flex flex-col items-center w-full max-w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-75 scale-105 transform"
          style={{ 
            backgroundImage: 'url("/hero.jpg")',
            filter: 'brightness(0.9) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-blue-100/90 to-yellow-50/95" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
                <p className="text-blue-700 font-medium text-sm sm:text-base">Welcome to my portfolio</p>
              </div>

              <h1 className="text-gray-900 font-black text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="text-gray-800 font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl">
                {personalInfo.tagline}
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                {personalInfo.about}
              </p>
        
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-8 rounded-xl font-bold shadow-lg text-base sm:text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right content - Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] transition-all duration-300">
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
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <FaGithub className="text-gray-800 text-2xl sm:text-3xl" />
                  </div>
                </div>
                
                {/* JavaScript Icon */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <SiJavascript className="text-yellow-500 text-2xl sm:text-3xl" />
                  </div>
                </div>
                
                {/* HTML Icon */}
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <FaHtml5 className="text-orange-500 text-2xl sm:text-3xl" />
                  </div>
                </div>
                
                {/* CSS Icon */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" />
                  </div>
                </div>
                
                {/* C++ Icon */}
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <SiCplusplus className="text-blue-600 text-2xl sm:text-3xl" />
                  </div>
                </div>
                
                {/* Python Icon */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg border border-blue-50">
                    <FaPython className="text-green-500 text-2xl sm:text-3xl" />
                  </div>
                </div>
              </motion.div>
              
              {/* Center circle with code icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl transition-all duration-300 border-4 border-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="w-8 h-14 sm:w-10 sm:h-16 rounded-full border-2 border-blue-500/50 bg-white/30 backdrop-blur-sm flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 