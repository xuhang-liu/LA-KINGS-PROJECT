import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class HowHirebeatWork extends Component {

    render() {
        return (
            <React.Fragment>
            <section className="ptb-100">
                <div className="container" id='i1'>
                    <div className="section-title">
                        <h2 className="mb-2">How HireBeat Works</h2>
                    </div>
                </div>

                <OwlCarousel
                    className="feedback-slides owl-carousel owl-theme"
                    {...options}
                >

                    <ReactWOW>
                        <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/howitwork1.png' alt="png" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="overview-content pl-3">
                                        <p style={{color:"#56a3fa", display:"inline-block"}}>Preparation</p>
                                        <h3>Step1: Create Interview</h3>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Simply edit job title and ID to get ready to post.
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Modify specific questions for your candidate.
                                            </li>
                                        </ul>
                                        <Link to='/employer_dashboard' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                                Post Positions Now
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>

                    <ReactWOW>
                        <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/howitwork2.png' alt="png" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="overview-content pl-3">
                                        <p style={{color:"#56a3fa", display:"inline-block"}}>Customization</p>
                                        <h3>Step2: Invite at Scale </h3>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Group editing your candidate information.
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Send video interview invitation by on click.
                                            </li>
                                        </ul>
                                        <Link to='/employer_dashboard' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                                Send Invitations Now
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>

                    <ReactWOW>
                        <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <div className="overview-left-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/howitwork3.gif' alt="gif" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <div className="overview-content pl-3">
                                        <p style={{color:"#56a3fa", display:"inline-block"}}>Evaluation</p>
                                        <h3>Step3: Assess Candidates</h3>
                                        <ul>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Review applicant’s interview videos easily.
                                            </li>
                                            <li>
                                                <i className='bx bx-badge-check'></i>
                                                Make decision at your leisure and optimized the hiring process by 80%.
                                            </li>
                                        </ul>
                                        <Link to='/employer_dashboard' className='default-btn' style={{backgroundColor: "#090D3A", textDecoration:'none'}}>
                                            <i className="bx bxs-arrow-to-right"></i>
                                                Access Candidates Now
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>
                </OwlCarousel>

                <ReactWOW>
                    <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/about.png' alt="png" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3 style={{fontSize: "2.625rem"}}>About HireBeat</h3>
                                        <p>HireBeat is a convenient web platform that decreases 90% of your time to hire right candidates via customized interview questions and pre-recorded video interviews.</p>
                                        <Link to='/employer_dashboard' className='default-btn' style={{backgroundColor: "#67A3F3", textDecoration:'none'}}>
                                        <i className="bx bxs-arrow-to-right"></i>
                                            Create Interviews For Free
                                        <span></span>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
                </section>
            </React.Fragment>
        );
    }
}

const options = {
    loop: true,
    nav: false,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout:2000,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
}

export default HowHirebeatWork;