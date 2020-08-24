import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import feature1 from "../../assets/Picture1.png";
import shape9 from "../public/images/shape/shape9.png";

class FeaturedFeature extends Component {
    render() {
        return (
            <section className="services-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <ReactWOW animation='fadeInLeft' delay='0.3s'>
                            <div className="services-image">
                                <div className="image">
                                    <img src={feature1} alt="image" />
                                </div>
                            </div>
                        </ReactWOW>

                        <div className="services-content it-service-content">
                            <div className="content">
                                <div className="features-inner-content">
                                    <ReactWOW animation='fadeInRight' delay='0.1s'>
                                        <div className="features-item">
                                            <i className='bx bx-video-plus bg-13c4a1 blt-radius-0' style={{backgroundColor:"#56a3fa"}}></i>
                                            <h3>Practice</h3>
                                            {/* <p>Record yourself to answer the most common interview questions.</p> */}
                                            <p>Recording yourself answering interview questions</p>
                                        </div>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInRight' delay='0.2s'>
                                        <div className="features-item wow fadeInRight">
                                            <i className='bx bx-book bg-6610f2 blt-radius-0' style={{backgroundColor:"#080a3c"}}></i>
                                            <h3>Learn</h3>
                                            {/* <p>Choose to save your recorded videos for replay and review.</p> */}
                                            <p>Tracking progresses revisiting your saved records</p>
                                        </div>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInRight' delay='0.3s'>
                                        <div className="features-item">
                                            <i className='bx bx-line-chart bg-ff612f blt-radius-0'></i>
                                            <h3>Improve</h3>
                                            {/* <p>Read your results from Experts and AI to improve interview skills.</p> */}
                                            <p>Gaining insightful feedbacks from Experts and AI</p>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedFeature;