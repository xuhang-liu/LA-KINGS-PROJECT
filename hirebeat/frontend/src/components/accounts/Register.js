import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import SocialButtons from "./SocialButtons";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.passwordsMatch()) {
      this.props.register(
        this.state.username,
        this.state.email,
        this.state.password
      );
    }
  };

  passwordsMatch = () => {
    if (this.state.password !== this.state.password2) {
      this.props.createMessage({ passwordsNotMatch: "Passwords don't match" });
      return false;
    }
    return true;
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, email, password, password2 } = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div
        className="container"
        style={{
          paddingTop: "6%",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-center" style={{fontSize: "44px"}}>Start your career with the interview</h2>
        <p style={{ color: "#7d7d7d", fontSize:"20px" }}>
          Join our AI-analysis interview platform to improve your performance.
        </p>
        <div className="col-md-6 m-auto" style={{ width: "30%" }}>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  name="username"
                  placeholder="Username/Email"
                  onChange={this.onChange}
                  value={username}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={this.onChange}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                  }}
                  value={email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  placeholder="Create Password"
                  minLength="8"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                  placeholder="Confirm Password"
                  minLength="8"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                  }}
                  required
                />
              </div>
              <p className="d-flex justify-content-end" style={{ fontSize:"20px", color: "grey", fontWeight: "50"}}>
                Have an account? <Link to="/login"className="active d-flex ml-2" style={{textDecoration: "underline", color:"orange"}}> Log in</Link>
              </p>
              <br />
              <div className="form-group">
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
                  Register
                </button>
              </div>
            </fieldset>
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
              fontSize: "20px"
            }}
            className="d-inline"

          >
            <p className="oruse-text">Or use</p>
          </p>
          <div className="line" />
        </div>
        <SocialButtons handleSocialLogin={this.handleSocialLogin} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
