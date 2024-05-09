import React from "react";
import Section2 from "../sections/Section2";
import Services from "../sections/Services";
import Section1 from "../sections/Section1";

const HeroSection = () => {
  return (
    <div>
      {/* section - 1 */}
      <Section1 />

      {/* section - 2 */}
      <Section2 />

      {/* Services */}
      <Services />
    </div>
  );
};

export default HeroSection;
