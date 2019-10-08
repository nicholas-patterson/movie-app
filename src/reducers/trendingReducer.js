const initialState = {
  trendingMovies: [],
  error: ""
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRENDING_MOVIE_START":
      return {
        ...state,
        error: action.payload
      };

    case "TRENDING_MOVIE_SUCCESS":
      return {
        ...state,
        trendingMovies: action.payload,
        error: action.payload
      };

    case "TRENDING_MOVIE_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
