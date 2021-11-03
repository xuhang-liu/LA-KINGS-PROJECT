import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {employer_register, exchangeToken, checkCompanyNameExistence, createEmployerProfile} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
import { confirmAlert } from 'react-confirm-alert';
//import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import badge from '../../assets/badge.png';
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
import ReviewerRegisterForm from "./ReviewerRegisterForm";
import EmployerRegisterInfoForm from "./EmployerRegisterInfoForm";
import EmployerRegisterCompanyInfoForm from "./EmployerRegisterCompanyInfoForm";
import axios from "axios";
import { Email_Block_List } from "./Constants";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class EmployerRegister extends Component {
  constructor(props) {
      super(props);
      // parse params from url
      let params = this.getParams();
      this.state = {
        isReviewer: (params[0] == "" || params[0] == null) ? false : true,
        email: params[0],
        companyName: (params[0] == "" || params[0] == null) ? "" : "External or Sub Reviewer",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        companySize: "",
        companyType: "",
        location: "",
        step: 1,
        validEmail: true,
        validPwd: true,
        validCompanyName: true,
        unusedEmail: true,
      };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    employer_register: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  getParams =() => {
    let params = [];
    let email = window.location.search;
    email = email.substring(1, email.length); // remove "?" from uri
    email = window.atob(email); // decode
    let param = email.split("=")[1]; // get value
    params.push(param);
    return params;
  };

//  redirectToEmailVerification = () => {
//        const { history } = this.props;
//        if (history) history.push(`/email-verification`);
//  };

  onSubmit = (e) => {
    e.preventDefault();
    if((Email_Block_List.includes(this.state.email.toLowerCase().split("@")[1])) && !this.state.isReviewer
        ){
      confirmAlert({
        title: "Email not permitted!",
        message: "Please use your work email to register.",
        buttons: [
              {
                label: 'Ok'
              }
        ]
      });
    }else{
      if(this.state.companyName.trim() == null || this.state.companyName.trim() == ""){
        return alert("Company Name Invalid Format!");
      }
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
                  this.state.email,
                  this.state.email,
                  this.state.password,
                  this.state.companyName,
                );
        //      this.redirectToEmailVerification();
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

  checkAccountData = (e) => {
    e.preventDefault();
    // reset error states
    this.setState({validEmail: true, validPwd: true, unusedEmail: true});
    // check email format
    if((Email_Block_List.includes(this.state.email.toLowerCase().split("@")[1])) && !this.state.isReviewer) {
          this.setState({validEmail: false});
          return;
    }
    // check passwords
    if (this.state.password !== this.state.password2) {
        this.setState({validPwd: false});
        return;
    }

    // check email registered or not
    const email = {email: this.state.email};
    axios
    .post("check-user-registration", email)
    .then((res) => {
      let isRegistered = res.data.is_registered;
      this.setState({unusedEmail: false});
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

  updateState = (key, value) => {
    this.setState({[key]: value});
    if(key == "email"){
      // check if it reviewer
      axios
        .get(`accounts/check-if-it-reviewer?email=${value?.toLowerCase()}`)
        .then((res) => {
          let is_reviewer = res?.data?.is_reviewer;
          if (is_reviewer) {
            this.setState({isReviewer: true, companyName: "External or Sub Reviewer"});
          }
        })
        .catch((err) =>
          console.log(err)
        );
    }
  }

  setStep = (step) => {
    this.setState({step: step});
  }

  setCompanySize = (companySize) => {
    this.setState({companySize: companySize});
  }

  setCompanyType = (companyType) => {
    this.setState({companyType: companyType});
  }

  setLocation = (location) => {
    this.setState({location: location});
  }

  // new employer registration submit
  registration = (e) => {
    e.preventDefault();
    // reset error state
    this.setState({validCompanyName: true});
      if(this.state.companyName.trim() == null || this.state.companyName.trim() == ""){
        this.setState({validCompanyName: false});
        return;
      }

      // check company name exist or not
      axios
        .get(`accounts/check-company-name-existence?companyName=${this.state.companyName}`)
        .then((res) => {
          let companyNameExists = res.data.data;
          if (companyNameExists) {
            return alert("Company Name Already Exist!");
          }
          else {
            this.props.employer_register(
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.state.email,
              this.state.password,
              this.state.companyName,
            );
            // create employer profile detail
            let data = {
                email: this.state.email,
                f_name: this.state.firstName,
                l_name: this.state.lastName,
                company_size: this.state.companySize.value,
                company_type: this.state.companyType.value,
                company_name: this.state.companyName,
                location: this.state.location,
            }
            setTimeout(() => {this.props.createEmployerProfile(data)}, 300);
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
    const {firstName, lastName, companyName, email, password, password2, isReviewer} = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/email-verification-employer-mini"/>;
    }
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          <div>
          <MediaQuery minDeviceWidth={1224}>
            <section className="signup-area min-width-1290" style={{background:"linear-gradient(90deg, #67A3F3 0%, #5269F3 100%)"}}>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        {this.state.step === 1 ?
                            <img src="https://hirebeat-assets.s3.amazonaws.com/EmployerRegister1.png" alt="image"></img> :
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/registration.png" alt="image"></img>
                        }
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                    <div className="signup-content" style={{marginTop:"3rem"}}>
                    <div className="signup-form">
                    {!isReviewer ?
                        <div>
                            {this.state.step === 1 &&
                                <EmployerRegisterInfoForm
                                    badge={badge}
                                    updateState={this.updateState}
                                    checkAccountData={this.checkAccountData}
                                    validEmail={this.state.validEmail}
                                    unusedEmail={this.state.unusedEmail}
                                    validPwd={this.state.validPwd}
                                />
                            }
                            {this.state.step === 2 &&
                                <EmployerRegisterCompanyInfoForm
                                    updateState={this.updateState}
                                    setCompanySize={this.setCompanySize}
                                    setCompanyType={this.setCompanyType}
                                    setLocation={this.setLocation}
                                    registration={this.registration}
                                    validCompanyName={this.state.validCompanyName}
                                />
                            }
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
            <section className="signup-area" style={{background:"linear-gradient(90deg, #67A3F3 0%, #5269F3 100%)"}}>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"1rem", marginLeft:"20%"}}>
                        <div style={{marginBottom:"3rem", paddingTop:"1rem"}}>
                          <h1 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                          <h3 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Get started in minutes</b></h3>
                        </div>
                    <div className="signup-form" style={{minWidth:"14rem"}}>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            placeholder="company Name"
                            onChange={this.onChange}
                            value={companyName}
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
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First Name"
                            onChange={this.onChange}
                            value={firstName}
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
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={this.onChange}
                            value={lastName}
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
                            placeholder="Work Email"
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
                           color: "#ffffff",
                           fontWeight: "500"
                         }}>
                        Have an account?
                        <a href="/employer-login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "#fac046",
                             fontWeight: "500"
                           }}>
                          Log in
                        </a>
                      </p>

                      <br/>

                      <p className="d-flex flex-wrap justify-content-start mb-2"
                         style={{
                           fontSize: "0.9rem",
                           color: "#ffffff",
                           fontWeight: "500"
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
                             color: "#fac046",
                             fontWeight: "500"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', backgroundColor:"#fac046"}}
                        >
                          <i className="bx bxs-hot"></i>
                          Sign Up Now
                        </button>
                      </div>

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
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI", color:"#fff"}}>
                        <a>No credit card information needed during signup. Enjoy your free trial.</a>
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
  company_name_existence: state.auth_reducer.company_name_existence,
});

export default connect(mapStateToProps, {employer_register, createMessage, exchangeToken, checkCompanyNameExistence, createEmployerProfile})(EmployerRegister);
