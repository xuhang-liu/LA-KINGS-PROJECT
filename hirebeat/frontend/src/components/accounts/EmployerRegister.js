import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { employer_register, exchangeToken, checkCompanyNameExistence } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { confirmAlert } from 'react-confirm-alert';
//import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import badge from '../../assets/badge.png';
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
import ReviewerRegisterForm from "./ReviewerRegisterForm";
import EmployerRegisterInfoForm from "./EmployerRegisterInfoForm";
// import EmployerRegisterCompanyInfoForm from "./EmployerRegisterCompanyInfoForm";
import axios from "axios";
import { Email_Block_List } from "./Constants";
import TagManager from 'react-gtm-module';

function ScrollToTopOnMount() {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return null;
}

const recaptchaRef = React.createRef();

export class EmployerRegister extends Component {
  constructor(props) {
    super(props);
    // parse params from url
    let params = this.getParams();
    this.state = {
      isReviewer: (params[0] == "" || params[0] == null) ? false : true,
      email: params[0],
      companyName: (params[0] == "" || params[0] == null) ? "" : "External or Sub Reviewer",
      company_website: "",
      password: "",
      password2: "",
      firstName: "",
      lastName: "",
      companySize: { value: "", label: "" },
      companyType: { value: "", label: "" },
      location: "",
      validEmail: true,
      validPwd: true,
      validCompanyName: true,
      unusedEmail: true,
      recap_value: "",
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    employer_register: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  getParams = () => {
    let params = [];
    let email = window.location.search;
    email = email?.substring(1, email?.length); // remove "?" from uri
    if (email?.startsWith("ZW1haWw")) {
      if (email?.includes("&")){
        email = email?.split("&")[0]
      }
      email = window?.atob(email); // decode
    }
    if (email?.startsWith("email")) {
      let param = email?.split("=")[1]; // get value
      if (param?.includes("&")){
        param = param.split("&")[0]
      }
      params.push(param);
    }
    return params;
  };

  //  redirectToEmailVerification = () => {
  //        const { history } = this.props;
  //        if (history) history.push(`/email-verification`);
  //  };

  componentDidMount() {
    TagManager.initialize({
      gtmId: 'GTM-MKHJ38Q'
    });
    window?.dataLayer.push({
      name: "",
      email: ""
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if ((Email_Block_List.includes(this.state.email.toLowerCase().split("@")[1])) && !this.state.isReviewer
    ) {
      confirmAlert({
        title: "Email not permitted!",
        message: "Please use your work email to register.",
        buttons: [
          {
            label: 'Ok'
          }
        ]
      });
    } else {
      if (this.state.companyName.trim() == null || this.state.companyName.trim() == "") {
        return alert("Company Name Invalid Format!");
      }
      //Segment info
      window?.analytics?.track("User - Employer Register", {
        registerTime: Date().toLocaleString(),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        workEmail: this.state.email,
        companyName: this.state.companyName?.trim(),
        companyWebsite: this.state.company_website
      });
      axios
        .get(`accounts/check-company-name-existence?companyName=${this.state.companyName}`)
        .then((res) => {
          let companyNameExists = res.data.data;
          if (companyNameExists) {
            return alert("Company Name Already Exist!");
          }
          else {
            if (this.passwordsMatch()) {
              this.props.employer_register(
                this.state.firstName,
                this.state.lastName,
                this.state.email?.toLowerCase(),
                this.state.email?.toLowerCase(),
                this.state.password,
                this.state.companyName?.trim(),
                "",
                "",
                this.state.company_website,
                "",
              );
              TagManager.initialize({
                gtmId: 'GTM-MKHJ38Q',
                dataLayerName: 'Form Submit'
              });
              window?.dataLayer.push({
                name: this.state.firstName + " " + this.state.lastName,
                email: this.state.email?.toLowerCase()
              });
            }
          }
        })
        .catch((err) =>
          console.log(err)
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

  onCapChange = (value) => {
    this.setState({ recap_value: value });
  }

  checkAccountData = (e) => {
    e.preventDefault();
    // check Capcha value:
    if (this.state.recap_value == "") {
      return alert("Recaptcha field is required!")
    }
    // reset error states
    this.setState({ validEmail: true, validPwd: true, unusedEmail: true });
    // check email format
    if ((Email_Block_List.includes(this.state.email?.toLowerCase()?.split("@")[1])) && !this.state.isReviewer) {
      this.setState({ validEmail: false });
      recaptchaRef.current.reset();
      return;
    }
    else if ((this.state.email?.toLowerCase()?.endsWith(".edu")) && !this.state.isReviewer) {
      this.setState({ validEmail: false });
      recaptchaRef.current.reset();
      return;
    }
    // check passwords
    if (this.state.password !== this.state.password2) {
      this.setState({ validPwd: false });
      recaptchaRef.current.reset();
      return;
    }

    if (recaptchaRef.current.getValue() != "" && recaptchaRef.current.getValue() != null) {
      // check email registered or not
      const email = { email: this.state.email?.toLowerCase() };
      axios
        .post("check-user-registration", email)
        .then((res) => {
          let isRegistered = res.data.is_registered;
          if (!isRegistered) {
            // move to next step
            this.registration(e);
          } else {
            recaptchaRef.current.reset();
            this.setState({ unusedEmail: false });
          }
        })
        .catch(error => {
          console.log(error)
        });
    } else {
      recaptchaRef.current.reset();
      return alert("Recaptcha failed!");
    }
  };

  updateState = (key, value) => {
    this.setState({ [key]: value });
    if (key == "email") {
      // check if it reviewer
      axios
        .get(`accounts/check-if-it-reviewer?email=${value?.toLowerCase()}`)
        .then((res) => {
          let is_reviewer = res?.data?.is_reviewer;
          if (is_reviewer) {
            this.setState({ isReviewer: true, companyName: "External or Sub Reviewer" });
          }
        })
        .catch((err) =>
          console.log(err)
        );
    }
  }

  // new employer registration submit
  registration = (e) => {
    e.preventDefault();
    // reset error state
    this.setState({ validCompanyName: true });
    if (this.state.companyName.trim() == null || this.state.companyName.trim() == "") {
      return this.setState({ validCompanyName: false });
    }
    //Segment info
    window?.analytics?.track("User - Employer Register", {
      registerTime: Date().toLocaleString(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      workEmail: this.state.email,
      companyName: this.state.companyName?.trim(),
      companyWebsite: this.state.company_website
    });
    // check company name exist or not
    axios
      .get(`accounts/check-company-name-existence?companyName=${this.state.companyName}`)
      .then((res) => {
        let companyNameExists = res.data.data;
        if (companyNameExists) {
          return this.setState({ validCompanyName: false });
        }
        else {
          this.props.employer_register(
            this.state.firstName,
            this.state.lastName,
            this.state.email?.toLowerCase(),
            this.state.email?.toLowerCase(),
            this.state.password,
            this.state.companyName?.trim(),
            this.state.companySize.value,
            this.state.companyType.value,
            this.state.company_website,
            this.state.location,
          );
          TagManager.initialize({
            gtmId: 'GTM-MKHJ38Q',
            dataLayerName: 'Form Submit'
          });
          window?.dataLayer.push({
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.email?.toLowerCase()
          });
        }
      })
      .catch((err) =>
        console.log(err)
      );
  };

  render() {
    const meta = {
      title: 'HireBeat – Employer Register',
      description: 'Employer Register Info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'hr application tracking system, hr ats software, hr ats systems, hr tracking systems'
        }
      }
    };
    const { firstName, lastName, companyName, company_website, email, password, password2, isReviewer } = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/plan-selection-employer" />;
    }
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          <div>
            <MediaQuery minDeviceWidth={1224}>
              <section className="signup-area min-width-1290">
                {!isReviewer &&
                  <div className="row pt-5 d-flex justify-content-center"><img src="https://hirebeat-assets.s3.amazonaws.com/employer_progress_step1.png" alt="image"></img></div>
                }
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <img style={{ paddingTop: "6rem", paddingLeft: "4rem", paddingRight: "2rem" }} src="https://hirebeat-assets.s3.amazonaws.com/EmployerRegister0812.png" alt="image"></img>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="signup-content px-4" style={{ marginTop: "2rem", backgroundColor: "#F3F6F9" }}>
                      <div className="signup-form">
                        {!isReviewer ?
                          <div>
                            <EmployerRegisterInfoForm
                              badge={badge}
                              updateState={this.updateState}
                              checkAccountData={this.checkAccountData}
                              validEmail={this.state.validEmail}
                              unusedEmail={this.state.unusedEmail}
                              validPwd={this.state.validPwd}
                              onCapChange={this.onCapChange}
                              registration={this.registration}
                              validCompanyName={this.state.validCompanyName}
                              recaptchaRef={recaptchaRef}
                            />
                          </div> :
                          <ReviewerRegisterForm
                            email={email}
                            badge={badge}
                            updateState={this.updateState}
                            onSubmit={this.onSubmit}
                          />
                        }
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
                    <div className="signup-content" style={{ marginTop: "1rem", marginLeft: "20%" }}>
                      <div style={{ marginBottom: "3rem", paddingTop: "1rem" }}>
                        <h1 style={{ color: "#090d3a", fontFamily: "Inter, Segoe UI", textAlign: "center" }}><b>Welcome to HireBeat</b></h1>
                        <h3 style={{ color: "#090d3a", fontFamily: "Inter, Segoe UI", textAlign: "center" }}><b>Getting started in minutes</b></h3>
                      </div>
                      <div className="signup-form" style={{ minWidth: "14rem" }}>
                        <form id="Employer_Register_Mobile" onSubmit={this.onSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="companyName"
                              placeholder="company Name"
                              onChange={this.onChange}
                              value={companyName}
                              style={{
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="company_website"
                              placeholder="company Website"
                              onChange={this.onChange}
                              value={company_website}
                              style={{
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              placeholder="First Name"
                              onChange={this.onChange}
                              value={firstName}
                              style={{
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              placeholder="Last Name"
                              onChange={this.onChange}
                              value={lastName}
                              style={{
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Work Email"
                              required
                              onChange={this.onChange}
                              style={{
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              value={email} />
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
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required />
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
                                fontFamily: "Inter, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "5px",
                                paddingLeft: "1rem",
                                boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                              required />
                          </div>

                          <p className="d-flex flex-wrap justify-content-end"
                            style={{
                              fontSize: "0.9rem",
                              color: "#090d3a",
                              fontWeight: "500"
                            }}>
                            Have an account?
                            <a href="/"
                              className="active d-flex ml-2"
                              style={{
                                textDecoration: "underline",
                                color: "#006dff",
                                fontWeight: "500"
                              }}>
                              Log in
                            </a>
                          </p>

                          <br />

                          <p className="d-flex flex-wrap justify-content-start mb-2"
                            style={{
                              fontSize: "0.9rem",
                              color: "#090d3a",
                              fontWeight: "500"
                            }}>
                            <input type="checkbox" required name="terms" style={{ marginRight: '5%', display: 'inline', marginTop: "1%" }}></input>
                            I have read and agree to the
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://hirebeat.co/terms-conditions"
                              className="active d-flex ml-2"
                              style={{
                                textDecoration: "underline",
                                color: "#006dff",
                                fontWeight: "500"
                              }}>
                              Terms & Conditions
                            </a>
                          </p>

                          <div className="form-group">
                            <button
                              type="submit"
                              className="default-btn1"
                              style={{ width: "100%", fontSize: '1rem', fontWeight: 'bold'}}
                            >
                              <i className="bx bxs-hot"></i>
                              Sign Up Now
                            </button>
                          </div>

                          <hr className="style-four"
                            data-content=""
                            style={{
                              fontFamily: "Inter, Segoe UI",
                              marginBottom: "2rem",
                              marginTop: "4rem",
                            }}
                          />

                        </form>
                        {/* <div>
                          <div>
                            <img src={badge} style={{ width: "5.5rem", float: "left", marginRight: "1rem" }} alt="image" />
                            <div style={{ paddingTop: "1rem", textAlign: "left", fontFamily: "Inter, Segoe UI", color: "#fff" }}>
                              <a>No credit card information needed during signup. Enjoy your free trial.</a>
                            </div></div>
                        </div> */}

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
  company_name_existence: state.auth_reducer.company_name_existence,
});

export default connect(mapStateToProps, { employer_register, createMessage, exchangeToken, checkCompanyNameExistence })(EmployerRegister);
