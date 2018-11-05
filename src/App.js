import React, { Component } from "react";
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.onFetchAuthors();
  }

  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/authors" />
        <Route path="/authors/:authorID" component={AuthorDetail} />
        <Route
          path="/authors/"
          render={props => (
            <AuthorsList {...props} authors={this.props.authors} />
          )}
        />
      </Switch>
    );
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
