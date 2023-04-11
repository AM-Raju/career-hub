import React from "react";
import vectorOne from "../assets/Images/Vector.png";
import vectorTwo from "../assets/Images/Vector-1.png";

const Banner = () => {
  return (
    <div className="h-96 bg-purple-50 relative -top-36 right-0 -z-10">
      <img className="absolute bottom-0 left-0" src={vectorOne} alt="" />
      <img className="absolute top-0 right-0" src={vectorTwo} alt="" />
    </div>
  );
};

export default Banner;
