import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-lg font-bold">
              Moosa Khalil | Portfolio
            </p>
            <p className="text-secondary text-sm mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 