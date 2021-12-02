import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import WorkdayIQ from './../interviewQuestions/WorkdayIQ';
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


class WorkdayInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Workday</title>
                    <meta name="Description" CONTENT="Workday is a company providing enterprise cloud applications for finance and human resources. It delivers financial management, human capital management, and analytics applications for companies, educational institutions, and government agencies. As part of its applications, Workday provides embedded analytics that captures everyday business events’ content and context, facilitating informed decision-making from wherever users work." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/workday"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Workday"
                    pageDescription="How to get a job at Workday."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Workday is a company providing enterprise cloud applications for finance and human resources. It delivers financial management, human capital management, and analytics applications for companies, educational institutions, and government agencies. As part of its applications, Workday provides embedded analytics that captures everyday business events’ content and context, facilitating informed decision-making from wherever users work."
                                type="Public"
                                founded="2005"
                                hq="Pleasanton, CA"
                                website="https://www.workday.com/"
                                growthLabels={[2021]}
                                growthData={[12500]}
                                ratings={4.3}
                                jobPage="https://workday.wd5.myworkdayjobs.com/Workday"
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
                            <WorkdayIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2019", "2020", "2021"]}
                                revenueData={[2800000000, 3600000000, 4300000000]}
                                netIncomeData={[418300000, 480700000, 282400000]}
                                gpmData={[70, 71, 72]}
                            />
                            <SalaryBar
                                labels={["Administrative assistant", "Product designer", "Senior business systems analyst", "Consultant", "Software development engineer"]}
                                salaryData={[67740, 113911, 105949, 101342, 146117]}
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

export default WorkdayInfo;