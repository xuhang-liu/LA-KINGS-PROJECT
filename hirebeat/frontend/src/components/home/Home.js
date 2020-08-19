import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import MediaQuery from 'react-responsive'
import people from "./../../assets/people.png";
import step1 from "./../../assets/step1.png";
import step2 from "./../../assets/step2.png";
import step3 from "./../../assets/step3.png";

const HomeButton = (props) => {
  return (
    <button
      className="btn btn-warning"
      style={{
        WebkitBorderRadius: "1.875rem",
        marginRight: props.first ? "1rem" : "0rem",
        background: props.first ? "#FF6B00" : "transparent",
        border: props.first ? "none" : "0.125rem solid white",
        width: "14rem",
        height: "3rem",
        padding: 0, // key to center text in button
        marginBottom: "5%",
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: 0,
          textAlign: "center",
          textTransform: "Capitalize"
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      style={{width: "100%"}}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export class Home extends Component {
  redirectTo = (path) => {
    const { history } = this.props;
    if (history) history.push(path);
  };

  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        console.log("reviewer confirmed");
        return <Redirect to="/review" />;
      }
    }
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FadeInSection>
          {/* Laptop homepage  */}
          <MediaQuery minDeviceWidth={1224}>
            <div className="row home-1" style={{marginLeft: "0%", marginRight: "0%"}}>
                <div className="col-6" style={{marginLeft: "5%", paddingRight: "0%"}}>
                  <div style={{marginTop: "15%", marginBottom: "10%", display: "flex", flexWrap: "wrap"}}>
                    <p style={{fontSize: "3.125rem", fontWeight: "bold", color: "#FFFFFF"}}>
                      Land your next job, <br/>
                      starting with the interview
                    </p>
                    <p style={{fontSize: "1.25rem", fontWeight: "normal", color: "#FFFFFF"}}>
                      AI-analysis interview platform that supercharges your performance <br/>
                      and makes a great impression at your next interview.
                    </p>
                  </div>
                  <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                    <HomeButton
                      first={true}
                      onTap={() => this.redirectTo("/practice/")}
                      textDisplayed={"Get Started Now"}
                    />
                    <HomeButton
                      first={false}
                      onTap={() => this.redirectTo("/company/")}
                      textDisplayed={"Learn More"}
                    />
                  </ScrollAnimation>
                </div>
                <div className="col" style={{paddingLeft: "0%"}}>
                  <div style={{marginTop: "35%", display: "flex", flexWrap: "wrap", paddingLeft: "5%"}}>
                    <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/Group.png"} style={{width: "90%"}} alt="pc"/>
                  </div>
                </div>
            </div>
          </MediaQuery>
          {/* Mobile homepage  */}
          <MediaQuery maxDeviceWidth={1223}>
            <div className="home-1-mobile">
              <br/>
              <div style={{marginTop: "5%"}}>
                <p style={{textAlign: "center", fontSize: "1.875rem", fontWeight: "bold", color: "#FFFFFF" }}>
                  Land your next job, <br/>
                  starting with the <br/>
                  interview
                </p>
                <p style={{textAlign: "center", fontSize: "0.9375rem", fontWeight: "normal", color: "#FFFFFF" }}>
                  AI-analysis interview platform that <br/>
                  supercharges your performance and makes <br/>
                  a great impression at your next interview.
                </p>
              </div>
              <div align="center">
                <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/Group.png"} style={{width: "80%", marginBottom: "5%"}} alt="pc"/>
              </div>
            </div>
          </MediaQuery>
        </FadeInSection>
        <FadeInSection>
          {/* Laptop homepage  */}
          <MediaQuery minDeviceWidth={1224}>
            <div style={{width: "100%"}}>
              <div style={{marginTop: "5%"}}>
                <h3 style={{fontSize: "0.9375rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                  OUR SERVICES
                </h3>
                <p style={{fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                  We Provide AI-Powered Analysis & Personal <br/>
                  Feedback on Interview Performance
                </p>
                <p style={{fontSize: "1.25rem", fontWeight: "normal", textAlign: "center", color: "#1F1F2D"}}>
                  Transform old ways of practicing to be more efficient and effective. <br/>
                  Provide extensive questions library to match your specific position. <br/>
                  Create intelligent experience to receive constructive feedback.
                </p>
              </div>
              <div className="home-2">
                <br/>
                <div className="row" style={{marginTop: "4rem", marginLeft: "0%", marginRight: "0%"}}>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/easytouse.png"} style={{width: "25%"}} alt="easy to use icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Easy to use
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Your interview practice is just few <br/>
                        clicks asway, practice interview <br/>
                        anytime anywhere
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/realtime.png"} style={{width: "25%"}} alt="realtime icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Real-time simulation
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        You will never know what question is <br/>
                        coming next, just like a live interview
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/questionbank.png"} style={{width: "25%"}} alt="question bank icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Interview question bank
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Forget the random articles online <br/>
                        and get thousands of interview <br/>
                        questions across different industries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row" style={{marginTop:"1rem", marginLeft: "0%", marginRight: "0%"}}>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/review.png"} style={{width: "25%"}} alt="review icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Review & Replay
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Secured stage allows you to track <br/>
                        and revisit your training progress
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/afford.png"} style={{width: "25%"}} alt="affordable icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Affordable
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        No contact, you can enjoy our <br/>
                        sevice for just $0.65/day
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/feedback.png"} style={{width: "25%"}} alt="feedback icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "0.625rem"}}>
                      <h3 style={{fontSize: "1.25rem", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Feedback
                      </h3>
                      <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        No more guessing, our expert <br/>
                        feedback and AI analysis provides <br/>
                        you the best data-driven parameters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
          {/* Mobile Homepage */}
          <MediaQuery maxDeviceWidth={1223}>
            <div>
              <h3 style={{fontSize: "0.9375rem", fontWeight: "bold", color: "black", textAlign: "center", marginTop: "10%"}}>
                OUR SERVICES
              </h3>
              <p style={{fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                AI-Powered Analysis & <br/>
                Personal Feedback on <br/>
                Interview Performance
              </p>
            </div>
          </MediaQuery>
        </FadeInSection>
        <FadeInSection>
          {/* Laptop homepage  */}
          <MediaQuery minDeviceWidth={1224}>
            <div style={{width: "100%"}}>
              <br/>
              <h3 style={{fontSize: "0.9375rem", fontWeight: "bold", textAlign: "center", color: "#000000", marginTop: "5%"}}>
                  WHY US
              </h3>
              <br/>
              <p style={{fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                Employers are looking for the right candidate
              </p>
              <p style={{fontSize: "1.25rem", fontWeight: "normal", textAlign: "center", color: "#1F1F2D"}}>
                Are you kicked around to prepare interview but nowhere to find good resource? <br/>
                Are you overwhelmed with endless questions but nowhere to start <br/>
                Are you frustrated with few useful feedback but only rejection letter?
              </p>
            </div>
            <div className="home-3">
              <div style={{display: "flex", flexWrap: "wrap"}}>
                <div className="col-5" style={{marginTop: "10%", marginLeft: "5%"}}>
                  <img src={"https://hirebeat-assets.s3.amazonaws.com/Home-page/Group+69.png"} style={{width: "100%"}} alt="laptop image"/>
                </div>
                <div className="col">
                  <div style={{marginLeft: "70%", marginTop: "30%", display: "flex", flexWrap: "wrap"}}>
                    <img src={people} alt="people image"/>
                  </div>
                  <div style={{marginTop: "5%", display: "flex", flexWrap: "wrap"}}>
                    <p style={{fontSize: "1.875rem", fontWeight: "bold", color: "#FFFFFF", textAlign: "left"}}>
                      Hirebeat helps bridges the gap to a job by <br/>
                      making sure you‘re prepared for the interview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
        </FadeInSection>
        <FadeInSection>
          {/* Laptop homepage  */}
          <MediaQuery minDeviceWidth={1224}>
            <div style={{width: "100%"}}>
              <div className="home-4">
                <br/>
                <h3 style={{fontSize: "0.9375rem", fontWeight: "bold", textAlign: "center", color: "#000000", marginTop: "5%"}}>
                  YOUR STEPS
                </h3>
                <br/>
                <p style={{fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                  Prepare your next interview as simple as 1-2-3
                </p>
                <div className="row" style={{marginRight: "0%", marginLeft: "0%"}}>
                  <div className="col">
                    <div style={{justifyContent: "center", marginLeft: "30%", display: "flex", flexWrap: "wrap"}}>
                      <img src={step1} alt="step1 image" style={{width:"50%"}}/>
                    </div>
                    <div style={{justifyContent: "center", marginLeft: "30%", display: "flex", flexWrap: "wrap"}}>
                      <p style={{fontSize: "1.25rem", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        Choose Interview <br/>
                        & Practice
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <img src={step2} alt="step2 image" style={{width:"36.5%"}}/>
                    </div>
                    <div style={{justifyContent: "center", display: "flex", flexWrap: "wrap"}}>
                      <p style={{fontSize: "1.25rem", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        AI & Expert <br/>
                        Analysis
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{justifyContent: "center", marginRight: "30%", display: "flex", flexWrap: "wrap"}}>
                      <img src={step3} alt="step3 image" style={{width:"50%"}}/>
                    </div>
                    <div style={{justifyContent: "center", marginRight: "30%", display: "flex", flexWrap: "wrap"}}>
                      <p style={{fontSize: "1.25rem", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        Review & <br/>
                        Pivot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 style={{fontSize: "2.5rem", fontWeight: "bold", textAlign:"center", color: "#000000", marginTop: "3%"}}>
                Your seat is vacant
              </h2>
              <div style={{textAlign:"center"}}>
                <HomeButton
                  first={true}
                  onTap={() => this.redirectTo("/register/")}
                  textDisplayed={"Sign Up Now"}
                />
              </div>
              <div className="row footer" style={{marginRight: "0%", marginLeft: "0%"}}>
                <div className="col-9 footer-align">
                  <Link style={{textDecoration: "none"}} to="/company" >
                    <p style={{color: "#FFFFFF"}}>About</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "3.75rem"}} to="/company" >
                    <p style={{color: "#FFFFFF"}}>Contact</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "3.75rem"}} to="/privacy" >
                    <p style={{color: "#FFFFFF"}}>Privacy</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "3.75rem", marginRight: "50%"}} to="/term" >
                    <p style={{color: "#FFFFFF"}}>Terms</p>
                  </Link>
                </div>
                <div className="col footer-align">
                  <button style={{outline: "none", border: "none", marginLeft:"20%", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
                    <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/facebook.png" alt="facebook icon"/>
                  </button>
                  <button style={{outline: "none", border: "none", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
                    <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/linkedin.png" alt="linkedin icon"/>
                  </button>
                  <button style={{outline: "none", border: "none", borderRadius: "0.625rem"}}>
                    <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/ins.png" alt="instagram icon"/>
                  </button>
                </div>
              </div>
            </div>
          </MediaQuery>
          {/* Mobile Homepage */}
          <MediaQuery maxDeviceWidth={1223}>
            <div>
              <br/>
              <h3 style={{fontSize: "0.9375rem", fontWeight: "bold", textAlign: "center", color: "black"}}>
                YOUR STEPS
              </h3>
              <div style={{width: "80%", margin: "auto"}}>
                <div>
                  <img src={step1} alt="step1 image" style={{width: "30%"}}/>
                  <span style={{fontSize: "0.9375rem", color: "black"}}>
                    Choose Interview & Practice
                  </span>
                </div>
                <div>
                  <img src={step2} alt="step2 image" style={{width: "30%"}}/>
                  <span style={{fontSize: "0.9375rem", color: "black"}}>
                    AI & Expert Analysis
                  </span>
                </div>
                <div>
                  <img src={step3} alt="step3 image" style={{width: "30%"}}/>
                  <span style={{fontSize: "0.9375rem", color: "black"}}>
                    Review & Pivot
                  </span>
                </div>
              </div>
              <div style={{textAlign:"center", marginTop: "5%", marginBottom: "5%"}}>
                <HomeButton
                  first={true}
                  onTap={() => this.redirectTo("/register/")}
                  textDisplayed={"Sign Up Now"}
                />
              </div>
              <div className="footer-align" style={{backgroundColor: "#3D4159", height: "4rem"}}>
                <button style={{outline: "none", border: "none", marginLeft:"50%", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
                  <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/facebook.png" alt="facebook icon"/>
                </button>
                <button style={{outline: "none", border: "none", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
                  <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/linkedin.png" alt="linkedin icon"/>
                </button>
                <button style={{outline: "none", border: "none", borderRadius: "0.625rem"}}>
                  <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/ins.png" alt="instagram icon"/>
                </button>
              </div>
            </div>
          </MediaQuery>
        </FadeInSection>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export {HomeButton}

export default connect(mapStateToProps, null)(withRouter(Home));
