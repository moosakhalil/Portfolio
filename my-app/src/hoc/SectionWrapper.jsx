import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative z-0 py-16"
        id={idName}
      >
        <span className="hash-span" id={`#${idName}`}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper; 