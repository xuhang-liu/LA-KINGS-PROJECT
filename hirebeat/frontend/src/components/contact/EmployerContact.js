import React, { Component } from 'react';
import PageTitleArea1 from '../Common/PageTitleArea1';
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import emailjs from 'emailjs-com';
import Footer from "../layout/Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DocumentMeta from 'react-document-meta';

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

const options = {
    loop: true,
    nav: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
}

class EmployerContact extends Component {
    render() {
      const meta = {
        title: 'HireBeat – Your first step to a better recruiting journey',
        description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
        canonical: 'https://hirebeat.co/employer_contact',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
          }
        }
      };
        return (
          <DocumentMeta {...meta}>
            <React.Fragment>
              <ScrollToTopOnMount />
                <PageTitleArea1 
                    pageTitle="Contact Us" 
                    pageDescription="Submit a request, and our expert will take you on a tour of the platform, explain pricing and guide you to get started." 
                />
                <MediaQuery minDeviceWidth={1224}>
                {/* 5th part */}
                <div className="min-width-1290">
          <div className="hero-content container-xl my-5">
            <div className="row">
              <div className="col-6">
                <h3 style={{color:"#090d3a", fontWeight:"600"}}>How HireBeat get your best candidate?</h3>
                <div className="mt-3">
                  <p><i className="bx bxs-check-circle mr-2" style={{color:"#56a3fa"}}></i> 
                    Help you determine a candidate’s potential quickly</p>
                  <p><i className="bx bxs-check-circle mr-2" style={{color:"#56a3fa"}}></i> 
                    Reduce up to 50% of the cost per hire</p>
                  <p><i className="bx bxs-check-circle mr-2" style={{color:"#56a3fa"}}></i> 
                    Decrease the time-to-offer by team collaboration</p>
                </div>
                <OwlCarousel
                  className="owl-carousel owl-theme mt-4"
                    {...options}
                >
                  <div>
                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/contact1.png" alt="img"></img>
                  </div>
                  <div>
                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/contact2.png" alt="img"></img>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-6">
                <form onSubmit={sendEmail} style={{backgroundColor:"#e8edfc", padding:"1rem", boxShadow:"2px 2px 4px rgba(128, 128, 128, 0.16)", borderRadius:"10px"}}>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label className="form_label">
                        Full Name
                      </label>
                      <input type="text" name="fullname" className="form-control" required="required" style={{backgroundColor:"#ffffff"}}/>
                      <label className="form_label mt-3">
                        Work Email
                      </label>
                      <input type="text" name="workemail" className="form-control" required="required" style={{backgroundColor:"#ffffff"}}/>
                      <label className="form_label mt-3">
                      Company Name
                      </label>
                      <input type="text" name="companyname" className="form-control" required="required" style={{backgroundColor:"#ffffff"}}/>
                      <label className="form_label mt-3">
                      Message
                      </label>
                      <textarea name="message" className="form-control" required="required" style={{backgroundColor:"#ffffff", minHeight:"8rem"}}/>
                    </div>
                  </div>
                  <button className="default-btn1" style={{paddingLeft:"25px"}}>
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
          </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <form className="contact-bg mt-2" style={{width: "90%", marginLeft:"5%"}} onSubmit={sendEmail}>
            <br/>
            <label className="contact-form-font">
              Full Name
            </label>
            <input className="contact-form" type="text" name="fullname" required></input>
            <br/>
            <br/>
            <label className="contact-form-font">
              Work Email
            </label>
            <input className="contact-form" type="email" name="workemail" required></input>
            <br/>
            <br/>
            <label className="contact-form-font">
              Company Name
            </label>
            <input className="contact-form" type="text" name="companyname" required></input>
            <br/>
            <br/>
            <label className="contact-form-font">
              Message
            </label>
            <textarea className="contact-form" style={{height: "6rem"}} name="message" required></textarea>
            <br/>
            <button className="contact-form-btn" style={{outline: "none"}}>
              Send Request
            </button>
          </form>
        </MediaQuery>
        <FreeTrialArea/>
        <Footer />
        </React.Fragment>
        </DocumentMeta>
        );
    }
}

export default EmployerContact;