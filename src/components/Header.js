import React, { useState } from "react";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import "../styles/modal.css";
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles({
  root: {
    color: "#2ae1d5",
    "&:hover": {
      cursor: "pointer"
    }
  },
  google: {},
  facebook: {}
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
            <h1 className="text-white text-center text-2xl font-light">
              Login
            </h1>
            <Button
              variant="contained"
              startIcon={<SvgIcon><path fill="#00000" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" /></SvgIcon>}
              className={classes.google}
            >
              Login in with Google
            </Button>
            <Button>Login in with Facebook</Button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Header;
