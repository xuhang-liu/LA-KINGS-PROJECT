import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import HackettGroupIQ from './../interviewQuestions/HackettGroupIQ';
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


class HackettGroupInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – The Hackett Group</title>
                    <meta name="Description" CONTENT="The Hackett Group provides advisory, benchmarking, and transformation consulting services for corporations and government agencies. It offers shared offshoring and outsourcing advisory services, such as executive advisory, benchmarking, working capital management, globalization, and outsourcing, enterprise performance management, business intelligence, rapid cost reduction, organizational effectiveness, cash flow optimization, global process sourcing, return on investment from information technology investments, and performance management." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/hackett-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="The Hackett Group"
                    pageDescription="How to get a job at The Hackett Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="The Hackett Group provides advisory, benchmarking, and transformation consulting services for corporations and government agencies. It offers shared offshoring and outsourcing advisory services, such as executive advisory, benchmarking, working capital management, globalization, and outsourcing, enterprise performance management, business intelligence, rapid cost reduction, organizational effectiveness, cash flow optimization, global process sourcing, return on investment from information technology investments, and performance management."
                                type="Public"
                                founded="1991"
                                hq="Miami, FL"
                                website="www.thehackettgroup.com"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={3.8}
                                jobPage="https://www.thehackettgroup.com/careers/"
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
                            <HackettGroupIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[288560000, 285860000, 285890000, 282470000]}
                                netIncomeData={[21540000, 27350000, 23910000, 23280000]}
                                gpmData={[33.49, 33.91, 34.84, 34.27]}
                            />
                            <SalaryBar
                                labels={["Legal", "Marketing & PR", "Operations", "Sales & BD", "Support", "Technology"]}
                                salaryData={[166300, 124700, 136500, 140000, 97000, 115000]}
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

export default HackettGroupInfo;