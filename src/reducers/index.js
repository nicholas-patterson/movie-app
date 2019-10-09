import { combineReducers } from "redux";
import { trendingReducer } from "./trendingReducer";
import { singleMovieReducer } from "./singleMovieReducer";

export default combineReducers({
  trendingReducer,
  singleMovieReducer
});
