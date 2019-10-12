import { combineReducers } from "redux";
import { trendingReducer } from "./trendingReducer";
import { singleMovieReducer } from "./singleMovieReducer";
import { recommendationReducer } from "./recommendationReducer";
import { videoReducer } from "./videoReducer";
import { searchMovieReducer } from "./searchMovieReducer";

export default combineReducers({
  trendingReducer,
  singleMovieReducer,
  recommendationReducer,
  videoReducer,
  searchMovieReducer
});
