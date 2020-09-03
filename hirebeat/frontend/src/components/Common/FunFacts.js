import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="funfacts-inner">
                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.2s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bxs-book'></i>
                                <h3>
                                    6000
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Interview Questions</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.3s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bx-world'></i>
                                <h3>
                                    55
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Coverage Countries</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.4s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bxs-pie-chart-alt-2'></i>
                                <h3>
                                    12
                                </h3>
                                <p>Evaluation Metrics</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.5s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bxs-network-chart'></i>
                                <h3>
                                    10
                                </h3>
                                <p>Global Industries</p>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;