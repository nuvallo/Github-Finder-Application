import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    console.log(this.login);
    return (
      <div>
        <h1>{this.login}</h1>
      </div>
    );
  }
}

export default User;
