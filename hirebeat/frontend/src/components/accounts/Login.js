import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, exchangeToken } from "../../redux/actions/auth_actions";
import { CardButton } from "../practice/CardComponents";
import SocialButtons from "./SocialButtons";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  decideProvider = (provider) => {
    switch (provider) {
      case "facebook":
        return provider;
      case "google":
      case "linkedin":
        return provider + "-oauth2";
      default:
      // Do nothing
    }
  };

  handleSocialLogin = (user) => {
    console.log(user);
    var provider = this.decideProvider(user.provider);
    this.props.exchangeToken(user.token.accessToken, provider);
  };

  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        return <Redirect to="/review" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    const { username, password } = this.state;
    return (
      <div
        className="col-md-6 m-auto"
        style={{ paddingTop: "70px", width: "25%", minWidth: "200px" }}
      >
        <h2 className="text-center">Welcome back!</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={this.onChange}
              value={username}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              onChange={this.onChange}
              value={password}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to="/register"
              style={{ textDecoration: "underline", color: "#FF6B00" }}
            >
              Create account
            </Link>
            <Link
              to="/password_reset"
              target="_blank"
              style={{ color: "#7D7D7D" }}
            >
              Forget password?
            </Link>
          </div>

          <div
            className="form-group"
            style={{ paddingTop: 30, paddingBottom: 20 }}
          >
            <button
              type="submit"
              style={{
                WebkitBorderRadius: "50px",
                width: "100%",
                height: "50px",
                color: "white",
                background: "#FF6B00",
                border: "none",
                boxShadow: "0px 0px 8px #FF6B00",
              }}
            >
              Log in
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line" />
          <p
            style={{
              color: "#7d7d7d",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 0,
              marginTop: 0,
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            Or use
          </p>
          <div className="line" />
        </div>
        <SocialButtons handleSocialLogin={this.handleSocialLogin} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { login, exchangeToken })(Login);
