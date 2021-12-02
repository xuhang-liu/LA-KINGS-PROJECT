import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import HuronIQ from './../interviewQuestions/HuronIQ';
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


class HuronInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Huron</title>
                    <meta name="Description" CONTENT="Huron Consulting Group is a global professional services firm. Huron helps clients accelerate operational, digital, and cultural transformation. The firm specializes in serving clients in the healthcare, higher education, life sciences, and commercial sectors" ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/huron"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Huron"
                    pageDescription="How to get a job at Huron."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Huron Consulting Group is a global professional services firm. Huron helps clients accelerate operational, digital, and cultural transformation. The firm specializes in serving clients in the healthcare, higher education, life sciences, and commercial sectors"
                                type="Public"
                                founded="2002"
                                hq="Chicago, IL"
                                website="https://www.huronconsultinggroup.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={4.4}
                                jobPage="https://www.huronconsultinggroup.com/company/careers"
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
                            <HuronIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[797980000, 807750000, 878000000, 965470000]}
                                netIncomeData={[37620000, 170120000, 13650000, 41470000]}
                                gpmData={[34.28, 33, 30.67, 40.38]}
                            />
                            <SalaryBar
                                labels={["Healthcare Consultant", "Software Engineer", "Consulting Manager", "Clinical Research Specialist", "Consulting Analyst"]}
                                salaryData={[84954, 68461, 129674, 58295, 69740]}
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

export default HuronInfo;