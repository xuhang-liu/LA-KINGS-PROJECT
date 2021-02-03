import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CornerstoneIQ from './../interviewQuestions/CornerstoneIQ';
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


class CornerstoneInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Cornerstone Research</title>
                    <meta name="Description" CONTENT="For more than twenty-five years, Cornerstone Research staff have provided economic and financial analysis in all phases of commercial litigation and regulatory proceedings. We work with a broad network of testifying experts, including prominent faculty and industry practitioners, in a unique collaboration. Our staff consultants contribute expertise in economics, finance, accounting, marketing, business acumen, familiarity with the litigation process, and a commitment to producing outstanding results. The experts with whom we work bring the specialized expertise of researchers or practitioners required to meet each assignment’s demands" ></meta>
                    <link rel="canonical" href="https://hirebeat.co/cornerstone-research"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Cornerstone Research"
                    pageDescription="How to get a job at Cornerstone Research."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="For more than twenty-five years, Cornerstone Research staff have provided economic and financial analysis in all phases of commercial litigation and regulatory proceedings. We work with a broad network of testifying experts, including prominent faculty and industry practitioners, in a unique collaboration. Our staff consultants contribute expertise in economics, finance, accounting, marketing, business acumen, familiarity with the litigation process, and a commitment to producing outstanding results. The experts with whom we work bring the specialized expertise of researchers or practitioners required to meet each assignment’s demands"
                                type="Private"
                                founded="1989"
                                hq="Menlo Park, CA"
                                website="https://www.cornerstone.com/"
                                growthLabels={[2020]}
                                growthData={[1000]}
                                ratings={4.1}
                                jobPage="https://www.cornerstone.com/Careers"
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
                            <CornerstoneIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={[]}
                                revenueData={[]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Finance", "Marketing", "Operations", "Sales & BD", "Support", "Technology"]}
                                salaryData={[77000, 95000, 180000, 165000, 120000, 120000]}
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

export default CornerstoneInfo;