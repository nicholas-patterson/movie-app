import React, { useState } from "react";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { makeStyles, fade } from "@material-ui/core/styles";
import Modal from "./utils/Modal";
import "../styles/modal.css";
import SimpleTabs from "./utils/Tabs";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import { searchMovie, newSearch } from "../actions/index";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#2ae1d5",
    marginLeft: "2rem",
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
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Header = props => {
  const [isShowing, setIsShowing] = useState(false);
  const [movie, setMovie] = useState("");
  const classes = useStyles();
  console.log("MOVIE", movie);

  const portal = () => {
    setIsShowing(!isShowing);
  };

  const handleChange = e => {
    setMovie(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.newSearch(movie, 1);
    navigate("/results");
    setMovie("");
  };

  return (
    <>
      <nav className="bg-gray-900 flex py-5 justify-between items-center px-24 border-teal-400 border-b-2">
        <div className="flex justify-between items-center">
          <Link to="/welcome">
            {" "}
            <MovieFilterIcon className={classes.root} fontSize="large" />{" "}
          </Link>
          <h3 className="text-xl text-white font-light ml-5">
            Movie.<span className="font-thin italic">me</span>
          </h3>
        </div>
        <div className="flex">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                type="text"
                value={movie}
                name="movie"
                placeholder="Search…"
                onChange={handleChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
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
            <SimpleTabs />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default connect(
  null,
  { searchMovie, newSearch }
)(Header);
