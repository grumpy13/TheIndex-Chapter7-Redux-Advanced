const initialState = {
  authors: [],
  filteredAuthors: []
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_AUTHORS":
      return {
        ...state,
        authors: action.payload
      };
    default:
      return state;
  }
};

export default authorsReducer;
