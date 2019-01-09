import React, { Component } from "react";
import classNames from "classnames";
// import Promise from 'bluebird';

// import GoogleLogo from '@assets/google-logo.png';

import { login } from "../../store/actions";
import InlineLoader from "../InlineLoader";

class LoginCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
      passwordType: "password"
    };
  }

  handleFormChange = key => event => {
    const { value = "" } = event.target;

    this.setState({ [key]: value });
  };

  handlePressEnter = event => {
    // If key is not 'enter' key then we return from the function
    if (event.charCode !== 13) return;

    return this.handleLogin();
  };

  handleLogin = () => {
    const { email, password, loading } = this.state;
    const { history } = this.props;

    if (loading) return;

    if (!email || !password) {
      return this.setState({ errorMessage: "Please fill in the form." });
    }

    return this.setState({ errorMessage: "", loading: true }, () => {
      return login({ email, password })
        .then(() => history.push("/app/dashboard"))
        .catch(err => {
          console.log(err);

          this.setState({
            errorMessage: err.response
              ? err.response.data.message
              : err.message,
            loading: false
          });
        });
    });
  };

  togglePasswordType = () => {
    const { passwordType } = this.state;

    if (passwordType === "password") {
      this.setState({ passwordType: "text" });
    } else {
      this.setState({ passwordType: "password" });
    }
  };

  render() {
    const { errorMessage, email, password, passwordType, loading } = this.state;

    return (
      <div className="auth-card">
        <div className="auth-card-title-group">
          <div className="auth-card-logo">Welcome to Impeakable Admin</div>

          <p className="auth-card-title">Log in to your Admin account.</p>
        </div>
        <div className="agent-profile-hr" />
        <div className="auth-card-form-group">
          <div className="form-group">
            <label>Email</label>

            <input
              type="text"
              placeholder="user@impekable.com"
              value={email}
              onChange={this.handleFormChange("email")}
              onKeyPress={this.handlePressEnter}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type={passwordType}
              placeholder="Password"
              value={password}
              onChange={this.handleFormChange("password")}
              onKeyPress={this.handlePressEnter}
            />
            <i
              className={classNames(
                "far show-password",
                { "fa-eye": passwordType === "text" },
                { "fa-eye-slash": passwordType === "password" }
              )}
              onClick={this.togglePasswordType}
            />
          </div>

          {errorMessage ? (
            <div className="auth-card-error">
              <p className="auth-card-error-text">
                <i className="material-icons">error</i>
                {errorMessage}
              </p>
            </div>
          ) : null}

          <button
            className="auth-card-form-button normal-login"
            onClick={this.handleLogin}
            disabled={loading}
          >
            {loading ? <InlineLoader /> : "Login"}
          </button>
        </div>
      </div>
    );
  }
}

export default LoginCard;
