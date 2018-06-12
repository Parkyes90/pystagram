import React from "react";
import FacebookLogin from "react-facebook-login";
import styles from "shared/formStyles.scss";
import PropTypes from 'prop-types';

const SignupForm = props => (
  <div className={styles["form-component"]}>
    <h3 className={styles["signup-header"]}>Sign up to see photos and videos from your friends.</h3>
    <FacebookLogin
      appId="1718196768212364"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={styles.button}
      icon="fa-facebook-official"
      textButton="Log in with Facebook"
    />
    <span className={styles.divider}>or</span>
    <form className={styles.form}  onSubmit={props.handleSubmit}>
      <input
          type="email"
          placeholder="Email"
          className={styles["text-input"]}
          value={props.emailValue}
          onChange={props.handleInputChange}
          name="email"
      />
      <input
          type="text"
          placeholder="name"
          className={styles["text-input"]}
          value={props.nameValue}
          onChange={props.handleInputChange}
          name="name"
      />
      <input
          type="username"
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
      <input
          type="submit"
          value="Sign up"
          className={styles.button}
      />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default SignupForm;
