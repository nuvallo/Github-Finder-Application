import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    const user = this.props.getUser(this.props.match.params.login);
  }
  render() {
    return (
      <div>
        <h1>{this.user.login}</h1>
      </div>
    );
  }
}

export default User;
