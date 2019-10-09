import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovie } from "../actions";
import StarRatings from "react-star-ratings";

const SingleMovie = props => {
  console.log("PROPS", props);
  const baseURL = "https://image.tmdb.org/t/p/";
  useEffect(() => {
    props.getMovie(props.id);
  }, []);

  console.log(Math.floor(props.movie.vote_average / 2));

  if (props.movie.length === 0) {
    return <h3>Loading....</h3>;
  }

  return (
    <div className="bg-gray-600">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${baseURL}original${props.movie.backdrop_path})`,
          height: "40vh",
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className="flex items-center">
          <div className="pl-10 pt-12">
            <img
              src={`${baseURL}w342${props.movie.poster_path}`}
              alt={props.movie.title}
            />
          </div>
          <div className="leading-normal">
            <h2 className="text-white font-thin text-3xl pl-5">
              {props.movie.title}
            </h2>
            <h2 class="text-white font-thin w-6/12 pl-5 text-2xl">
              {props.movie.overview}
            </h2>
            <StarRatings
              className="ml-5"
              rating={Math.floor(props.movie.vote_average / 2)}
              starRatedColor="Gold"
              starDimension="20px"
              numberOfStars={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MSTP", state);
  return {
    movie: state.singleMovieReducer.movie
  };
};

export default connect(
  mapStateToProps,
  {
    getMovie
  }
)(SingleMovie);
