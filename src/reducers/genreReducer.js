const initialState = {
  genres: [],
  error: ""
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GENRES_START":
      return {
        ...state
      };
    case "FETCH_GENRES_SUCCESS":
      return {
        ...state,
        genres: action.payload
      };
    case "FETCH_GENRES_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
