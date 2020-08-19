import React from "react";
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import {HomeButton} from "./../home/Home"

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
        {/* Laptop Homepage*/}
        <MediaQuery minDeviceWidth={1224}>
          {/* Top part */}
          <div className="row company-bg">
            <div className="col-6">
              <div className="company-top-text">Help job seekers gain <br/> core competence</div>
              <div className="company-top-text1">by implementing talent intelligent database.</div>
            </div>
            <div className="col company-top-video">
              <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/placeholder.png"></img>
            </div>
          </div>
          {/* 2nd part */}
          <div className="company-pc-part2-bg">
            <div className="row" style={{width:"80%", margin: "auto"}}>
              <div className="company-part2-margin1 col-3">
                <h3 className="company-h3">In need of</h3>
                <div className="company-white-bg" style={{width: "18rem"}}>
                  <img style={{marginLeft: "4%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+80.png"/>
                  <span className="company-font" style={{marginLeft: "5%",fontSize: "1.25rem"}}>Interview practice?</span>
                </div>
              </div>
              <div className="company-part2-margin2 col-4">
                <h3 className="company-h3">Overwhelmed by</h3>
                <div className="company-white-bg" style={{width: "24rem"}}>
                  <img style={{marginLeft: "4%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+81.png"/>
                  <span className="company-font" style={{marginLeft: "5%", fontSize: "1.25rem"}}>Endless interview questions?</span>
                </div>
              </div>
              <div className="company-part2-margin3 col-4">
                <h3 className="company-h3">Lack of</h3>
                <div className="company-white-bg" style={{width: "22rem", marginBottom: "10%"}}>
                  <img style={{marginLeft: "4%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+82.png"/>
                  <span className="company-font" style={{marginLeft: "5%", fontSize: "1.25rem"}}>Feedback after interviews?</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd part */}
          <div style={{width: "50rem"}}>
            <h3 className="company-part3-h3">We are here to help</h3>
            <div className="row" style={{marginTop: "10%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-1" style={{alignItems: "center", display: "flex"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span className="company-pc-part3-text1">
                  No more <span className="company-pc-part3-text2">aimingless searching</span>
                  &nbsp; for interview questions and advice
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-1" style={{alignItems: "center", display: "flex"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span className="company-pc-part3-text1">
                  No more <span className="company-pc-part3-text2">untargeted advice</span>
                  &nbsp; and feedback for every interview
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-1" style={{alignItems: "center", display: "flex"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span className="company-pc-part3-text1">
                  Simulate <span style={{color: "#14CC75"}}>real interview experience</span>
                  &nbsp; and repeat practice recording
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-1" style={{alignItems: "center", display: "flex"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span className="company-pc-part3-text1">
                  Receive systmatic <span style={{color: "#14CC75"}}>AI-driven analysis</span>
                  &nbsp; for your performance
                </span>
              </div>
            </div>
          </div>
          {/* 4th part */}
          <div className="row company-mid5-bg" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
            <div  style={{margin: "auto", width: "100%"}}>
              <br/>
              <h3 className="company-pc-part4-h3" >OUR FEATURES</h3>
            </div>
            <div className="row" style={{width: "100%"}}>
              <div className="col">
                <div className="company-pc-part4-center">
                  <img src={"https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+83.png"} style={{width: "50%"}} alt="AI Technology icon"/>
                </div>
                <div>
                  <p className="company-pc-part4-text1">
                    Utilize our AI-powered video <br/> interview platform and receive <br/> comprehensive feedback.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="company-pc-part4-center">
                  <img src={"https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+84.png"} style={{width: "50%"}} alt="Flexibility icon"/>
                </div>
                <div>
                  <p className="company-pc-part4-text1">
                    Practice your interview anytime <br/> anywhere at your own schedule <br/> and convenience.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="company-pc-part4-center">
                  <img src={"https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+85.png"} style={{width: "50%"}} alt="Cost Efficient icon"/>
                </div>
                <div>
                  <p className="company-pc-part4-text1">
                    No more expensive coaching <br/> fees for interviews, the average <br/> costs between $200-$399.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 5th part */}
          <div style={{width: "100%", marginBottom: "10%"}}>
            <div  style={{margin: "auto"}}>
              <br/>
              <h3 className="company-pc-part4-h3" >CONTACT</h3>
              <p className="company-pc-part5-text1">
                Use the form to drop us an email or directly reach us at &nbsp;
                <a href = "mailto: hr@hirebeat.co" style={{color: "#FF6B00"}}>admin@hirebeat.co</a></p>
            </div>
            <div className="row" style={{width: "54rem", margin: "auto"}}>
              <div className="col contact-bg">
                <div style={{width: "80%", margin: "auto"}}>
                  <br/>
                  <label className="contact-form-font">
                  Email(Optional)
                  </label>
                  <br/>
                  <input className="contact-form" type="email"></input>
                  <br/>
                  <br/>
                  <label className="contact-form-font">
                    Message
                  </label>
                  <br/>
                  <textarea className="contact-form" style={{height: "6rem"}}></textarea>
                  <br/>
                  <button className="contact-form-btn" style={{outline: "none"}}>
                    submit
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="company-pc-part5-align">
                  <p className="company-pc-part5-text2">
                    Technical Support
                  </p>
                  <p className="company-pc-part5-text3">
                    Get help with your user account or have <br/> questions about how we can help with <br/> your next interview.
                  </p>
                  <a className="company-pc-part5-text4" href = "mailto: tech@hirebeat.co" style={{color: "#FF6B00"}}>tech@hirebeat.co</a>
                </div>
                <div className="company-pc-part5-align" style={{marginTop: "2rem"}}>
                  <p className="company-pc-part5-text2">
                    Join us
                  </p>
                  <p className="company-pc-part5-text3">
                    Join our team to help reshape the <br/> recruiting and make products reach over <br/> million people worldwide.
                  </p>
                  <a className="company-pc-part5-text4" href = "mailto: hr@hirebeat.co" style={{color: "#FF6B00"}}>hr@hirebeat.co</a>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
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
        </MediaQuery>
        {/* Mobile Homepage */}
        <MediaQuery maxDeviceWidth={1223}>
          <div className="home-1-mobile" style={{width: "100%"}}>
            <p style={{fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", color: "white", marginTop: "10%", marginBottom: "1rem"}}>
              Help job seekers gain <br/>
              core competence
            </p>
            <p style={{fontSize: "0.9375rem", fontWeight: "normal", textAlign: "center", color: "white", marginBottom: "3rem"}}>
              by implementing talent intelligent database.
            </p>
          </div>
          <div style={{width: "100%", backgroundColor: "#F7F9FC"}}>
            <br/>
            <div style={{marginTop: "5%", textAlign: "center"}}>
              <h3 className="company-h3">In need of</h3>
              <div align="left" className="company-white-bg">
                <img style={{marginLeft: "5%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+80.png"/>
                <span className="company-font" style={{marginLeft: "5%"}}>Interview practice?</span>
              </div>
            </div>
            <div style={{marginTop: "5%", textAlign: "center"}}>
              <h3 className="company-h3">Overwhelmed by</h3>
              <div align="left" className="company-white-bg">
                <img style={{marginLeft: "5%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+81.png"/>
                <span className="company-font" style={{marginLeft: "5%"}}>Endless interview questions?</span>
              </div>
            </div>
            <div style={{marginTop: "5%", textAlign: "center", marginBottom: "8%"}}>
              <h3 className="company-h3">Lack of</h3>
              <div align="left" className="company-white-bg">
                <img style={{marginLeft: "5%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/Group+82.png"/>
                <span className="company-font" style={{marginLeft: "5%"}}>Feedback after interviews?</span>
              </div>
            </div>
          </div>
          <div style={{width: "100%"}}>
            <br/>
            <h3 style={{marginTop: "8%", fontSize: "0.9375rem", fontWeight: "bold", color: "black", textAlign: "center"}}>
              WE ARE HERE TO HELP
            </h3>
            <div className="row" style={{marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-2" style={{justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "3%"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D", marginTop: "0.5rem"}}>
                  No more <span style={{color: "#FA4646", textDecoration: "line-through"}}>aimingless searching</span>
                  &nbsp; for interview <br/> questions and advice
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-2" style={{justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "3%"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/wrong.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D", marginTop: "0.5rem"}}>
                  No more <span style={{color: "#FA4646", textDecoration: "line-through"}}>untargeted advice</span>
                  &nbsp; and feedback <br/> for every interview
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-2" style={{justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "3%"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D", marginTop: "0.5rem"}}>
                  Simulate <span style={{color: "#14CC75"}}>real interview experience</span>
                  &nbsp; and <br/> repeat practice recording
                </span>
              </div>
            </div>
            <div className="row" style={{marginTop: "5%", marginLeft: "0%", marginRight: "0%"}}>
              <div className="col-2" style={{justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "3%"}}>
                <img style={{width: "80%"}} src="https://hirebeat-assets.s3.amazonaws.com/Company-page/right.png"/>
              </div>
              <div className="col" style={{paddingLeft: "0%", paddingRight: "0%"}}>
                <span style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D", marginTop: "0.5rem"}}>
                  Receive systmatic <span style={{color: "#14CC75"}}>AI-driven analysis</span>
                  &nbsp; for <br/> your performance
                </span>
              </div>
            </div>
          </div>
          <div style={{width: "100%", marginTop: "8%"}}>
            <h3 style={{textAlign: "center"}}>CONTACT</h3>
            <div className="row justify-content-center" style={{marginLeft: "0%", marginRight: "0%"}}>
              <p style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D"}}>
                Use the form to drop us an email or directly reach <br/> us at &nbsp;
                <a href = "mailto: admin@hirebeat.co" style={{color: "#FF6B00"}}>admin@hirebeat.co</a>
              </p>
            </div>
          </div>
          <div className="contact-bg" style={{width: "90%"}}>
            <br/>
            <label className="contact-form-font">
              Email(Optional)
            </label>
            <br/>
            <input className="contact-form" type="email"></input>
            <br/>
            <br/>
            <label className="contact-form-font">
              Message
            </label>
            <br/>
            <textarea className="contact-form" style={{height: "6rem"}}></textarea>
            <br/>
            <button className="contact-form-btn" style={{outline: "none"}}>
              submit
            </button>
          </div>
          <div className="row" style={{width: "80%", marginLeft: "0%", marginRight: "0%", marginTop: "10%"}}>
            <div className="col">
              <p style={{color: "black", fontWeight: "bold", fontSize: "0.9375rem"}}>
                Technical Support <br/>
                <a href = "mailto: tech@hirebeat.co" style={{color: "#FF6B00"}}>tech@hirebeat.co</a>
              </p>
            </div>
            <div className="col">
              <p style={{color: "black", fontWeight: "bold", fontSize: "0.9375rem"}}>
                Join us <br/>
                <a href = "mailto: hr@hirebeat.co" style={{color: "#FF6B00"}}>hr@hirebeat.co</a>
              </p>
            </div>
          </div>
          <div className="company-mb-bottom">
            <Link to="/register">
              <button className="contact-form-btn" style={{outline: "none", height: "3rem", marginLeft: "0%"}}>
                Sign Up Now
              </button>
            </Link>
          </div>
          <div className="footer-align" style={{backgroundColor: "#3D4159", height: "4rem", width: "100%"}}>
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
        </MediaQuery>
    </div>
  );
}