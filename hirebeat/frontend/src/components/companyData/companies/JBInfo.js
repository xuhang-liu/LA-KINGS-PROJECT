import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import JBIQ from './../interviewQuestions/JBIQ';
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


class JBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Julius Baer</title>
                    <meta name="Julius Baer is the leading Swiss private banking group, with a focus on servicing and advising sophisticated private clients and a premium brand in global wealth management. Julius Baer’s total client assets amounted to CHF 385 billion at the end of 2015, including CHF 300 billion of assets under management. Bank Julius Baer & Co. Ltd., the renowned Swiss private bank with origins dating back to 1890, is the principal operating company of Julius Baer Group Ltd., whose shares are listed on the SIX Swiss Exchange (ticker symbol: BAER) and are included in the Swiss Market Index (SMI), comprising the 20 largest and most liquid Swiss stocks. Julius Baer employs a staff of over 5,000, including more than 1,200 relationship managers, and is present in over 25 countries and more than 50 locations. Headquartered in Zurich, we have offices in key locations including Dubai, Frankfurt, Geneva, Hong Kong, London, Lugano, Monaco, Montevideo, Moscow, Mumbai, Singapore and Tokyo. Our client-centric approach, our objective advice based on a unique open product platform, our very strong financial base and our entrepreneurial management culture make us the international reference in private banking. For more information visit our website at www.juliusbaer.com" ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/julius-baer"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Julius Baer"
                    pageDescription="How to get a job at Julius Baer."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Julius Baer is the leading Swiss private banking group, with a focus on servicing and advising sophisticated private clients and a premium brand in global wealth management. Julius Baer’s total client assets amounted to CHF 385 billion at the end of 2015, including CHF 300 billion of assets under management. Bank Julius Baer & Co. Ltd., the renowned Swiss private bank with origins dating back to 1890, is the principal operating company of Julius Baer Group Ltd., whose shares are listed on the SIX Swiss Exchange (ticker symbol: BAER) and are included in the Swiss Market Index (SMI), comprising the 20 largest and most liquid Swiss stocks. Julius Baer employs a staff of over 5,000, including more than 1,200 relationship managers, and is present in over 25 countries and more than 50 locations. Headquartered in Zurich, we have offices in key locations including Dubai, Frankfurt, Geneva, Hong Kong, London, Lugano, Monaco, Montevideo, Moscow, Mumbai, Singapore and Tokyo. Our client-centric approach, our objective advice based on a unique open product platform, our very strong financial base and our entrepreneurial management culture make us the international reference in private banking. For more information visit our website at www.juliusbaer.com"
                                type="Public"
                                founded="1890"
                                hq="Zürich, CH"
                                website="https://www.juliusbaer.com/"
                                growthLabels={[2019]}
                                growthData={[6639]}
                                ratings={4.2}
                                jobPage="https://www.juliusbaer.com/en/careers/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <RJIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Administrative", "Sales & BD", "Support", "Technology", "Finance", "Other"]}
                                    series={[3, 15.2, 3, 21.2, 21.2, 36.4]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {/*<RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[79234000000, 80790000000, 79219000000, 46047000000]}
                                netIncomeData={[7035000000, 8562000000, 6630000000, 5896000000]}
                                gpmData={[68.98， 70.79, 69.9, 74.88]}
                            />*/}
                            <SalaryBar
                                labels={["Portfolio Analyst", "Quantitative Analyst", "Department Head", "Chief Information Officer"]}
                                salaryData={[102000, 103000, 134000, 266000]}
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

export default JBInfo;