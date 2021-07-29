import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AlvarezMarsalIQ from './../interviewQuestions/AlvarezMarsalIQ';
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


class AlvarezMarsalInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Alvarez & Marsal</title>
                    <meta name="Description" CONTENT="Alvarez & Marsal provides advisory services related to turnaround management and performance improvement for high-profile businesses. It offers global leadership, problem-solving, and value creation for companies across industries and around the world. The сompany also provides turnaround management, corporate restructuring, and performance improvement for companies and stakeholders." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Alvarez & Marsal"
                    pageDescription="How to get a job at Alvarez & Marsal."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Alvarez & Marsal provides advisory services related to turnaround management and performance improvement for high-profile businesses. It offers global leadership, problem-solving, and value creation for companies across industries and around the world. The сompany also provides turnaround management, corporate restructuring, and performance improvement for companies and stakeholders."
                                type="Private"
                                founded="1983"
                                hq="New York, NY"
                                website="www.alvarezandmarsal.com"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.2}
                                jobPage="https://www.alvarezandmarsal.com/careers"
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
                            <AlvarezMarsalIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={[]}
                                revenueData={[]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Management Consultant", "Consulting Associate", "Senior Payroll Administrator", "Senior Financial Analyst", "Valuation Associate"]}
                                salaryData={[120000, 85000, 91000, 96000, 95000]}
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

export default AlvarezMarsalInfo;