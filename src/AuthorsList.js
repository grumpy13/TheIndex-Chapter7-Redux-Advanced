import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

class AuthorsList extends Component {
  filterAuthors(event) {
    let query = event.target.value;
    this.props.filterAuthors(query);
  }

  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar changeHandler={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredAuthors: state.rootAuthors.filteredAuthors,
    authors: state.rootAuthors.authors
  };
};

export default connect(
  mapStateToProps,
  null
)(AuthorsList);
