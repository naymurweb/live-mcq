import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className=" bg-teal-400 p-4">
      <div className="container mx-auto md:flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Live MCQ</h3>
        <nav className="text-lg md:flex">
          <p>
            <NavLink to="/home">Home</NavLink>
          </p>
          <p>
            <NavLink to="/blog">Blog</NavLink>
          </p>

          <p>
            <NavLink to="/startstics">statistics</NavLink>
          </p>
        </nav>

        <Bars3Icon className="h-6 w- md:hidden"></Bars3Icon>
      </div>
    </div>
  );
};

export default Header;
