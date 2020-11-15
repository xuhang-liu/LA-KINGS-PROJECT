import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container max-width-1290">
                    <div className="section-title">
                        <h2>We Are Here To Help With Your Career Path</h2>
                        <p>We are offering AI-powered interview training and resume matching to help you get hired</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                <a href='#i1' style={{textDecoration:'none'}}>
                                <div className="features-box-one">
                                    <i className='bx bx-laptop'></i>
                                    <h3>Interview Practicing</h3>
                                    <p>Mock real-life interviews with common interview questions from large companies, and receive AI-powered feedback</p>
                                </div>
                                </a>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <a href='#i2' style={{textDecoration:'none'}}>
                                <div className="features-box-one">
                                    <i className='bx bx-file'></i>
                                    <h3>Resume Matching</h3>
                                    <p>See how well your resume matches a job and optimize it with ATS-specific analysis</p>
                                </div>
                                </a>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;