import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BSIQ from './../interviewQuestions/AIGIQ';
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


class BSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Blackstone Mortgage Trust</title>
                    <meta name="Description" CONTENT="Blackstone Mortgage Trust, Inc. is a real estate finance company that originates and acquires senior loans collateralized by properties in North America and Europe. The Company is focused on originating or acquiring senior, floating rate mortgage loans that are secured by a first priority mortgage on commercial real estate assets primarily in the office, lodging, retail, residential, and industrial sectors in North America and Europe. These investments may be in the form of whole loans or may also include pari passu participations within mortgage loans. Blackstone also originates and acquires fixed rate loans and subordinate loans, including subordinate mortgage interests and mezzanine loans." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-bs"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Blackstone Mortgage Trust"
                    pageDescription="How to get a job at Blackstone Mortgage Trust."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Blackstone Mortgage Trust, Inc. is a real estate finance company that originates and acquires senior loans collateralized by properties in North America and Europe. The Company is focused on originating or acquiring senior, floating rate mortgage loans that are secured by a first priority mortgage on commercial real estate assets primarily in the office, lodging, retail, residential, and industrial sectors in North America and Europe. These investments may be in the form of whole loans or may also include pari passu participations within mortgage loans. Blackstone also originates and acquires fixed rate loans and subordinate loans, including subordinate mortgage interests and mezzanine loans."
                                type="Subsidiary"
                                founded="1966"
                                hq="New York, US"
                                website="http://www.blackstonemortgagetrust.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[2060, 2240, 2360, 2615, 2905]}
                                ratings={3.9}
                                jobPage="https://www.blackstone.com/careers/why-blackstone/"
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
                                    series={[100]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BSIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[5146000000, 7145000000, 6833000000, 7338000000]}
                                netIncomeData={[1040000000, 1471000000, 1542000000,2050000000]}
                                gpmData={[100, 100, 100, 100]}
                            />
                            <SalaryBar
                                labels={["Finance & Accounting", "Research & Science", "Business", "Administrative", "Engineering", "Sales", "Customer Services"]}
                                salaryData={[101000, 124000, 112000, 95000, 113000, 101000, 85000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "5%", marginTop: "5%"}}>
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

export default BSInfo;