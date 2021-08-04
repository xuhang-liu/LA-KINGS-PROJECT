import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactWOW from 'react-wow';
import FreeTrialArea from "./FreeTrialArea";
import Footer from "../layout/Footer";
import MediaQuery from 'react-responsive';

class IntergrationPage extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Integration Page',
            description: "Integration Page Info",
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'recruitment, one-way interview, recruiting, hiring, talent sourcing, resume parsing'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    {/* Title */}
                    <div>
                        <MediaQuery minDeviceWidth={1224}>
                            <div className="page-title-area2 min-width-1290">
                                <div className="container">
                                    <div className="page-title-content">
                                        <h1>
                                            Partners and Integrations
                                        </h1>
                                        <p>
                                            We partner with the most popular tools and platforms in Recruiting and HR to make <br />
                                            your hiring experience simpler and more productive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                            <div className="page-title-area2">
                                <div className="container">
                                    <div className="page-title-content">
                                        <h1>
                                            Partners and Integrations
                                        </h1>
                                        <p>
                                            We partner with the most popular tools and platforms in Recruiting and HR to make <br />
                                            your hiring experience simpler and more productive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                    </div>
                    <div className="features-area pt-100 pb-70" style={{ backgroundColor: "#f4f5fd" }}>
                        <div className="container-fluid max-width-1440 ">
                            <div className="text-center">
                                <h3 style={{ fontSize: "3rem", fontWeight: "600", color: "#67a3f3" }}>
                                    Our Partners
                                </h3>
                            </div>
                        </div>
                    </div>
                    <ReactWOW>
                        <div className="overview-item pt-100 pb-70" style={{ backgroundColor: "#f4f5fd", marginBottom: "0" }}>
                            <div className="container max-width-1440">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="overview-content pl-3">
                                            <h3 style={{ fontSize: "2.25rem" }}>Job Advertising</h3>
                                            <p>
                                                Post and broadcast your jobs across <br />
                                                multiple channels and increase your <br />
                                                pool of qualified candidates with just <br />
                                                one click.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="overview-right-img">
                                            <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/employer-partner-intergration1.png' alt="png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    <ReactWOW>
                        <div className="overview-item pt-100 pb-70" style={{ backgroundColor: "#f4f5fd", marginBottom: "0" }}>
                            <div className="container max-width-1440">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="overview-content pl-3">
                                            <h3 style={{ fontSize: "2.25rem" }}>ATS integration</h3>
                                            <p>
                                                Maximize synergy and business <br />
                                                agility with a quick integration <br />
                                                between your current Applicant <br />
                                                Tracking System and our recruiting <br />
                                                applications.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="overview-right-img">
                                            <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/employer-partner-intergration2.png' alt="png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MediaQuery minDeviceWidth={1224}>
                            <a target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/hirebeat" className="default-btn" style={{paddingLeft:"25px", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none", top:"6rem", left:"42%"}}>Become an Integrations Partner</a>
                            </MediaQuery>
                            <MediaQuery maxDeviceWidth={1223}>
                            <a target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/hirebeat" className="default-btn" style={{paddingLeft:"25px", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none", top:"3rem", left:"20%"}}>Become an Integrations Partner</a>
                            </MediaQuery>
                        </div>
                    </ReactWOW>
                    <div className="features-area pt-100 pb-70 mt-5">
                        <div className="container-fluid max-width-1440 ">
                            <div className="text-center">
                                <h3 style={{ fontSize: "3rem", fontWeight: "600", color: "#090d3a" }}>
                                    Integration with ATS
                                </h3>
                                <p style={{ color: "#090d3a" }}>
                                    Already on a different ATS but still wants to leverage some cool HireBeat features?<br/>
                                    No worries! We integrate with most ATS in the market to make your hiring workflow frictionless.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ReactWOW>
                        <div className="overview-item pt-100 pb-70">
                            <div className="container max-width-1440">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="overview-content pl-3">
                                            <p style={{ color: "#090d3a" }}>
                                                Here is an example of integrating our One-way <br />
                                                video interview feature with your ATS:
                                            </p>
                                            <p style={{ color: "#090d3a", marginTop:"1rem" }}>
                                                1. Go to your HireBeat <span style={{color:"#ff6b00"}}>dashboard</span> and click on Integration. 
                                            </p>
                                            <p style={{ color: "#090d3a", marginTop:"0.5rem"}}>
                                                2. Select your <span style={{color:"#ff6b00"}}>current ATS</span> and log into your account. 
                                            </p>
                                            <p style={{ color: "#090d3a", marginTop:"0.5rem"}}>
                                                3. Choose <span style={{color:"#ff6b00"}}>the job and job stage</span> to import all the candidates you wish to conduct a one-way video interview. Voila! You are all set! 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="overview-right-img">
                                            <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/employer-partner-intergration3.png' alt="png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    <ReactWOW>
                        <div className="overview-item pt-100 pb-70">
                            <div className="container max-width-1440">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-8">
                                        <div className="overview-content pl-3">
                                            <h3 style={{ fontSize: "2.25rem" }}>Is my data safe?</h3>
                                            <p style={{ color: "#090d3a" }}>
                                                Yes! Our SOC 2 Type II certified partner handles the data to ensure <br />
                                                your data is encrypted at rest and in transit. <br/>
                                                PII is protected with an additional layer of application encryption.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="overview-right-img">
                                            <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/employer-partner-intergration4.png' alt="png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                    <FreeTrialArea />
                    <Footer />
                </React.Fragment>
            </DocumentMeta>
        )
    }
}

export default IntergrationPage;