import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import PerficientIQ from './../interviewQuestions/PerficientIQ';
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


class PerficientInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Perficient</title>
                    <meta name="Description" CONTENT="Perficient is a company operating as a digital consultancy. Its solutions include custom applications, analytics, management consulting, commerce, portals and collaboration, content management, business integration, customer relationship management, business process management, platform implementations, enterprise data and business intelligence, enterprise performance management, enterprise mobile, cloud services, digital marketing, DevOps, and more. The company primarily serves large enterprise clients." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/perficient"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Perficient"
                    pageDescription="How to get a job at Perficient."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Perficient is a company operating as a digital consultancy. Its solutions include custom applications, analytics, management consulting, commerce, portals and collaboration, content management, business integration, customer relationship management, business process management, platform implementations, enterprise data and business intelligence, enterprise performance management, enterprise mobile, cloud services, digital marketing, DevOps, and more. The company primarily serves large enterprise clients."
                                type="Public"
                                founded="1997"
                                hq="Saint Louis, MO"
                                website="https://www.perficient.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={3.8}
                                jobPage="https://www.perficient.com/careers"
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
                            <PerficientIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[486980000, 485260000, 498380000, 565530000]}
                                netIncomeData={[20460000, 18580000, 24560000, 37130000]}
                                gpmData={[31.06, 33.28, 35.83, 37.37]}
                            />
                            <SalaryBar
                                labels={["Marketing &PR", "Operations", "Sales &BD", "Support", "Technology"]}
                                salaryData={[165000, 97600, 77200, 87000, 120000]}
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

export default PerficientInfo;