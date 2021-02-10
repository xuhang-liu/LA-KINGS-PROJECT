import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ZSAssociatesIQ from './../interviewQuestions/ZSAssociatesIQ';
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


class ZSAssociatesInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – ZS Associates</title>
                    <meta name="Description" CONTENT="ZS Associates is a company operating as a professional services firm. It offers business operations and technology, creative and design, growth and customer-centric marketing, consulting and customer insights, sales compensation, pipeline, launch strategy, people and performance, commercial strategy, transformation, and other services. The company serves financial services, healthcare, travel, transportation, telecommunications, media, energy, and other industries." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/zs-associates"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="ZS Associates"
                    pageDescription="How to get a job at ZS Associates."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="ZS Associates is a company operating as a professional services firm. It offers business operations and technology, creative and design, growth and customer-centric marketing, consulting and customer insights, sales compensation, pipeline, launch strategy, people and performance, commercial strategy, transformation, and other services. The company serves financial services, healthcare, travel, transportation, telecommunications, media, energy, and other industries."
                                type="Private"
                                founded="1983"
                                hq="Evanston, IL"
                                website="https://www.zs.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.9}
                                jobPage="https://www.zs.com/careers"
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
                            <ZSAssociatesIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={[]}
                                revenueData={[]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Marketing & PR", "Operations"]}
                                salaryData={[65000, 78800, 130000, 110000, 98000]}
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

export default ZSAssociatesInfo;