import * as ActionTypes from "./ActionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  promotions: [],
};

export const promotions = (state = initialState, action) => {
  switch (action.types) {
    case ActionTypes.ADD_PROMOTIONS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    case ActionTypes.PROMOTIONS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        promotions: [],
      };

    case ActionTypes.PROMOTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
