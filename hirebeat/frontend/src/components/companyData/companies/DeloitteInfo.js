import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import DeloitteIQ from './../interviewQuestions/DeloitteIQ';
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


class DeloitteInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Deloitte</title>
                    <meta name="Description" CONTENT="Deloitte (also known as Deloitte Touche Tohmatsu) operates as a global professional services network. It offers audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. The company serves the energy, financial, government, public, life sciences and healthcare, technology, media, and telecommunications industries." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/deloitte"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Deloitte"
                    pageDescription="How to get a job at Deloitte."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Deloitte (also known as Deloitte Touche Tohmatsu) operates as a global professional services network. It offers audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. The company serves the energy, financial, government, public, life sciences and healthcare, technology, media, and telecommunications industries."
                                type="Private"
                                founded="1845"
                                hq="London, GB"
                                website="https://www2.deloitte.com/"
                                growthLabels={[2020]}
                                growthData={[334800]}
                                ratings={3.9}
                                jobPage="https://www2.deloitte.com/us/en/pages/careers/topics/careers.html?icid=top_careers"
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
                            <DeloitteIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2020"]}
                                revenueData={[47600000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Consulting", "Engineering", "Information technology", "Marketing"]}
                                salaryData={[60000, 65000, 72000, 62000, 68000]}
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

export default DeloitteInfo;