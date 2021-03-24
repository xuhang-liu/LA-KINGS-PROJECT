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
            <section className="free-trial-area pb-70 pt-70 bg-f4f5fe min-width-1290">
                <div className="container">
                    <div className="free-trial-content">
                        <h2 style={{paddingTop:"2rem", paddingBottom:"1rem", color: "#090D3A"}}>Start Your Next Hire from HireBeat</h2>
                        <p>AI-analysis video-interview platform that can boost your hiring process. With HireBeat, you can interview and hire talented candidates faster than ever.</p>
                        <Link id="id-employer_signup3" to='/employer_register' className='default-btn' style={{textDecoration:'none'}}>
                            <i className="bx bxs-arrow-to-right"></i>
                            Get Started for Free Now
                            <span></span>
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
            <section className="free-trial-area pb-70 pt-70 bg-f4f5fe">
                <div className="container">
                    <div className="free-trial-content">
                        <h2 style={{paddingTop:"2rem", paddingBottom:"1rem", color: "#090D3A"}}>Start Your Next Hire from HireBeat</h2>
                        <p>AI-analysis video-interview platform that can boost your hiring process. With HireBeat, you can interview and hire talented candidates faster than ever.</p>
                        <Link id="id-employer_signup3" to='/employer_register' className='default-btn' style={{textDecoration:'none'}}>
                            <i className="bx bxs-arrow-to-right"></i>
                            Get Started for Free Now
                            <span></span>
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