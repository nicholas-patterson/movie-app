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
        console.log(res);
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
        console.log("RES FROM ACTION", res);
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
        console.log("VIDEO RESPONSE FROM API", res.data);
        dispatch({ type: "FETCH_VIDEO_SUCCESS", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "FETCH_VIDEO_FAILURE", payload: err.response });
      });
  };
};
