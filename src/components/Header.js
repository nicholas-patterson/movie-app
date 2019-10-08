import React, { useState } from "react";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import "../styles/modal.css";
import SvgIcon from "@material-ui/core/SvgIcon";

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
            <h2 className="text-white text-center text-2xl font-light">
              Login
            </h2>
            <div className="flex flex-col w-6/12 mx-auto">
            <Button variant="contained" className={classes.google}>
              <SvgIcon>
                <path  fill="#fff" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
              </SvgIcon>
              Login in with Google
            </Button>
            <Button variant="contained" className={classes.facebook}>
              <SvgIcon>
              <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"/>
              </SvgIcon>
              Login in with Facebook
              </Button>
              </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Header;
