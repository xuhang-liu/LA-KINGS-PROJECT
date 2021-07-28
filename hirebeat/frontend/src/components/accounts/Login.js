import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login, exchangeToken} from "../../redux/actions/auth_actions";
import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import Footer from "../layout/Footer";

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
      // store user info to sessionStorage
      sessionStorage.setItem('user', JSON.stringify(this.props.user));
      sessionStorage.setItem("isAuthenticated", this.props.isAuthenticated);
      if (this.props.user.groups[0] == "reviewers") {
        return <Redirect to="/review"/>;
      } else {
        return <Redirect to="/dashboard"/>;
      }
    }
    const {username, password} = this.state;
    return (
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
                      background: "#56a3fa",
                      minHeight: "14rem"
                    }}>

              <div className="container"
                   style={{paddingTop: "5rem"}}>

                <h1 className="display-4 text-white text-center" style={{fontSize:"3rem", fontWeight:"600"}}>
                  Welcome back!
                </h1>

              </div>
            </header>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <header id="login-intro"
                    style={{
                      background: "#56a3fa",
                      minHeight: "8rem"
                    }}>

              <div className="container"
                   style={{paddingTop: "3rem"}}>

                <h1 className="display-8 text-white text-center" style={{paddingBottom:"1rem"}}>
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


                    <form onSubmit={this.onSubmit}>

                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              border: "0.5px solid #E5E5E5",
                              borderRadius: "0.5rem",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
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
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              border: "0.5px solid #E5E5E5",
                              borderRadius: "0.5rem",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                      </div>

                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <a
                            href="/register"
                            className="navbar-font"
                            style={{textDecoration: "underline", color: "#FF6B00", fontWeight: "300", fontFamily: "Avenir Next, Segoe UI", fontSize:"1rem"}}
                        >
                          Create account
                        </a>

                        <a
                            href="/password_reset"
                            target="_blank"
                            rel="noreferrer"
                            className="navbar-font"
                            style={{
                              fontSize:"1rem",
                              fontFamily: "Avenir Next, Segoe UI",
                              color: "#7D7D7D",
                              fontWeight: "300"
                            }}
                        >
                          Forget password?
                        </a>

                      </div>

                      <div
                          className="form-group"
                          style={{paddingTop: 30, paddingBottom: 20}}
                      >
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold'}}
                        >
                          <i className="bx bxs-hot"></i>
                          Job Seeker Log in
                        </button>

                      </div>
                    </form>

                    <hr className="style-four"
                        data-content="Or use"
                        style={{
                          marginTop:"4rem",
                          marginBottom:"2rem",
                          fontFamily: "Avenir Next, Segoe UI",
                        }}
                    />


                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>

                  </div>
                </div>
              </div>

            </section>
          </div>
          <Footer />
        </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, {login, exchangeToken})(Login);
