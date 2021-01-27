import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BainIQ from './../interviewQuestions/BainIQ';
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


class BainInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Bain & Company</title>
                    <meta name="Description" CONTENT="Bain & Company is a management consulting company providing solutions to change management, strategies, and technology. It delivers consulting services in advanced analytics, agile, changing direction, corporate finance, customer strategy and marketing, digital, information technology, mergers and acquisitions, operations, organization, performance improvement, private equity, strategy, sustainability, and transformation." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/bain"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Bain & Company"
                    pageDescription="How to get a job at Bain & Company."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Bain & Company is a management consulting company providing solutions to change management, strategies, and technology. It delivers consulting services in advanced analytics, agile, changing direction, corporate finance, customer strategy and marketing, digital, information technology, mergers and acquisitions, operations, organization, performance improvement, private equity, strategy, sustainability, and transformation."
                                type="Private"
                                founded="1973"
                                hq="Boston, MA"
                                website="https://www.bain.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.6}
                                jobPage="https://www.bain.com/careers/"
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
                            <BainIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[2300000000, 3400000000, 4300000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Creative", "Finance", "Marketing & PR", "Operations", "Technology"]}
                                salaryData={[150000, 95000, 90000, 155000, 200000]}
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

export default BainInfo;