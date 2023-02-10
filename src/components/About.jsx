import React from "react";
import gambardiri from "../assets/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="w-screen h-full bg-black">
      <div>
        <div id="about"
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
          About Me
        </h1>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="border-b-4 rounded-lg lg:w-1/3 w-3/6"
        />
      </div>

      <div className="mt-20 md:flex flex-row lg:p-20">
        <div className=" p-10">
          <div className="bg-neutral-900 rounded-lg hover:bg-neutral-800 transition duration-300 flex">
            <div>
              <img
                src={gambardiri}
                alt="personal"
                className="grayscale hover:grayscale-0 transition duration-300 ss:w-1/2 md:w-full lg:w-3/4 object-fit mx-auto brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>
        <div className="grid content-center">
          <h1 className="text-slate-400 leading-loose p-4 font-mons">
            <span
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1000"
            >
              Hello, i'm{" "}
              <span className="text-blue-400 font-semibold">
                Gama Mujur Effendy
              </span>
              <br /> a recent graduate with a passion for Web Development.{" "}
              <br />
            </span>

            <span
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <br /> My current focus is on full-stack website development,
              specifically using{" "}
              <span className="text-white font-medium">
                React JS, Laravel, MySQL, and Tailwind CSS
              </span>{" "}
              . Additionally, I keep studying and practicing more in depth, in
              order to teach myself something new or making myself used to
              challenges that i keep encountering. <br />
            </span>

            <span
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <br /> Although I do not have any formal work experience, i do
              have some portfolios that might showcase my skills. Up until now,
              i'm looking forward to giving my participation on a real project
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
