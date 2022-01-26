import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactWOW from 'react-wow';
import FreeTrialArea from "./FreeTrialArea";
import Footer from "../layout/Footer";
import MediaQuery from 'react-responsive';

class FeatureVideo extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Employer Feature Video',
            description: "Employer Feature Video Info",
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'recruitment, one-way interview, recruiting, hiring, talent sourcing, resume parsing'
              }
            }
        };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
            {/* Title */}
            <div>
                <MediaQuery minDeviceWidth={1224}>
                    <div className="page-title-area2 min-width-1290">
                        <div className="container">
                            <div className="page-title-content">
                                <h1>
                                    Save <span style={{color: "#FAC046"}}>50%</span> of Your Time <br/>
                                    Reaching Top Candidates
                                </h1>
                                <p>
                                    Are you <span style={{color: "#FAC046"}}>wasting your time and money</span> on scheduling interviews and other basic tasks that could be easily <br/>
                                    fulfilled by tools?  Have you ever <span style={{color: "#FAC046"}}>lost the perfect candidate</span> to competitors due to the tedious process?
                                </p>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="page-title-area2">
                        <div className="container">
                            <div className="page-title-content">
                                <h1>
                                    Save <span style={{color: "#FAC046"}}>50%</span> of Your Time <br/>
                                    Reaching Top Candidates
                                </h1>
                                <p>
                                    Are you <span style={{color: "#FAC046"}}>wasting your time and money</span> on scheduling interviews and other basic tasks that could be easily <br/>
                                    fulfilled by tools?  Have you ever <span style={{color: "#FAC046"}}>lost the perfect candidate</span> to competitors due to the tedious process?
                                </p>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
            {/*<div className="features-area pt-100 pb-100 product-bg">
                <div className="container-fluid max-width-1440 ">
                    <div className="text-center" style={{color:"#FFFFFF"}}>
                        <MediaQuery minDeviceWidth={1224}>
                        <h1 style={{fontSize:"4.4rem", fontWeight:"600"}}>
                            Save <span style={{color: "#FAC046"}}>50%</span> of Your Time <br/>
                            Reaching Top Candidates
                        </h1>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                        <h1 style={{fontSize:"3rem", fontWeight:"600"}}>
                            Save <span style={{color: "#FAC046"}}>50%</span> of Your Time <br/>
                            Reaching Top Candidates
                        </h1>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1224}>
                        <p style={{fontSize:"1.5rem", color:"#FFFFFF"}}>
                            Are you <span style={{color: "#FAC046"}}>wasting your time and money</span> on scheduling interviews and other basic tasks that could be easily <br/>
                            fulfilled by tools?  Have you ever <span style={{color: "#FAC046"}}>lost the perfect candidate</span> to competitors due to the tedious process?
                        </p>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                        <p style={{fontSize:"1rem", color:"#FFFFFF"}}>
                            Are you <span style={{color: "#FAC046"}}>wasting your time and money</span> on scheduling interviews and other basic tasks that could be easily <br/>
                            fulfilled by tools?  Have you ever <span style={{color: "#FAC046"}}>lost the perfect candidate</span> to competitors due to the tedious process?
                        </p>
                        </MediaQuery>
                    </div>
                </div>
            </div>*/}
            {/* Data box */}
            <div className="features-area pt-100 pb-100" style={{background: "#F4F5FD"}}>
                <div className="container-fluid max-width-1440 ">
                    <MediaQuery minDeviceWidth={1224}>
                    <div className="row mt-5 justify-items">
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3">-75%</h3>
                                <h3 className="product-h3-2" style={{color: "#FF6B00"}}>Time to Fill</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3">+90%</h3>
                                <h3 className="product-h3-2" style={{color: "#3697F5"}}>Candidate Quality</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3">-$600</h3>
                                <h3 className="product-h3-2" style={{color: "#FF6B00"}}>Per Hire Cost</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3">24/7</h3>
                                <h3 className="product-h3-2"
                                    style={{color: "#3697F5", paddingTop: "0.5rem", paddingBottom: "0rem"}}
                                >
                                    Interview Anytime Anywhere
                                </h3>
                            </div>
                        </div>
                    </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1223}>
                    <div className="row mt-5 justify-items">
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3" style={{fontSize:"4rem"}}>-75%</h3>
                                <h3 className="product-h3-2" style={{color: "#FF6B00", fontSize:"1.25rem"}}>Time to Fill</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3" style={{fontSize:"4rem"}}>+90%</h3>
                                <h3 className="product-h3-2" style={{color: "#3697F5", fontSize:"1.25rem"}}>Candidate Quality</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3" style={{fontSize:"4rem"}}>-$600</h3>
                                <h3 className="product-h3-2" style={{color: "#FF6B00", fontSize:"1.25rem"}}>Per Hire Cost</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-1">
                            <div className="justify-items1 h-100">
                                <h3 className="product-h3" style={{fontSize:"4rem"}}>24/7</h3>
                                <h3 className="product-h3-2"
                                    style={{color: "#3697F5", paddingTop: "0.5rem", paddingBottom: "0rem", fontSize:"1.25rem"}}
                                >
                                    Interview Anytime Anywhere
                                </h3>
                            </div>
                        </div>
                    </div>
                    </MediaQuery>
                    <div className="row mt-5 justify-items">
                        <a className="default-btn" href="/employer_register" target="_blank" rel="noreferrer"
                            style={{backgroundColor: "#FF6B00", paddingLeft: "25px", textDecoration: "none"}}
                        >
                            Start For Free
                        </a>
                    </div>
                </div>
            </div>
            {/* Title 2 */}
            <div className="features-area pt-100">
                <div className="container-fluid max-width-1440 ">
                    <div className="text-center">
                        <h2 style={{fontSize:"3rem", fontWeight:"600", color: "#000000"}}>
                            Go discover the gem, <br/>
                            and leave the housekeeping to us!
                        </h2>
                    </div>
                </div>
            </div>
            <ReactWOW>
                <div className="overview-item pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>More <span style={{color: "#FF6B00"}}>flexibility</span> and no scheduling headache</h3>
                                    <p>
                                        Eliminate the need to schedule interviews and find a <br/>
                                        mutually convenient time within business hours. With the <br/>
                                        <span style={{color: "#FF6B00"}}>one-way interview</span> technology, candidates can record their
                                        responses on their own time from any time zone. You can <br/>
                                        also view the interview videos at your own pace, creating <br/>
                                        more flexibility and a better experience for both your team <br/>
                                        and your candidates.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video1.png' alt="png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <ReactWOW>
                <div className="overview-item pt-100 pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video2.png' alt="png" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>Reduce interview <span style={{color: "#FF6B00"}}>time</span> by 50%</h3>
                                    <p>
                                        Due to the flexible nature of the recorded interview, most <br/>
                                        candidates submit their responses within 2 days after <br/>
                                        receiving the invite, <span style={{color: "#FF6B00"}}>speeding up </span>the entire hiring process by <br/>
                                        more than half. You can also specify the response length <br/>
                                        allowed to each question, and shorten a 30-minute long <br/>
                                        interview by 10-fold.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <ReactWOW>
                <div className="overview-item pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>Meet more <span style={{color: "#FF6B00"}}>candidates</span></h3>
                                    <p>
                                        With this technology, you can conduct interviews with an <br/>
                                        <span style={{color: "#FF6B00"}}>unlimited number of candidates</span> done at the same time. No <br/>
                                        need to worry about missing out on potential fits due to time <br/>
                                        constraints. Expand your reach, and meet as many <br/>
                                         candidates as possible through videos.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video3.png' alt="png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <ReactWOW>
                <div className="overview-item pt-100 pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video4.png' alt="png" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>Higher candidates <span style={{color: "#FF6B00"}}>quality</span></h3>
                                    <p>
                                        Get a feeling of whether the candidate will fit into your team <br/>
                                        and organization culture by watching and hearing what they <br/>
                                        say. Video and audio interview questions help you to assess <br/>
                                        the candidate’s body language, confidence, and ability to <br/>
                                        perform under pressure, revealing <span style={{color: "#FF6B00"}}>more insights</span> beyond the <br/>
                                        resume.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <div style={{backgroundColor: "#F4F5FD", paddingBottom: "2rem"}}>
                {/* Title 3 */}
                <div className="features-area pt-100">
                    <div className="container-fluid max-width-1440 ">
                        <div className="text-center">
                            <h2 style={{fontSize:"3rem", fontWeight:"600", color: "#4689FA"}}>
                                Here is how we can help you!
                            </h2>
                        </div>
                    </div>
                </div>
                {/* card */}
                <ReactWOW>
                    <div className="overview-item pb-70">
                        <div className="container max-width-1440">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3 style={{fontSize: "2.25rem"}}>Configure questions</h3>
                                        <p>
                                            Choose from a library of <span style={{color: "#5269F3"}}>over 1,000 popular questions</span> or <br/>
                                            customize your own to ensure your candidates are being <br/>
                                            asked relevant screening questions. You can also <span style={{color: "#5269F3"}}>customize</span> <br/>
                                            how you would like your candidates to respond by <br/>
                                            configuring the question preparation time, response length, <br/>
                                            and the number of retakes.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video5.png' alt="png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
                <ReactWOW>
                    <div className="overview-item pt-100 pb-70">
                        <div className="container max-width-1440">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video6.png' alt="png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3 style={{fontSize: "2.25rem"}}>Send bulk invitations</h3>
                                        <p>
                                            No need to manually send interview invitation emails <br/>
                                            anymore! Our platform allows you to select qualified <br/>
                                            candidates and <span style={{color: "#5269F3"}}>invite them all with one simple click.</span> We will <br/>
                                            notify you when the interview is complete for review. You can <br/>
                                            also track candidates’ completion process on the same <br/>
                                            platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
                <ReactWOW>
                    <div className="overview-item pb-70">
                        <div className="container max-width-1440">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-content pl-3">
                                        <h3 style={{fontSize: "2.25rem"}}>View video and evaluate</h3>
                                        <p>
                                            <span style={{color: "#5269F3"}}>Review all candidate responses in a centralized platform,</span> <br/>
                                            along with their resume and application information. You <br/>
                                            can rate, take notes, and shortlist candidates, and also invite <br/>
                                            other stakeholders to join the screening process for higher <br/>
                                            transparency and better decision-making.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="overview-right-img">
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/video7.png' alt="png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
            </div>
            <FreeTrialArea/>
            <Footer />
            </React.Fragment>
            </DocumentMeta>
        )
    }
}

export default FeatureVideo;