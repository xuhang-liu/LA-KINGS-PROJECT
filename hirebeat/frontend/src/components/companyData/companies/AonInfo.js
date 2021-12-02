import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AonIQ from './../interviewQuestions/AonIQ';
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


class AonInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Aon</title>
                    <meta name="Description" CONTENT="Aon is a professional services company providing a range of risk, retirement, and health solutions. It offers commercial risk solutions, including risk advisory, risk transfer, and structured solutions; reinsurance solutions, such as risk transfer, claims advocacy, and capital management solutions; retirement solutions, including actuarial, investment, and bundled retirement solutions; and health solutions, such as consulting, global benefits, and exchange solutions." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/aon"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Aon"
                    pageDescription="How to get a job at Aon."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Aon is a professional services company providing a range of risk, retirement, and health solutions. It offers commercial risk solutions, including risk advisory, risk transfer, and structured solutions; reinsurance solutions, such as risk transfer, claims advocacy, and capital management solutions; retirement solutions, including actuarial, investment, and bundled retirement solutions; and health solutions, such as consulting, global benefits, and exchange solutions."
                                type="Public"
                                founded="1982"
                                hq="London, United Kingdom"
                                website="https://www.aon.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.8}
                                jobPage="https://jobs.aon.com/"
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
                            <AonIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[10000000000, 10800000000, 11000000000]}
                                netIncomeData={[1300000000, 1200000000, 1600000000]}
                                gpmData={[40.5, 42, 44.5]}
                            />
                            <SalaryBar
                                labels={["Engineering", "Marketing", "Finance", "Technology", "Sales"]}
                                salaryData={[97000, 81000, 71000, 89000, 55000]}
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

export default AonInfo;