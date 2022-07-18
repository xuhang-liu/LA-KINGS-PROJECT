import React, {Component} from "react";
import ReCAPTCHA from "react-google-recaptcha";

export class EmployerRegisterInfoForm extends Component {
    handleInput = (e) => {
        this.props.updateState(e.target.name, e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                    <h1 style={{color:"#ffffff", fontFamily: "Inter, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                    <h3 style={{color:"#ffffff", fontFamily: "Inter, Segoe UI", textAlign:"center", fontSize: "1.125rem"}}><b>Start your 14-Day Free Trial</b></h3>
                </div>
                <form id="Employer_Register_Desk_Step1" onSubmit={this.props.checkAccountData}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            onChange={this.handleInput}
                            placeholder="First Name"
                            style={{
                              fontFamily: "Inter, Segoe UI",
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
                            onChange={this.handleInput}
                            placeholder="Last Name"
                            style={{
                              fontFamily: "Inter, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Work Email"
                            required
                            onChange={this.handleInput}
                            style={{
                              fontFamily: "Inter, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                        />
                        {!this.props.validEmail &&
                            <p className="register-p">Please enter your business email address. This form does not accept personal email.</p>}
                        {!this.props.unusedEmail &&
                            <p className="register-p">Email already exists! Please use another email to register.</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleInput}
                            placeholder="Create Password"
                            minLength="8"
                            style={{
                              fontFamily: "Inter, Segoe UI",
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
                            onChange={this.handleInput}
                            placeholder="Confirm Password"
                            minLength="8"
                            style={{
                              fontFamily: "Inter, Segoe UI",
                              background: "#FFFFFF",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                              boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                            }}
                            required/>
                        {!this.props.validPwd &&
                            <p className="register-p">Wrong Password! The passwords you entered are not consistent</p>}
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
                    <ReCAPTCHA
                      sitekey="6Ldp3_0gAAAAAJyz-MISCBnyhHAycmmj4ZIpGJ_U"
                      onChange={this.props.onCapChange}
                      ref={this.props.recaptchaRef}
                    />

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
                          href="https://hirebeat.co/terms-conditions"
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
                          Next
                        </button>
                    </div>

                    <hr className="style-four"
                        data-content=""
                        style={{
                          fontFamily: "Inter, Segoe UI",
                          marginBottom:"2rem",
                          marginTop:"4rem",
                        }}
                    />
                    <div>
                        <img src={this.props.badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}} alt="image"/>
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Inter, Segoe UI", color:'#ffffff'}}>
                            <a>No credit card information needed during signup. Enjoy your free trial.</a>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default EmployerRegisterInfoForm;