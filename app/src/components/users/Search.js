import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ text: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
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
export default Search;
