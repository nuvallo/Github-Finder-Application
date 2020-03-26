import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a username");
    } else {
      setText("");
      githubContext.searchUsers(text);
    }
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
        />
        <button
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onClick={onSubmit}
        >
          Search
        </button>
      </form>
      {showClear && (
        <button
          type="submit"
          value="Search"
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
