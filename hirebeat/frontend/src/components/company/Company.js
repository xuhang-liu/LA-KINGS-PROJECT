import React from "react";
import { Link } from 'react-router-dom'

export default function Company() {
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
        <div className="company-bg">
          <div className="company-top-text">Help job seekers gain core competence</div>
          <div className="company-top-text1">by implementing talent intelligent database.</div>
        </div>
        <div className="company-top-placeholder">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/placeholder.png"></img>
        </div>
        <div className="company-mid1-text">In need of</div>
        <div className="company-mid1">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+89.png"/>
        </div>
        <div className="company-mid2-text">Overwhelmed by</div>
        <div className="company-mid2">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+90.png"/>
        </div>
        <div className="company-mid3-text">Lack of</div>
        <div className="company-mid3">
          <img src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+91.png"/>
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
          <img style={{width: "11.9375rem", height: "11.9375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+83.png"/>
        </div>
        <div className="company-mid5-84-icon">
          <img style={{width: "11.9375rem", height: "11.9375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+84.png"/>
        </div>
        <div className="company-mid5-85-icon">
          <img style={{width: "11.9375rem", height: "11.9375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+85.png"/>
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
        <div className="row footer footer-company" style={{marginLeft: "0", marginRight: "0", marginTop: "5%"}}>
          <div className="col footer-align">
            <Link style={{textDecoration: "none"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>About</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "3.75rem"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>Contact</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "3.75rem"}} to="/privacy" >
              <p style={{color: "#FFFFFF"}}>Privacy</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "3.75rem"}} to="/term" >
              <p style={{color: "#FFFFFF"}}>Terms</p>
            </Link>
          </div>
          <div className="col footer-align">
            <button style={{outline: "none", border: "none", marginLeft:"20%", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
              <img style={{height:"2.375rem", width: "2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/facebook.png" alt="facebook icon"/>
            </button>
            <button style={{outline: "none", border: "none", marginRight: "1.25rem", borderRadius: "0.625rem"}}>
              <img style={{height:"2.375rem", width: "2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/linkedin.png" alt="linkedin icon"/>
            </button>
            <button style={{outline: "none", border: "none", borderRadius: "0.625rem"}}>
              <img style={{height:"2.375rem", width: "2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/ins.png" alt="instagram icon"/>
            </button>
          </div>
        </div>
      </div>
  );
}