import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search Users" />
          <button
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
