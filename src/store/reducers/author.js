import * as actionTypes from "../actions/actionTypes";
const initialState = {
  author: {}
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload
      };
    default:
      return state;
  }
};

export default authorReducer;
