import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ECIQ from './../interviewQuestions/ECIQ';
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


class ECInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Evercore</title>
                    <meta name="Description" CONTENT="Evercore is a global independent investment banking advisory firm. The Firm's Investment Banking business advises its clients on mergers and acquisitions, divestitures, restructurings, financings, public offerings, private placements and other strategic transactions and also provides institutional investors with macro and fundamental equity research, sales and trading execution. Evercore’s Investment Management business comprises wealth management, institutional asset management and private equity investing." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Evercore"
                    pageDescription="How to get a job at Evercore."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Evercore is a global independent investment banking advisory firm. The Firm's Investment Banking business advises its clients on mergers and acquisitions, divestitures, restructurings, financings, public offerings, private placements and other strategic transactions and also provides institutional investors with macro and fundamental equity research, sales and trading execution. Evercore’s Investment Management business comprises wealth management, institutional asset management and private equity investing."
                                type="Public"
                                founded="1995"
                                hq="New York, US"
                                website="https://www.evercore.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[1400, 1475, 1600, 1700, 1900]}
                                ratings={3.8}
                                jobPage="https://www.evercore.com/join-our-team/"
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
                                    labels={["Retail", "Technology", "Finance"]}
                                    series={[33.3, 33.3, 33.3]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <ECIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[1456000000, 1724000000, 2083000000, 2028000000]}
                                netIncomeData={[107000000, 126000000, 377000000, 297000000]}
                                gpmData={[100, 99.19, 99.42, 99.41]}
                            />
                            <SalaryBar
                                labels={["Research & Science", "Finance & Accounting", "Business", "Administrative", "HR", "Information Technology"]}
                                salaryData={[165000, 175000, 192000, 63000, 83000, 87000]}
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

export default ECInfo;