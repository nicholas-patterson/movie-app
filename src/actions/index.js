import axios from "axios";

//Get Trending Movies
export const getTrending = page => {
  return dispatch => {
    dispatch({ type: "TRENDING_MOVIE_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bdf9161edffe87fda5d1b187cad99942&language=en-US&page=${page}`
      )
      .then(res => {
        dispatch({
          type: "TRENDING_MOVIE_SUCCESS",
          payload: {
            page: res.data.page,
            results: res.data.results,
            total_pages: res.data.total_pages,
            total_results: res.data.total_results
          }
        });
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

// Get Recommendations
export const getRecommendations = id => {
  return dispatch => {
    dispatch({ type: "FETCH_RECOMMENDATIONS_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=bdf9161edffe87fda5d1b187cad99942`
      )
      .then(res => {
        dispatch({
          type: "FETCH_RECOMMENDATIONS_SUCCESS",
          payload: res.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_RECOMMENDATIONS_FAILURE",
          payload: error.response
        });
      });
  };
};

// Get Video (for preview)

export const getVideo = id => {
  return dispatch => {
    dispatch({ type: "FETCH_VIDEO_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bdf9161edffe87fda5d1b187cad99942`
      )
      .then(res => {
        dispatch({ type: "FETCH_VIDEO_SUCCESS", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "FETCH_VIDEO_FAILURE", payload: err.response });
      });
  };
};

// Search Movie for infinite scroll

export const searchMovie = (query, page) => {
  query = query.split(" ").join("%20");
  console.log("QUERY BITCH", query);
  return dispatch => {
    dispatch({ type: "FETCH_QUERY_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bdf9161edffe87fda5d1b187cad99942&query=${query}&page=${page}`
      )
      .then(res => {
        console.log("QUERY RESULTS", res);
        if (res.data.results.length > 0) {
          dispatch({
            type: "FETCH_QUERY_SUCCESS",
            payload: {
              results: res.data.results,
              page: res.data.page,
              total_pages: res.data.total_pages,
              total_results: res.data.total_results,
              searchTerm: query
            }
          });
        } else {
          dispatch({ type: "FETCH_QUERY_FAILURE" });
        }
      })
      .catch(err => {
        dispatch({ type: "FETCH_QUERY_FAILURE", payload: err.response });
      });
  };
};

// New search action for header search bar comp

export const newSearch = (query, page) => {
  return dispatch => {
    dispatch({ type: "NEW_SEARCH_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bdf9161edffe87fda5d1b187cad99942&query=${query}&page=${page}`
      )
      .then(res => {
        dispatch({
          type: "NEW_SEARCH_SUCCESS",
          payload: {
            results: res.data.results,
            page: res.data.page,
            total_pages: res.data.total_pages,
            total_results: res.data.total_results,
            searchTerm: query
          }
        });
      })
      .catch(err => {
        dispatch({ type: "NEW_SEARCH_FAILURE", payload: err.response });
      });
  };
};

export const getReviews = id => {
  return dispatch => {
    dispatch({ type: "FETCH_REVIEWS_START" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=bdf9161edffe87fda5d1b187cad99942&page=1`
      )
      .then(res => {
        console.log("RES IN GET REVIEWS", res);
        dispatch({ type: "FETCH_REVIEWS_SUCCESS", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "FETCH_REVIEWS_FAILURE", payload: err.repsonse });
      });
  };
};
