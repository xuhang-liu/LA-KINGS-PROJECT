import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {employer_register, exchangeToken} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
//import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import badge from '../../assets/badge.png';
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class EmployerRegister extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    employer_register: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

//  redirectToEmailVerification = () => {
//        const { history } = this.props;
//        if (history) history.push(`/email-verification`);
//  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.passwordsMatch()) {
      this.props.employer_register(
          this.state.username,
          this.state.email,
          this.state.password
      );
//      this.redirectToEmailVerification();
    }
  };

  passwordsMatch = () => {
    if (this.state.password !== this.state.password2) {
      this.props.createMessage({passwordsNotMatch: "Passwords don't match"});
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
    const meta = {
      title: 'HireBeat – Your First Step to A Better Recruiting Journey',
      description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
      canonical: 'https://hirebeat.co/employer_register',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
        }
      }
    };
    const {username, email, password, password2} = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/employer-pricing"/>;
    }
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          <div>
          <MediaQuery minDeviceWidth={1224}>
            <section className="signup-area min-width-1290">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0"> 
                      <img src="https://hirebeat-assets.s3.amazonaws.com/EmployerRegisterLeft.jpg" alt="image"></img>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"3rem"}}>
                        <div style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                          <h1 style={{color:"#56a3fa", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                          <h3 style={{color:"#56a3fa", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Get started in minutes</b></h3>
                        </div>
                    <div className="signup-form">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username/Email"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
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
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.onChange}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            value={email}/>
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
                              fontFamily: "Avenir Next, Segoe UI",
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
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                      </div>

                      <p className="d-flex flex-wrap justify-content-end"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                           fontWeight: "400"
                         }}>
                        Have an account?
                        <a href="/login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange",
                             fontWeight: "400"
                           }}>
                          Log in
                        </a>
                      </p>

                      <br/>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold'}}
                        >
                          <i className="bx bxs-hot"></i>
                          Sign Up Now
                        </button>
                      </div>
                      <p className="d-flex flex-wrap justify-content-end"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                           fontWeight: "400"
                         }}>
                        <input type="checkbox" required name="terms" style={{marginRight:'5%',display:'inline', marginTop:"1%"}}></input>
                        I have read and agree to the
                        <a 
                          target="_blank"
                          href="/term"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange",
                             fontWeight: "400"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <hr className="style-four"
                          data-content=""
                          style={{
                            fontFamily: "Avenir Next, Segoe UI",
                            marginBottom:"2rem",
                            marginTop:"4rem",
                          }}
                      />

                    </form>
                    <div>
                      <div>
                        <img src={badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}} alt="image"/>
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI"}}>
                        <a>No credit card information needed during signup. Enjoy your free plan.</a>
                        </div></div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </section>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <section className="signup-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0"> 
                      <img src="https://hirebeat-assets.s3.amazonaws.com/EmployerRegister.jpg" alt="image"></img>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"3rem"}}>
                        <div style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                          <h1 style={{color:"#56a3fa", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                          <h3 style={{color:"#56a3fa", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Get started in minutes</b></h3>
                        </div>
                    <div className="signup-form">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username/Email"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
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
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.onChange}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            value={email}/>
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
                              fontFamily: "Avenir Next, Segoe UI",
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
                              fontFamily: "Avenir Next, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                      </div>

                      <p className="d-flex flex-wrap justify-content-end"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                           fontWeight: "400"
                         }}>
                        Have an account?
                        <a href="/login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange",
                             fontWeight: "400"
                           }}>
                          Log in
                        </a>
                      </p>

                      <br/>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold'}}
                        >
                          <i className="bx bxs-hot"></i>
                          Sign Up Now
                        </button>
                      </div>
                      <p className="d-flex flex-wrap justify-content-end"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                           fontWeight: "400"
                         }}>
                        <input type="checkbox" required name="terms" style={{marginRight:'5%',display:'inline', marginTop:"1%"}}></input>
                        I have read and agree to the
                        <a 
                          target="_blank"
                          href="/term"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange",
                             fontWeight: "400"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <hr className="style-four"
                          data-content=""
                          style={{
                            fontFamily: "Avenir Next, Segoe UI",
                            marginBottom:"2rem",
                            marginTop:"4rem",
                          }}
                      />

                    </form>
                    <div>
                      <div>
                        <img src={badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}} alt="image"/>
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI"}}>
                        <a>No credit card information needed during signup. Enjoy your free plan.</a>
                        </div></div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </section>
          </MediaQuery>
          </div>
          <Footer />
        </React.Fragment>
        </DocumentMeta>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, {employer_register, createMessage, exchangeToken})(EmployerRegister);
