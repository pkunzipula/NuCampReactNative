import * as ActionTypes from "./ActionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  campsites: [],
};

export const campsites = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        campsites: action.payload,
      };
    case ActionTypes.CAMPSITES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        campsites: [],
      };
    case ActionTypes.CAMPSITES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
