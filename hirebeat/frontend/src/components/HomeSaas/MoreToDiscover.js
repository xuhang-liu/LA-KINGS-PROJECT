import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import feature2 from "../../assets/Picture2.png";
import feature3 from "../../assets/Picture3.png";
import feature4 from "../../assets/Picture4.png";

class MoreToDiscover extends Component {
    render() {
        return (
            <section className="ptb-100 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2 className="mb-2">More to Discover</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                    <div className="container max-width-1290">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-left-img">
                                    <img src={feature2} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <span className="number">01</span>
                                    <h3>360° Interview Practice</h3>
                                    <p>Rather than spend hours to search questions online, you should focus on behavioral-based and technical-specific questions. Our practice interviews are customizable that suit the specific job position you are looking for.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Behavioral-based Interview Questions
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Occupation-specific Interview Questions
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.4s'>
                    <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <span className="number">02</span>
                                        <h3>Track Training Progress</h3>
                                        <p>Video practice data is secured and safe in the cloud system. you can work at your own pace to track your practice video with feedbacks, you will build the knowledge and confidence to land your next dream job.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Interview Video Privacy
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Anytime and Anywhere
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src={feature3} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.6s'>
                    <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-left-img">
                                        <img src={feature4} alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <span className="number">03</span>
                                        <h3>AI & Expert Feedback</h3>
                                        <p>Once you've completed an interview, a recording is provided to you privately. No more guessing on your performance, using our evaluation system by sending your practice video to get valuable feedback from experts or AI.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Expert feedback
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                AI Behavioral Analysis
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
            </section>
        );
    }
}

export default MoreToDiscover;