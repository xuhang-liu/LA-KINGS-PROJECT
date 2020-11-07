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


class BSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – American International Group (AIG)</title>
                    <meta name="Description" CONTENT="American International Group (AIG) is a global insurance company. It provides a range of property casualty insurance, life insurance, retirement solutions, and other financial services to businesses and individuals. The compan delivers its portfolio of solutions through a multichannel distribution network and franchising." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-aig"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Blackstone Mortgage Trust"
                    pageDescription="How to get a job at American International Group (AIG)."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="American International Group (AIG) is a global insurance company. It provides a range of property casualty insurance, life insurance, retirement solutions, and other financial services to businesses and individuals. The compan delivers its portfolio of solutions through a multichannel distribution network and franchising."
                                type="Public"
                                founded="1919"
                                hq="New York, US"
                                website="https://www.aig.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[66400, 56400, 49800, 49600, 46000]}
                                ratings="3.3"
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
                                    labels={["Legal", "Administrative", "Support", "Marketing & PR", "other", "Creative", "Sales & BD", "Technology", "HR", "Health & Medical", "Operations", "Retail", "Finance"]}
                                    series={[4.4, 7.7, 4.1, 0.8, 40, 2.1, 4.9, 20.7, 0.5, 0.2, 2.1, 1.8, 10.7 ]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AIGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[52370000000, 49520000000, 47390000000, 49750000000]}
                                netIncomeData={[349000000, 6060000000, 61000000,3350000000]}
                                gpmData={[30.98, 39.47, 34.23, 48.94]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[125000, 92000, 60000, 107500, 95000, 117800, 137500, 155000, 65000, 110000]}
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