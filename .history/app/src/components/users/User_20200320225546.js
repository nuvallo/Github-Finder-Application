import React, { Component } from "react";

export class User extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.user}</div>;
  }
}

export default User;
