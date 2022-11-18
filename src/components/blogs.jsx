import React from 'react'
import image1 from '../assets/image_1.jpg.webp'
import image2 from "../assets/image_2.jpg.webp";
import image3 from "../assets/image_3.jpg.webp";

const Blogs = () => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center py-24">
        <h1 className="text-[#1eb2a6] font-bold">OUR BLOG</h1>
        <p className="text-5xl font-semibold mb-12">Recent From Blog</p>
        <div className="grid grid-cols-3 px-24 space-x-5">

          {/* div1 */}
          <div className="drop-shadow-md bg-white space-y-6 pb-16 ">
            <div>
              <img src={image1} alt="first blog student" />
            </div>
            <div className="flex flex-row items-start space-x-3 text-sm font-bold text-slate-500 px-10">
              <div>ADMIN</div>
              <div>JAN. 18,2021</div>
              <div className="text-[#1eb2a6]">3 COMMENTS</div>
            </div>
            <h1 className="font-normal text-2xl px-10">
              Build your Dream Software & Engineering Career
            </h1>
            <p className="text-slate-500 px-10">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* div 2 */}

          <div className="drop-shadow-md bg-white space-y-6 pb-16 ">
            <div>
              <img src={image2} alt="first blog student" />
            </div>
            <div className="flex flex-row items-start space-x-3 text-sm font-bold text-slate-500 px-10">
              <div>ADMIN</div>
              <div>JAN. 18,2021</div>
              <div className="text-[#1eb2a6]">3 COMMENTS</div>
            </div>
            <h1 className="font-normal text-2xl px-10">
              Build your Dream Software & Engineering Career
            </h1>
            <p className="text-slate-500 px-10">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* div 3 */}

          <div className="drop-shadow-md bg-white space-y-6 pb-16 ">
            <div>
              <img src={image3} alt="first blog student" />
            </div>
            <div className="flex flex-row items-start space-x-3 text-sm font-bold text-slate-500 px-10">
              <div>ADMIN</div>
              <div>JAN. 18,2021</div>
              <div className="text-[#1eb2a6]">3 COMMENTS</div>
            </div>
            <h1 className="font-normal text-2xl px-10">
              Build your Dream Software & Engineering Career
            </h1>
            <p className="text-slate-500 px-10">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default Blogs