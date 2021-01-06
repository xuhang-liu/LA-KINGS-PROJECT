import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class AmazingFeatures extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>We're Here to Help</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6" >
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                                <div className="single-features-box" >
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-mouse'></i>
                                    </div>
                                    <h3>Quick and Easy-to-use</h3>
                                    <p style={{fontSize: "1.25rem"}}>Practice industry specific interview questions at home or on the go</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.2s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-alarm'></i>
                                    </div>
                                    <h3>Real-time Simulation</h3>
                                    <p style={{fontSize: "1.25rem"}}>You’ll never know what question is coming next, just like a live interview</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.3s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-coin-stack'></i>
                                    </div>
                                    <h3>Multiple Industries</h3>
                                    <p style={{fontSize: "1.25rem"}}>Get thousands of interview questions across different industries</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.4s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-revision'></i>
                                    </div>
                                    <h3>Review and Evaluate</h3>
                                    <p style={{fontSize: "1.25rem"}}>Progress tracking allows you to monitor and manage your progress</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.5s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-wallet'></i>
                                    </div>
                                    <h3>Affordable</h3>
                                    <p style={{fontSize: "1.25rem"}}>Believe it or not, you can use HireBeat for as little as $0.65/day</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.6s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-task'></i>
                                    </div>
                                    <h3>Comprehensive Feedback</h3>
                                    <p style={{fontSize: "1.25rem"}}>Our data-driven parameters guarantee you the best performance</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AmazingFeatures;