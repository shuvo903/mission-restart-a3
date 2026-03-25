import React from 'react';

const States = () => {
  return (
    <div>
      <div className='w-full lg:py-20 md:py-16 py-12 mx-auto items-center text-center bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] text-white'>
        <div>
          <h2 className='text-center lg:text-5xl md:text-5xl text-3xl font-bold'>Trusted by Millions, Built for You</h2>

          <div className="stats text-center grid lg:grid-rows-1 grid-rows-3 gap-10 items-center lg:mt-8 md:mt-6 mt-4 lg:px-96 xl:px-56 overflow-hidden ">
            <div className=" place-items-center lg:space-y-4 md:space-y-4 space-y-3">
              <div className="stat-title text-gray-300 text-sm">Total Downloads</div>
              <div className="stat-value lg:text-5xl md:text-5xl text-3xl">29.6M</div>
              <div className="stat-title text-gray-300 text-sm">21% more than last month</div>
            </div>

            <div className=" place-items-center lg:space-y-4 md:space-y-4 space-y-3">
              <div className="stat-title text-gray-300 text-sm">Total Reviews</div>
              <div className="stat-value lg:text-5xl md:text-5xl text-3xl">906K</div>
              <div className="stat-title text-gray-300 text-sm">46% more than last month</div>
            </div>

            <div className="stat place-items-center lg:space-y-4 md:space-y-4 space-y-3">
              <div className="stat-title text-gray-300 text-sm">Active Apps</div>
              <div className="stat-value lg:text-5xl md:text-5xl text-3xl">132+</div>
              <div className="stat-title text-gray-300 text-sm">31 more will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;