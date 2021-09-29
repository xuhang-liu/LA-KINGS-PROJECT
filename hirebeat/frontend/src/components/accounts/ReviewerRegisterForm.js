import React, {Component} from "react";

export class ReviewerRegisterForm extends Component {

    handleInput = (e) => {
        this.props.updateState(e.target.name, e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{marginBottom:"3rem", paddingTop:"3rem"}}>
                    <h1 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Welcome to HireBeat</b></h1>
                    <h3 style={{color:"#ffffff", fontFamily: "Avenir Next, Segoe UI", textAlign:"center"}}><b>Start your Hiring Now!</b></h3>
                </div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            onChange={this.handleInput}
                            placeholder="First Name"
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
                            onChange={this.handleInput}
                            placeholder="Last Name"
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
                            value={this.props.email}
                        />
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
                            onChange={this.handleInput}
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
                    <div>
                        <img src={this.props.badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}} alt="image"/>
                        <div style={{paddingTop:"1rem", textAlign:"left", fontFamily: "Avenir Next, Segoe UI", color:'#ffffff'}}>
                            <a>No credit card information needed during signup. Enjoy your free plan.</a>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default ReviewerRegisterForm;