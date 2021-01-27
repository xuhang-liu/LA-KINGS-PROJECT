import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class AmazingFeatures extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose HireBeat</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6" >
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc1.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>A Standout Resume</h3>
                                            <h5>We analyze and refine your resume to make you pop up among all candidates</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.2s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc2.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Improve Interview Skills</h3>
                                            <h5>We ensure you are comfortable, confident, and successful in the interview</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.3s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc3.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>In-depth Feedback</h3>
                                            <h5>With our AI and expert analysis, you can receive customized performance feedback</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.4s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc4.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Extensive Question Bank</h3>
                                            <h5>Explore our 6000+ interview questions which you can practice anytime and anywhere</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.5s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc5.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Get Hired Faster</h3>
                                            <h5>Join the many users of our community and land your dream job!</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6" style={{marginTop:"2rem"}}>
                            <ReactWOW animation='fadeInRight' delay='0.6s'>
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/wc6.png" alt="img"></img>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Company Data</h3>
                                            <h5>We have all details you need to know when interviewing with top companies</h5>
                                        </div>
                                    </div>
                            </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AmazingFeatures;