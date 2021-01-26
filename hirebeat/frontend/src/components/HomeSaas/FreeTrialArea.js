import React, { Component } from 'react';
import {Link} from "react-router-dom";
import shape10 from "../public/images/shape/shape10.png";
import shape7 from "../public/images/shape/shape7.png";
import shape11 from "../public/images/shape/shape11.png";
import shape12 from "../public/images/shape/shape12.png";

class FreeTrialArea extends Component {
    render() {
        return (
            <section className="free-trial-area pb-100 bg-f4f5fe">
                <div className="container">
                    <div className="free-trial-content">
                        <h2 style={{paddingTop:"2rem", paddingBottom:"1.5rem"}}>Start Your Journey to Your Dream Job</h2>
                        <p style={{color:"#090d3a"}}>Engage in real online interview simulation and resume optimization that tailored to your future role.</p>

                        <Link to="/register">
                            <a id="f-tff" className="default-btn" style={{color:"white", backgroundColor:"#56a3fa"}}>
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
        );
    }
}

export default FreeTrialArea;