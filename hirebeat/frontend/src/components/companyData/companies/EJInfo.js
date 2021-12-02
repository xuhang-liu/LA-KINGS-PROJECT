import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import EJIP from './../interviewProcess/EJIP';
import EJIQ from './../interviewQuestions/EJIQ';
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


class EJInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Edward Jones</title>
                    <meta name="Description" CONTENT="Edward Jones is a financial services firm dedicated to serving the needs of individual investors. It offers individual retirement accounts and retirement saving plans, education savings options, estate planning and trust services, account services and tools, and banking services." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/edward-jones"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Edward Jones"
                    pageDescription="How to get a job at Edward Jones."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Edward Jones is a financial services firm dedicated to serving the needs of individual investors. It offers individual retirement accounts and retirement saving plans, education savings options, estate planning and trust services, account services and tools, and banking services."
                                type="Subsidiary"
                                founded="1922"
                                hq="Des Peres, MO, US"
                                website="https://www.edwardjones.com/"
                                growthLabels={[2019]}
                                growthData={[47000]}
                                ratings={3.9}
                                jobPage="https://careers.edwardjones.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <EJIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Creative", "Support", "HR", "Administrative", "Technology", "Finance", "Sales & BD", "Retail", "Other", "Operations", "Marketing & PR"]}
                                    series={[0, 0.1, 0.1, 5.7, 0.7, 92.4, 0.1, 0.3, 0.5, 0.1, 0.1]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <EJIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {/*<RevenueBar
                                labels={["2016", "2018", "2019"]}
                                revenueData={[33820000000, 43280000000, 47020000000]}
                                netIncomeData={[5410000000, 6920000000, 6760000000]}
                                gpmData={[88.97, 85.46, 85.03]}
                            />*/}
                            <SalaryBar
                                labels={["Finance Advisor", "Office Administrator", "Technical Specialist II", "Support Specialist", "Systems Administrator"]}
                                salaryData={[56727, 40460, 57684, 49006, 80979]}
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

export default EJInfo;