import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col items-center py-24">
        <h1 className="text-[#1eb2a6] font-bold">OUR PRICING</h1>
        <p className="text-5xl font-semibold">Pricing & Packages</p>

        <div className="grid grid-cols-4 px-24 space-x-8 py-10">
          {/* card 1 */}
          <div className="flex flex-col justify-items-center items-center space-y-8 px-20 py-20 text-center bg-white drop-shadow-2xl shadow-stone-600">
            <h1>BASIC PLAN</h1>
            <div>
              <span>$</span>
              <span className="text-[#1eb2a6] text-6xl font-bold">49K</span>
            </div>
            <p className="text-slate-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-white text-xs text-[#1eb2a6] font-medium hover:bg-[#1eb2a6] border border-[#1eb2a6] px-12 py-4 rounded-md -m-12">
              GET STARTED
            </button>
          </div>

          {/* card 2 */}
          <div className="flex flex-col justify-items-center items-center space-y-8 px-20 py-20 text-center bg-white drop-shadow-2xl shadow-stone-600">
            <h1>BASIC PLAN</h1>
            <div>
              <span>$</span>
              <span className="text-[#1eb2a6] text-6xl font-bold">49K</span>
            </div>
            <p className="text-slate-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-white text-xs text-[#1eb2a6] font-medium hover:bg-[#1eb2a6] border border-[#1eb2a6] px-12 py-4 rounded-md -m-12">
              GET STARTED
            </button>
          </div>
          {/* card 3 */}

          <div className="flex flex-col justify-items-center items-center space-y-8 px-20 py-20 text-center bg-white drop-shadow-2xl shadow-stone-600">
            <h1>BASIC PLAN</h1>
            <div>
              <span>$</span>
              <span className="text-[#1eb2a6] text-6xl font-bold">49K</span>
            </div>
            <p className="text-slate-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-white text-xs text-[#1eb2a6] font-medium hover:bg-[#1eb2a6] border border-[#1eb2a6] px-12 py-4 rounded-md -m-12">
              GET STARTED
            </button>
          </div>

          {/* card 4 */}

          <div className="flex flex-col justify-items-center items-center space-y-8 px-20 py-20 text-center bg-white drop-shadow-2xl shadow-stone-600">
            <h1>BASIC PLAN</h1>
            <div>
              <span>$</span>
              <span className="text-[#1eb2a6] text-6xl font-bold">49K</span>
            </div>
            <p className="text-slate-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-white text-xs text-[#1eb2a6] font-medium hover:bg-[#1eb2a6] border border-[#1eb2a6] px-12 py-4 rounded-md -m-12">
              GET STARTED
            </button>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default Pricing