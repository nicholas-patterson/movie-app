const initialState = {
  recommendations: [],
  error: ""
};

export const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECOMMENDATIONS_START":
      return {
        ...state,
        error: action.payload
      };
    case "FETCH_RECOMMENDATIONS_SUCCESS":
      return {
        ...state,
        recommendations: action.payload
      };

    case "FETCH_RECOMMENDATIONS_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
