import React from "react";
import PropTypes from "prop-types";

const UserItem = ({
  user: { login, avatar_url, html_url, followers_url, repos_url }
}) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <h5>Followers: {followers_url.length}</h5>
      <h5>Repositories: {repos_url.length}</h5>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
