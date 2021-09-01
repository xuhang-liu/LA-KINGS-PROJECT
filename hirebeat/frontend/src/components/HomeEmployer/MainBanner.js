import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';
//import ReactWOW from 'react-wow';
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
                    videoId='w6o75ewYbDc'
                    onClose={() => this.setState({isOpen: false})} 
                />
                <MediaQuery minDeviceWidth={1224}>
                <div className="saas-banner" style={{height:"40.625vw", minHeight:"600px", backgroundImage:"url(https://hirebeat-assets.s3.amazonaws.com/Employer/employer_bg.png)"}}>
                    <div className="container-fluid">
                        <div className="row pl-5">
                            <div className="col-6" style={{paddingTop:"10vw"}}>
                                <div className="hero-content">
                                    <h1 style={{fontSize:"70px", lineHeight: "normal", marginBottom:"0.8rem"}}>Simplify the <br/> Hiring Process</h1>
                                    <div>
                                        <p>Meet Candidates Behind the Resume</p>
                                        <p className="pb-5">Reviewing <span style={{color:"#f4c534"}}>Hundreds</span> of candidates on <span style={{color:"#f4c534"}}>One</span> Platform</p>
                                    </div>
                                    <div className="banner-btn">
                                        <div className="d-flex">
                                            <Link to="/employer_register">
                                                <a id="id-employer_signup2" className="default-btn2" style={{color:"white", fontWeight:"600", fontsize:"1.5vmin", lineHeight:"26px", backgroundColor:"#ff6b00"}}>
                                                Start Hiring For Free
                                                    <span></span>
                                                </a>
                                            </Link>
                                            <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="default-btn"
                                                style={{color:"#ffffff", fontWeight:"600", fontsize:"1.5vmin", lineHeight:"26px", marginLeft:"2rem"}}
                                            >
                                                <i id="id-video3" className="bx bx-play-circle" style={{color:"#ffffff"}}></i>Watch Demo
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
                <div className="saas-banner" style={{minHeight:"50vh",backgroundImage:"url(https://hirebeat-assets.s3.amazonaws.com/Employer/employer_bg_mobile.png)"}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row align-items-center pt-8">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content pl-6 pt-5">
                                            <h1>Simplify the Hiring Process</h1>
                                            <div>
                                            <p>Meet Candidates Behind the Resume</p>
                                            <p className="pb-5">Reviewing <span style={{color:"#f4c534"}}>Hundreds</span> of candidates on <span style={{color:"#f4c534"}}>One</span> Platform</p>
                                            </div>                               
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link to="/employer_register">
                                                        <a id="id-employer_signup2" className="default-btn2" style={{color:"white", fontWeight:"600", fontsize:"1.5vmin", lineHeight:"26px", backgroundColor:"#ff6b00"}}>
                                                        Start Hiring For Free
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
                <div className="container-fluid max-width-1440 pb-70 pt-100">
                    <div className="text-center">
                        <h2 style={{fontSize:"2.4rem", fontWeight:"600", color:"#090D3A"}}>
                        How it works
                        </h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/howitworks_01.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Post a Job</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Distribute job postings to different boards
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/howitworks_02.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Source the Talent</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Consolidate candidate data from various sources
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/howitworks_03.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Evaluate Candidate</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Automated resume screening & video interview
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/howitworks_04.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>Collaborative Screening</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"26px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Invite team members to evaluate candidates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="before-after pb-100 pt-100">
                    <div className="container-fluid max-width-1440">
                    <div className="text-center">
                        <h2 style={{fontSize:"2.4rem", fontWeight:"600", color:"#090D3A"}}>
                        The Hiring Trend is Changing
                        </h2>
                    </div>
                    <MediaQuery minDeviceWidth={1224}>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 mt-5">
                            <div className="justify-content-center align-items-center">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/beforeTrend.png" alt="pic"></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 mt-5">
                            <div className="justify-content-center align-items-center">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/afterTrend.png" alt="pic"></img>
                            </div>
                        </div>
                    </div>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={1224}>
                        <div className="row" style={{marginLeft:"44%", marginTop:"6rem"}}>
                            <a href="/employer-roi-calculator" className="default-btn" style={{backgroundColor:"#ff6b00", paddingLeft:"65px", paddingTop:"20px", paddingBottom:"20px", textDecoration:"none"}}>
                            <i className="bx bx-calculator bx-md"></i>ROI Calculator</a>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1223}>
                        <div className="row" style={{marginLeft:"30%", marginTop:"6rem"}}>
                            <a href="/employer-roi-calculator" className="default-btn" style={{backgroundColor:"#ff6b00", paddingLeft:"65px", paddingTop:"20px", paddingBottom:"20px", textDecoration:"none"}}>
                            <i className="bx bx-calculator bx-md"></i>ROI Calculator</a>
                        </div>
                    </MediaQuery>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;