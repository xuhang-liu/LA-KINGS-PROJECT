import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ResourcesGlobalProfessionalsIQ from './../interviewQuestions/ResourcesGlobalProfessionalsIQ';
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


class ResourcesGlobalProfessionalsInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Resources Global Professionals</title>
                    <meta name="Description" CONTENT="Resources Global Professionals (RGP) is a multinational consulting firm. The Firm offers finance and accounting services, including process transformation and optimization, financial reporting and analysis, technical and operational accounting, merger and acquisition due diligence and integration, audit readiness, preparation and response, implementation of new accounting standards, and remediation support." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/resources-global-professionals"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Resources Global Professionals"
                    pageDescription="How to get a job at Resources Global Professionals."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Resources Global Professionals (RGP) is a multinational consulting firm. The Firm offers finance and accounting services, including process transformation and optimization, financial reporting and analysis, technical and operational accounting, merger and acquisition due diligence and integration, audit readiness, preparation and response, implementation of new accounting standards, and remediation support."
                                type="Public"
                                founded="1996"
                                hq="Irvine, CA"
                                website="https://rgp.com/"
                                growthLabels={[2019]}
                                growthData={[3896]}
                                ratings={4.2}
                                jobPage="https://careers.rgp.com/"
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
                            <ResourcesGlobalProfessionalsIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019","2020"]}
                                revenueData={[583410000, 654130000, 729000000, 703350000]}
                                netIncomeData={[18700000, 18800000, 31500000, 28300000]}
                                gpmData={[38, 38, 39, 39]}
                            />
                            <SalaryBar
                                labels={["Consultant", "Client services manager", "Account manager", "Financial Reporting", "Recruiting manager"]}
                                salaryData={[132357, 94000, 99550, 82046, 89670]}
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

export default ResourcesGlobalProfessionalsInfo;