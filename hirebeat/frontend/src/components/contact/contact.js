import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('default_service', 'template_k9dipu8', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
    .then((result) => {
        console.log(result.text);
        confirmAlert({
          title: 'Email Sent!',
          message: 'Thank you for contacting us.',
          buttons: [
            {
              label: 'OK'
            }
          ]
        });
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset()
}

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
              <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Contact Us" 
                    pageDescription="Drop us Message for any Query" 
                />
                <MediaQuery minDeviceWidth={1224}>
                {/* 5th part */}
          <div style={{width: "100%", marginBottom: "10%"}}>
            <div  style={{margin: "auto", marginBottom:"1rem"}}>
              <br/>
              <p className="company-pc-part5-text1">
                Use the form to drop us an email or directly reach us at &nbsp;
                <a href = "mailto: hr@hirebeat.co" style={{color: "#FF6B00"}}>admin@hirebeat.co</a></p>
            </div>
            <div className="row" style={{width: "44rem", margin: "auto"}}>
              <div className="col contact-bg">
                <form style={{width: "90%"}} onSubmit={sendEmail}>
                  <br/>
                  <label className="contact-form-font">
                  Email(Optional)
                  </label>
                  <br/>
                  <input className="contact-form" type="email" name="email"></input>
                  <br/>
                  <br/>
                  <label className="contact-form-font">
                    Message
                  </label>
                  <br/>
                  <textarea className="contact-form" style={{height: "6rem"}} name="message"></textarea>
                  <br/>
                  <button className="default-btn" style={{backgroundColor:"#080a3c", marginLeft:"30%", marginTop:"10%"}}>
                    <i className="bx bxs-hot"></i>
                      Submit
                    <span></span>
                  </button>
                </form>
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
          </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
        <div style={{width: "100%", marginTop: "8%"}}>
            <div className="row justify-content-center" style={{marginLeft: "0%", marginRight: "0%"}}>
              <p style={{fontSize: "0.9375rem", fontWeight: "normal", color: "#7D7D7D"}}>
                Use the form to drop us an email or directly reach <br/> us at &nbsp;
                <a href = "mailto: admin@hirebeat.co" style={{color: "#FF6B00"}}>admin@hirebeat.co</a>
              </p>
            </div>
          </div>
          <form className="contact-bg" style={{width: "90%", marginLeft:"5%"}} onSubmit={sendEmail}>
            <br/>
            <label className="contact-form-font">
              Email(Optional)
            </label>
            <br/>
            <input className="contact-form" type="email" name="email"></input>
            <br/>
            <br/>
            <label className="contact-form-font">
              Message
            </label>
            <br/>
            <textarea className="contact-form" style={{height: "6rem"}} name="message"></textarea>
            <br/>
            <button className="contact-form-btn" style={{outline: "none"}}>
              submit
            </button>
          </form>
          <div className="row" style={{width: "80%", marginLeft: "5%", marginRight: "5%", marginTop: "10%"}}>
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
        </MediaQuery>
            </React.Fragment>
        );
    }
}

export default Contact;