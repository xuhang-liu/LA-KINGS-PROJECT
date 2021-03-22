import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import SunLifeFinancialIQ from './../interviewQuestions/SunLifeFinancialIQ';
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


class SunLifeFinancialInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data –Sun Life Financial</title>
                    <meta name="Description" CONTENT="Sun Life Financial is an international financial services company providing insurance, wealth, and asset management solutions to individuals, businesses, and institutions. It offers life, health, wellness, disability, critical illness, stop-loss, and long-term care insurance. The company also provides mutual funds, segregated funds, annuities, guaranteed investment products, financial planning, retirement planning services, pooled funds, institutional portfolios, and pension funds." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/sun-life-financial"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Sun Life Financial"
                    pageDescription="How to get a job at Sun Life Financial."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Sun Life Financial is an international financial services company providing insurance, wealth, and asset management solutions to individuals, businesses, and institutions. It offers life, health, wellness, disability, critical illness, stop-loss, and long-term care insurance. The company also provides mutual funds, segregated funds, annuities, guaranteed investment products, financial planning, retirement planning services, pooled funds, institutional portfolios, and pension funds."
                                type="Public"
                                founded="1865"
                                hq="Toronto, CA"
                                website="https://www.sunlife.com/"
                                growthLabels={[2018]}
                                growthData={[22318]}
                                ratings={3.8}
                                jobPage="https://www.sunlife.com/en/careers/"
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
                            <SunLifeFinancialIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[28600000000, 29300000000, 27000000000, 39700000000]}
                                netIncomeData={[2800000000, 2500000000, 2500000000, 2900000000]}
                                gpmData={[47, 48, 41, 56]}
                            />
                            <SalaryBar
                                labels={["Administrative assistant", "Business system analyst", "Consultant", "Client relationship", "Software engineer"]}
                                salaryData={[43852, 84109, 68245, 69378, 105799]}
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

export default SunLifeFinancialInfo;