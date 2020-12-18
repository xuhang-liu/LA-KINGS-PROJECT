import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import BLUSAIQ from './../interviewQuestions/BLUSAIQ';
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


class BLUSAInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Bank Leumi USA </title>
                    <meta name="Bank Leumi operates as a banking corporation. The Company offers a wide range of private and business services, including financial solutions, professional services, international trade and finance solutions, investments and capital markets, and digital services. It also provides global services, such as overseas banking subsidiaries, custody services, and international money transfers. Bank Leumi provides access to online banking and mobile services as well." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/bank-leumi"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Bank Leumi USA "
                    pageDescription="How to get a job at Bank Leumi USA ."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Bank Leumi operates as a banking corporation. The Company offers a wide range of private and business services, including financial solutions, professional services, international trade and finance solutions, investments and capital markets, and digital services. It also provides global services, such as overseas banking subsidiaries, custody services, and international money transfers. Bank Leumi provides access to online banking and mobile services as well."
                                type="Public"
                                founded="1902"
                                hq="Tel Aviv-Yafo, IL"
                                website="https://www.leumiusa.com/"
                                growthLabels={[2019]}
                                growthData={[11201]}
                                ratings={3.5}
                                jobPage="https://www.leumiusa.com/careers"
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
                                    labels={["N/A"]}
                                    series={[100]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BLUSAIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017"]}
                                revenueData={[15080000000, 14960000000, 15500000000]}
                                netIncomeData={[2870000000, 2830000000, 3200000000]}
                                gpmData={[87.63, 87.29, 85.84]}
                            />
                            <SalaryBar
                                labels={["Credit Analyst", "Investment Analyst", "Vice President", "Operation Analyst"]}
                                salaryData={[67554, 125000, 172474, 68000]}
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

export default BLUSAInfo;