import axios from "axios";

export const getTrending = () => {
  return dispatch => {
    dispatch({ type: "TRENDING_MOVIE_START" });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=bdf9161edffe87fda5d1b187cad99942&language=en-US&page=1"
      )
      .then(res => {
        console.log("RESPONSE", res);
        dispatch({ type: "TRENDING_MOVIE_SUCCESS", payload: res.data.results });
      })
      .catch(error => {
        dispatch({ type: "TRENDING_MOVIE_FAILURE", payload: error.repsonse });
      });
  };
};
