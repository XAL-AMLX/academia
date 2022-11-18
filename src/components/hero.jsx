import React from "react";
import laptopWoman from "../assets/about.jpg.webp";
import Blogs from "./blogs";
import Courses from "./courses";
import { Learn } from "./learn";
import Pricing from "./pricing";
import Students from "./students";

const Hero = () => {
  return (
    <div>
      <div className="w-screen font-Robot h-screen bg-yellow-50 ">
        <div className="bg-bg1 bg-fixed h-screen w-full lg:h-full lg:w-screen lg:bg-cover"></div>

        <div className=" bg-green-100 h-screen w-screen overflow-hidden">
          <div className="md:grid md:grid-cols-2 gap-0 bg-green p-x-12">
            <div className="-ml-44 -mr-10 -mb-24 ">
              <img alt="a woman with laptop" src={laptopWoman} />
            </div>

            <div className="bg-white px-10 py-24 ">
              <h1 className="text-[#1eb2a6] font-bold mb-2">LEARN ANYTHING</h1>
              <div className="text-5xl font-semibold text-[#212529] space-y-3">
                <div>Benefits About Online</div>
                <div>Learning Expertise</div>
              </div>
              <div className="hover:bg-[#1eb2a6] hover:drop-shadow-md mr-16 p-4 mt-7">
                <div className="grid grid-cols-7 pl-3 pr-10 space-y-1">
                  <div className="flex justify-center items-center ">O</div>
                  <div className="col-span-6 space-y-2 pb-4">
                    <h1 className="text-xl font-medium">Online Courses</h1>
                    <p className="text-mb text-slate-400">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-[#1eb2a6] hover:drop-shadow-md mr-16 p-4 mt-7">
                <div className="grid grid-cols-7 pl-3 pr-10 space-y-1">
                  <div className="flex justify-center items-center ">O</div>
                  <div className="col-span-6 space-y-2 pb-4">
                    <h1 className="text-xl font-medium">Online Courses</h1>
                    <p className="text-mb text-slate-400">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-[#1eb2a6] hover:drop-shadow-md mr-16 p-4 mt-7">
                <div className="grid grid-cols-7 pl-3 pr-10 space-y-1">
                  <div className="flex justify-center items-center ">O</div>
                  <div className="col-span-6 space-y-2 pb-4">
                    <h1 className="text-xl font-medium">Online Courses</h1>
                    <p className="text-mb text-slate-400">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* laying out learn and other components */}

        <Learn />
        <Courses />
        <Students />
        <Blogs />
        <Pricing />

        {/* layed out other components */}

        <div className="absolute top-8 left-24 right-24 bg-opacity-0 bg-slate-50 h-24  flex space-x-24">
          <div className="text-white">
            <div className="font-bold text-3xl">ACADEMIA</div>
            <div className="text-xs font-medium ">
              ONLINE EDUCATION & LEARNING
            </div>
          </div>

          <div className="text-white ml-24">
            <div className="font-semibold text-lg">Monday-Friday</div>
            <div className="text-sm font-bold ">8.00AM-8.00PM</div>
          </div>

          <div className="text-white">
            <div className="font-medium text-lg">Call Us</div>
            <div className="font-semibold text-lg">+2 392 3929 210</div>
          </div>
        </div>
        <div className="absolute top-32 left-24 right-24 bg-opacity-10 bg-slate-50 h-20 flex space-x-8 text-white items-center pl-8 font-medium">
          <div className="text-[#1eb2a6]">Home</div>
          <div>All Courses</div>
          <div>About</div>
          <div>Team</div>
          <div>Pricing</div>
          <div>Journal</div>
          <div>Contact</div>
        </div>

        <div className="absolute top-80 left-24 right-24 bg-opacity-0 bg-slate-50 h-72 text-white space-y-4">
          <h4 className="text-sm font-bold  text-slate-100">
            WELCOME TO ACADEMIA
          </h4>
          <div>
            <div className="text-5xl font-bold ">Best Online Education</div>
            <div className="text-5xl font-bold mb-8">Expertise</div>
          </div>
          <div>
            <p className="font-medium text-lg text-slate-200">
              Far far away, behind the word mountains, far from the countries
              Vokalia
            </p>
            <p className="font-medium text-lg text-slate-200">
              and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="space-x-1">
            <button className="bg-[#1eb2a6] text-white px-6 py-4 rounded">
              GET STARTED NOW
            </button>
            <button className="bg-white text-[#1eb2a6] px-6 py-4 rounded">
              VIEW COURSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
