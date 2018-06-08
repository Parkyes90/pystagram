import React from "react";
import PropTypes from 'prop-types';
import FacebookLogin from "react-facebook-login";
import styles from "shared/formStyles.scss";

const LoginForm = props => (
  <div className={styles["form-component"]}>
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
          type="text"
          placeholder="Username"
          className={styles["text-input"]}
          value={props.usernameValue}
          onChange={props.handleInputChange}
          name="username"
      />
      <input
          type="password"
          placeholder="Password"
          className={styles["text-input"]}
          value={props.passwordValue}
          onChange={props.handleInputChange}
          name="password"
      />
      <input type="submit" value="Log in" className={styles.button} />
    </form>
    <span className={styles.divider}>or</span>
      <FacebookLogin
        appId="2099297300354369"
        autoLoad={false}
        fields="name, email, picture"
        callback={props.handleFacebookLogin}
        cssClass={styles["facebook-link"]}
        icon="fa-facebook-official"
        textButton="Log in with Facebook"
      />
    <span className={styles["forgot-link"]}>Forgot password?</span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default LoginForm;
