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
                                <i className='bx bx-list-check'></i>
                                <h3>
                                    850
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Completed Projects</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.3s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bx-smile'></i>
                                <h3>
                                    850
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Happy Clients</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.4s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bx-grid-small'></i>
                                <h3>
                                    120
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Ongoing Projects</p>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <ReactWOW animation='fadeInLeft' delay='0.5s'>
                            <div className="single-funfacts funfact-style-two">
                                <i className='bx bxs-award'></i>
                                <h3>
                                    50
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Winning Awards</p>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;