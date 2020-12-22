import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class AmazingFeatures extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>We Are Here to Help</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6" >
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                                <div className="single-features-box" >
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-mouse'></i>
                                    </div>
                                    <h3>Easy-to-use product</h3>
                                    <p style={{fontSize: "1.25rem"}}>Your interview practice is just few clicks away, practice interview anytime anywhere</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-alarm'></i>
                                    </div>
                                    <h3>Real-time simulation</h3>
                                    <p style={{fontSize: "1.25rem"}}>You'll never know what question is coming next, just like a live interview</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.3s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-coin-stack'></i>
                                    </div>
                                    <h3>Full-scale question bank</h3>
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
                                    <h3>Review for self-evaluation</h3>
                                    <p style={{fontSize: "1.25rem"}}>Secured stage allows you to track and revisit your training progress</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.5s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-wallet'></i>
                                    </div>
                                    <h3>Affordable cost</h3>
                                    <p style={{fontSize: "1.25rem"}}>Believe or not? You can enjoy our premium service for just $0.65/day</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.6s'>
                                <div className="single-features-box">
                                    <div className="icon" style={{"background-color": "#56A3FA"}}>
                                        <i className='bx bx-task'></i>
                                    </div>
                                    <h3>All-inclusive feedback</h3>
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