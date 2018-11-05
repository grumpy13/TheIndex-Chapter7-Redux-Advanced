import React, { Component } from "react";
import BookTable from "./BookTable";
import Loading from "./Loading";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

class AuthorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.getAuthor = this.getAuthor.bind(this);
  }

  componentDidMount() {
    this.getAuthor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  getAuthor() {
    const authorID = this.props.match.params.authorID;
    this.props.onFetchAuthorDetail(authorID);
  }

  render() {
    if (this.props.author.id != this.props.match.params.authorID) {
      return <Loading />;
    } else {
      const author = this.props.author;
      return (
        <div className="author">
          <div>
            <h3>{author.first_name + " " + author.last_name}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    author: state.rootAuthor.author
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAuthorDetail: authorID =>
      dispatch(actionCreators.fetchAuthorDetail(authorID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
