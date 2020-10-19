import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";

class MoreToDiscover extends Component {

    render() {
        return (
            <React.Fragment>
            <section className="ptb-100">
                <div className="container" id='i1'>
                    <div className="section-title">
                        <h2 className="mb-2">More to Discover</h2>
                        <p>HireBeat is transforming the way of career pivoting to improve job-hunting efficiency. Use our interview practicing and resume matching tools to impress recruiters in just a few clicks</p>
                    </div>
                </div>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                    <div className="container max-width-1290">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-left-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/PS.gif' alt="gif" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <span className="number">01</span>
                                    <h3>Pracetice/Simulate Modes</h3>
                                    <p>Create your own customized interview and practice the questions that you want</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Practice questions of your choice
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Real-time interview simulation and get ready for the big day
                                        </li>
                                    </ul>
                                    <Link to='/register' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                            Start Now
                                        <span></span>
                                    </Link>
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
                                    <div className="overview-content pl-3">
                                        <span className="number">02</span>
                                        <h3>Behavior/Technical Questions</h3>
                                        <p>Ace your interview skills for both behavioral and technical questions with our help</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                "Tell me about a time..."
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Practice your technical concepts
                                            </li>
                                        </ul>
                                        <Link to='/register' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                            Start Now
                                        <span></span>
                                    </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/BT.gif' alt="gif" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item" id='i2'>
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/AI.gif' alt="gif" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <span className="number">03</span>
                                        <h3>AI/Expert Analytics</h3>
                                        <p>Get comprehensive feedback on your interview performance with our AI/expert analytics</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Quantified feedback based on our AI-model
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Suggestions on improvement from our HR experts
                                            </li>
                                        </ul>
                                        <Link to='/register' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                            Start Now
                                        <span></span>
                                        </Link>
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
                                    <div className="overview-content pl-3">
                                        <span className="number">04</span>
                                        <h3>Optimize Resume Matching</h3>
                                        <p>Optimize the matching rate between resume and target job based on AI suggestions on key words</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Matching rate
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                ATS-Friendly Tips
                                                <span style={{paddingLeft:'2px'}} className="bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Applicant tracking systems (ATS) is a recruiting software used by most of large companies, it provides ranking by calculating how well your resume scores based on job description."></span>
                                            </li>
                                        </ul>
                                        <Link to='/resume' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                            Start Now
                                        <span></span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Resume.gif' alt="gif" />
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

export default MoreToDiscover;