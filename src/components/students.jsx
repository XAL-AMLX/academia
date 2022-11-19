import React from 'react'
import person1 from "../assets/person_1.jpg.webp"
import person2 from "../assets/person_2.jpg.webp";
import person3 from "../assets/person_3.jpg.webp";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

const Students = () => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center py-24 ">
        <h1 className=" font-bold">TESTIMONIAL</h1>
        <p className="text-5xl font-semibold mb-32  ">
          Our Successful Students
        </p>

        <div className="grid grid-cols-3 space-x-3">
          {/* grid 1 */}

          <div className="h-60 w-96 bg-white px-4 py-4 space-y-12">
            <div className="flex flex-row space-x-2 justify-items-center items-center ">
              <img
                src={person1}
                alt="student 1"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col items-start  ">
                <h1>ROGER SCOTT</h1>
                <h2 className="text-[#1eb2a6]">MARKETING MANAGER</h2>
              </div>
            </div>
            <div>
              <p className="text-slate-600">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts .
              </p>
            </div>
          </div>

          {/* grid 2 */}

          <div className="h-60 w-96 bg-[#1eb2a6] px-4 py-4 space-y-12">
            <div className="flex flex-row space-x-2 justify-items-center items-center ">
              <img
                src={person1}
                alt="student 1"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col items-start  text-white">
                <h1>ROGER SCOTT</h1>
                <h2>MARKETING MANAGER</h2>
              </div>
            </div>
            <div>
              <p className="text-slate-200">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts .
              </p>
            </div>
          </div>

          {/* grid 3 */}

          <div className="h-60 w-96 bg-white px-4 py-4 space-y-12">
            <div className="flex flex-row space-x-2 justify-items-center items-center ">
              <img
                src={person1}
                alt="student 1"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col items-start  ">
                <h1>ROGER SCOTT</h1>
                <h2 className="text-[#1eb2a6]">MARKETING MANAGER</h2>
              </div>
            </div>
            <div>
              <p className="text-slate-600">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts .
              </p>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default Students