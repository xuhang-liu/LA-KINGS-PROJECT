import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import LazardIQ from './../interviewQuestions/LazardIQ';
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


class LazardInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Lazard</title>
                    <meta name="Description" CONTENT="Lazard Info"></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Lazard"
                    pageDescription="How to get a job at Lazard."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Lazard operates as a financial advisory and asset management firm worldwide. Its Financial Advisory segment offers various financial advisory services regarding mergers and acquisitions and other strategic matters, restructurings, capital structure, capital raising, corporate preparedness, and various other financial matters. This segment serves corporate, partnership, institutional, government, sovereign, and individual clients. The company's Asset Management segment offers a range of investment solutions and investment management services in equity and fixed income strategies; and alternative investments and private equity funds to corporations, public funds, sovereign entities, endowments and foundations, labor funds, financial intermediaries, and private clients."
                                type="Public"
                                founded="1848"
                                hq="Hamilton, BM"
                                website="https://www.lazard.com/"
                                growthLabels={[2018, 2019]}
                                growthData={[2996, 3018]}
                                ratings={3.9}
                                jobPage="https://www.lazard.com/careers/"
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
                                    labels={["Support", "Technology", "Finance", "Other"]}
                                    series={[4.5, 13.6, 50, 31.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <LazardIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[2826000000, 2587000000, 2409000000]}
                                netIncomeData={[527000000, 287000000, 289000000]}
                                gpmData={[100, 100, 100]}
                            />}
                            <SalaryBar
                                labels={["Investment Banking Analyst", "Financial Analyst", "Quantitative Analyst", "Business Analyst", "Managing Director" ]}
                                salaryData={[144276, 87461, 114000, 95000, 110000]}
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

export default LazardInfo;