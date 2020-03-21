import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    return (
        console.log(this.login)
      <div>
        <h1>{this.login}</h1>
      </div>
    );
  }
}

export default User;
