import React from "react";
import { Link } from "@reach/router";
import "../styles/main.css";

const TrendingMovie = ({ movies, index, genres }) => {
  const filteredGenres = () => {
    const result = [];
    movies.genre_ids.forEach(id => {
      genres.forEach(genre => {
        if (genre.id === id) {
          result.push(genre.name);
        }
      });
    });
    return result;
  };

  const baseURL = "https://image.tmdb.org/t/p/";
  return (
    <>
      <div
        data-tool-tip={movies.title}
        data-movie-genre={filteredGenres().join(", ")}
        className="mr-3 ml-3  mt-10 hover-bitch"
      >
        <Link to={`/movie/${index}`}>
          <img
            className="poster-img poster-div"
            src={`${baseURL}w342${movies.poster_path}`}
            alt={movies.title}
          />
        </Link>
      </div>
    </>
  );
};

export default TrendingMovie;
