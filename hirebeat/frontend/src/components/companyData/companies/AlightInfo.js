import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AlightIQ from './../interviewQuestions/AlightIQ';
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


class AlightInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data –Alight</title>
                    <meta name="Description" CONTENT="Alight Solutions is a cloud-based provider of integrated digital human capital and business solutions. It focuses on health, wealth, and payroll administration. The company also specializes in engagement and communications, human capital, and financial management." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/alight"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Alight"
                    pageDescription="How to get a job at Alight."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Alight Solutions is a cloud-based provider of integrated digital human capital and business solutions. It focuses on health, wealth, and payroll administration. The company also specializes in engagement and communications, human capital, and financial management."
                                type="Private"
                                founded="2017"
                                hq="Lincolnshire, IL"
                                website="https://alight.com/"
                                growthLabels={[2021]}
                                growthData={[8599]}
                                ratings={4.4}
                                jobPage="https://careers.alight.com/"
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
                            <AlightIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018"]}
                                revenueData={[1600000000, 2400000000]}
                                netIncomeData={[24000000, 21000000]}
                                gpmData={[38, 36]}
                            />
                            <SalaryBar
                                labels={["Administrative assistant", "Digital copywriter", "Director", "Health Professional consultant", "Client specialist"]}
                                salaryData={[44642, 67000, 161290, 50400, 52914]}
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

export default AlightInfo;