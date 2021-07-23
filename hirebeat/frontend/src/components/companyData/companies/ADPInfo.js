import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ADPIQ from './../interviewQuestions/ADPIQ';
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


class ADPInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Automatic Data Processing (ADP)</title>
                    <meta name="Description" CONTENT="Automatic Data Processing (ADP) is a global provider of cloud-based human capital management (HCM) and HR outsourcing (HRO) solutions. It provides complete management solutions for HR administration, payroll administration, talent management, employee benefits, benefits administration, employer liability management, and other HCM and employee benefits functions. The company serves the restaurant and hospitality, manufacturing, professional and technical services, construction, financial services, healthcare, retail, government, education, non-profit, and social assistance industries." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Automatic Data Processing (ADP)"
                    pageDescription="How to get a job at Automatic Data Processing (ADP)."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Automatic Data Processing (ADP) is a global provider of cloud-based human capital management (HCM) and HR outsourcing (HRO) solutions. It provides complete management solutions for HR administration, payroll administration, talent management, employee benefits, benefits administration, employer liability management, and other HCM and employee benefits functions. The company serves the restaurant and hospitality, manufacturing, professional and technical services, construction, financial services, healthcare, retail, government, education, non-profit, and social assistance industries."
                                type="Public"
                                founded="1949"
                                hq="Roseland, NJ"
                                website="https://www.adp.com/"
                                growthLabels={[2020]}
                                growthData={[58000]}
                                ratings={3.9}
                                jobPage="https://jobs.adp.com/"
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
                                    labels={["N/A"]}
                                    series={[100]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <ADPIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[12400000000, 13300000000, 14200000000, 14600000000]}
                                netIncomeData={[1700000000, 1600000000, 2300000000, 2500000000]}
                                gpmData={[41, 41, 43, 42]}
                            />
                            <SalaryBar
                                labels={["Administrative assistant", "Associate district manager", "Instructional designer", "Implementation consultant", "Client services management"]}
                                salaryData={[43969, 55396, 85904, 73000, 67640]}
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

export default ADPInfo;