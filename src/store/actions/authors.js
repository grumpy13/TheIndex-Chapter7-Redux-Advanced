import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return dispatch => {
    //This function gets called by Redux Thunk
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
export const filterAuthors = () => {
  return dispatch => {
    instance
      .get("/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({
          type: actionTypes.FILTER_AUTHORS,
          payload: authors
        })
      );
  };
};

// fetchAllAuthors() {
//     return instance.get("/api/authors/").then(res => res.data);
//   }

//   componentDidMount() {
//     this.fetchAllAuthors()
//       .then(authors =>
//         this.setState({
//           authors: authors,
//           loading: false
//         })
//       )
//       .catch(err => console.error(err));
//   }
