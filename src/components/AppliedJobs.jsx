import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import Banner from "./Banner";

const AppliedJobs = () => {
  const { savedJobs } = useLoaderData();
  const [filteredJobs, setFilteredJobs] = useState([]);

  const filterOnsiteJob = () => {
    const onsiteJob = savedJobs.filter((job) => job.jobType === "Onsite");
    setFilteredJobs(onsiteJob);
  };
  const filterRemoteJob = () => {
    const remoteJob = savedJobs.filter((job) => job.jobType === "Remote");
    setFilteredJobs(remoteJob);
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
          {filteredJobs.length > 0 && (
            <div>
              {filteredJobs.map((job) => (
                <AppliedJob key={job.id} job={job}></AppliedJob>
              ))}
            </div>
          )}
          {filteredJobs.length < 1 && (
            <div>
              {savedJobs.map((job) => (
                <AppliedJob key={job.id} job={job}></AppliedJob>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
