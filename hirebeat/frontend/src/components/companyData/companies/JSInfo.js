import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
import JSIQ from './../interviewQuestions/JSIQ';
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


class JSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Jane Street Capital</title>
                    <meta name="Description" CONTENT="Jane Street is a company that trades financial products and specializes in exchange-traded funds (ETFs). It also trades equities, futures, commodities, options, bonds, currencies. The company also publishes market structure and ETF strategy reports." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata/jane-street-capital"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Jane Street Capital"
                    pageDescription="How to get a job at Jane Street Capital."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Jane Street is a company that trades financial products and specializes in exchange-traded funds (ETFs). It also trades equities, futures, commodities, options, bonds, currencies. The company also publishes market structure and ETF strategy reports."
                                type="Private"
                                founded="2000"
                                hq="New York, US"
                                website="https://www.janestreet.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[600, 750, 800, 900, 868]}
                                ratings={4.8}
                                jobPage="https://www.janestreet.com/join-jane-street/"
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
                                    labels={["Employees"]}
                                    series={[868]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JSIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2019", "2020"]}
                                revenueData={[154100000, 162580000]}
                                netIncomeData={[0,0]}
                                gpmData={[0,0]}
                            />
                            <SalaryBar
                                labels={["Trader", "Assist Trader", "Quantitative Trader", "Quantitative", "Trading Intern", "Accountant", "Software Engineer", "Trading Desk", "Analyst", "Software Developer"]}
                                salaryData={[176470, 157341, 143866, 176723, 130228, 134000, 178554, 134007, 193223, 160040]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginTop: "5%", marginLeft:"auto", marginRight:'auto'}}>
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

export default JSInfo;