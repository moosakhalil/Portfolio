import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  return (
    <nav
      className={`${
        scrolled ? "bg-blue-100/95 shadow-md backdrop-blur-md border-b border-blue-200" : "bg-gradient-to-r from-blue-50 via-blue-100 to-yellow-50"
      } w-full max-w-full flex items-center py-3 xs:py-4 sm:py-5 fixed top-0 z-20 transition-all duration-300 overflow-x-hidden`}
    >
      <div className="w-full max-w-full flex justify-between items-center max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-gray-900 text-base xs:text-lg font-bold cursor-pointer flex flex-wrap">
            <span className="text-blue-500">Muhammad</span>&nbsp;
            <span>Moosa</span>&nbsp;
            <span className="text-blue-500">Khalil</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
              } text-base cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
              toggle ? 'bg-blue-100' : 'hover:bg-blue-50'
            }`}
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: toggle ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {toggle ? (
                <FiX className="text-2xl text-blue-600" />
              ) : (
                <FiMenu className="text-2xl text-gray-900" />
              )}
            </motion.div>
          </button>
          
          <AnimatePresence>
            {toggle && (
              <>
                {/* Backdrop */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setToggle(false)}
                />
                
                {/* Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="fixed top-[calc(4rem+1px)] inset-x-4 bg-white rounded-2xl shadow-lg z-50 overflow-hidden border border-blue-100"
                >
                  <div className="p-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={`#${link.id}`}
                          className={`flex items-center px-4 py-3 rounded-xl transition-colors duration-200 ${
                            active === link.title
                              ? "bg-blue-50 text-blue-600 font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setToggle(false);
                            setActive(link.title);
                          }}
                        >
                          {link.title}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;