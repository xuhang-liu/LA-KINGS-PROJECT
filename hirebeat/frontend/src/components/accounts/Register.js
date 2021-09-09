import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register, exchangeToken, createProfile} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import badge from '../../assets/badge.png';
import Footer from "../layout/Footer";
//import leftbg from '../../assets/Login.png';
import DocumentMeta from 'react-document-meta';
import BasicInfo from "./BasicInfo";
import ProfileForm from "./ProfileForm";
import ShareForm from "./ShareForm";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    location: "",
    resumeUrl: "",
    resumeName: "",
    logoUrl: "",
    jobTitle: "",
    CompanyName: "",
    jobType: "",
    open_to_hr: true,
    step: 1,
    validUsername: true,
    validEmail: true,
    validPwd: true,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
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
      this.props.register(
          this.state.username,
          this.state.email,
          this.state.password
      );
      // new user registration report
      this.gtag_report_conversion();
//      this.redirectToEmailVerification();
    }
  };

  // new registration submit
  registration = (e) => {
    e.preventDefault();
    if (this.passwordsMatch()) {
      // register account
      this.props.register(
          this.state.username,
          this.state.email,
          this.state.password
      );
      // save profile data to profileDetail table
      let data = {
        email: this.state.email,
        f_name: this.state.firstName,
        l_name: this.state.lastName,
        location: this.state.location,
        resume_url: this.state.resumeUrl,
        resume_name: this.state.resumeName,
        logo_url: this.state.logoUrl,
        current_job_title: this.state.jobTitle,
        current_company: this.state.companyName,
        job_type: this.state.jobType.value,
        open_to_hr: this.state.open_to_hr,
      };
//      console.log(data);
      setTimeout(() => {this.props.createProfile(data)}, 300);
      // new user registration report
      this.gtag_report_conversion();
    }
  };

  gtag_report_conversion = () => {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-443211953/vaMjCOOC7fABELHBq9MB',
      'event_callback': callback
    });
  }

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
//    console.log(user);
    var provider = this.decideProvider(user.provider);
    this.props.exchangeToken(user.token.accessToken, provider);
  };

  updateState = (key, value) => {
    this.setState({key: value});
  }
  setStep = (step) => {
    this.setState({step: step});
  }

  setOpen_to_hr = () => {
    this.setState({open_to_hr: !this.state.open_to_hr});
  }

  checkAccountData = (e) => {
    e.preventDefault();
    // reset error states
    this.setState({validUsername: true, validEmail: true, validPwd: true});
    // check passwords
    if (this.state.password !== this.state.password2) {
        this.setState({validPwd: false});
        return;
    }
    // check email registered or not
    const data = {email: this.state.email, username: this.state.username};
    axios
    .post("accounts/check-user-name", data)
    .then((res) => {
      let isRegistered = res.data.is_registered;
      let emailRegistered = res.data.email_registered;
      let usernameRegistered = res.data.username_registered;

      if (emailRegistered) {
        this.setState({validEmail: false});
      }
      if (usernameRegistered) {
        this.setState({validUsername: false});
      }

      if (!isRegistered) {
        // move to next step
        let nextStep = this.state.step + 1;
        this.setStep(nextStep);
      }
    })
    .catch(error => {
        console.log(error)
    });
  };

  setLocation = (location) => {
    this.setState({location: location});
  }

  setJobType = (jobType) => {
    this.setState({jobType: jobType});
  }

  setResumeUrl = (resumeUrl) => {
    this.setState({resumeUrl: resumeUrl});
  }

  setResumeName = (resumeName) => {
    this.setState({resumeName: resumeName});
  }

  setLogoUrl = (logoUrl) => {
    this.setState({logoUrl: logoUrl});
  }

  setFirstName = (firstName) => {
    this.setState({firstName: firstName});
  }

  setLastName = (lastName) => {
    this.setState({lastName: lastName});
  }

  setJobTitle = (jobTitle) => {
    this.setState({jobTitle: jobTitle});
  }

  setCompanyName = (companyName) => {
    this.setState({companyName: companyName});
  }

  render() {
    const meta = {
        title: 'HireBeat – Register',
        description: 'Register Info',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
          }
        }
    };
    const {username, email, password, password2, firstName, lastName, location, resume, photo, jobTitle, companyName, jobType, open_to_hr} = this.state;
    if (this.props.auth.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        return <Redirect to="/review"/>;
      } else {
        return <Redirect to="/dashboard"/>;
      }
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
                      <img src="https://hirebeat-assets.s3.amazonaws.com/Login2.jpg" alt="image"></img>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"6rem"}}>
                            <div className="signup-form">
                            {this.state.step === 1 &&
                                <div>
                                    <h1 style={{color:"#56a3fa", fontFamily: "Avenir Next, Segoe UI"}}><b>Start your career with HireBeat</b></h1>
                                    <form onSubmit={this.checkAccountData}>
                                      <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Username/Email"
                                            onChange={this.onChange}
                                            style={{
                                              fontFamily: "Avenir Next, Segoe UI",
                                              background: "#FFFFFF",
                                              borderRadius: "5px",
                                              paddingLeft: "1rem",
                                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                            }}
                                            required
                                        />
                                        {!this.state.validUsername &&
                                            <p className="register-p">Username already exists! Please use another username to register.</p>}
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
                                        />
                                        {!this.state.validEmail &&
                                            <p className="register-p">Email already exists! Please use another email to register.</p>}
                                      </div>

                                      <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChange}
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
                                        {!this.state.validPwd &&
                                            <p className="register-p">Wrong Password! The passwords you entered are not consistent</p>}
                                      </div>

                                      <p className=" flex-wrap d-flex justify-content-end"
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
                                          Try For Free
                                          <img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10145429&ea=HOC1" alt="icon"/>
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
                                          rel="noreferrer"
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
                                          data-content="Or use"
                                          style={{
                                            fontFamily: "Avenir Next, Segoe UI",
                                            marginBottom:"2rem",
                                            marginTop:"4rem",
                                          }}
                                      />
                                    </form>
                                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>
                                    <div>
                                        <img src={badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}} alt="image"/>
                                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI"}}>
                                            <a>No credit card information needed during signup. Enjoy your free trial.</a>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* Step2 Basic Info form */}
                            {this.state.step === 2 &&
                                <BasicInfo
                                    setLocation={this.setLocation}
                                    step={this.state.step}
                                    setStep={this.setStep}
                                    setFirstName={this.setFirstName}
                                    setLastName={this.setLastName}
                                />
                            }

                            {/* Step3 profile form */}
                            {this.state.step === 3 &&
                                <ProfileForm
                                    step={this.state.step}
                                    setJobType={this.setJobType}
                                    setStep={this.setStep}
                                    setLogoUrl={this.setLogoUrl}
                                    setResumeUrl={this.setResumeUrl}
                                    setResumeName={this.setResumeName}
                                    setJobTitle={this.setJobTitle}
                                    setCompanyName={this.setCompanyName}
                                />
                            }

                            {/* Step4 share form */}
                            {this.state.step === 4 &&
                                <ShareForm
                                    onChange={this.onChange}
                                    open_to_hr={open_to_hr}
                                    setOpen_to_hr={this.setOpen_to_hr}
                                    step={this.state.step}
                                    setStep={this.setStep}
                                    registration={this.registration}
                                />
                            }
                        <div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>    
            <div id="login-intro"
                    style={{
                      background: "#56a3fa",
                      minHeight: "8rem"
                    }}>
              <div className="container"
                   style={{
                     paddingTop: "2rem"
                   }}>
                <h1 className="display-8 text-white text-center">
                  Start your career with the interview
                </h1>
                <h5 className="text-white text-center" style={{paddingBottom:"2rem"}}>
                  Join our AI-analysis interview platform to improve your performance.
                </h5>
              </div>
            </div>
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
                            className="form-control "
                            name="username"
                            placeholder="Username/Email"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              fontFamily: "Avenir Next, Segoe UI",
                              border: "1px solid #E5E5E5",
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
                              border: "1px solid #E5E5E5",
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
                              border: "1px solid #E5E5E5",
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
                              border: "1px solid #E5E5E5",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                      </div>

                      <p className="d-flex text-muted justify-content-end"
                         style={{
                           fontWeight: "70",
                         }}>
                        Have an account?
                        <a href="/login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
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
                          Try For Free
                          <img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10145429&ea=HOC1" alt="icon"/>
                        </button>
                      </div>

                      <p className="d-flex flex-wrap justify-content-end font-weight-lighter"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                         }}>
                      <input type="checkbox" required name="terms" style={{marginRight:'5%',display:'inline', marginTop:"1%"}}></input>
                        I have read and agree to the
                        <a 
                          target="_blank"
                          rel="noreferrer"
                          href="/term"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <hr className="style-four"
                          data-content="Or use"
                          style={{
                            marginTop:"4rem",
                            marginBottom:"2rem"
                          }}
                      />

                    </form>

                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>

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

export default connect(mapStateToProps, {register, createMessage, exchangeToken, createProfile})(Register);
