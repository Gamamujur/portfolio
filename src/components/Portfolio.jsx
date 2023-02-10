import React from "react";
import netflix from "../assets/netflix.PNG";
import myprops from "../assets/myprops.PNG";
import foodorder from "../assets/foodorder.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="w-full h-full pt-[30vh] bg-black pb-32">
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
        id="portfolio"
      >
        Portfolios
      </h1>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        className="border-b-4 rounded-lg lg:w-1/3 w-3/6"
      />
      <div className="flex flex-wrap justify-center pt-[30vh]">
        <div
          className="card w-[90vw] md:w-[30vw] bg-base-100 shadow-xl md:mr-5"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          <figure className="h-[40vh] lg:h-[30vh]">
            <img
              src={netflix}
              alt="Netflixclone"
              className="object-cover h-full w-full
              "
            />
          </figure>
          <div className="card-body bg-slate-900">
            <h2 className="card-title text-slate-200 justify-center font-mons text-2xl font-bold">
              Netflix Clone
            </h2>
            <p className="text-slate-400 mt-10 font-mons leading-relaxed font-normal">
              A simple netflix clone website. Made with React JS, Tailwind CSS,
              Google Firebase, and TMDB API
            </p>
            <div className="card-actions justify-center">
              <a href="https://gamamujur.github.io/react-netflixclone/">
                <button className="btn btn-primary mt-3">Project Demo</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="card w-[90vw] md:w-[30vw] bg-base-100 shadow-xl mt-40 md:mt-0 md:mr-5"
          data-aos="zoom-in"
          data-aos-offset="400"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <figure className="h-[40vh] lg:h-[30vh]">
            <img
              src={myprops}
              alt="Props"
              className="object-cover object-left h-full w-full
              "
            />
          </figure>
          <div className="card-body bg-slate-900">
            <h2 className="card-title text-slate-200 justify-center font-mons text-2xl font-bold">
              MyProps
            </h2>
            <p className="text-slate-400 mt-10 font-mons leading-relaxed font-normal">
              A web-based furniture sales. Made with Laravel, Tailwind CSS,
              MySQL, and MidTrans Payment Gateway
            </p>
            <div className="card-actions justify-center">
              <a href="https://myprops.my.id">
                <button className="btn btn-primary mt-3">Project Demo</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="card w-[90vw] md:w-[30vw] bg-base-100 shadow-xl mt-40 md:mt-0"
          data-aos="zoom-in"
          data-aos-offset="400"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <figure className="h-[40vh] lg:h-[30vh]">
            <img
              src={foodorder}
              alt="Props"
              className="object-cover object-center h-full w-full
              "
            />
          </figure>
          <div className="card-body bg-slate-900">
            <h2 className="card-title text-slate-200 justify-center font-mons text-2xl font-bold">
              DaFood
            </h2>
            <p className="text-slate-400 mt-10 font-mons leading-relaxed font-normal">
              A simple food-order website. Made with React JS using React Hooks
              and Tailwind CSS for the styling
            </p>
            <div className="card-actions justify-center">
              <a href="https://gamamujur.github.io/react-foodorder/">
                <button className="btn btn-primary mt-3">Project Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
