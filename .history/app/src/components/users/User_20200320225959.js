import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    return <div>{this.props.getUser.login}</div>;
  }
}

export default User;
