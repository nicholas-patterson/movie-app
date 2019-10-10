import React from "react";
import { connect } from "react-redux";
import { getMovie, getRecommendations } from "../actions";
import StarRatings from "react-star-ratings";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const SingleMovie = props => {
  const classes = useStyles();
  let index = props.id;
  // Convert the index that was typeof strinf to number
  index = +index;
  const myMovie = props.singleMovie[index];
  console.log("MY MOVIE", myMovie);
  const baseURL = "https://image.tmdb.org/t/p/";

  if (!myMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-600">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${baseURL}original${myMovie.backdrop_path})`,
          height: "40vh",
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className="flex items-center">
          <div className="pl-10 pt-12">
            <img
              src={`${baseURL}w342${myMovie.poster_path}`}
              alt={myMovie.title}
            />
          </div>
          <div className="leading-normal">
            <h2 className="text-white font-thin text-3xl pl-5">
              {myMovie.title}
            </h2>
            <h2 class="text-white font-thin w-6/12 pl-5 text-2xl">
              {myMovie.overview}
            </h2>
            <StarRatings
              className="stars"
              rating={Math.floor(myMovie.vote_average / 2)}
              starRatedColor="Gold"
              starDimension="20px"
              numberOfStars={5}
            />
          </div>
        </div>
      </div>
      <div className={classes.root}>
        {/* <List>
          {props.recommended.map(rec => {
            return <ListItem>{rec.title}</ListItem>;
          })}
        </List> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MSTP", state);
  return {
    movie: state.singleMovieReducer.movie,
    recommended: state.recommendationReducer.recommendations,
    singleMovie: state.trendingReducer.trendingMovies || null
  };
};

export default connect(
  mapStateToProps,
  {
    getMovie,
    getRecommendations
  }
)(SingleMovie);
