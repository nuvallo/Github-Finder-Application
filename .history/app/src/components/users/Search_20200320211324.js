import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onChange = e => this.setState({ text: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
            onClick={this.onSubmit}
          >
            Search
          </button>
        </form>
        <button
          type="submit"
          value="Search"
          className="btn btn-light btn-block"
          onClick={this.props.clearUsers}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Search;
