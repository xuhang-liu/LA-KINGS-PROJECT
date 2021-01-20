import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BarclaysIQ from './../interviewQuestions/BarclaysIQ';
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


class BarclaysInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Barclays</title>
                    <meta name="Description" CONTENT="Barclays is a global consumer and wholesale bank that offers products and services across personal, corporate, investment banking, credit cards, and wealth management. The company provides consumers with a wide range of retail solutions, including current and savings accounts, loans, mortgages, insurance, and credit cards. Its corporate solutions include cash management solutions, digital banking services, trade solutions, financing, foreign exchange, card payments, investment banking, green financing, and overseas services." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/barclays"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Barclays"
                    pageDescription="How to get a job at Barclays."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Barclays is a global consumer and wholesale bank that offers products and services across personal, corporate, investment banking, credit cards, and wealth management. The company provides consumers with a wide range of retail solutions, including current and savings accounts, loans, mortgages, insurance, and credit cards. Its corporate solutions include cash management solutions, digital banking services, trade solutions, financing, foreign exchange, card payments, investment banking, green financing, and overseas services."
                                type="Public"
                                founded="1690"
                                hq="London, GB"
                                website="https://www.barclays.co.uk/"
                                growthLabels={[]}
                                growthData={[]}
                                ratings={3.9}
                                jobPage="https://search.jobs.barclays/"
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
                            <BarclaysIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[27300000000, 26800000000, 28700000000, 30000000000]}
                                netIncomeData={[2800000000, 894000000, 2400000000, 3400000000]}
                                gpmData={[70, 70, 69, 72]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Business", "Consulting", "Engineering", "Marketing"]}
                                salaryData={[120000, 108000, 90000, 98000, 86000]}
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

export default BarclaysInfo;