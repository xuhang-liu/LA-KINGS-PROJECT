import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {employer_register, exchangeToken, checkCompanyNameExistence} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
import { confirmAlert } from 'react-confirm-alert';
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
    if((this.state.email.toLowerCase().includes("aol") ||
        this.state.email.toLowerCase().includes("att.net") ||
        this.state.email.toLowerCase().includes("comcast.net") ||
        this.state.email.toLowerCase().includes("facebook.com") ||
        this.state.email.toLowerCase().includes("gmail.com") ||
        this.state.email.toLowerCase().includes("googlemail.com") ||
        this.state.email.toLowerCase().includes("google.com") ||
        this.state.email.toLowerCase().includes("hotmail.com") ||
        this.state.email.toLowerCase().includes("hotmail.co.uk") ||
        this.state.email.toLowerCase().includes("mac.com") ||
        this.state.email.toLowerCase().includes("me.com") ||
        this.state.email.toLowerCase().includes("mail.com") ||
        this.state.email.toLowerCase().includes("msn.com") ||
        this.state.email.toLowerCase().includes("live.com") ||
        this.state.email.toLowerCase().includes("sbcglobal.net") ||
        this.state.email.toLowerCase().includes("verizon.net") ||
        this.state.email.toLowerCase().includes("yahoo.com") ||
        this.state.email.toLowerCase().includes("yahoo.co.uk") ||
        this.state.email.toLowerCase().includes("email.com") ||
        this.state.email.toLowerCase().includes("icloud.com") ||
        this.state.email.toLowerCase().includes("outlook.com") ||
        this.state.email.toLowerCase().includes("zoho.com") ||
        this.state.email.toLowerCase().includes("hush.com") ||
        this.state.email.toLowerCase().includes("sina.com") ||
        this.state.email.toLowerCase().includes("sina.cn") ||
        this.state.email.toLowerCase().includes("qq.com") ||
        this.state.email.toLowerCase().includes("163.com") ||
        this.state.email.toLowerCase().includes("126.com") ||
        this.state.email.toLowerCase().includes("21cn.com") ||
        this.state.email.toLowerCase().includes("aliyun.com") ||
        this.state.email.toLowerCase().includes("foxmail.com") ||
        this.state.email.toLowerCase().includes("edu")) && !this.state.isReviewer
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
      this.props.checkCompanyNameExistence(this.state.companyName);
      if(this.props.company_name_existence){
        return alert("Company Name Already Exist!");
      }
      if (this.passwordsMatch()) {
        this.props.employer_register(
          this.state.email,
          this.state.email,
          this.state.password,
          this.state.companyName,
        );
//      this.redirectToEmailVerification();
      }
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
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'hr application tracking system, hr ats software, hr ats systems, hr tracking systems'
        }
      }
    };
    const {companyName, email, password, password2, isReviewer} = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/employer-pricing"/>;
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
                      <img src="https://hirebeat-assets.s3.amazonaws.com/EmployerRegister1.png" alt="image"></img>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"3rem"}}>
                        <div style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                          <h1 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                          <h3 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Get started in minutes</b></h3>
                        </div>
                    <div className="signup-form">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        {(!isReviewer) &&
                            <input
                                type="text"
                                className="form-control"
                                name="companyName"
                                placeholder="Company Name"
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
                        }
                      </div>

                      <div className="form-group">
                        {(!isReviewer) ?
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
                                value={email}
                            /> :
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                style={{
                                  fontFamily: "Avenir Next, Segoe UI",
                                  background: "#FFFFFF",
                                  borderRadius: "5px",
                                  paddingLeft: "1rem",
                                  boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                                }}
                                value={email}
                            />
                        }
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
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI", color:'#ffffff'}}>
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
  company_name_existence: state.auth_reducer.company_name_existence,
});

export default connect(mapStateToProps, {employer_register, createMessage, exchangeToken, checkCompanyNameExistence})(EmployerRegister);
