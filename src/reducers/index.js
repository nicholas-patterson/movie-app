import { combineReducers } from "redux";
import { trendingReducer } from "./trendingReducer";
import { singleMovieReducer } from "./singleMovieReducer";
import { recommendationReducer } from "./recommendationReducer";

export default combineReducers({
  trendingReducer,
  singleMovieReducer,
  recommendationReducer
});
