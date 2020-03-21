import React, { Component } from "react";

export class User extends Component {
  render() {
    return <div>{this.props.user}</div>;
  }
}

export default User;
