import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import JLLPIQ from './../interviewQuestions/JLLPIQ';
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


class JLLPInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – JLL Partners</title>
                    <meta name="Description" CONTENT="Founded in 1988, JLL Partners is among the leading private equity investment firms in the country. Since inception, we have managed a series of private equity funds aggregating approximately $4 billion in committed capital. JLL seeks to make control equity investments in middle market companies by extricating good companies from complicated situations and bad balance sheets, or by building strong companies in partnership with exceptional managers." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/jll-partners"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="JLL Partners"
                    pageDescription="How to get a job at JLL Partners."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Founded in 1988, JLL Partners is among the leading private equity investment firms in the country. Since inception, we have managed a series of private equity funds aggregating approximately $4 billion in committed capital. JLL seeks to make control equity investments in middle market companies by extricating good companies from complicated situations and bad balance sheets, or by building strong companies in partnership with exceptional managers."
                                type="Private"
                                founded="1988"
                                hq="New York, US"
                                website="https://www.jllpartners.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[114, 100, 95, 115]}
                                ratings={3.9}
                                jobPage="https://www.linkedin.com/company/jll-partners"
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
                                    labels={["Employee"]}
                                    series={[115]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JLLPIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2020"]}
                                revenueData={[197420000]}
                                netIncomeData={[0]}
                                gpmData={[0]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Manager", "Engineer"]}
                                salaryData={[38000, 125175, 65000, 37000]}
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

export default JLLPInfo;