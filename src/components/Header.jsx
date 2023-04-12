import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="my-container flex flex-col md:flex-row justify-between items-center pb-4 pt-14">
        <h2 className="text-3xl font-bold">PH@Jobs</h2>
        <nav className="mt-4 md:mt-0 gap-4 md:gap-8 font-semibold flex flex-col md:flex-row text-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-gradient" : "text-black")}>
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "text-gradient" : "text-black")}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "text-gradient" : "text-black")}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-gradient" : "text-black")}
          >
            Blog
          </NavLink>
        </nav>
        <button className="btn mt-4 md:mt-0">Start Applying</button>
      </div>
    </section>
  );
};

export default Header;
