import React from "react";
import hero from "../images/dog-theater.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import "../styles/main.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2ae1d5",
    marginLeft: "5rem",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "#2ae1d5",
    },
  },
  social: {
    color: "rgba(162, 171, 177, .2)",
    marginBottom: "1rem",
    transition: "color .5s",
    "&:hover": {
      color: "rgb(162,171,177,.5)",
      cursor: "pointer",
    },
  },
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className="bg-gray-900 flex">
      <div className=" pt-20 border-r-2 border-teal-400 lg:w-1/4 md:w-2/4 xs:w-full xlg:pr-6 sm:w-full sm:border-none sm:pt-0 sm:pl-4 sm:pr-4 md:pt-0 md:pl-0 md:pr-0 lg:pl-3 lg:pr-3 lg:pt-0 xlg:pl-0 xlg:pr-0">
        <div className="mt-40 leading-loose sm:text-center md:text-center lg:text-center">
          <h2 className="text-white text-4xl font-thin pl-4 xs:w-4/5 xlg:text-3xl sm:text-left sm:mb-4 lg:text-2xl">
            Movie Browsing.
          </h2>
          <p className="sm:text-white sm:text-center md:text-white md:pl-4 md:mb-4 lg:text-center lg:text-white xlg:text-white xlg:pl-4">
            The ultimate movie browsing experience, look at trending movies and
            read reviews from others.
          </p>
          <Link to="/trending">
            <button className="bg-teal-400 rounded sm:text-center sm:my-4 sm:mx-auto sm:w-11/12 md:text-center md:mx-auto md:w-11/12 md:my-4 lg:mx-auto lg:my-4 lg:w-11/12 lg:text-center xlg:text-center xlg:mx-auto xlg:w-2/4 xlg:mt-4 xlg:ml-3">
              Trending Movies
            </button>
          </Link>
        </div>

        <div className="pl-4 mt-40 flex-col sm:mt-24 md:mt-32 lg:mt-32">
          <div>
            <TwitterIcon fontSize="large" className={classes.social} />
          </div>
          <div>
            <FacebookIcon fontSize="large" className={classes.social} />
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 md:w-3/4 xs:hidden sm:hidden md:block">
        <img
          className="bg-no-repeat bg-center bg-cover idk"
          src={hero}
          alt="movie theater"
        />
      </div>
    </div>
  );
};

export default Welcome;
