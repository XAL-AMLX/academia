import React from 'react'





const Courses = () => {
  return (
    <div>
      <div>
        <div className="h-screen w-screen flex flex-col items-center py-24">
          <h1 className="text-[#1eb2a6] font-bold">OUR COURSES</h1>
          <p className="text-5xl font-semibold mb-32">
            Explore Our Popular Online Courses
          </p>

          <div className="grid grid-cols-3 space-x-4 ">
            {/* start card */}

            <div className="flex flex-col justify-items-start items-center bg-white  w-96 px-8 space-y-8">
              <div className="grid grid-cols-6">
                <div className="text-[#1eb2a6] text-5xl">O</div>

                <div className="col-span-5">
                  <div className="text-3xl font-semibold">
                    HTML, CSS, and Javascript for Web Developers
                  </div>
                  <div>*****</div>
                  <div>by John Smith</div>
                  <div className="text-[#1eb2a6] font-xs font-semibold rounded">
                    50 lectures(190 hrs)
                  </div>
                </div>
              </div>

              <div className="text-[#1eb2a6] font-semibold text-md">
                $100 All Course / $15 per month
              </div>

              <div>
                <button className=" px-24 py-3 text-[#1eb2a6] hover:text-white bg-white border border-[#1eb2a6] hover:bg-[#1eb2a6] rounded">
                  ENROLL NOW!
                </button>
              </div>
            </div>

            {/* second card  */}

            <div className="flex flex-col justify-items-start items-center bg-white  w-96 px-8 space-y-8">
              <div className="grid grid-cols-6">
                <div className="text-[#1eb2a6] text-5xl">O</div>

                <div className="col-span-5">
                  <div className="text-3xl font-semibold">
                    HTML, CSS, and Javascript for Web Developers
                  </div>
                  <div>*****</div>
                  <div>by John Smith</div>
                  <div className="text-[#1eb2a6] font-xs font-semibold rounded">
                    50 lectures(190 hrs)
                  </div>
                </div>
              </div>

              <div className="text-[#1eb2a6] font-semibold text-md">
                $100 All Course / $15 per month
              </div>

              <div>
                <button className=" px-24 py-3 text-[#1eb2a6] hover:text-white bg-white border border-[#1eb2a6] hover:bg-[#1eb2a6] rounded">
                  ENROLL NOW!
                </button>
              </div>
            </div>

            {/* third card */}

            <div className="flex flex-col justify-items-start items-center bg-white  w-96 px-8 space-y-8">
              <div className="grid grid-cols-6">
                <div className="text-[#1eb2a6] text-5xl">O</div>

                <div className="col-span-5">
                  <div className="text-3xl font-semibold">
                    HTML, CSS, and Javascript for Web Developers
                  </div>
                  <div>*****</div>
                  <div>by John Smith</div>
                  <div className="text-[#1eb2a6] font-xs font-semibold rounded">
                    50 lectures(190 hrs)
                  </div>
                </div>
              </div>

              <div className="text-[#1eb2a6] font-semibold text-md">
                $100 All Course / $15 per month
              </div>

              <div>
                <button className=" px-24 py-3 text-[#1eb2a6] hover:text-white bg-white border border-[#1eb2a6] hover:bg-[#1eb2a6] rounded">
                  ENROLL NOW!
                </button>
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </div>

      {/* second courses div */}

      <div className="h-screen w-screen">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-[#1eb2a6] font-bold">COURSES</h1>
          <p className="text-5xl font-semibold">Browse Our Online Courses</p>
        </div>

        <div className="grid grid-rows-2 space-y-4 px-24">
          <div className="grid grid-cols-6 justify-items-center items-center ">
            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-[#1eb2a6] shadow-lg rounded hover:bg-[#1eb2a6]  space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 justify-items-center items-center">
            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>

            <div className="flex flex-col justify-items-center items-center  h-60 w-52 bg-white shadow-lg rounded hover:bg-[#1eb2a6] space-y-1">
              <div className="py-7">O</div>
              <div className="font-bold text-xl text-slate-700">
                UI/UX Design
              </div>
              <div className="font-bold text-xl text-slate-700">Courses</div>
              <div className="bg-white text-sm font-semibold hover:bg-white px-3 rounded py-1 text-[#1eb2a6]">
                25 Courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses


