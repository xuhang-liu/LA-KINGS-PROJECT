import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'
import fbIcon from "./../../assets/facebook.png";
import liIcon from "./../../assets/linkedin.png";
import insIcon from "./../../assets/ins.png";

const whoTitle = "Who we are?";
const whoContent =
  "Founded in New York City in 2020, our mission is to deliver the best possible interview experience to candidates and employers. HireBeat helps its customers to practice interviews online, which makes them more successful and competitive. Through the use of latest AI technologies, our service provides data-driven evaluations to give candidates most accurate and personalized feedback.";
const whatTitle = "What we do?";
const whatContent =
  "We are building an interview training platform with virtual practicing tools and AI-driven analysis to supercharge your interview performance. When preparing for upcoming interviews, it’s not enough to simply search questions online and read advice. You need to siulate the real process and receive practical feedbacks. HireBeat’s mission is to help job seakers gain a competitive advantage through learning, exercising, and growing from the implement of talent intelligent database.";
const contactTitle = "Contact us";
const contactContent =
  "We take our commitment to our users seriously.If you need help with your user account or have questions about how to use the platform, please do not hesitate to contact us through this email.";

const Intro = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-start"
      style={{ marginBottom: 20 }}
      
    >
      <h1 style={{ color: "black" }}>{props.title}</h1>
      <p style={{ color: "black", fontSize: 15 }}>{props.content}</p>
    </div>
  );
};

export default function Pricing() {
  return (
    <div
      className="container-fluid"
      style={{
        padding: 0,
//        backgroundColor: "white",
      }}
      >
        <div className="company-bg">
          <span className="company-top-text">Help job seekers gain core competence</span>
          <span className="company-top-text1">by implementing talent intelligent database.</span>
        </div>
        <div className="company-top-placeholder">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/placeholder.png"></img>
        </div>
        <div className="company-mid1">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+71.png"/>
        </div>
        <div className="company-mid2">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+70.png"/>
        </div>
        <div className="company-mid3">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+72.png"/>
        </div>
        <div className="company-mid4-text">We are here to help!</div>
        <div className="company-mid4-line1">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
        </div>
        <div className="company-mid4-line1-text">No more aimingless searching for interview questions and advice</div>
        <div className="company-mid4-line2">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
        </div>
        <div className="company-mid4-line2-text">No more untargeted advice and feedback for every interview</div>
        <div className="company-mid4-line3">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
        </div>
        <div className="company-mid4-line3-text">Simulate real interview experience and repeat practice recodring</div>
        <div className="company-mid4-line4">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
        </div>
        <div className="company-mid4-line4-text">Receive systmatic AI-driven analysis for your performance</div>
        <div className="company-mid5-bg">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Subtract.png"/>
        </div>
        <div className="company-mid5-toptext">OUR FEATURES</div>
        <div className="company-mid5-83-icon">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+83.png"/>
        </div>
        <div className="company-mid5-84-icon">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+84.png"/>
        </div>
        <div className="company-mid5-85-icon">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+85.png"/>
        </div>
        <div className="company-mid5-text1">Utilize our AI-powered video interview platform and receive comprehensive feedback.</div>
        <div className="company-mid5-text2">Practice your interview anytime anywhere at your own schedule and convenience.</div>
        <div className="company-mid5-text3">No more expensive coaching fees for interviews, the average costs between $200-399.</div>
        <div className="company-bottom-title">CONTACT</div>
        <div className="company-bottom-rec1">
          <div className="company-bottom-rec1-title1">
            Technical Support
          </div>
          <div className="company-bottom-rec1-text1">
            Get help with your user account or have questions about how we can help with your next interview.
          </div>
          <a className="company-bottom-email1" href={"mailto:Tech@hirebeat.co"}>
            Tech@hirebeat.co
          </a>
        </div>
        <div className="company-bottom-rec2">
          <div className="company-bottom-rec1-title1">
            Feedback
          </div>
          <div className="company-bottom-rec1-text1">
            Please share your experience with us. Your feedback helps us create a better experience for our customers.
          </div>
          <a className="company-bottom-email1" href={"mailto:Tech@hirebeat.co"}>
            Admin@hirebeat.co
          </a>
        </div>
        <div className="company-bottom-rec3">
          <div className="company-bottom-rec1-title1">
            Join Us
          </div>
          <div className="company-bottom-rec1-text1">
            Join our team to help reshape the recruiting landscape and make products that reach over million people worldwide.
          </div>
          <a className="company-bottom-email1" href={"mailto:Tech@hirebeat.co"}>
            HR@hirebeat.co
          </a>
        </div>
        <div className="row footer footer-company" style={{marginLeft: "0px", marginRight: "0px"}}>
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
  );
}
