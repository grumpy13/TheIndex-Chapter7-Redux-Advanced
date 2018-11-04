const initialState = {
  author: [],
  filteredAuthors: []
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_AUTHOR_DETAIL":
      return {
        ...state,
        author: action.payload
      };
    default:
      return state;
  }
};

export default authorReducer;
