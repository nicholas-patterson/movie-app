import { combineReducers } from "redux";
import { trendingReducer } from "./trendingReducer";
import { singleMovieReducer } from "./singleMovieReducer";
import { recommendationReducer } from "./recommendationReducer";
import { videoReducer } from "./videoReducer";
import { searchMovieReducer } from "./searchMovieReducer";
import { reviewsReducer } from "./reviewsReducer";
import { genreReducer } from "./genreReducer";

export default combineReducers({
  trendingReducer,
  singleMovieReducer,
  recommendationReducer,
  videoReducer,
  searchMovieReducer,
  reviewsReducer,
  genreReducer
});
