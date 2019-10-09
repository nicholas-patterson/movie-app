import axios from "axios";

// Get Trending Movies
export const getTrending = () => {
  return dispatch => {
    dispatch({ type: "TRENDING_MOVIE_START" });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=bdf9161edffe87fda5d1b187cad99942&language=en-US&page=1"
      )
      .then(res => {
        dispatch({ type: "TRENDING_MOVIE_SUCCESS", payload: res.data.results });
      })
      .catch(error => {
        dispatch({ type: "TRENDING_MOVIE_FAILURE", payload: error.repsonse });
      });
  };
};

// Get Single Movie
export const getMovie = id => {
  return dispatch => {
    dispatch({ type: "FETCH_MOVIE_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=bdf9161edffe87fda5d1b187cad99942`
      )
      .then(res => {
        dispatch({ type: "FETCH_MOVIE_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_MOVIE_FAILURE", payload: err.response });
      });
  };
};
