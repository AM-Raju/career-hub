import React from "react";

const Category = ({ category }) => {
  const { logo, name, jobsAvailable } = category;
  return (
    <div className="w-72 bg-purple-50 p-10 box-border rounded-md text-center md:text-start">
      <img className="p-4 my-bg-gradient rounded-md mx-auto md:mx-0" src={logo} alt="" />
      <h4 className="mt-8 mb-2 text-xl font-semibold">{name}</h4>
      <p>{jobsAvailable}</p>
    </div>
  );
};

export default Category;
