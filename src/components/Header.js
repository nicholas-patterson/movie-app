import React, { useState } from "react";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import "../styles/modal.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import SimpleTabs from "./Tabs";

const useStyles = makeStyles({
  root: {
    color: "#2ae1d5",
    "&:hover": {
      cursor: "pointer"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    marginTop: "2rem",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "#dd4b39"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3b5998"
    },
  }
});

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);
  const classes = useStyles();

  const portal = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
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
            onClick={portal}
          />
        </div>
      </nav>
      {isShowing ? (
        <Modal>
          <div className="main">
            <SimpleTabs/>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Header;
