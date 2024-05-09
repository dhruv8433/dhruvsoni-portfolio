import React from "react";

const Section1 = () => {
  return (
    <div className="hero h-[600px] items-center px-5 flex">
      <div className="w-[50%]">
        <h1 className="text-xl font-baloo tracking-wider">Hello, i'm a</h1>
        <h1 className="text-7xl font-extrabold font-primary">
          Full Stack <span className="primary-text underline">Developer.</span>
        </h1>
        <h1 className="mt-2 max-w-[600px]">
          Hi, i am Dhruv Soni, a passionate web developer based in the india.
          welcome to the portfolio world
        </h1>
        <button className="primary-bg mt-2 p-3 rounded-xl text-white font-bold">
          View Portfolio
        </button>
      </div>
      <div className="w-[50%] flex justify-center">
        <img
          src="/asset/dp.jpeg"
          alt=""
          height={400}
          width={400}
          className="rounded-full border-white border-8"
        />
      </div>
    </div>
  );
};

export default Section1;
