import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';
import ReactWOW from 'react-wow';
import MediaQuery from 'react-responsive';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    youtube={{
                        autoplay: 1,
                        mute: 1
                      }}
                    isOpen={this.state.isOpen} 
                    videoId='Ct82zEpHUf8'
                    onClose={() => this.setState({isOpen: false})} 
                />
                <MediaQuery minDeviceWidth={1224}>
                <div className="saas-banner" style={{height:"729px", backgroundImage:"url(https://hirebeat-assets.s3.amazonaws.com/Employer/bg.jpg)"}}>
                    <div className="container-fluid max-width-1440">
                        <div className="row pt-5 pl-4">
                            <div className="col-6 pt-5">
                                <div className="hero-content">
                                    <h1 style={{fontSize:"40px", lineHeight:"46px", paddingBottom:"1.2rem"}}>Simplify the Hiring Process</h1>
                                    <h1 style={{fontSize:"40px", lineHeight:"46px"}}>Meet Candidate Behind the Resume</h1>
                                    <div>
                                        <p className="pb-5">Reviewing <span style={{color:"#f4c534"}}>Hundreds</span> of candidates on <span style={{color:"#f4c534"}}>One</span> Platform</p>
                                    </div>
                                    <div className="banner-btn">
                                        <div className="d-flex">
                                            <Link to="/employer_register">
                                                <a id="id-employer_signup2" className="default-btn2" style={{color:"white", fontWeight:"600", fontsize:"1.5vmin", lineHeight:"26px"}}>
                                                Get Started for Free
                                                    <span></span>
                                                </a>
                                            </Link>
                                            <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                                style={{top:"5%"}}
                                            >
                                                <i id="id-video3" className="bx bx-play bx-md" style={{color:"#FF6B00"}}></i>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                <div className="saas-banner pt-100 pb-100">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container max-width-1440">
                                <div className="row align-items-center pt-8">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content pl-6 pt-5">
                                            <h1>Simplify the Hiring Process</h1>
                                            <h1>Meet Candidate Behind the Resume</h1>
                                            <div>
                                            <p className="pb-5">Reviewing <span style={{color:"#f4c534"}}>Hundreds</span> of candidates on <span style={{color:"#f4c534"}}>One</span> Platform</p>
                                            </div>                               
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link to="/employer_register">
                                                        <a id="id-employer_signup2" className="default-btn2" style={{color:"white", fontWeight:"600", fontsize:"1.5vmin", lineHeight:"26px"}}>
                                                        Get Started for Free
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                    <MediaQuery maxDeviceWidth={1223}>
                                                    <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                        style={{top:"5%"}}
                                                    >
                                                        <i id="id-video1" className="bx bx-play" style={{color:"#FF6B00"}}></i>
                                                    </a>
                                                    </Link>
                                                    </MediaQuery>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </MediaQuery>
                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                    <div className="container max-width-1290">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5">
                                <div className="overview-left-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/mainbanner2.png' alt="pic" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-7">
                                <div className="overview-content pl-3">
                                    <h3>Applicants are coming in, still conduct phone interview?</h3>
                                    <p>Have to schedule the phone intervew with the same question again and again...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ReactWOW>

                <ReactWOW animation='fadeInUp' delay='0.2s'>
                    <div className="overview-item">
                        <div className="container max-width-1290">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="overview-content pl-3">
                                        <h3>Review your candidates, anytime and anywhere!</h3>
                                        <p>Stop wasting time! HireBeat can help you set up the interview once and screen candidates without scheduling time</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-5">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/mainbanner1.png' alt="pic" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>

                <div className="before-after pb-100 pt-100">
                    <div className="text-center">
                        <h1 style={{fontSize:"2.4rem", fontWeight:"600", color:"#090D3A"}}>
                        The Hiring Trend is Changing
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="container justify-content-center align-items-center">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/result1.png"></img>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 after">
                            <div className="container justify-content-center align-items-center">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/result2.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;