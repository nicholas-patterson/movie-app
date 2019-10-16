import React from "react";
import { Link } from "@reach/router";
import "../styles/main.css";

const TrendingMovie = ({ movies, index }) => {
  const baseURL = "https://image.tmdb.org/t/p/";
  return (
    <div data-tool-tip={movies.title} className="mr-3 ml-3  mt-10">
      <Link to={`/movie/${index}`}>
        <img
          className="poster-img poster-div"
          src={`${baseURL}w342${movies.poster_path}`}
          alt={movies.title}
        />
      </Link>
    </div>
  );
};

export default TrendingMovie;
