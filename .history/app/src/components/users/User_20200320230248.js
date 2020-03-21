import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {} = this.props.user;
    return (
      <div>
        <h1>{this.login}</h1>
      </div>
    );
  }
}

export default User;
