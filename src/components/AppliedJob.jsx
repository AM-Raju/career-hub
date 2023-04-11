import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const { id, logo, title, companyName, jobType, jobNature, location, salary } = job;
  return (
    <div className="flex justify-between items-center p-5 border-[2px] my-4 rounded-lg ">
      <div className="flex items-center">
        <div className="h-48 w-48 mr-8 bg-gray-100 flex justify-center items-center rounded-md">
          <img className="p-10" src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h4 className="text-xl my-2">{companyName}</h4>
          <button className="border-2 border-purple-300 rounded-md px-6 py-2 mr-5">
            {jobType}
          </button>
          <button className="border-2 border-purple-300 rounded-md px-6 py-2">{jobNature}</button>
          <div className="flex mt-3">
            <p className="mr-10">{location}</p>
            <p>Salary: ${salary}</p>
          </div>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="btn h-18">Job Details</button>
      </Link>
    </div>
  );
};

export default AppliedJob;
