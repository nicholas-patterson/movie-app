import React from "react";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#2ae1d5",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

const modal = e => {
  e.preventDefault();
  console.log("Modal Pop-up");
};

const Header = () => {
  const classes = useStyles();
  return (
    <nav className="bg-gray-900 flex py-5 justify-between items-center px-24 border-teal-400 border-b-2">
      <div className="flex justify-between items-center">
        <MovieFilterIcon className={classes.root} fontSize="large" />
        <h3 className="text-xl text-white font-light ml-5">
          Movie.<span className="font-thin italic">me</span>
        </h3>
      </div>
      <div>
        <GroupSharpIcon
          fontSize="large"
          className={classes.root}
          onClick={modal}
        />
      </div>
    </nav>
  );
};

export default Header;
