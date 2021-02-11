import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BoozeAllenHamiltonIQ from './../interviewQuestions/BoozeAllenHamiltonIQ';
import {RevenueBar, SalaryBar, Category} from './../Components';
import LogoList from './../LogoList';
import {ResumeFooter} from "./../../resume/Components";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


class BoozeAllenHamiltonInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Booz Allen Hamilton</title>
                    <meta name="Description" CONTENT="Booz Allen Hamilton is a company providing management and technology consulting and engineering services. It develops mission-oriented solutions for specific domains, business strategies, human capital, and operations. It delivers transformational solutions in decision analytics, automation, data science, deep learning, and artificial intelligence. The company also provides analytics services, software development services, and designs, develops, and implements secure solutions and scalable systems. Booz Allen Hamilton serves the aerospace, financial services, health and life sciences, energy, and transportation industries." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/booz-allen-hamilton"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Booz Allen Hamilton"
                    pageDescription="How to get a job at Booz Allen Hamilton."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Booz Allen Hamilton is a company providing management and technology consulting and engineering services. It develops mission-oriented solutions for specific domains, business strategies, human capital, and operations. It delivers transformational solutions in decision analytics, automation, data science, deep learning, and artificial intelligence. The company also provides analytics services, software development services, and designs, develops, and implements secure solutions and scalable systems. Booz Allen Hamilton serves the aerospace, financial services, health and life sciences, energy, and transportation industries."
                                type="Public"
                                founded="1914"
                                hq="McLean, VA"
                                website="https://www.boozallen.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.1}
                                jobPage="https://careers.boozallen.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <AIGIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Technology", "Finance", "Other"]}
                                    series={[40, 40, 20]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BoozeAllenHamiltonIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[6170000000, 6700000000, 7460000000]}
                                netIncomeData={[305110000, 48530000, 482600000]}
                                gpmData={[53.55, 53.75, 54.73]}
                            />
                            <SalaryBar
                                labels={["Management Consultant", "Data Scientist", "Software Engineer", "Cyber Security Analyst", "Intelligence Analyst"]}
                                salaryData={[77731, 82506, 82470, 84147, 77968]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:"auto", marginTop: "5%"}}>
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

export default BoozeAllenHamiltonInfo;