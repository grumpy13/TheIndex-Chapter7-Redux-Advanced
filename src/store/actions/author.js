import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

export const fetchAuthorDetail = authorID => {
  return dispatch => {
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${authorID}/`)
      .then(res => res.data)
      .then(author =>
        dispatch({
          type: actionTypes.FETCH_AUTHOR_DETAIL,
          payload: author
        })
      );
  };
};
