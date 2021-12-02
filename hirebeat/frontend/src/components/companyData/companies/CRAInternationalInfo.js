import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CRAInternationalIQ from './../interviewQuestions/CRAInternationalIQ';
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


class CRAInternationalInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – CRA International</title>
                    <meta name="Description" CONTENT="CRA International provides economic, financial, and management consulting services, such as economic capability, analyses, and testimony in areas such as antitrust & competition, damages & valuation, financial accounting & valuation, monetary economics, forensic & cyber investigations, insurance economics, intellectual property, international arbitration, labor & employment, mergers & acquisitions, regulatory economics & compliance, securities & financial markets, and transfer pricing." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/cra-international"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="CRA International"
                    pageDescription="How to get a job at CRA International."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="CRA International provides economic, financial, and management consulting services, such as economic capability, analyses, and testimony in areas such as antitrust & competition, damages & valuation, financial accounting & valuation, monetary economics, forensic & cyber investigations, insurance economics, intellectual property, international arbitration, labor & employment, mergers & acquisitions, regulatory economics & compliance, securities & financial markets, and transfer pricing."
                                type="Public"
                                founded="1965"
                                hq="Boston, MA"
                                website="https://www.crai.com/"
                                growthLabels={[2019]}
                                growthData={[799]}
                                ratings={4.5}
                                jobPage="https://www.crai.com/careers/"
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
                            <CRAInternationalIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[324780000, 370080000, 417650000]}
                                netIncomeData={[14200000, 7600000, 22500000]}
                                gpmData={[30, 30, 31]}
                            />
                            <SalaryBar
                                labels={["Executive assistant", "Consulting associate", "Principal", "Benefits Specialist", "Benefits manager"]}
                                salaryData={[73684, 102578, 230510, 62984, 114327]}
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

export default CRAInternationalInfo;