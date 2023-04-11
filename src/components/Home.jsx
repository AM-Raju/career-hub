import React, { useState } from "react";
import bannerImage from "../assets/Images/bannerPerson.png";

import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Job from "./Job";

const Home = () => {
  const { jobs, categories } = useLoaderData();

  const [allData, setAllData] = useState(false);
  return (
    <>
      {/* Banner Section */}
      <section className="bg-gray-100 pt-52 relative -top-44 -z-10">
        <div className="my-container">
          <div className="block md:flex md:flex-row-reverse">
            <img className="w-[3850px] md:w-full" src={bannerImage} alt="" />
            <div className="my-auto">
              <h2 className="text-5xl md:text-6xl font-bold leading-snug text-center md:text-left">
                One Step <br /> Closer To Your <br />{" "}
                <span className="text-gradient">Dream Job</span>
              </h2>
              <p className="my-7 text-center md:text-left px-5 md:px-0">
                Explore thousands of job opportunities with all the information you need. Its your
                future. Come find it. Manage all your job application from start to finish
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Job category section */}
      <section className="mt-32 hidden">
        <div className="my-container">
          <div className="text-center">
            <h3 className="text-5xl font-bold">Job Category List</h3>
            <p className="mt-4 mb-8">
              Explore thousands of job opportunities with all the information you need. Its your
              future.
            </p>
          </div>
          {/* Category container */}
          <div className="flex gap-4">
            {categories.map((category) => (
              <Category key={category.name} category={category}></Category>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Jobs section */}
      <section className="mt-32 hidden">
        <div className="my-container">
          <div className="text-center">
            <h3 className="text-5xl font-bold">Featured Jobs</h3>
            <p className="mt-4 mb-8">
              Explore thousands of job opportunities with all the information you need. Its your
              future.
            </p>
          </div>
          {/* Jobs container */}
          <div className="grid grid-cols-2 gap-6">
            {allData
              ? jobs.map((job) => <Job key={job.id} job={job}></Job>)
              : jobs.slice(0, 4).map((job) => <Job key={job.id} job={job}></Job>)}
          </div>
          <div className="w-full flex justify-center mt-10 mb-32">
            <button
              className={`btn mx-auto ${allData ? "hidden" : "block"}`}
              onClick={() => setAllData(true)}
            >
              Show All Jobs
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
