"use client";
import React, { useState } from "react";

// section 2
const Section2 = () => {
  const [dark, light] = useState(false);
  return (
    <div className="hero-second section-2 h-[600px] bg-gray-200 flex py-5 w-[90%] font-baloo">
      <div className="w-[30%] img-class rounded-[60px] max-w-full overflow-hidden">
        <img
          src="/asset/pic-3.jpeg"
          height="230px"
          width={"100%"}
          className="object-cover"
          alt=""
        />
      </div>
      <div className="text-start px-10 items-start w-[70%] ">
        <h1 className="capitalize">let me introduce myself</h1>
        <h1 className="primary-text font-bold text-6xl font-primary">
          About Me
        </h1>

        <h1 className="capitalize mt-10 text-2xl font-semibold">
          A Story of hardwork and perseverance.
        </h1>
        <p className="text-gray-600 text-lg mt-2 font-baloo">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          assumenda alias libero iure cum laboriosam et illum adipisci enim!
          Minus consequatur atque, rerum corrupti laborum, suscipit dignissimos
          beatae ut quidem voluptate magni. Iste voluptatum, quibusdam cum
          mollitia excepturi eius distinctio corrupti doloribus fuga fugit sint
          nisi in dolor minus repellendus assumenda! Odio voluptates sunt eos
          totam, ipsam et provident asperiores nobis aliquid ab natus
          perspiciatis cupiditate! Tenetur laudantium, porro corrupti iste
          aliquid asperiores minus obcaecati praesentium eum vero esse molestias
          voluptatibus eos eveniet reiciendis? Voluptatibus nemo tempora, quos
          totam nobis ipsum id nisi mollitia libero sapiente recusandae veniam
          dolorem nulla.
        </p>

        <h1 className="capitalize mt-10 text-2xl font-semibold">Contact</h1>
        <p className="text-lg">
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </p>
        <p className="font-semibold text-lg hover:text-green-500 hover:cursor-pointer w-min">
          dhruvrsoni04@gmail.com
        </p>

        <button
          className="mt-5 mx-3 primary-bg p-3 text-white font-semibold rounded-lg"
          onClick={() => light(!dark)}
        >
          HIRE ME
        </button>
        <button className="mt-5 mx-3 py-3 px-5 border font-semibold rounded-lg">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
};

export default Section2;
