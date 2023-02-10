import React, { Fragment, useEffect, useState } from "react";
import hamburger from "../assets/hamburger-svgrepo-com.svg";
import close from "../assets/close-svgrepo-com.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
    AOS.init({
      duration: 800,
    });
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsRotated(!isRotated);
  };

  const navbarClasses =
    scrollPosition > 200
      ? "backdrop-blur-sm bg-neutral-900/50 transition duration-500 text-white"
      : "transition duration-500 bg-transparent";

  return (
    <Fragment>
      <div className="grid justify-items-center">
        <div className={`navbar fixed z-30 ${navbarClasses}`}>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl font-cinzel">
              Gama
            </a>
          </div>
          <div className="flex">
            <div className="hidden md:grid grid-cols-5 gap-4 mx-2 text-white">
              <a
                onClick={() => scrollToSection("home")}
                className="cursor-pointer"
              >
                <h1 className="text-center mx-2 font-mons text-base">Home</h1>
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="cursor-pointer"
              >
                <h1 className="text-center mx-2 font-mons text-base">
                  About Me
                </h1>
              </a>
              <a onClick={() => scrollToSection("skills")}
                className="cursor-pointer">
                <h1 className="text-center mx-2 font-mons text-base">Skills</h1>
              </a>
              <a onClick={() => scrollToSection("portfolio")}
                className="cursor-pointer">
                <h1 className="text-center mx-2 font-mons text-base">
                  Portfolios
                </h1>
              </a>
              <a onClick={() => scrollToSection("contact")}
                className="cursor-pointer">
                <h1 className="text-center mx-2 font-mons text-base">
                  Contact
                </h1>
              </a>
            </div>
            <div className="mx-4 md:hidden cursor-pointer">
              <motion.img
                src={`${isDrawerOpen ? close : hamburger}`}
                className={`w-6 sm:w-8`}
                animate={{ rotate: isRotated ? 180 : 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                onClick={toggleDrawer}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isDrawerOpen && (
          <div>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-20"
              onClick={toggleDrawer}
            />
            <motion.div
              className="fixed top-16 right-0 bottom-0 bg-white w-1/2 z-20"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full grid grid-cols-1 content-center bg-neutral-900">
                <a onClick={() => scrollToSection("home")}
                className="cursor-pointer">
                <h1 className="text-center bg-neutral-900 py-11 px-2 text-lg font-mons font-normal text-white">
                  Home
                </h1></a>
                <a onClick={() => scrollToSection("about")}
                className="cursor-pointer">
                <h1 className="text-center bg-neutral-900 py-11 px-2 text-lg font-mons font-normal text-white">
                  About Me
                </h1></a>
                <a onClick={() => scrollToSection("skills")}
                className="cursor-pointer">
                <h1 className="text-center bg-neutral-900 py-11 px-2 text-lg font-mons font-normal text-white">
                  Skills
                </h1></a>
                <a onClick={() => scrollToSection("portfolio")}
                className="cursor-pointer">
                <h1 className="text-center bg-neutral-900 py-11 px-2 text-lg font-mons font-normal text-white">
                  Portfolios
                </h1></a>
                <a onClick={() => scrollToSection("contact")}
                className="cursor-pointer">
                <h1 className="text-center bg-neutral-900 py-11 px-2 text-lg font-mons font-normal text-white">
                  Contact
                </h1></a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
