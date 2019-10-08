import React from "react";
import logo from "../images/mdi_movie_filter.png";
import login from "../images/mdi-people.png";

const Header = () => {
  return (
    <nav className="bg-gray-900 flex py-5 justify-between items-center px-24 border-teal-400 border-b-2">
      <div className="flex justify-between">
        <img className="pr-3 w-12" src={logo} alt="take one" />
        <h3 className="text-xl text-white font-light">
          Movie.<span className="font-thin italic">me</span>
        </h3>
      </div>
      <div>
        <img className="w-10" src={login} alt="login" />
      </div>
    </nav>
  );
};

export default Header;
