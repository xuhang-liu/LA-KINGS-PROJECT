import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './Overview';
import InterviewProcess from './InterviewProcess';
import InterviewQuestion from './InterviewQuestion';
import {Bar, Category} from './Components';
import LogoList from './LogoList';
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
                            <h3 className="companydata-text1">Hiring Category</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category height="500" series={[44, 55, 41, 17, 15]}/>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Demographic</h3>
                            <div style={{margin: "5% 0"}}>
                                <Category height="250" series={[44, 55, 41, 17, 15]}/>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <Bar />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "5%", marginTop: "5%"}}>
                            <LogoList />
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