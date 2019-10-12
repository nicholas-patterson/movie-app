const initialState = {
  trendingMovies: {
    results: []
  },
  error: ""
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRENDING_MOVIE_START":
      return {
        ...state
      };

    case "TRENDING_MOVIE_SUCCESS":
      return {
        ...state,
        trendingMovies: {
          results: [...state.trendingMovies.results, ...action.payload.results],
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results
        },
        error: ""
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
