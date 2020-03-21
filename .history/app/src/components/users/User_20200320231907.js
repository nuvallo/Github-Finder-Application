import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hirable
    } = this.props.user;
    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <h1>{login}</h1>
          <Link to="/" className="btn btn-light">
            Back
          </Link>
        </Fragment>
      );
    }
  }
}

export default User;
