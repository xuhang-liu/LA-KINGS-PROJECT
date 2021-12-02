import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import KPMGIQ from './../interviewQuestions/KPMGIQ';
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


class KPMGInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – KPMG</title>
                    <meta name="Description" CONTENT="KPMG is a company that provides audit, tax, and advisory services. It offers accounting, auditing, regulatory and compliance, corporate recovery, forensic accounting, risk management, transaction advisory, and tax planning services. The company focuses on financial services, software, electronics, communications, media, chemicals, energy, power, transportation, food and beverage, healthcare, and other sectors." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/kpmg"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="KPMG"
                    pageDescription="How to get a job at KPMG."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="KPMG is a company that provides audit, tax, and advisory services. It offers accounting, auditing, regulatory and compliance, corporate recovery, forensic accounting, risk management, transaction advisory, and tax planning services. The company focuses on financial services, software, electronics, communications, media, chemicals, energy, power, transportation, food and beverage, healthcare, and other sectors."
                                type="Private"
                                founded="1987"
                                hq="Amstelveen, NL"
                                website="https://home.kpmg/xx/en/home.html"
                                growthLabels={[2018, 2019]}
                                growthData={[206869, 219281]}
                                ratings={3.9}
                                jobPage="https://us-jobs.kpmg.com/careers/YourCareer"
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
                                    labels={["Legal", "Creative", "Administrative", "Sales & BD", "Operations", "Support", "Technology", "Retail", "Marketing & PR", "HR", "Finance", "Other"]}
                                    series={[0.7, 0.3, 7.7, 1.6, 5.8, 0.8, 37.7, 7.3, 4.1, 1.0, 25.7, 7.3]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <KPMGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[24400000000, 25400000000, 26400000000, 29000000000, 29800000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Marketing & PR", "Operations", "Sales & BD", "Support", "Technology"]}
                                salaryData={[96600, 56000, 135000, 78100, 55500, 109000, 87500]}
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

export default KPMGInfo;