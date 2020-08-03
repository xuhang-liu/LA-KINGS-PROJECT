import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import pc from "./../../assets/pc.png";
import easyToUse from "./../../assets/easytouse.png";
import realtime from "./../../assets/realtime.png";
import questionBank from "./../../assets/questionbank.png";
import review from "./../../assets/review.png";
import afford from "./../../assets/affordable.png";
import feedback from "./../../assets/feedback.png";
import laptop from "./../../assets/laptop.png";
import people from "./../../assets/people.png";
import step1 from "./../../assets/step1.png";
import step2 from "./../../assets/step2.png";
import step3 from "./../../assets/step3.png";
import fbIcon from "./../../assets/facebook.png";
import liIcon from "./../../assets/linkedin.png";
import insIcon from "./../../assets/ins.png";
const HomeButton = (props) => {
  return (
    <button
      className="btn btn-warning"
      style={{
        WebkitBorderRadius: "30px",
        marginRight: props.first ? 50 : 0,
        background: props.first ? "#FF6B00" : "transparent",
        border: props.first ? "none" : "2px solid white",
        width: "255px",
        height: "53px",
        padding: 0, // key to center text in button
        marginBottom: "5%",
        marginTop: "10px",
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: 0,
          textAlign: "center"
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
            <div className="row home-1" style={{marginLeft: "0px"}}>
              <div className="row">
                <div className="col" style={{marginLeft: "10%"}}>
                  <div className="row" style={{marginTop: "15%", marginBottom: "10%"}}>
                    <p style={{fontSize: "50px", fontWeight: "bold", color: "#FFFFFF", textAlign: "center"}}>
                      Land your next job, <br/>
                      starting with the interview
                    </p>
                    <p style={{fontSize: "20px", fontWeight: "normal", color: "#FFFFFF", textAlign: "center"}}>
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
                <div className="col">
                  <div className="row" style={{marginTop: "30%"}}>
                    <img src={pc} alt="pc"/>
                  </div>
                </div>
              </div>
           </div>
        </FadeInSection>
        <FadeInSection>
            <div style={{width: "100%"}}>
              <div style={{marginTop: "5%"}}>
                <h3 style={{fontSize: "15px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                  OUR SERVICES
                </h3>
                <p style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                  We Provide AI-Powered Analysis & Personal <br/>
                  Feedback on Interview Performance
                </p>
                <p style={{fontSize: "20px", fontWeight: "normal", textAlign: "center", color: "#1F1F2D"}}>
                  Transform old ways of practicing to be more efficient and effective. <br/>
                  Provide extensive questions library to match your specific position. <br/>
                  Create intelligent experience to receive constructive feedback.
                </p>
              </div>
              <div className="home-2">
                <br/>
                <div className="row" style={{marginTop: "7rem"}}>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={easyToUse} alt="easy to use icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Easy to use
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Your interview practice is just few <br/>
                        clicks asway, practice interview <br/>
                        anytime anywhere
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={realtime} alt="realtime icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Real-time simulation
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        You will never know what question is <br/>
                        coming next, just like a live interview
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={questionBank} alt="question bank icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Interview question bank
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Forget the random articles online <br/>
                        and get thousands of interview <br/>
                        questions across different industries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row" style={{marginTop:"1rem"}}>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={review} alt="review icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Review & Replay
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        Secured stage allows you to track <br/>
                        and revisit your training progress
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={afford} alt="affordable icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Affordable
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        No contact, you can enjoy our <br/>
                        sevice for just $0.65/day
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={feedback} alt="feedback icon"/>
                    </div>
                    <div style={{justifyContent: "center", marginTop: "10px"}}>
                      <h3 style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#000000"}}>
                        Feedback
                      </h3>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#7D7D7D"}}>
                        No more guessing, our expert <br/>
                        feedback and AI analysis provides <br/>
                        you the best data-driven parameters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div style={{width: "100%"}}>
              <br/>
              <h3 style={{fontSize: "15px", fontWeight: "bold", textAlign: "center", color: "#000000", marginTop: "5%"}}>
                  WHY US
              </h3>
              <br/>
              <p style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                Employers are looking for the right candidate
              </p>
              <p style={{fontSize: "20px", fontWeight: "normal", textAlign: "center", color: "#1F1F2D"}}>
                Are you kicked around to prepare interview but nowhere to find good resource? <br/>
                Are you overwhelmed with endless questions but nowhere to start <br/>
                Are you frustrated with few useful feedback but only rejection letter?
              </p>
              <div className="row home-3" style={{marginLeft: "0px"}}>
                <div className="col" style={{marginTop: "10%", marginLeft: "5%"}}>
                  <img src={laptop} alt="laptop image"/>
                </div>
                <div className="col">
                  <div className="row" style={{marginLeft: "70%", marginTop: "30%"}}>
                    <img src={people} alt="people image"/>
                  </div>
                  <div className="row" style={{marginRight: "10%", marginTop: "5%"}}>
                    <p style={{fontSize: "30px", fontWeight: "bold", color: "#FFFFFF", textAlign: "center"}}>
                      Hirebeat helps bridges the gap to a job by <br/>
                      making sure you‘re prepared for the interview
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div style={{width: "100%"}}>
              <div className="home-4">
                <br/>
                <h3 style={{fontSize: "15px", fontWeight: "bold", textAlign: "center", color: "#000000", marginTop: "5%"}}>
                  YOUR STEPS
                </h3>
                <br/>
                <p style={{fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#4356F0"}}>
                  Prepare your next interview as simple as 1-2-3
                </p>
                <div className="row">
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={step1} alt="step1 image"/>
                    </div>
                    <div className="row" style={{justifyContent: "center"}}>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        Choose Interview <br/>
                        & Practice
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={step2} alt="step2 image"/>
                    </div>
                    <div className="row" style={{justifyContent: "center"}}>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        AI & Expert <br/>
                        Analysis
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row" style={{justifyContent: "center"}}>
                      <img src={step3} alt="step3 image"/>
                    </div>
                    <div className="row" style={{justifyContent: "center"}}>
                      <p style={{fontSize: "20px", fontWeight: "normal", textAlign:"center", color: "#000000"}}>
                        Review & <br/>
                        Pivot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 style={{fontSize: "40px", fontWeight: "bold", marginLeft:"37%", color: "#000000", marginTop: "3%"}}>
                Your seat is vacant
              </h2>
              <div className="d-flex justify-content-center">
                <HomeButton
                  first={true}
                  onTap={() => this.redirectTo("/register/")}
                  textDisplayed={"Sign Up Now"}
                />
              </div>
              <div className="row footer" style={{marginLeft: "0px"}}>
                <div className="col footer-align">
                  <Link style={{textDecoration: "none"}} to="/company" >
                    <p style={{color: "#FFFFFF"}}>About</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/company" >
                    <p style={{color: "#FFFFFF"}}>Contact</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/privacy" >
                    <p style={{color: "#FFFFFF"}}>Privacy</p>
                  </Link>
                  <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/term" >
                    <p style={{color: "#FFFFFF"}}>Terms</p>
                  </Link>
                </div>
                <div className="col footer-align">
                  <button style={{outline: "none", border: "none", marginRight: "20px", borderRadius: "10px"}}>
                    <img style={{height:"38px", width: "38px"}} src={fbIcon} alt="facebook icon"/>
                  </button>
                  <button style={{outline: "none", border: "none", marginRight: "20px", borderRadius: "10px"}}>
                    <img style={{height:"38px", width: "38px"}} src={liIcon} alt="linkedin icon"/>
                  </button>
                  <button style={{outline: "none", border: "none", borderRadius: "10px"}}>
                    <img style={{height:"38px", width: "38px"}} src={insIcon} alt="instagram icon"/>
                  </button>
                </div>
              </div>
            </div>
        </FadeInSection>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(withRouter(Home));
