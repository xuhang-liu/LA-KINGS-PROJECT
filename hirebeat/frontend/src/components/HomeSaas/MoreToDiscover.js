import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import FunFacts from '../Common/FunFacts';
import {Link} from "react-router-dom";

class MoreToDiscover extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="ptb-100">
                <div className="container" id='i1'>
                    <div className="section-title">
                        <h2 className="mb-2">More to Discover</h2>
                        <p>HireBeat is transforming the way of career pivoting to improve the efficiency. Use our interview practicing and resume matching tools to impress recruiters in just a few clicks</p>
                    </div>
                </div>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                    <div className="container max-width-1290">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-left-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/P_S2.gif' alt="gif" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <span className="number">01</span>
                                    <h3>Pracetice/Simulate Modes</h3>
                                    <p>Rather than spend hours to search questions online, you should focus on behavioral-based and technical-specific questions. Our practice interviews are customizable that suit the specific job position you are looking for.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Behavioral-based interview questions
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Occupation-specific interview questions
                                        </li>
                                    </ul>
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
                                        <p>Video practice data is secured and safe in the cloud system. you can work at your own pace to track your practice video with feedbacks, you will build the knowledge and confidence to land your next dream job.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Interview video privacy
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Anytime and anywhere
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/B_T2.gif' alt="gif" />
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
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/AI2.gif' alt="gif" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <span className="number">03</span>
                                        <h3>AI/Expert Analytics</h3>
                                        <p>Once you've completed an interview, a recording is provided to you privately. No more guessing on your performance, using our evaluation system by sending your practice video to get valuable feedback from experts or AI.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Expert feedback
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                AI behavioral analysis
                                            </li>
                                        </ul>
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
                                        <p>Video practice data is secured and safe in the cloud system. you can work at your own pace to track your practice video with feedbacks, you will build the knowledge and confidence to land your next dream job.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Interview video privacy
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Anytime and anywhere
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Resume2.gif' alt="gif" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
                </section>
                <section className="video-presentation-area ptb-100">
                <div className="container">
                {/* Fun Facts Style One */}
                <FunFacts />

                <ReactWOW animation='fadeInUp' delay='0.8s'>
                    <div className="contact-cta-box mwidth-1000">
                        <h3>Join us and give a try</h3>
                        <p>Let HireBeat be your secret weapon to ace your next interview</p>

                        <Link to="/register">
                            <a className="default-btn" style={{color:"white"}}>
                                Try For Free
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </ReactWOW>
                </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MoreToDiscover;