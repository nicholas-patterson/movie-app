import React from "react";
import { Link } from "@reach/router";
import noImage from "../images/noImage.jpg";

const SearchResult = ({ results, index }) => {
  const baseURL = "https://image.tmdb.org/t/p/";

  return (
    <div className="mr-3 ml-3  mt-10">
      <Link to={`/results/movie/${index}`}>
        <img
          className="poster-img"
          src={
            results.poster_path === null
              ? noImage
              : `${baseURL}w342${results.poster_path}`
          }
          alt={results.title}
        />
      </Link>
    </div>
  );
};

export default SearchResult;
