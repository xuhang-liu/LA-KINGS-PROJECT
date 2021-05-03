import React, { Component } from 'react';
import ReactWOW from 'react-wow';
//import {Link} from "react-router-dom";
import 'boxicons';

class LeverageHireBeat extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="features-area pt-100 pb-70 bg-leverageHirebeat">
                <div className="container">
                    <div className="section-title">
                        <h2>The Platform that Works for You</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-3" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/WC1.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Time</h3>
                                            <h5>Save up to 80% of your hiring time</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-3" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.2s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/WC2.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Cost</h3>
                                            <h5>Save up to 50% of your hiring cost</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-3" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.3s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/WC3.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Engagement</h3>
                                            <h5>Review candidate without time or place limitation</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-3" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.4s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/WC4.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Collaboration</h3>
                                            <h5>Invite teams to work on candidate screening virtually</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
            <ReactWOW>
            <div className="overview-item pt-100">
                <div className="container max-width-1440">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/about.png' alt="png" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 className="mt-5" style={{fontSize: "2.625rem"}}>About HireBeat</h3>
                                <p>HireBeat is a convenient web platform that saves 90% of your time from hiring the talented candidates via customized interview questions and pre-recorded video interviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactWOW>
        </React.Fragment>
        );
    }
}

export default LeverageHireBeat;