import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import salaryIcon from "../assets/Icons/Frame.png";
import jobTitleIcon from "../assets/Icons/Frame-1.png";
import { addToDb } from "../utilities/fakeJobsDB";
import Banner from "./Banner";

const JobDetails = () => {
  const params = useParams();
  const jobs = useLoaderData();

  const [jobData, setJobData] = useState({});

  useEffect(() => {
    if (params) {
      const selectedJob = jobs.find((job) => job.id === params.id);
      setJobData(selectedJob);
    }
  }, []);

  return (
    <>
      <Banner>Job Details</Banner>
      <section className="mt-32 relative -top-40">
        <div className="my-container flex gap-14">
          <div className="w-[856px]">
            <p>
              <span className="font-bold">Job Description: </span>
              {jobData.jobDesc}
            </p>
            <p className="mt-4">
              <span className="font-bold">Job Responsibility: </span>
              {jobData.jobResponsibility}
            </p>
            <p className="mt-4">
              <span className="font-bold">Educational Requirements: </span>
              {jobData.education}
            </p>
            <p className="mt-4">
              <span className="font-bold">Experience: </span>
              {jobData.experience}
            </p>
          </div>

          {/* Sidebar */}
          <div className=" w-[428px]">
            <div className="bg-purple-200 p-8 rounded-md">
              <h3 className="text-xl font-semibold">Job Details</h3>
              <div className="h-[2px] w-full bg-purple-400 my-4"></div>

              <div className="flex">
                <img src={salaryIcon} alt="" />
                <p>
                  <span className="font-semibold ml-3 mr-2">Salary:</span> ${jobData.salary}
                </p>
              </div>
              <div className="flex">
                <img className="h-6 w-6 mr-3" src={jobTitleIcon} alt="" />
                <p>
                  <span className="font-semibold">Job Title: </span>
                  {jobData.title}
                </p>
              </div>
              <h3 className=" text-xl font-semibold mt-4">Contact Information</h3>
              <div className="h-[2px] w-full bg-purple-400 my-4"></div>
              <p>
                <span className="font-semibold">Email: </span>
                {jobData.contact}
              </p>
            </div>
            <button onClick={() => addToDb(jobData.id)} className="btn w-full mt-4">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
