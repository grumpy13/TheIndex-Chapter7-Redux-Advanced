import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthorDetail = () => {
  const authorID = this.props.match.params.authorID;
  return dispatch => {
    instance
      .get(`/api/authors/${authorID}`)
      .then(res => res.data)
      .then(author =>
        dispatch({
          type: actionTypes.FILTER_AUTHORS,
          payload: author
        })
      );
  };
};
