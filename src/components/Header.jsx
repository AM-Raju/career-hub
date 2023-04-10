import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container flex bg-red-100 justify-between items-center py-4 mt-10">
      <h2 className="text-3xl font-bold">PH@Jobs</h2>
      <nav className="flex gap-8 font-semibold">
        <NavLink>Home</NavLink>
        <NavLink>Statistics</NavLink>
        <NavLink>Blog</NavLink>
      </nav>
      <button className="px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  rounded-md font-semibold">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
