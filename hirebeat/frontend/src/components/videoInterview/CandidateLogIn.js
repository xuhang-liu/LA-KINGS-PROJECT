import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login, exchangeToken, loadProfile,
        register, checkUserRegistration, getCompanyName} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
import PageTitleArea from './../Common/PageTitleArea';
//import MediaQuery from 'react-responsive';
//import { confirmAlert } from 'react-confirm-alert';

export class CandidateLogin extends Component {
  constructor(props) {
      super(props);
      // parse params from url
      let params = this.getParams();
      this.state = {
        email: params[0],
        positionId: params[1],
        password: "",
        password2: "",
      };

  };

  getParams =() => {
    let params = [];
    let uri = window.location.search;
    uri = uri.substring(1, uri.length); // remove "?" from uri
    uri = window.atob(uri); // decode
    let arr = uri.split("&") // split by "&" to get key value pairs
    for (let i = 0; i < arr.length; i++) {
        let param = arr[i].split("=")[1]; // get value
        params.push(param);
    }
    return params;
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired,
    user: PropTypes.object,
    createMessage: PropTypes.func.isRequired,
    user: PropTypes.object,
    checkUserRegistration: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // get company name
    this.props.getCompanyName(this.state.positionId);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  passwordsMatch = () => {
    if (this.state.password !== this.state.password2) {
      this.props.createMessage({passwordsNotMatch: "Passwords don't match"});
      return false;
    }
    return true;
  };

  onRegister = (e) => {
    e.preventDefault();
    if (this.passwordsMatch()) {
    // prefill username and user email
      this.props.register(
          this.state.email, // userName
          this.state.email, // email
          this.state.password
      );
    }
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

  redirectToInterview = () => {
    const { history } = this.props;
    if (history) history.push({
        pathname: "/interview-info",
        params: {
            email: this.state.email,
            positionId: this.state.positionId,
            companyName: this.props.companyName,
        }
    });
  }

  render() {
    const {email, password, password2} = this.state;
    // redirect to interview after login
    if (this.props.isAuthenticated) {
        this.redirectToInterview();
    }

    // check user exists or not
    let userEmail = this.state.email;
    let emailData = {email: userEmail}; // json stringfy
    this.props.checkUserRegistration(emailData);

    return (
        <React.Fragment>
            <PageTitleArea
                pageTitle={ "Interview with " + this.props.companyName} // todo add company name
                pageDescription="Log in to start. Good luck to your interview!"
            />
          {/* login page*/}
          {this.props.isRegistered && <div className="container-fluid bg-white p-0">
            <section className="card border-bottom-0 shadow-none bg-white">
              <div className="card-body" style={{marginTop: "5rem"}}>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3">
                    <form method="post" onSubmit={this.onSubmit}>

                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username or Email"
                            onChange={this.onChange}
                            value={email}
                            style={{
                              fontFamily: "Avenir Next",
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
                              fontFamily: "Avenir Next",
                              background: "#FFFFFF",
                              border: "0.5px solid #E5E5E5",
                              borderRadius: "0.5rem",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                      </div>

                      <div
                          className="form-group"
                          style={{paddingTop: 30, paddingBottom: 20}}
                      >
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', background: "#090D3A"}}
                        >
                          Log in
                        </button>

                      </div>
                    </form>

                    <hr className="style-four"
                        data-content="Or use"
                        style={{
                          marginTop:"4rem",
                          marginBottom:"2rem",
                          fontFamily: "Avenir Next",
                        }}
                    />

                    <div className="row" style={{justifyContent: "center", marginBottom: "3rem"}}>
                        <button onClick={this.handleSocialLogin} style={{border: "none", background: "white"}}>
                            <img src="https://hirebeat-assets.s3.amazonaws.com/google-plus.png" alt="google logo"></img>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>}

          {/* Register page*/}
          {!this.props.isRegistered && <div>
            <section className="signup-area">
                <div className="row m-0">
                    <div className="signup-content" style={{marginTop:"3rem", height: "30rem"}}>
                        <div className="signup-form">

                            <form onSubmit={this.onRegister}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Username/Email"
                                        onChange={this.onChange}
                                        value={email}
                                        style={{
                                          fontFamily: "Avenir Next",
                                          background: "#FFFFFF",
                                          borderRadius: "5px",
                                          paddingLeft: "1rem",
                                          boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                        }}
                                        required
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
                                          fontFamily: "Avenir Next",
                                          background: "#FFFFFF",
                                          borderRadius: "5px",
                                          paddingLeft: "1rem",
                                          boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                        }}
                                        required/>
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
                                          fontFamily: "Avenir Next",
                                          background: "#FFFFFF",
                                          borderRadius: "5px",
                                          paddingLeft: "1rem",
                                          boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                        }}
                                        required/>
                                </div>

                                <p
                                    className="d-flex flex-wrap justify-content-center"
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "grey",
                                        fontWeight: "400",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <input type="checkbox" required name="terms" style={{marginRight:'5%',display:'inline', marginTop:"1%"}}></input>
                                    I have read and agree to the
                                    <a href="/term"
                                       className="active d-flex ml-2"
                                       style={{
                                         textDecoration: "underline",
                                         color: "orange",
                                         fontWeight: "400"
                                       }}>
                                      Terms & Conditions
                                    </a>
                                </p>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="default-btn"
                                        style={{width:"100%", fontSize:'1rem', fontWeight:'bold', background: "#090D3A"}}
                                    >
                                      Create Account
                                    </button>
                                </div>
                            </form>
                         </div>
                    </div>
                </div>
            </section>
          </div>}
        </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
  auth: state.auth_reducer,
  isRegistered: state.auth_reducer.isRegistered,
  companyName: state.auth_reducer.companyName,
});

export default connect(mapStateToProps, {
    login, exchangeToken, loadProfile,
    register, createMessage, checkUserRegistration, getCompanyName
    })(CandidateLogin);
