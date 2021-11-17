import React, { Component } from 'react';
import {Link} from "react-router-dom";
import MediaQuery from 'react-responsive';
import shape10 from "../public/images/shape/shape10.png";
import shape7 from "../public/images/shape/shape7.png";
import shape11 from "../public/images/shape/shape11.png";
import shape12 from "../public/images/shape/shape12.png";

class FreeTrialArea extends Component {
    render() {
        return (
            <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
            <section className="free-trial-area bg-f4f5fe pt-70 pb-70 min-width-1290">
                <div className="container">
                    <div className="free-trial-content">
                        <h2 style={{paddingTop:"2rem", paddingBottom:"1.5rem", color:"#090d3a"}}>Start Your Journey to Your Dream Job</h2>
                        <p style={{color:"#090d3a"}}>Engage in real online interview simulation and resume optimization that is tailored to your future role.</p>

                        <Link to="/register">
                            <a id="f-tff" className="default-btn" style={{color:"white", backgroundColor:"#006dff"}}>
                                <i className="bx bxs-hot"></i> 
                                Get Started
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>

                {/* Shape Image */}
                <div className="shape10">
                    <img src={shape10} alt="image" />
                </div>
                <div className="shape11">
                    <img src={shape7} alt="image" />
                </div>
                <div className="shape12">
                    <img src={shape11} alt="image" />
                </div>
                <div className="shape13">
                    <img src={shape12} alt="image" />
                </div>
            </section>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <section className="free-trial-area bg-f4f5fe pt-70 pb-70">
                <div className="container">
                    <div className="free-trial-content">
                        <h2 style={{paddingTop:"2rem", paddingBottom:"1.5rem", color:"#090d3a"}}>Start Your Journey to Your Dream Job</h2>
                        <p style={{color:"#090d3a"}}>Engage in real online interview simulation and resume optimization that is tailored to your future role.</p>

                        <Link to="/register">
                            <a id="f-tff" className="default-btn" style={{color:"white", backgroundColor:"#006dff"}}>
                                <i className="bx bxs-hot"></i> 
                                Get Started
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>

                {/* Shape Image */}
                <div className="shape10">
                    <img src={shape10} alt="image" />
                </div>
                <div className="shape11">
                    <img src={shape7} alt="image" />
                </div>
                <div className="shape12">
                    <img src={shape11} alt="image" />
                </div>
                <div className="shape13">
                    <img src={shape12} alt="image" />
                </div>
            </section>
            </MediaQuery>
        </React.Fragment>
        );
    }
}

export default FreeTrialArea;