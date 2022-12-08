import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, exchangeToken } from "../../redux/actions/auth_actions";
import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
import axios from "axios";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class Login extends Component {
  state = {
    username: "",
    password: "",
    login_fail: false,
  };

  setLoginFail = () => {
    this.setState({ login_fail: true });
  }
  setLoginFail1 = () => {
    this.setState({ login_fail: false });
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let user_pw = { "username": this.state.username?.toLowerCase(), "password": this.state.password };

    axios.post("api/check_user_login", user_pw, config).then((res) => {
      if (res.data.data) {
        this.setLoginFail1();
        this.props.login(this.state.username?.toLowerCase(), this.state.password);
      } else {
        this.setLoginFail();
      }
    }).catch(error => {
      console.log(error)
    });

    //Segment info
    window?.analytics?.track("User - Login", {
      loginTime: Date().toLocaleString(),
      username: this.state.username?.toLowerCase()
    });
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
    const meta = {
      title: 'HireBeat – Login',
      description: 'Login Info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'hr application tracking system, hr ats software, hr ats systems, hr tracking systems'
        }
      }
    };
    if (this.props.isAuthenticated) {
      // store user info to sessionStorage
      sessionStorage.setItem('user', JSON.stringify(this.props.user));
      sessionStorage.setItem("isAuthenticated", this.props.isAuthenticated);
      if (this.props.user.groups[0] == "reviewers") {
        return <Redirect to="/review" />;
      } else {
        return <Redirect to="/dashboard" />;
      }
    }
    const { username, password } = this.state;
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />

          <div
            className="container-fluid bg-white p-0"
          >
            <MediaQuery minDeviceWidth={1224}>
              <header
                className="min-width-1290"
                id="login-intro"
                style={{
                  background: "#006dff",
                  minHeight: "14rem"
                }}>

                <div className="container"
                  style={{ paddingTop: "5rem" }}>

                  <h1 className="display-4 text-white text-center" style={{ fontSize: "3rem", fontWeight: "600" }}>
                    Welcome back!
                  </h1>

                </div>
              </header>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
              <header id="login-intro"
                style={{
                  background: "#006dff",
                  minHeight: "8rem"
                }}>

                <div className="container"
                  style={{ paddingTop: "3rem" }}>

                  <h1 className="display-8 text-white text-center" style={{ paddingBottom: "1rem" }}>
                    Welcome back!
                  </h1>

                </div>
              </header>
            </MediaQuery>

            <section className="card border-bottom-0 shadow-none bg-white">
              <div className="card-body">
                <div className="row">
                  <div className="
                  col-lg-4 offset-lg-4
                  col-sm-6 offset-sm-3
              ">


                    <form id="Candidate-Loginpage-Login" onSubmit={this.onSubmit}>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Username"
                          onChange={this.onChange}
                          value={username}
                          style={{
                            fontFamily: "Inter, Segoe UI",
                            background: "#FFFFFF",
                            border: "0.5px solid #E5E5E5",
                            borderRadius: "0.5rem",
                            paddingLeft: "1rem",
                            boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                          }}
                          required />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name="password"
                          onChange={this.onChange}
                          value={password}
                          style={{
                            fontFamily: "Inter, Segoe UI",
                            background: "#FFFFFF",
                            border: "0.5px solid #E5E5E5",
                            borderRadius: "0.5rem",
                            paddingLeft: "1rem",
                            boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                          }}
                          required />
                      </div>

                      <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ marginTop: "0.6rem", marginBottom: "0.6rem" }}>
                        {this.state.login_fail && <p className="share-p4" style={{ fontWeight: "600" }}>Incorrect username or password. Please try again.</p>}
                      </div>

                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <a
                          href="/register"
                          className="navbar-font"
                          style={{ textDecoration: "underline", color: "#FF6B00", fontWeight: "300", fontFamily: "Inter, Segoe UI", fontSize: "1rem" }}
                        >
                          Create account
                        </a>

                        <a
                          href="/password_reset"
                          target="_blank"
                          rel="noreferrer"
                          className="navbar-font"
                          style={{
                            fontSize: "1rem",
                            fontFamily: "Inter, Segoe UI",
                            color: "#7D7D7D",
                            fontWeight: "300"
                          }}
                        >
                          Forget password?
                        </a>

                      </div>

                      <div
                        className="form-group"
                        style={{ paddingTop: 30, paddingBottom: 20 }}
                      >
                        <button
                          type="submit"
                          className="default-btn"
                          style={{ width: "100%", fontSize: '1rem', fontWeight: 'bold' }}
                        >
                          <i className="bx bxs-hot"></i>
                          Job Seeker Log in
                        </button>

                      </div>
                    </form>

                    <hr className="style-four"
                      data-content="Or use"
                      style={{
                        marginTop: "4rem",
                        marginBottom: "2rem",
                        fontFamily: "Inter, Segoe UI",
                      }}
                    />


                    <SocialButtons handleSocialLogin={this.handleSocialLogin} />

                  </div>
                </div>
              </div>

            </section>
          </div>
          <Footer />
        </React.Fragment>
      </DocumentMeta>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { login, exchangeToken })(Login);
