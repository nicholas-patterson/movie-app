import React from "react";
import { Link } from "@reach/router";
import noImage from "../images/noImage.jpg";

const SearchResult = ({ results, index, genres }) => {
  const baseURL = "https://image.tmdb.org/t/p/";

  const filteredGenres = () => {
    const result = [];
    results.genre_ids.forEach((id) => {
      genres.forEach((genre) => {
        if (genre.id === id) {
          result.push(genre.name);
        }
      });
    });
    return result;
  };

  return (
    <>
      <div
        data-tool-tip={results.title}
        data-movie-genre={filteredGenres().join(", ")}
        className="mr-3 ml-3  mt-10 hover-card"
      >
        <Link to={`/results/movie/${index}`}>
          <img
            className="poster-img poster-div"
            src={
              results.poster_path === null
                ? noImage
                : `${baseURL}w342${results.poster_path}`
            }
            alt={results.title}
          />
        </Link>
      </div>
    </>
  );
};

export default SearchResult;
