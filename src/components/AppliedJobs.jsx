import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import Banner from "./Banner";

const AppliedJobs = () => {
  const { savedJobs } = useLoaderData();
  const [workingPlace, setWorkingPlace] = useState(savedJobs);

  const filterOnsiteJob = () => {
    const onsiteJob = workingPlace.filter((job) => job.jobType === "Onsite");
    setWorkingPlace(onsiteJob);
  };
  const filterRemoteJob = () => {
    const remoteJob = workingPlace.filter((job) => job.jobType === "Remote");
    setWorkingPlace(remoteJob);
  };

  return (
    <>
      <Banner>Applied Jobs</Banner>
      <div className="my-container relative -top-20">
        <div className="relative h-16">
          <button className="btn absolute right-32 top-0" onClick={filterRemoteJob}>
            Remote
          </button>
          <button className="btn absolute right-0 top-0" onClick={filterOnsiteJob}>
            Onsite
          </button>
        </div>
        <div>
          {workingPlace.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
