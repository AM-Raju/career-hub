import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#1A1919]">
      <div className="my-container flex flex-col md:flex-row text-white pt-24 pb-14">
        <div className="w-full md:w-96 text-center md:text-start">
          <h2 className="text-3xl font-bold mb-5 text-gradient">PH@Jobs</h2>
          <p className="px-5 md:px-0">
            Explore thousands of job opportunities with all the information you need. Its your
            future. Come find it. Manage all your job application from start to finish
          </p>
        </div>
        <div className="flex md:ml-16 justify-center md:justify-start">
          <div className="w-60  hidden md:block">
            <h4 className="text-2xl mb-5 font-semibold text-gradient">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="w-56 hidden md:block">
            <h4 className="text-2xl mb-5 font-semibold text-gradient">Product</h4>
            <ul>
              <li>Mock Interview</li>
              <li>Career Guideline</li>
              <li>Hot Jobs</li>
              <li>Email Alert</li>
            </ul>
          </div>
          <div className="w-56 hidden md:block">
            <h4 className="text-2xl mb-5 font-semibold text-gradient">Support</h4>
            <ul>
              <li>24/7 Customer Support</li>
              <li>Resume Preparation</li>
              <li>Free Demo Resume</li>
            </ul>
          </div>
          <div className=" pt-5 md:pt-0 text-center md:text-start">
            <h4 className="text-2xl mb-5 font-semibold text-gradient">Contact</h4>
            <ul>
              <li>Dhaka, Bangladesh</li>
              <li>PH@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center pb-10">
        <span>&#169;</span>aziz_morshed, All Right Reserved
      </p>
    </section>
  );
};

export default Footer;
