import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-base sm:text-lg font-bold">
              Moosa Khalil | Portfolio
            </p>
            <p className="text-secondary text-xs sm:text-sm mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/moosakhalil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-moosa-khalil-9a3569306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 