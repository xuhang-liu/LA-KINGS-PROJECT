import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import GartnerIQ from './../interviewQuestions/GartnerIQ';
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


class GartnerInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Gartner</title>
                    <meta name="Description" CONTENT="Gartner is a research and advisory company. It delivers its products and services through three segments: Research, Conferences, and Consulting. The Research segment provides insights and advice on leaders’ mission-critical priorities across different functional areas of an enterprise through reports, briefings, proprietary tools, access to its research experts, peer networking services, and membership programs. The Conferences segment offers business professionals across an organization the opportunity to learn, share, and network. The Consulting component combines research with custom analysis and on-the-ground support to help chief information officers and other senior executives driving technology-related strategic initiatives move confidently from insight to action." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/gartner"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Gartner"
                    pageDescription="How to get a job at Gartner."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Gartner is a research and advisory company. It delivers its products and services through three segments: Research, Conferences, and Consulting. The Research segment provides insights and advice on leaders’ mission-critical priorities across different functional areas of an enterprise through reports, briefings, proprietary tools, access to its research experts, peer networking services, and membership programs. The Conferences segment offers business professionals across an organization the opportunity to learn, share, and network. The Consulting component combines research with custom analysis and on-the-ground support to help chief information officers and other senior executives driving technology-related strategic initiatives move confidently from insight to action."
                                type="Public"
                                founded="1979"
                                hq="Stamford, CT"
                                website="https://www.gartner.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.7}
                                jobPage="https://jobs.gartner.com/"
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
                            <GartnerIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[2440000000, 3310000000, 3980000000, 4250000000]}
                                netIncomeData={[193580000, 3280000, 122460000, 233290000]}
                                gpmData={[61.32, 60.13, 63.05, 63.48]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Operations", "Technology", "Sales & BD"]}
                                salaryData={[106500, 89400, 105000, 94000, 140000]}
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

export default GartnerInfo;