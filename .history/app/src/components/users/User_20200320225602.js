import React, { Component } from "react";

export class User extends Component {
  render() {
    console.log(this.user);
    return <div>{this.user}</div>;
  }
}

export default User;
