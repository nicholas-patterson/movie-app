const initialState = {
  searchedMovie: {
    results: [],
    isSearching: false,
    searchTerm: ""
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
          results: [...state.searchedMovie.results, ...action.payload.results],
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          searchTerm: action.payload.searchTerm,
          isSearching: false
        },
        error: ""
      };
    case "FETCH_QUERY_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    case "NEW_SEARCH_START":
      return {
        ...state
      };
    case "NEW_SEARCH_SUCCESS":
      return {
        ...state,
        searchedMovie: {
          results: [...action.payload.results],
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          searchTerm: action.payload.searchTerm,
          isSearching: false
        }
      };
    default:
      return state;
  }
};
