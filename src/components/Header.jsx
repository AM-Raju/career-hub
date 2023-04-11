import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-gray-100">
      <div className="my-container flex justify-between items-center pb-4 pt-14">
        <h2 className="text-3xl font-bold">PH@Jobs</h2>
        <nav className="flex gap-8 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink>Statistics</NavLink>
          <NavLink to="/jobs">Applied Jobs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <button className="btn">Start Applying</button>
      </div>
    </section>
  );
};

export default Header;
