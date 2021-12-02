import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import StrategyIQ from './../interviewQuestions/StrategyIQ';
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


class StrategyInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Strategy</title>
                    <meta name="Description" CONTENT="Strategy& is a strategy consulting business. Its services include business strategy, customer strategy, operations strategy, organization strategy, product and service innovation, and technology strategy. Strategy& serves businesses, governments, and organizations." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/strategy"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Strategy"
                    pageDescription="How to get a job at Strategy."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Strategy& is a strategy consulting business. Its services include business strategy, customer strategy, operations strategy, organization strategy, product and service innovation, and technology strategy. Strategy& serves businesses, governments, and organizations."
                                type="Subsidiary"
                                founded="1914"
                                hq="New York, NY"
                                website="www.strategyand.pwc.com"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={3.9}
                                jobPage="https://www.strategyand.pwc.com/gx/en/careers.html"
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
                            <StrategyIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={[]}
                                revenueData={[]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Senior Associate", "Manager", "Director", "Senior Consultant", "Principal"]}
                                salaryData={[159699, 192217, 248272, 111033, 353031]}
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

export default StrategyInfo;