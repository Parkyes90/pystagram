import React from "react";
import styles from "./styles.scss";
import SignupForm from "components/SignupForm";
import LoginForm from "components/LoginForm";

// noinspection JSUnresolvedVariable
const Auth = (props, context) => (
    <main className={styles.auth}>
      <div className={styles.column}>1
        <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
      </div>
      <div className={styles.column}>
        <div className={`${styles["white-box"]} ${styles["form-box"]}`}>
          <img src={require("images/logo.png")} alt="Logo"/>
          {props.action === "login" && <LoginForm />}
          {props.action === "signup" && <SignupForm />}
        </div>
        <div className={styles["white-box"]}>
          {props.action === "login" && (
              <p className={styles.text}>
                Don't have an account?{" "}
                <span
                    className={styles["change-link"]}
                    onClick={props.changeAction}
                >
                    Sign up
                      </span>
              </p>
          )}
          {props.action === "signup" && (
              <p>
                Have an account?{" "}
                <span
                    className={styles["change-link"]}
                    onClick={props.changeAction}
                >
                    Log in
                      </span>
              </p>
          )}
        </div>
        <div className={styles["app-box"]}>
          <span>Get the app</span>
          <div className={styles["app-stores"]}>
            <img
                src={require("images/ios.png")}
                alt="Download it on the Apple Appstore"
            />
            <img
                src={require("images/android.png")}
                alt="Download it on the Apple Appstore"
            />
          </div>
        </div>
      </div>
    </main>
);
export default Auth;
