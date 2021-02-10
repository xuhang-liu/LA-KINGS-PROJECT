import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";
//import 'boxicons';

class HighlitedFeatures extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="pt-100 pb-100">
                <div className="container pt-2 pb-5" id='i1'>
                    <div className="section-title">
                        <h2 className="mb-2">Our Highlited Features</h2>
                    </div>
                </div>
                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item pb-5 mb-5">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/gif/land-interview.gif' alt="gif" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3>Practice Interview with Feedback</h3>
                                        <p>Practice your own set of questions and receive AI evaluation</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Practice real-time interview simulation
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Quantified feedback based on our AI analysis model
                                            </li>
                                        </ul>
                                        <Link to='/practice' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                        Practice Now
                                        <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item pb-5 mb-5">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3>Target Resume</h3>
                                        <p>Optimize the matching rate between resume and target job based on AI suggestions on key words</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Key Word Matching
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                ATS-Friendly Tips
                                                <span style={{paddingLeft:'2px'}} className="bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Applicant tracking systems (ATS) is a recruiting software used by most of large companies, it provides ranking by calculating how well your resume scores based on job description."></span>
                                            </li>
                                        </ul>
                                        <Link to='/resume' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                        Optimize Now
                                        <span></span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/gif/land-resume.gif' alt="gif" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/gif/land-company.gif' alt="gif" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3>Top Companies Tips</h3>
                                        <p>We provide recruitment data of popular companies to help you target your dream job</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Top interview questions for positions
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Vivid and informative visualization charts
                                            </li>
                                        </ul>
                                        <Link to='/practice' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                        Check Now
                                        <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
                </section>
            </React.Fragment>
        );
    }
}

export default HighlitedFeatures;