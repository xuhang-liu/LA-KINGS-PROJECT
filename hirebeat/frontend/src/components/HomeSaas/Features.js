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
                        <h2>We Are Here To Help</h2>
                        <p>We are offering an interview training function with virtual interview tools and resume matching, as well as AI driven analysis to supercharge your interview performance.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                <div className="features-box-one">
                                    <i className='bx'><img src={f1} alt="image"></img></i>
                                    <h3>Easy to use</h3>
                                    <p>Streamline design that allows you to practice interview anytime anywhere</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <div className="features-box-one">
                                <i className='bx'><img src={f2} alt="image"></img></i>
                                    <h3>Real-time simulation</h3>
                                    <p>You will never know what question is coming next, just like a live interview</p>
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