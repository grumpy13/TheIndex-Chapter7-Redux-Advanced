import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return dispatch => {
    instance
      .get("/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({
          type: actionTypes.FETCH_AUTHORS,
          payload: authors
        })
      );
  };
};
export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
