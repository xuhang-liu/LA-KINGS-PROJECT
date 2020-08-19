import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container max-width-1290">
                    <div className="section-title">
                        <h2>Our amazing features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                <div className="features-box-one">
                                    <i className='bx bx-cog bg-13c4a1'></i>
                                    <h3>Fast and Optimized</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <div className="features-box-one">
                                    <i className='bx bxs-check-shield bg-6610f2'></i>
                                    <h3>Full Security</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.3s'>
                                <div className="features-box-one">
                                    <i className='bx bx-timer bg-ffb700'></i>
                                    <h3>Time Saving</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.4s'>
                                <div className="features-box-one">
                                    <i className='bx bx-badge-check bg-fc3549'></i>
                                    <h3>Easily Manage</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                <div className="features-box-one">
                                    <i className='bx bxs-lock-open bg-00d280'></i>
                                    <h3>Quick Access</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.6s'>
                                <div className="features-box-one">
                                    <i className='bx bxs-droplet-half bg-ff612f'></i>
                                    <h3>Drag and Drop</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;