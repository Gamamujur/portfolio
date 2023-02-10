import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="w-full h-full bg-black pt-40 lg:pt-20" id="skills">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="500"
        className="border-t-4 rounded-lg lg:w-1/2 w-3/4"
      />
      <h1
        className="text-4xl md:text-5xl text-white p-4 font-cinzel lg:text-center lg:w-1/2"
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        Skills
      </h1>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        className="border-b-4 rounded-lg lg:w-1/3 w-3/6"
      />
      <div className="flex flex-wrap justify-center pt-20 pb-20">
        <div className="w-[250px] h-fit p-10 rounded-lg shadow-md shadow-white" data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="200" data-aos-offset="300">
          <h1 className="text-2xl font-bold text-white text-center tracking-widest">
            Beginner
          </h1>
          <div className="grid grid-cols-1 gap-6 text-center mt-10 text-slate-200 font-mons font-medium">
            <h1>Javascript</h1>
            <h1>React JS</h1>
            <h1>Mongo DB</h1>
            <h1>Firebase</h1>
            <h1>Next JS</h1>
          </div>
        </div>

        <div className="w-[250px] h-fit p-10 rounded-lg shadow-md shadow-white mt-40 sm:mt-0 sm:ml-5 lg:ml-52" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="300">
          <h1 className="text-2xl font-bold text-white text-center tracking-widest">
            Experienced
          </h1>
          <div className="grid grid-cols-1 gap-6 text-center mt-10 text-slate-200 font-mons font-medium">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>PHP</h1>
            <h1>Laravel</h1>
            <h1>MySQL</h1>
            <h1>Tailwind CSS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
