import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class AmazingFeatures extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100 bg-e8edfc">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>Why Choose HireBeat</h2>
                    </div>

                    <div className="row" style={{margin: "auto"}}>
                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC01.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Stand Out Resume</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                    We analyze and refine your resume to be pop up among all candidates
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC02.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Improve Interview Skills</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                We ensure you are comfortable and confident in the interview
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC03.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>In-depth Feedback</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                With our AI and expert analysis, you can receive performance feedback
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC04.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Extensive Question Bank</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Explore our 6000+ interview questions which you can practice anytime
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC05.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Get Hired Faster</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Join the many users of our community and land your dream job!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" style={{marginTop:"2rem"}}>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/WC06.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Company Data</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                We have all details you need to know when interviewing with top companies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AmazingFeatures;