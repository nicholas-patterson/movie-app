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
      <div className=" pt-20 border-r-2 border-teal-400 lg:w-1/4 md:w-2/4 xs:w-full xlg:pr-6 sm:w-full sm:border-none">
        <div className="mt-40 leading-loose">
          <h2 className="text-white text-4xl font-thin pl-4 xs:w-4/5 xlg:text-3xl sm:text-center">
            Movie Browsing.
          </h2>
          <Link to="/trending">
            <Button
              variant="contained"
              id="btn-primary"
              className={"xs:w-2/5 " + classes.root}
            >
              Trending
            </Button>
          </Link>
        </div>

        <div className="pl-4 mt-40 flex-col">
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
