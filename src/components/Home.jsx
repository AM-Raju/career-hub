import React from "react";
import bannerImage from "../assets/Images/bannerPerson.png";
import account from "../assets/Icons/accounts1.png";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="bg-gray-100">
        <div className="my-container ">
          <div className="flex">
            <div className="my-auto">
              <h2 className="text-6xl font-bold leading-snug">
                One Step <br /> Closer To Your <br />{" "}
                <span className="text-gradient">Dream Job</span>
              </h2>
              <p className="my-7">
                Explore thousands of job opportunities with all the information you need. Its your
                future. Come find it. Manage all your job application from start to finish
              </p>
              <button className="btn">Get Started</button>
            </div>
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </section>

      {/* Job category section */}
      <section className="mt-32">
        <div className="my-container">
          <div className="text-center">
            <h3 className="text-5xl font-bold">Job Category List</h3>
            <p className="mt-4 mb-8">
              Explore thousands of job opportunities with all the information you need. Its your
              future.
            </p>
          </div>
          {/* Category container */}
          <div>
            {/* Category */}
            <div>
              <img src={account} alt="" />
              <h4>Account and Finance</h4>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
