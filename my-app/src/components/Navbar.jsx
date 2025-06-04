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
          <div
            className="text-gray-900 text-2xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FiX /> : <FiMenu />}
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed top-0 left-0 w-screen h-screen bg-blue-100/95 bg-opacity-95 shadow-lg z-50 flex-col gap-4 items-center justify-center`}
          >
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
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 