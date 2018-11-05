import * as actionTypes from "../actions/actionTypes";
const initialState = {
  author: {},
  loading: true
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default authorReducer;
