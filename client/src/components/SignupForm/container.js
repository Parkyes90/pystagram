import React, { Component } from "react";
import PropTypes from 'prop-types';
import SignupForm from "./presenter";

class Container extends Component{
  state = {
    username: "",
    password: "",
    name: "",
    email: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { username, password, name, email } = this.state;
    return (
      <SignupForm
        usernameValue={username}
        passwordValue={password}
        nameValue={name}
        emailValue={email}
        handleFacebookLogin={this._handleFacebookLogin}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    )
  }

  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    const { username, password, email, name } = this.state;
    const { createAccount } = this.props;
    event.preventDefault();
    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
