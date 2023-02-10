import React from "react";
import logogmail from "../assets/gmail-svgrepo-com.svg";
import logolinked from "../assets/linkedin-svgrepo-com.svg";

const Contact = () => {
  return (
    <div className="w-full h-full bg-neutral-800" id="contact">
      <div className="grid grid-cols-1 content-center text-center h-[50vh]">
        <h1 className="text-white font-mons text-2xl lg:text-5xl font-medium tracking-widest">
          Feel Free to Say Hi
        </h1>
        <div className="flex justify-center pt-5">
          <a href="mailto:gamaeffendy1@gmail.com">
            <div className="w-10 bg-neutral-700 shadow-lg hover:bg-white hover:scale-125 transition duration-300 shadow-white p-2 rounded-full mr-5">
              <img src={logogmail} alt="" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/gama-mujur-024960228/">
            <div className="w-10 bg-neutral-700 shadow-lg hover:bg-white hover:scale-125 transition duration-300 shadow-white p-2 rounded-full">
              <img src={logolinked} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="h-[14vh] lg:h-[10vh] border-t-2 border-slate-500">
        <div className="grid grid-cols-1 content-center text-center p-1">
            <h1 className="text-slate-200 font-mons tracking-normal text-sm">Made by Gama Mujur Effendy</h1>

            <h1 className="text-slate-200 font-mons tracking-normal text-xs mt-5">React JS - Tailwind CSS - Framer Motion - Animation on Scroll</h1>



        </div>

      </div>
    </div>
  );
};

export default Contact;
