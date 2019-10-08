import React from "react";
import hero from "../images/popcorn-theater.jpg";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";

const Welcome = () => {
  return (
    <div className="bg-gray-900 h-screen flex">
      <div className="w-1/4 pt-20 border-r-2 border-teal-400 ">
        <div className="mt-40 leading-loose">
          <h2 className="text-white text-4xl font-thin pl-4" font>
            Movie Browsing.
          </h2>
          <h2 className="text-white text-4xl font-thin text-gray-500 pl-32">
            Socialization.
          </h2>
        </div>

        <div className="pl-4 mt-40">
          <img className="pb-8" src={twitter} alt="twitter logo" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="w-3/4">
        <img
          className="bg-no-repeat bg-center bg-cover h-full"
          src={hero}
          alt="movie theater"
        />
      </div>
    </div>
  );
};

export default Welcome;
