import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
import AIGIP from './../interviewProcess/AIGIP';
import AIGIQ from './../interviewQuestions/AIGIQ';
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


class MSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Morgan Stanley</title>
                    <meta name="Description" CONTENT="Morgan Stanley is a global financial services firm that advises, originates, trades, manages, and distributes capital. It operates in three business segments: Institutional Securities, Wealth Management, and Investment Management. The Institutional Securities segment provides institutions with capital raising and financial advisory services in the areas of mergers and acquisitions, restructurings, real estate and project finance, and corporate lending. The segment also encompasses the Equities and the Fixed Income divisions of the firm. The Wealth Management segment provides brokerage, investment advisory, and financial and wealth planning services. The Investment Management provides asset management products and services in equity, fixed income, alternative investments, real estate investment, and private equity to institutional and retail clients through third-party retail distribution channels, intermediaries, and Morgan Stanley's institutional distribution channel." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-aig"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Morgan Stanley"
                    pageDescription="How to get a job at Morgan Stanley."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Morgan Stanley is a global financial services firm that advises, originates, trades, manages, and distributes capital. It operates in three business segments: Institutional Securities, Wealth Management, and Investment Management. The Institutional Securities segment provides institutions with capital raising and financial advisory services in the areas of mergers and acquisitions, restructurings, real estate and project finance, and corporate lending. The segment also encompasses the Equities and the Fixed Income divisions of the firm. The Wealth Management segment provides brokerage, investment advisory, and financial and wealth planning services. The Investment Management provides asset management products and services in equity, fixed income, alternative investments, real estate investment, and private equity to institutional and retail clients through third-party retail distribution channels, intermediaries, and Morgan Stanley's institutional distribution channel."
                                type="Public"
                                founded="1935"
                                hq="New York, US"
                                website="https://www.morganstanley.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[55311, 57633, 60348, 60431]}
                                ratings={3.9}
                                jobPage="https://www.morganstanley.com/people"
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
                                    labels={["Legal", "Creative", "Health & Medical", "Administrative", "Sales & BD", "Support", "Operations", "Technology", "Retail", "Marketing & PR", "HR", "Finance", "Other"]}
                                    series={[0.1, 0.1, 7.4, 1.5, 3.4, 8.4, 6.8, 35.2, 3.8, 0.7, 1.2, 15.9, 15.3 ]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AIGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[43640000000, 50190000000, 53820000000]}
                                netIncomeData={[6220000000, 8880000000, 9240000000]}
                                gpmData={[86.95, 79.91, 76.95]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[62284, 92832, 100078, 75297, 109536, 86911, 111000, 73299, 68000, 83223]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:'auto', marginTop: "5%"}}>
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

export default MSInfo;