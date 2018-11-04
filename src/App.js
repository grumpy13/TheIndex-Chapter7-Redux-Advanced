import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  // fetchAllAuthors() {
  //   return instance.get("/api/authors/").then(res => res.data);
  // }

  componentDidMount() {
    this.props.onFetchAuthors();
  }

  getView() {
    if (this.state.loading) {
      return <Loading />;
    } else {
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
    author: state.rootAuthor.author,
    authors: state.rootAuthors.authors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
