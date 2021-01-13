import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import PWCIQ from './../interviewQuestions/PWCIQ';
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


class PWCInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – PwC (PricewaterhouseCoopers)</title>
                    <meta name="Description" CONTENT="PwC (PricewaterhouseCoopers) is global auditing, accounting, and assurance services for organizations and individuals. The сompany provides IFRS reporting, valuation, human resources, accounting advisory, and forensic services. It offers business compliance, internal audit, IT and project assurance, global tax, tax accounting, economics, statistics, and transfer pricing services. PwC also provides consulting services for analytics, finance, operations, risk management, benchmarking, and security." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/pwc"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="PwC (PricewaterhouseCoopers)"
                    pageDescription="How to get a job at PwC (PricewaterhouseCoopers)."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="PwC (PricewaterhouseCoopers) is global auditing, accounting, and assurance services for organizations and individuals. The сompany provides IFRS reporting, valuation, human resources, accounting advisory, and forensic services. It offers business compliance, internal audit, IT and project assurance, global tax, tax accounting, economics, statistics, and transfer pricing services. PwC also provides consulting services for analytics, finance, operations, risk management, benchmarking, and security."
                                type="Private"
                                founded="1998"
                                hq="London, GB"
                                website="www.pwc.com"
                                growthLabels={[2018, 2019]}
                                growthData={[250913, 276005]}
                                ratings={3.9}
                                jobPage="https://www.pwc.com/us/en/careers.html"
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
                                    labels={["Administrative", "Operations"]}
                                    series={[49.7, 50.3]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <PWCIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2014", "2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[34000000000, 35400000000, 35900000000, 37700000000, 40700000000, 42400000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Marketing & PR", "Operations", "Technology"]}
                                salaryData={[125700, 81000, 161400, 72600, 63500]}
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

export default PWCInfo;