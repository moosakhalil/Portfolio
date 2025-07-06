import React from "react";
import { motion } from "framer-motion";
import { certificates } from "../constants";
import { BiSolidBadgeCheck } from "react-icons/bi";

const CertificateCard = ({ index, title, issuer, date, description, tags, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 p-6 rounded-2xl w-full sm:w-[380px] md:w-[420px] transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/40 border border-blue-100"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 rounded-full p-2">
          <BiSolidBadgeCheck className="text-white text-2xl" />
        </div>
        <div>
          <h3 className="text-gray-900 font-bold text-xl">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-blue-600 font-semibold text-sm">{issuer}</p>
            <span className="text-gray-400">•</span>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[240px] overflow-hidden rounded-xl border border-blue-100/50">
        <img 
          src={image}
          alt={`${title} Certificate`}
          className="w-full h-full object-contain bg-gradient-to-br from-blue-50 via-white to-yellow-50"
        />
      </div>

      <p className="mt-5 text-gray-700 text-sm leading-relaxed">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${title}-${tag}`}
            className="text-xs px-3 py-1.5 bg-blue-100 rounded-full text-blue-600 font-semibold border border-blue-200"
          >
            {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="relative w-full py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">MY ACHIEVEMENTS</p>
          <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mt-2">Certificates</h2>
          <p className="text-gray-700 text-sm sm:text-lg mt-3 sm:mt-4 max-w-2xl">
            Explore my professional certifications and achievements. Each certificate represents dedicated learning
            and expertise in various technology domains.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 