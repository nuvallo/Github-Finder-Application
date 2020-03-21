import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
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
      </div>
    );
  }
}

Search.prototype = PropTypes.object.isRequired,

export default Search;
