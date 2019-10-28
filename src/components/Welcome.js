import React from "react";
import hero from "../images/dog-theater.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

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
    marginBottom: "1rem",
    transition: "color .5s",
    "&:hover": {
      color: "rgb(162,171,177,.5)",
      cursor: "pointer"
    }
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className="bg-gray-900 flex">
      <div className=" pt-20 border-r-2 border-teal-400 lg:w-1/4 md:w-2/4 xs:w-1/4">
        <div className="mt-40 leading-loose">
          <h2 className="text-white text-4xl font-thin pl-4">
            Movie Browsing.
          </h2>
          <h2 className="text-white text-4xl font-thin text-gray-500 pl-32">
            Socialization.
          </h2>
          <Link to="/trending">
            <Button variant="contained" className={classes.root}>
              Trending Movies
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
      <div className="lg:w-3/4 md:w-3/4">
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
