import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import MDIQ from './../interviewQuestions/MDIQ';
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


class MDInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Moody's</title>
                    <meta name="Description" CONTENT="Moody's Corporation is a company providing credit ratings, research tools, and analysis that contribute to transparent and integrated financial markets. Moody’s is the parent company of Moody’s Investors Service, which provides credit ratings and research covering debt instruments and securities, and Moody’s Analytics, which offers software, advisory services, and research for credit and economic analysis, and financial risk management." >
                    </meta>
                    <link rel="canonical" href="https://app.hirebeat.co/moodys"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Moody's"
                    pageDescription="How to get a job at Moody's."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Moody's Corporation is a company providing credit ratings, research tools, and analysis that contribute to transparent and integrated financial markets. Moody’s is the parent company of Moody’s Investors Service, which provides credit ratings and research covering debt instruments and securities, and Moody’s Analytics, which offers software, advisory services, and research for credit and economic analysis, and financial risk management."
                                type="Public"
                                founded="1909"
                                hq="New York, US"
                                website="https://www.moodys.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[10600, 12000, 13000, 11000]}
                                ratings={3.8}
                                jobPage="https://careers.moodys.com/"
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
                                    labels={["Creative", "Administrative", "Sales & BD", "Support", "Operations", "Technology", "Retail", "Marketing & PR", "HR", "Finance", "other"]}
                                    series={[0.5, 6.1, 7.5, 6.1, 2.4, 27.8, 10.8, 0.5, 0.9, 12.7, 24.5]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <MDIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[4200000000, 4440000000, 4830000000]}
                                netIncomeData={[1010000000, 1320000000,1430000000]}
                                gpmData={[70.91, 71.97, 71.28]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Engineer", "Sales & BD", "Support", "Technology"]}
                                salaryData={[63623, 198964, 100246, 47000, 71774, 100000, 110000, 69000, 64000, 231000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginRight:'auto' ,marginLeft: "auto", marginTop: "5%"}}>
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

export default MDInfo;