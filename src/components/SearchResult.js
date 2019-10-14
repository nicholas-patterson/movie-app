import React from "react";
import { Link } from "@reach/router";

const SearchResult = ({ results, index }) => {
  console.log("EACH MOVIE", results);
  const baseURL = "https://image.tmdb.org/t/p/";
  return (
    <div className="mr-3 ml-3  mt-10">
      <Link to={`/results/movie/${index}`}>
        <img
          className="poster-img"
          src={`${baseURL}w342${results.poster_path}`}
          alt={results.title}
        />
      </Link>
    </div>
  );
};

export default SearchResult;
