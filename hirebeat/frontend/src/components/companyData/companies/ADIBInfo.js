import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ADIBIQ from './../interviewQuestions/ADIBIQ';
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


class ADIBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Abu Dhabi Islamic Bank</title>
                    <meta name="Description" CONTENT="ADIB is committed to being a responsible corporate citizen and to managing its business in a way that creates value for customers, shareholders, employees and the communities in which it operates." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/abu-dhabi-islamic-bank"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Abu Dhabi Islamic Bank"
                    pageDescription="How to get a job at Abu Dhabi Islamic Bank."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="ADIB is committed to being a responsible corporate citizen and to managing its business in a way that creates value for customers, shareholders, employees and the communities in which it operates."
                                type="Public"
                                founded="1997"
                                hq="Abu Dhabi, United Arab Emirates"
                                website="https://www.adib.ae/"
                                growthLabels={[2020]}
                                growthData={[5506]}
                                ratings={3.4}
                                jobPage="https://www.adib.ae/en/Pages/Careers.aspx"
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
                            <ADIBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[1390000000, 1460000000, 1530000000, 1570000000, 1610000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Compliance Officer", "Assistant Manager", "Credit Analyst", "Big Data Analytics", "Senior BI Analyst", "Sales"]}
                                salaryData={[28000, 98000, 23000, 137000, 59000, 44000]}
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

export default ADIBInfo;