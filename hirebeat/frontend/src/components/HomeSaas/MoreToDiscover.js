import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import feature2 from "../public/images/home-saas/feature2.png";
import feature3 from "../public/images/home-saas/feature3.png";
import feature4 from "../public/images/home-saas/feature4.png";

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
                                    <h3>Getting Started Page</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Unique Design
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Unimited Video Call
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Add Favourite contact
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i>
                                            Camera Filter
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
                                        <h3>Outdated Comments Toggling</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Mordan Design
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Unimited Video Call
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Add Favourite contact
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Camera Filter
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Outdated Comments
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
                                        <h3>Code Review Illustrations</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Professional Code
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Unimited Video Call
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Add Favourite contact
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Camera Filter
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Start Coding Format
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