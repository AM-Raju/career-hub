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
      <section className="bg-gray-100 pt-96 md:pt-40 relative -top-96 md:-top-36 -z-10">
        <div className="my-container">
          <div className="block md:flex md:flex-row-reverse">
            <img className=" w-[385px] md:w-[80%]" src={bannerImage} alt="" />
            <div className="my-auto">
              <h2 className="mt-10 md:mt-0 text-5xl md:text-6xl font-bold leading-snug md:leading-snug text-center md:text-left">
                One Step <br /> Closer To Your <br />
                <span className="text-gradient">Dream Job</span>
              </h2>
              <p className="my-10 md:my-7 text-center md:text-left px-5 md:px-0">
                Explore thousands of job opportunities with all the information you need. Its your
                future. Come find it. Manage all your job application from start to finish
              </p>
              <div className="flex justify-center md:justify-start pb-28 pt-10 md:p-0">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Job category section */}
      <section className="md:mt-32 relative -top-72 md:-top-32">
        <div className="my-container">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">Job Category List</h3>
            <p className="mt-4 mb-16 px-5 md:px-0">
              Explore thousands of job opportunities with all the information you need. Its your
              future.
            </p>
          </div>
          {/* Category container */}
          <div className="grid md:grid-cols-4 gap-8 w-72 md:w-full mx-auto">
            {categories.map((category) => (
              <Category key={category.name} category={category}></Category>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Jobs section */}
      <section className="md:mt-32 relative -top-32 md:-top-28">
        <div className="my-container">
          <div className="text-center">
            <h3 className="text-5xl font-bold">Featured Jobs</h3>
            <p className="mt-4 mb-16 px-5 md:px-0">
              Explore thousands of job opportunities with all the information you need. Its your
              future.
            </p>
          </div>
          {/* Jobs container */}
          <div className="grid md:grid-cols-2 gap-6 w-96 mx-auto md:w-full">
            {allData
              ? jobs.map((job) => <Job key={job.id} job={job}></Job>)
              : jobs.slice(0, 4).map((job) => <Job key={job.id} job={job}></Job>)}
          </div>
          <div className="w-full flex justify-center mt-16 md:mb-10">
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
