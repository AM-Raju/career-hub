import React from "react";

const Category = ({ category }) => {
  const { logo, name, jobsAvailable } = category;
  return (
    <div className="w-80 bg-purple-50 p-10 box-border rounded-md">
      <img className="p-4 my-bg-gradient rounded-md" src={logo} alt="" />
      <h4 className="mt-8 mb-2 text-xl font-semibold">{name}</h4>
      <p>{jobsAvailable}</p>
    </div>
  );
};

export default Category;
