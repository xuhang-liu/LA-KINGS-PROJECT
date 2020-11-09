import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
import AIGIP from './../interviewProcess/AIGIP';
import AIGIQ from './../interviewQuestions/AIGIQ';
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


class MUFGInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – MUFG Americas</title>
                    <meta name="Description" CONTENT="MUFG (Mitsubishi UFJ Financial Group) is a financial group, which services include corporate banking, commercial banking, consumer banking, wealth management, investment banking, securities, capital markets, personal and corporate trust, and transaction banking." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-aig"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="MUFG Americas"
                    pageDescription="How to get a job at American MUFG Americas."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="MUFG (Mitsubishi UFJ Financial Group) is a financial group, which services include corporate banking, commercial banking, consumer banking, wealth management, investment banking, securities, capital markets, personal and corporate trust, and transaction banking."
                                type="Public"
                                founded="1864"
                                hq="New York, US"
                                website="https://www.mufgamericas.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[0, 144000, 112700, 168400]}
                                ratings={3.2}
                                jobPage="https://careers.mufgamericas.com/"
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
                                    labels={["Legal", "Administrative", "Support", "Marketing & PR", "other", "Creative", "Sales & BD", "Technology", "HR", "Operations", "Retail", "Finance"]}
                                    series={[0.4, 7.3, 3.6, 0.2, 13.2, 0.2, 3.0, 30.3, 1.3, 10.9, 2.8, 26.7 ]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AIGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[5300000000, 5200000000, 5500000000, 5800000000]}
                                netIncomeData={[922000000, 1000000000, 1000000000,751000000]}
                                gpmData={[25, 0, 0, 0]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Product Manager", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[74510, 125000, 50000, 75000, 109000, 167960, 98000, 130000, 35000, 43000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:'auto', marginTop: "5%"}}>
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

export default MUFGInfo;