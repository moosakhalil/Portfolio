import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-gray-900 text-2xl cursor-pointer z-50"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {toggle ? <FiX /> : <FiMenu />}
          </button>
          
          {toggle && (
            <>
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setToggle(false)}
              />
              {/* Menu */}
              <div className="fixed top-16 right-4 w-[calc(100%-2rem)] max-w-xs bg-white rounded-xl shadow-lg z-50 p-6">
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
                      } text-base cursor-pointer transition-colors duration-200`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`} className="block w-full">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;