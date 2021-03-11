import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ICGInternationalIQ from './../interviewQuestions/ICGInternationalIQ';
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


class ICGInternationalInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – CRA International</title>
                    <meta name="Description" CONTENT="ICF is a consulting firm that provides professional services and technology solutions. It works across energy, environment, infrastructure, health, social programs, consumer/financial, and public safety and defense markets. The company offers services in such sectors as business process operations and optimization, data science and analytics, economic and financial analysis, enterprise technology, human capital management and training, policy and regulatory development, program management, research and evaluation, survey research." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/icg-international"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="ICG International"
                    pageDescription="How to get a job at ICG International."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="ICF is a consulting firm that provides professional services and technology solutions. It works across energy, environment, infrastructure, health, social programs, consumer/financial, and public safety and defense markets. The company offers services in such sectors as business process operations and optimization, data science and analytics, economic and financial analysis, enterprise technology, human capital management and training, policy and regulatory development, program management, research and evaluation, survey research."
                                type="Public"
                                founded="1969"
                                hq="Fairfax, VA"
                                website="https://www.icf.com/"
                                growthLabels={[2019]}
                                growthData={[6000]}
                                ratings={3.6}
                                jobPage="https://www.icf.com/careers"
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
                            <ICGInternationalIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019", "2020"]}
                                revenueData={[1200000000, 1200000000, 1300000000, 1500000000, 1500000000]}
                                netIncomeData={[46600000, 62900000, 61400000, 68900000, 55000000]}
                                gpmData={[37, 37, 36, 36, 35]}
                            />
                            <SalaryBar
                                labels={["Executive assistant", "Administrative assistant", "Graphic designer", "Business analyst", "Consultant"]}
                                salaryData={[65096, 45237, 56819, 68128, 81829]}
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

export default ICGInternationalInfo;