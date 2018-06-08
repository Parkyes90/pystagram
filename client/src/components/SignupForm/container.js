import React, { Component } from "react";
import PropTypes from 'prop-types';
import SignupForm from "./presenter";

class Container extends Component{
  state = {
    username: "",
    password: "",
    fullname: "",
    email: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };

  render() {
    const { username, password, fullname, email } = this.state;
    return (
      <SignupForm
        usernameValue={username}
        passwordValue={password}
        fullnameValue={fullname}
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
    event.preventDefault();
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
