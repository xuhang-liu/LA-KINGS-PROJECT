import React, { Component } from 'react';
import about from "../../assets/about-img.png";

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">HireBeat Story</span>
                                <h2>Take your career to the next level</h2>
                                <p>HireBeat is an innovative tech company based in New York that aims to change job seekers’  lives through recruitment training. We aim to help customers gain a competitive edge in the recruitment industry with ease through interview training platforms.</p>
                                <p>We achieve this aim by using an AI-powered platform where the data is driven by real experiences and transform the way you communicate to increase your overall efficiency and effectiveness.</p>
                                <p>Our mission is to increase our customer's success rate by delivering a video-based job marketplace with AI analysis to personalize your coach stimulating real-life response and feedback anytime and anywhere.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={about} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;