import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ForresterResearchIQ from './../interviewQuestions/ForresterResearchIQ';
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


class ForresterResearchInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Forrester Research</title>
                    <meta name="Description" CONTENT="Forrester Research is a market research, data, and advisory company. It offers products, services, and engagement opportunities, which fall into five categories: Research, Connect (peer offerings and certifications), Analytics, Consulting, and Events." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/forrester-research"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Forrester Research"
                    pageDescription="How to get a job at Forrester Research."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Forrester Research is a market research, data, and advisory company. It offers products, services, and engagement opportunities, which fall into five categories: Research, Connect (peer offerings and certifications), Analytics, Consulting, and Events."
                                type="Public"
                                founded="1983"
                                hq="Cambridge, MA"
                                website="https://go.forrester.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={4.4}
                                jobPage="https://go.forrester.com/careers/"
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
                            <ForresterResearchIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2014", "2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[312060000, 313730000, 326100000, 337670000, 357580000, 461700000]}
                                netIncomeData={[10870000, 12000000, 17650000, 15140000, 15380000, 9570000]}
                                gpmData={[59.56, 59.75, 60.69, 59.47, 59.03, 57.39]}
                            />
                            <SalaryBar
                                labels={["Finance", "Marketing & PR", "Technology"]}
                                salaryData={[170000, 154000, 100000]}
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

export default ForresterResearchInfo;