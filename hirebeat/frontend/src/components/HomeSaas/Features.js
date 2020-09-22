import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";

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
                                    <i className='bx'><img src={f1}></img></i>
                                    <h3>Easy to use</h3>
                                    <p>Interview practice is just few clicks asway, practice interview anytime anywhere</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f2}></img></i>
                                    <h3>Real-time simulation</h3>
                                    <p>You will never know what question is coming next, just like a live interview</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.3s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f3}></img></i>
                                    <h3>Interview question bank</h3>
                                    <p>Get thousands of interview questions across different industries</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.4s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f4}></img></i>
                                    <h3>Review & Replay</h3>
                                    <p>Secured stage allows you to track and revisit your training progress</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f5}></img></i>
                                    <h3>Affordable</h3>
                                    <p>No contact, you can enjoy our sevice for just $0.65/day</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.6s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f6}></img></i>
                                    <h3>Feedback</h3>
                                    <p>No more guessing, our feedback system provides the best data-driven parameters</p>
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