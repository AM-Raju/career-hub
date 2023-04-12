import React from "react";
import locationIcon from "../assets/Icons/Frame-4.png";
import salaryIcon from "../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, title, companyName, jobType, location, salary } = job;
  return (
    <div className="w-96 md:w-[628px] bg-purple-50 p-14 box-border rounded-md border-[1px] border-purple-100 hover:border-purple-300">
      <img src={logo} alt="" />
      <h3 className="text-2xl font-semibold mt-8">{title}</h3>
      <h4 className="text-xl mt-2 mb-4">{companyName}</h4>
      <button className="border-2 border-purple-300 rounded-md px-6 py-2">{jobType}</button>
      <div className="md:flex my-4 items-center">
        <div className="flex">
          <img className="w-6 h-6" src={locationIcon} alt="" />
          <h4 className="text-xl ml-2">{location}</h4>
        </div>
        <div className="flex mt-2 md:mt-0 md:ml-8">
          <img className="w-6 h-6" src={salaryIcon} alt="" />
          <h4 className="text-xl ml-2">Salary: ${salary} </h4>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default Job;
