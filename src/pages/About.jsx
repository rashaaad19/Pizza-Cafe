import React from "react";
import { NavLink, Outlet, useLocation } from "react-router";

const About = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/about/")[1];
  return (
    <div className="">
      <h2 className="font-bold text-2xl">
        {currentPath ? `About ${currentPath}` : "About us"}
      </h2>

      <div className="my-5">
        <NavLink
          to={"company"}
          className={({ isActive }) =>
            !isActive ? "text-gray-500 font-normal mr-5" : "font-bold mr-5"
          }
        >
          Company
        </NavLink>
        <NavLink
          to={"people"}
          className={({ isActive }) =>
            !isActive ? "text-gray-500 font-normal" : "font-bold"
          }
        >
          People
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
