import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import feature1 from "../public/images/home-saas/feature1.png";
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
                                            <i className='bx bx-phone-call bg-13c4a1 blt-radius-0'></i>
                                            <h3>Free Caliing Service</h3>
                                            <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                        </div>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInRight' delay='0.2s'>
                                        <div className="features-item wow fadeInRight">
                                            <i className='bx bx-gift bg-6610f2 blt-radius-0'></i>
                                            <h3>Daily Free Gift</h3>
                                            <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                        </div>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInRight' delay='0.3s'>
                                        <div className="features-item">
                                            <i className='bx bx-code-alt bg-ff612f blt-radius-0'></i>
                                            <h3>QR Code Scaner</h3>
                                            <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape9">
                    <img src={shape9} alt="image" />
                </div>
            </section>
        );
    }
}

export default FeaturedFeature;