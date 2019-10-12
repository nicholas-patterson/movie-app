const initialState = {
  searchedMovie: {
    results: [],
    isSearching: false
  },
  error: ""
};

export const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUERY_START":
      return {
        ...state,
        isSearching: true
      };

    case "FETCH_QUERY_SUCCESS":
      return {
        ...state,
        searchedMovie: {
          results: action.payload.results,
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          isSearching: false
        },
        error: ""
      };
    case "FETCH_QUERY_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
