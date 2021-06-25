import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactWOW from 'react-wow';
import FreeTrialArea from "./FreeTrialArea";
import Footer from "../layout/Footer";

class ProductPage extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: "Join the world's fastest-growing hiring trend with our automated interviewing platform",
            canonical: 'https://hirebeat.co/employer-product',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'automated resume matching api, online video interviewing, short list, ats, talent acquisition personality assessment'
              }
            }
        };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
            <div className="features-area pt-100 pb-100 bg-leverageHirebeat">
                <div className="container-fluid max-width-1440">
                    <div className="text-center">
                        <h1 style={{fontSize:"2.4rem", fontWeight:"600", color:"#090D3A"}}>
                        Streamline and speed up your recruiting process
                        </h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream01.png" alt="img" />
                            </div>
                            <div>
                            <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Job</h3>
                            <h3 style={{marginTop:"-2rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Posting</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream02.png" alt="img" />
                            </div>
                            <div>
                            <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem", paddingTop:"1.5rem"}}>Talent</h3>
                            <h3 style={{marginTop:"-2rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Sourcing</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream03.png" alt="img" />
                            </div>
                            <div>
                            <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Resume</h3>
                            <h3 style={{marginTop:"-2rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Screening</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream04.png" alt="img" />
                            </div>
                            <div>
                            <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Video</h3>
                            <h3 style={{marginTop:"-2rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Interview</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream05.png" alt="img" />
                            </div>
                            <div>
                            <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem", paddingTop:"2rem"}}>Shortlisting</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/stream06.png" alt="img" />
                            </div>
                            <div>
                                <h3 style={{marginTop:"1.8rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Analysis &</h3>
                                <h3 style={{marginTop:"-2rem", fontWeight:"600", color:"#090d3a", textAlign:"center", padding:"1rem"}}>Reporting</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactWOW>
            <div className="overview-item pt-100 pb-70">
                <div className="container max-width-1440">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/product_employer01.png' alt="png" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>All-in-one Platform</h3>
                                <p><span style={{color:"#4689fa"}}>Save time and cost</span> through an automated recruiting process, manage job postings and candidates all in one platform.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Collaborate with the team</span> to improve the transparency of the hiring activities.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Make better hiring decisions</span> by sharing evaluation notes and collaborating with the hiring manager.</p>
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
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>Convenient Talent Sourcing</h3>
                                <p><span style={{color:"#4689fa"}}>Broadcast open positions</span> to various job sites with one click. Say goodbye to multi-account decentralized management.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Centralized candidate management</span> allows you to track your talent pipeline in one place.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/product_employer02.png' alt="png" />
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
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/product_employer03.png' alt="png" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>Efficient Resume Screening</h3>
                                <p><span style={{color:"#4689fa"}}>Automatic resume screening</span> filters out resumes that do not meet the requirements to improve the efficiency of resume screening.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Accurate resume parsing</span> helps to obtain candidate information and highlight the matching skill sets accurately.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>AI-Powered evaluation</span> provides a suggested job fit score to facilitate your decision-making.</p>
                                <br/>
                                <a href="/employer-resume-screening" className="default-btn2" style={{color:"#ffffff", backgroundColor:"#ff6b00", fontSize:"1rem", textDecoration:"none"}}>Learn more</a>
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
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>One-Way Interview Screening</h3>
                                <p><span style={{color:"#4689fa"}}>Avoid scheduling hassle</span> with on-demand video interview screening, saving time for you, your team, and your applicants.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Question bank</span> allows you to quickly configure interview questions and evaluate candidates based on various aspects.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>Involve stakeholders</span> easily by sharing the recorded video. Review candidates, share evaluations and make decisions at any time.</p>
                                <br/>
                                <a href="/employer-feature-video" className="default-btn2" style={{color:"#ffffff", backgroundColor:"#ff6b00", fontSize:"1rem", textDecoration:"none"}}>Learn more</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/product_employer04.png' alt="png" />
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
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/product_employer05.png' alt="png" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>Data-Driven Reporting and Decision-Making</h3>
                                <p><span style={{color:"#4689fa"}}>Track and measure</span> your recruiting activities, know your success and improvements.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>AI-powered screening</span> helps to speed up the evaluation and decision-making process.</p>
                                <br/>
                                <p><span style={{color:"#4689fa"}}>One-click reporting</span> on EEOC, OFCCP, and GDPR.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FreeTrialArea/>
            <Footer />
            </ReactWOW>
            </React.Fragment>
            </DocumentMeta>
        )
    }
}

export default ProductPage;