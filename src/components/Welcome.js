import React from "react";
import hero from "../images/popcorn-theater.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2ae1d5",
    marginLeft: "9rem",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "#2ae1d5"
    }
  },
  social: {
    color: "rgba(162, 171, 177, .2)",
    marginBottom: "2rem",
    "&:hover": {
      color: "rgb(162,171,177,.5)",
      cursor: "pointer"
    }
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className="bg-gray-900 h-screen flex">
      <div className="w-1/4 pt-20 border-r-2 border-teal-400 ">
        <div className="mt-40 leading-loose">
          <h2 className="text-white text-4xl font-thin pl-4">
            Movie Browsing.
          </h2>
          <h2 className="text-white text-4xl font-thin text-gray-500 pl-32">
            Socialization.
          </h2>
          <Button variant="contained" className={classes.root}>
            Trending Movies
          </Button>
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
