import React, { Component } from 'react';
import about from "../../assets/about-img.jpg";

class AboutContentEmployer extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">HireBeat Story</span>
                                <h2>Take your hiring to the next level</h2>
                                <p>HireBeat is an HR software company providing enterprise SaaS solutions that simplify talent recruiting and assessment with a digital video screening and interviewing. Our platform combines the power of one-way videos, ATS tools, and HR workflows, along with AI-powered analytics and collaboration, to optimize the hiring process while improving the candidate experience.</p>
                                <p>Our mission is to increase our customer's success rate by delivering a video-based solution with AI analysis to emerging job seekers and recruiters in the most efficient and cost-effective way. Now screening and interviewing hundreds of candidates in just a few clicks without all the tedious manual steps.</p>
                                <p>HireBeat is dedicated to the success of our clients from emerging businesses, midsize companies, large enterprises, colleges, and universities. Join the world’s fastest-growing hiring trend with our automated interviewing platform, contact us now!</p>
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

export default AboutContentEmployer;