import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import OliverWymanIQ from './../interviewQuestions/OliverWymanIQ';
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


class OliverWymanInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Oliver Wyman</title>
                    <meta name="Description" CONTENT="Oliver Wyman is a company providing management consulting services. It specialized in strategy, operations, risk management, and organization transformation. The company helps clients to optimize the business, improve processes and risk profile, accelerate organizational performance. It serves the automotive, energy, healthcare, travel and leisure, and retail sectors." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/oliver-wyman"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Oliver Wyman"
                    pageDescription="How to get a job at Oliver Wyman."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Oliver Wyman is a company providing management consulting services. It specialized in strategy, operations, risk management, and organization transformation. The company helps clients to optimize the business, improve processes and risk profile, accelerate organizational performance. It serves the automotive, energy, healthcare, travel and leisure, and retail sectors."
                                type="Subsidiary"
                                founded="1984"
                                hq="New York, NY"
                                website="https://www.oliverwyman.com/index.html"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={4.3}
                                jobPage="https://www.oliverwyman.com/careers.html"
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
                            <OliverWymanIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[1800000000, 1800000000, 1900000000, 2000000000, 2100000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Creative", "Technology", "Finance", "Sales & BD", "Operations"]}
                                salaryData={[60000, 185000, 120000, 130000, 140000]}
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

export default OliverWymanInfo;