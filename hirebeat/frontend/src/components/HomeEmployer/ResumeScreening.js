import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactWOW from 'react-wow';
import FreeTrialArea from "./FreeTrialArea";
import Footer from "../layout/Footer";
import MediaQuery from 'react-responsive';

class ResumeScreening extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: "Join the world's fastest-growing hiring trend with our automated interviewing platform",
            canonical: 'https://hirebeat.co/employer-resume-screening',
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
                                <h2>
                                    Getting <span style={{color: "#FAC046"}}>250</span> resumes and <span style={{color: "#FAC046"}}>88%</span> <br/>
                                    of them are unqualified?
                                </h2>
                                <p>
                                    You need an <span style={{color: "#FAC046"}}>AI resume screening software</span> to find the right <br/>
                                    candidate from the talent pool!
                                </p>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="page-title-area2">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>
                                    Getting <span style={{color: "#FAC046"}}>250</span> resumes and <span style={{color: "#FAC046"}}>88%</span> <br/>
                                    of them are unqualified?
                                </h2>
                                <p>
                                    You need an <span style={{color: "#FAC046"}}>AI resume screening software</span> to find the right <br/>
                                    candidate from the talent pool!
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
                            Getting <span style={{color: "#FAC046"}}>250</span> resumes and <span style={{color: "#FAC046"}}>88%</span> <br/>
                            of them are unqualified?
                        </h1>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                        <h1 style={{fontSize:"3rem", fontWeight:"600"}}>
                            Getting <span style={{color: "#FAC046"}}>250</span> resumes and <span style={{color: "#FAC046"}}>88%</span> <br/>
                            of them are unqualified?
                        </h1>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1224}>
                        <p style={{fontSize:"1.5rem", color:"#FFFFFF"}}>
                            You need an <span style={{color: "#FAC046"}}>AI resume screening software</span> to find the right <br/>
                            candidate from the talent pool!
                        </p>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                        <p style={{fontSize:"1rem", color:"#FFFFFF"}}>
                            You need an <span style={{color: "#FAC046"}}>AI resume screening software</span> to find the right <br/>
                            candidate from the talent pool!
                        </p>
                        </MediaQuery>
                    </div>
                </div>
            </div>*/}
            {/* Data box */}
            <div className="container-fluid pb-70 pt-100" style={{backgroundColor:"#f4f5fd"}}>
                <div className="container-fluid max-width-1440">
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resumescreening_01.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a", textAlign:"center"}}>No Duplicates</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resumescreening_02.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a", textAlign:"center"}}>Efficient and Accurate Screening</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resumescreening_03.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a", textAlign:"center"}}>Rich Candidate Profile</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resumescreening_04.png" alt="img" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a", textAlign:"center"}}>AI Evaluation Score</h3>
                            </div>
                        </div>
                    </div>
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
            <ReactWOW>
                <div className="overview-item pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>What is Resume Parsing?</h3>
                                    <p>
                                        Resume parsing refers to the <span style={{color: "#FF6B00"}}>automated scanning,</span>  <br/>
                                        <span style={{color: "#FF6B00"}}>extraction, storage, and analysis of resumes.</span> By identifying <br/>
                                        and organizing relevant information, such as job skills, work <br/>
                                        experience, contact information, and so forth, parsing <br/>
                                        software can save recruiters countless hours.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/resume_screening_big_01.png' alt="png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <div className="features-area" style={{backgroundColor:"#f4f5fd"}}>
                <div className="container-fluid max-width-1440 pt-100 pb-100">
                    <div className="text-center">
                        <h3 style={{fontSize:"2.2rem", fontWeight:"600", color: "#000000"}}>
                            <span style={{color: "#FF6B00"}}>52%</span> of talent acquisition leaders say <span style={{color: "#FF6B00"}}>resume screening</span> is the <br/>
                            hardest part of recruiting.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="features-area">
                <div className="container-fluid max-width-1440 py-5">
                    <div className="text-center">
                        <h3 style={{fontSize:"3rem", fontWeight:"600", color: "#4689FA"}}>
                            Here is how we can help!
                        </h3>
                    </div>
                </div>
            </div>
            <ReactWOW>
                <div className="overview-item pb-70">
                    <div className="container max-width-1440">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>Parse resumes and build a <br/><span style={{color: "#FF6B00"}}>360-degree</span> candidate profile</h3>
                                    <p>
                                        Every resume that’s uploaded to HireBeat gets parsed and <br/>
                                        its data populated. We help you to build a rich candidate <br/>
                                        profile including their <span style={{color: "#FF6B00"}}>personal website, application-specific</span> <br/>
                                        <span style={{color: "#FF6B00"}}>information, your notes, and evaluation</span> - all in one place. <br/>
                                        This is more than a static PDF file - you can also use this to <br/>
                                        filter candidate profiles.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/resume_screening_big_02.png' alt="png" />
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
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/resume_screening_big_03.png' alt="png" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-content pl-3">
                                    <h3 style={{fontSize: "2.25rem"}}>Get to the point with <span style={{color: "#FF6B00"}}>custom</span> <br/><span style={{color: "#FF6B00"}}>application forms</span></h3>
                                    <p>
                                        If you are looking for something specific in your candidates <br/>
                                        that might not fit into a standard resume, simply <span style={{color: "#FF6B00"}}>add the</span> <br/>
                                        <span style={{color: "#FF6B00"}}>screening question</span> in our <span style={{color: "#FF6B00"}}>custom application form!</span> Find top <br/>
                                        talent with the right work experience and skillsets in just a <br/>
                                        few clicks!
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
                                    <h3 style={{fontSize: "2.25rem"}}>More than Job Description <br/><span style={{color: "#FF6B00"}}>keyword matching</span></h3>
                                    <p>
                                        Many screening software in the market that uses simple <br/>
                                        keyword marching can easily create false negatives and false <br/>
                                        positives. Our <span style={{color: "#FF6B00"}}>AI-powered algorithm</span> evaluates the  <br/>
                                        candidate’s overall fit with your company, as well as their <br/>
                                        ability to succeed in this role based on industrial data.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="overview-right-img">
                                    <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/resume_screening_big_04.png' alt="png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            <FreeTrialArea/>
            <Footer />
            </React.Fragment>
            </DocumentMeta>
        )
    }
}

export default ResumeScreening;