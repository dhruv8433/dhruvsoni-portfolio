import React from "react";
import Card from "../Card";

const Services = () => {
  return (
    <div className="w-full font-baloo">
      <div className="flex flex-col text-center py-10 justify-center">
        <h1>WHAT I WILL DO FOR YOU</h1>
        <h1 className="text-6xl primary-text font-bold font-primary">Services</h1>
      </div>

      {/* Cards */}
      <Card />
    </div>
  );
};

export default Services;
