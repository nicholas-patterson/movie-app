const initialState = {
  reviews: [],
  error: ""
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS_START":
      return {
        ...state
      };

    case "FETCH_REVIEWS_SUCCESS":
      return {
        ...state,
        reviews: action.payload
      };

    case "FETCH_REVIEWS_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
