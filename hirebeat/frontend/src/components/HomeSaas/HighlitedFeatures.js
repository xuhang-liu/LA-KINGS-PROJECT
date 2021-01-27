import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";
import 'boxicons';

class HighlitedFeatures extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100 bg-highback">
                <div className="container max-width-1290" style={{maxWidth:"1440px"}}>
                    <div className="section-title">
                        <h2>Our Highlighted Features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                <a href='/practice' style={{textDecoration:'none'}}>
                                <div className="features-box-one">
                                    <i className='bx bx-laptop'></i>
                                    <h3>Record Video & Review</h3>
                                    <p style={{textAlign:"left", marginTop:"1rem"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Simulate real interview / Practice one by one</p>
                                    <p style={{textAlign:"left"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Expert evaluation / AI Smart Analytics</p>
                                </div>
                                </a>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                            <a href='/resume' style={{textDecoration:'none'}}>
                                <div className="features-box-one">
                                    <i className='bx bx-file'></i>
                                    <h3>Target Resume</h3>
                                    <p style={{textAlign:"left", marginTop:"1rem", marginLeft:"10%"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Match resume with job description</p>
                                    <p style={{textAlign:"left", marginLeft:"10%"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Get feedback for your resume</p>
                                </div>
                                </a>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                            <a href='/companydata' style={{textDecoration:'none'}}>
                                <div className="features-box-one">
                                    <i className='bx bx-data'></i>
                                    <h3>Popular Company Data</h3>
                                    <p style={{textAlign:"left", marginTop:"1rem"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Explore job openings from 500+ companies</p>
                                    <p style={{textAlign:"left"}}><box-icon name='badge-check' size="0.8rem" color="#13c4a1" style={{marginRight:"0.5rem"}}/>
                                    Qualified suggestions from HR experts</p>
                                </div>
                                </a>
                            </ReactWOW>
                        </div>
                    </div>
                    <div style={{marginTop:"1rem", textAlign:"center"}}>
                    <Link to="/register">
                        <a className="default-btn mr-3" id="id-login" style={{color:"white"}}>
                            <i className="bx bx-log-in"></i>Sign up and Try for Free Now<span></span>
                        </a>
                    </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default HighlitedFeatures;