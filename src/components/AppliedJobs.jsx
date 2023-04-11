import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { savedJobs } = useLoaderData();
  console.log(savedJobs, "raju");
  return (
    <div className="my-container">
      {savedJobs.map((job) => (
        <AppliedJob></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
