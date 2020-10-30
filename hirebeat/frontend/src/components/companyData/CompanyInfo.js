import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import ReactWOW from 'react-wow';
import Overview from './Overview';
import InterviewProcess from './InterviewProcess';
import InterviewQuestion from './InterviewQuestion';
import Demographic, {Bar } from './Components';
import amazon from "../../assets/companydata/amazon 1.png";
import google from "../../assets/companydata/google 1.png";
import microsoft from "../../assets/companydata/microsoft 1.png";
import linkedin from "../../assets/companydata/linkedin 1.png"
import {ResumeFooter} from "../resume/Components";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


class CompanyInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Amazon" 
                    pageDescription="How to get a job at Amazon." 
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <InterviewProcess />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <InterviewQuestion />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <Demographic name="Hiring Categories"/>
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <Demographic name="Demographic"/>
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <Bar />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">More Companies to Explore</h3>
                            <ul className="company_ul">
                                <li>
                                    <div className="logo">
                                    <a href="/">
                                        <img src={amazon} alt="image" style={{width:"2.5rem", paddingBottom:"1rem"}}/>
                                        <span className="font-weight-bold companydata-text4">
                                        Amazon
                                        </span>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="logo">
                                    <a href="/">
                                        <img src={linkedin} alt="image" style={{width:"2.5rem", paddingBottom:"1rem"}}/>
                                        <span className="font-weight-bold companydata-text4"
                                        >
                                        Linkedin
                                        </span>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="logo">
                                    <a href="/">
                                        <img src={google} alt="image" style={{width:"2.5rem", paddingBottom:"1rem"}}/>
                                        <span className="font-weight-bold companydata-text4" >
                                        Google
                                        </span>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="logo">
                                    <a href="/">
                                        <img src={microsoft} alt="image" style={{width:"2.5rem", paddingBottom:"1rem"}}/>
                                        <span className="font-weight-bold companydata-text4">
                                        Microsoft
                                        </span>
                                    </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <ResumeFooter />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default CompanyInfo;