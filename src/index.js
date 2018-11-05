import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { createStore, combineReducers } from "redux";
import authorReducer from "./store/reducers/author";
import authorsReducer from "./store/reducers/authors";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  rootAuthor: authorReducer,
  rootAuthors: authorsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
