import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    constthis.props.getUser(this.props.match.params.login);
  }
  render() {
  
    return (
      <div>
        <h1>{this.login}</h1>
      </div>
    );
  }
}

export default User;
