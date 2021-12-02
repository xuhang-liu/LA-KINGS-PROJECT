import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import MassmutualIQ from './../interviewQuestions/MassmutualIQ';
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


class MassmutualInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data –Massmutual</title>
                    <meta name="Description" CONTENT="Massachusetts Mutual Life Insurance Company (MassMutual) is a mutual life insurance company. It provides financial products such as life insurance, disability income insurance, long-term care insurance, retirement/401(k) plan services, and annuities" ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/massmutual"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Massmutual"
                    pageDescription="How to get a job at Massmutual."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Massachusetts Mutual Life Insurance Company (MassMutual) is a mutual life insurance company. It provides financial products such as life insurance, disability income insurance, long-term care insurance, retirement/401(k) plan services, and annuities"
                                type="Private"
                                founded="1851"
                                hq="Springfield, MA"
                                website="https://www.massmutual.com/"
                                growthLabels={[2021]}
                                growthData={[11569]}
                                ratings={3.9}
                                jobPage="https://www.massmutual.com/about-us/careers"
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
                            <MassmutualIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[26100000000,32500000000, 32600000000]}
                                netIncomeData={[137000000, 716000000, 524000000]}
                                gpmData={[22, 18, 20]}
                            />
                            <SalaryBar
                                labels={["Executive assistant", "Business system analyst", "Consultant", "Customer services representative", "Informatica developer"]}
                                salaryData={[67999, 87655, 84285, 40010, 105474]}
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

export default MassmutualInfo;