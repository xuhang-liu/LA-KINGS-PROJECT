import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import HoulihanLokeyIQ from './../interviewQuestions/HoulihanLokeyIQ';
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


class HoulihanLokeyInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Houlihan Lokey</title>
                    <meta name="Description" CONTENT="Houlihan Lokey is an investment bank specializing in mergers and acquisitions, capital markets, financial restructuring, valuation, and strategic consulting. It operates in 3 segments: Corporate Finance, Financial Restructuring, and Financial and Valuation Advisory. The Corporate Finance segment providers mergers, acquisitions, divestitures, and other related advisory services and financing solutions and capital-raising advisory services. The Financial Restructuring segment offers advisory services focusing on international and multi-jurisdictional restructurings. The Financial and Valuation Advisory part delivers fund, corporate valuation, transaction, real estate advisory services, portfolio valuation, transaction opinions, dispute resolution consulting, and real estate valuation offerings." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/houlihan-lokey"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Houlihan Lokey"
                    pageDescription="How to get a job at Houlihan Lokey."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Houlihan Lokey is an investment bank specializing in mergers and acquisitions, capital markets, financial restructuring, valuation, and strategic consulting. It operates in 3 segments: Corporate Finance, Financial Restructuring, and Financial and Valuation Advisory. The Corporate Finance segment providers mergers, acquisitions, divestitures, and other related advisory services and financing solutions and capital-raising advisory services. The Financial Restructuring segment offers advisory services focusing on international and multi-jurisdictional restructurings. The Financial and Valuation Advisory part delivers fund, corporate valuation, transaction, real estate advisory services, portfolio valuation, transaction opinions, dispute resolution consulting, and real estate valuation offerings."
                                type="Public"
                                founded="1972"
                                hq="Los Angeles, LA"
                                website="https://www.hl.com/"
                                growthLabels={[]}
                                growthData={[]}
                                ratings={3.7}
                                jobPage="https://www.hl.com/careers/"
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
                            <HoulihanLokeyIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019", "2020"]}
                                revenueData={[693800000, 872100000, 963400000, 1100000000, 1200000000]}
                                netIncomeData={[69700000, 108300000, 172300000, 159100000, 183800000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Art & Design", "Engineering", "Finance & Accounting", "Operations"]}
                                salaryData={[57000, 93000, 110000, 160000, 85000]}
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

export default HoulihanLokeyInfo;