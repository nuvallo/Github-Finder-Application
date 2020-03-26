import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a username");
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
      {githubContext.users.length > 0 && (
        <button
          type="submit"
          value="Search"
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
