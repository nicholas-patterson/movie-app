const initialState = {
  video: [],
  error: ""
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VIDEO_START":
      return {
        ...state,
        error: action.payload
      };
    case "FETCH_VIDEO_SUCCESS":
      return {
        ...state,
        video: action.payload
      };
    case "FETCH_VIDEO_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
