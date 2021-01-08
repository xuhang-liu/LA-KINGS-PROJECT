import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AllstateIQ from './../interviewQuestions/AllstateIQ';
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


class AllstateInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Allstate</title>
                    <meta name="Description" CONTENT="Allstate is a company operating as a personal lines property and casualty insurer. It works across seven segments: Allstate Protection, Service Businesses, Allstate Life, Allstate Benefits, Allstate Annuities, Discontinued Lines and Coverages, and Corporate and Other. The Allstate Protection segment offers private passenger auto, homeowners, other personal lines, and commercial insurance through agencies, contact centers, and online. The Service Businesses segment includes Allstate Protection Plans, Allstate Dealer Services, Allstate Roadside Services, Arity, and Allstate Identity Protection. The Allstate Life segment provides traditional, interest-sensitive, and variable life insurance products. The Allstate Benefits segment offers voluntary benefits products, including life, accident, critical illness, short-term disability, and other health insurance products. The Allstate Annuities segment consists of deferred fixed annuities and immediate fixed annuities (including standard and substandard structured settlements) in a run-off. The Discontinued Lines and Coverages relate to property and casualty insurance policies written during the 1960s through the mid-1980s with exposure to asbestos, environmental, and other claims in the run-off. The Corporate and Other segment includes holding company activities and certain non-insurance operations." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/allstate"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Allstate"
                    pageDescription="How to get a job at Allstate."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Allstate is a company operating as a personal lines property and casualty insurer. It works across seven segments: Allstate Protection, Service Businesses, Allstate Life, Allstate Benefits, Allstate Annuities, Discontinued Lines and Coverages, and Corporate and Other. The Allstate Protection segment offers private passenger auto, homeowners, other personal lines, and commercial insurance through agencies, contact centers, and online. The Service Businesses segment includes Allstate Protection Plans, Allstate Dealer Services, Allstate Roadside Services, Arity, and Allstate Identity Protection. The Allstate Life segment provides traditional, interest-sensitive, and variable life insurance products. The Allstate Benefits segment offers voluntary benefits products, including life, accident, critical illness, short-term disability, and other health insurance products. The Allstate Annuities segment consists of deferred fixed annuities and immediate fixed annuities (including standard and substandard structured settlements) in a run-off. The Discontinued Lines and Coverages relate to property and casualty insurance policies written during the 1960s through the mid-1980s with exposure to asbestos, environmental, and other claims in the run-off. The Corporate and Other segment includes holding company activities and certain non-insurance operations."
                                type="Public"
                                founded="1931"
                                hq="Northbrook, IL, US"
                                website="https://www.allstate.com"
                                growthLabels={[2019]}
                                growthData={[45780]}
                                ratings={3.5}
                                jobPage="https://www.allstate.com/careers.aspx"
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
                            <AllstateIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[37399000000, 39407000000, 39815000000, 44675000000]}
                                netIncomeData={[1761000000, 3438000000, 2012000000, 4678000000]}
                                gpmData={[33.68, 37.93, 36.19, 40.34]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Consulting", "Engineering", "Information technology", "Marketing"]}
                                salaryData={[41000, 76000, 68000, 70000, 67000]}
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

export default AllstateInfo;