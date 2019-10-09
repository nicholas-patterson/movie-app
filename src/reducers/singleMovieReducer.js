const initialState = {
  movie: [],
  error: ""
};

export const singleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_START":
      return {
        ...state,
        error: action.payload
      };
    case "FETCH_MOVIE_SUCCESS":
      return {
        ...state,
        movie: action.payload
      };
    case "FETCH_MOVIE_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
