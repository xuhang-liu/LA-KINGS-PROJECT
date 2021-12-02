import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BCGIQ from './../interviewQuestions/BCGIQ';
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


class BCGInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Boston Consulting Group</title>
                    <meta name="Description" CONTENT="Boston Consulting Group (BCG) is a global management consulting firm and advisor on business strategy. Its services cover big data and advanced analytics, change management, corporate development and finance, globalization, growth, innovation and product development, lean and manufacturing, marketing and sales, M&A and divestitures, operations, people and organization, post-merger integration, pricing, procurement, smart simplicity, strategy, sustainability, technology and digital, as well as transformation, turnaround, and restructuring." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/boston-consulting-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Boston Consulting Group"
                    pageDescription="How to get a job at Boston Consulting Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Boston Consulting Group (BCG) is a global management consulting firm and advisor on business strategy. Its services cover big data and advanced analytics, change management, corporate development and finance, globalization, growth, innovation and product development, lean and manufacturing, marketing and sales, M&A and divestitures, operations, people and organization, post-merger integration, pricing, procurement, smart simplicity, strategy, sustainability, technology and digital, as well as transformation, turnaround, and restructuring."
                                type="Private"
                                founded="1963"
                                hq="Boston, MA"
                                website="https://www.bcg.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.3}
                                jobPage="https://careers.bcg.com/"
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
                            <BCGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[5000000000, 5600000000, 6300000000, 7500000000, 8500000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Associate Consultant", "Data Scientist", "Systems Analyst", "Financial Analyst", "Software Engineer"]}
                                salaryData={[90569, 118439, 62529, 71602, 129343]}
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

export default BCGInfo;