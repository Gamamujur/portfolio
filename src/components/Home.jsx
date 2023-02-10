import React, { useState } from "react";
import gambar from "../assets/paul-volkmer-fX-qWsXl5x8-unsplash.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import laravelogo from "../assets/laravel-svgrepo-com.svg";
import reactlogo from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import logosql from "../assets/mysql-svgrepo-com.svg";
import logotail from "../assets/tailwind-svgrepo-com.svg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const laravel = (
    <div className="flex flex-col mx-auto w-full">
      <img src={laravelogo} className="w-40 object-contain mx-auto" />
      <h1 className="text-5xl font-medium">Laravel</h1>
    </div>
  );

  const react = (
    <div className="flex flex-col mx-auto w-full">
      <img src={reactlogo} className="w-40 object-contain mx-auto" />
      <h1 className="text-5xl font-medium">React JS</h1>
    </div>
  );

  const sql = (
    <div className="flex flex-col mx-auto w-full">
      <img src={logosql} className="w-40 object-contain mx-auto" />
      <h1 className="text-5xl font-medium">MySQL</h1>
    </div>
  );

  const tailwind = (
    <div className="flex flex-col mx-auto w-full">
      <img src={logotail} className="w-40 object-contain mx-auto" />
      <h1 className="text-5xl font-medium">Tailwind CSS</h1>
    </div>
  );

  const skills = [laravel, react, sql, tailwind];

  const changeIndex = () => {
    setCurrentIndex((currentIndex + 1) % skills.length);
  };

  useEffect(() => {
    setTimeout(changeIndex, 2000);
    AOS.init({
      duration: 800,
    });
  }, [currentIndex]);
  return (
    <div id="home">
      <div className="relative">
        <div className="absolute top-0 left-2 w-full h-full z-10 mx-auto">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 content-center">
            <div className="lg:px-20">
              <h1
                data-aos="fade-up"
                data-aos-offset="10"
                className="font-slab text-neutral-300 font-bold text-lg mb-4 md:text-xl"
              >
                Hi, my name is
              </h1>
              <h1
                className="text-gray-200 font-mons text-4xl font-medium md:text-5xl"
                data-aos="fade-zoom-in"
                data-aos-offset="10"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Gama Mujur Effendy
              </h1>
              <p
                className="mt-10 text-slate-400 w-screen pr-4 lg:pr-10 sm:text-lg lg:w-full md:w-3/4 leading-loose font-mons"
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-delay="1000"
                data-aos-duration="1500"
              >
                A fresh graduate with a passion in IT field, especially Web
                Development. Currently learning about full-stack website
                development using React JS, Laravel, MySQL, and Tailwind.
              </p>
            </div>

            <div className="hidden lg:grid h-[30vh] content-center text-center  text-5xl text-white">
              <AnimatePresence exitBeforeEnter>
                <motion.p
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    transform: "rotate3d(1, 90, 0, -90deg)",
                  }}
                  animate={{ opacity: 1, transform: "rotate3d(1, 0, 0, 0deg)" }}
                  exit={{ opacity: 0, transform: "rotate3d(1, 90, 0, 90deg)" }}
                  transition={{ duration: 0.5 }}
                >
                  {skills[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 md:bg-black/60" />
        <img
          src={gambar}
          alt="BG-Image"
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Home;
