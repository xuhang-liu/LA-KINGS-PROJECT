import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import PictetIQ from './../interviewQuestions/PictetIQ';
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


class PictetInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Pictet</title>
                    <meta name="Pictet Group is a private bank and financial services company, offering wealth management, asset management, and related services. It also provides investment management and advisory, securities safekeeping and administration, and fiduciary services. The company serves private and corporate clients." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/pictet"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Pictet"
                    pageDescription="How to get a job at Pictet."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Pictet Group is a private bank and financial services company, offering wealth management, asset management, and related services. It also provides investment management and advisory, securities safekeeping and administration, and fiduciary services. The company serves private and corporate clients."
                                type="Private"
                                founded="1805"
                                hq="Geneva, CH"
                                website="https://www.group.pictet/"
                                growthLabels={[2018, 2019]}
                                growthData={[4190, 4358]}
                                ratings={4.3}
                                jobPage="https://www.group.pictet/careers"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <RJIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Administrative", "Technology", "Sales & BD", "Finance", "Operations", "Other", "Support"]}
                                    series={[7.1, 7.1, 1.8, 25, 14.3, 42.9, 1.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <PictetIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[2630000000, 3060000000, 3300000000]}
                                netIncomeData={[422060000, 572500000, 595940000]}
                                gpmData={[75.64, 76.17, 76.42]}
                            />
                            {/*<SalaryBar
                                labels={["Financial Analyst", "Credit Analyst", "Risk Analyst", "Vice President", "Business Analyst"]}
                                salaryData={[54547, 54739, 51264, 126509, 54760]}
                            />*/}
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

export default PictetInfo;