import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../../Common/PageTitleArea';
import { useEffect } from "react";
//import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Marketing extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Marketing Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div>
                        <h3 className="job-txt4">Job Details:</h3>
                        <ul className="job-txt2">
                            <li>Collaborate with teams on brand-led paid and organic campaigns</li>
                            <li>Assist with the execution of overall marketing/content creation</li>
                            <li>Brainstorm and develop ideas for creative marketing campaigns</li>
                            <li>Assist in the development of PR materials including email marketing content & key message documents</li>
                            <li>Research new marketing channel, such as influencer marketing and social media best practices</li>
                            <li>Develop an engaging way to distribute industry research and competitive analysis updates to management team.</li>
                            <li>Attend weekly status meetings</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Requirements:</h3>
                        <ul className="job-txt2">
                            <li>Strong organizational and communication skills</li>
                            <li>Strong knowledge across digital platforms such as TikTok, Instagram, Facebook, Youtube, Snapchat, and Twitter</li>
                            <li>Must be self-motivated, driven and able to work independently as well as part of a team</li>
                            <li>Willingness to adapt to an evolving and agile environment</li>
                            <li>Ability to balance/prioritize multiple projects with competing deadlines</li>
                            <li>Self-curiosity about the digital and social landscape in and outside of HireBeat</li>
                            <li>Passion for content creator and the influencer landscape</li>
                            <li>Strong writing skills</li>
                            <li>Experience and/or interest in social platform analytics, prior marketing professional experience is preferred</li>
                            <li>Experienced with Google analytical is a plus</li>
                            <li>Basic photo and editing skills, Photoshop & Canva preferred</li>
                        </ul>
                    </div>
                </div>
                <div className="row job-tail">
                    <div className="container" style={{paddingBottom: "6rem"}}>
                        <h2 className="job-txt1" style={{paddingTop: "2rem", color:'#ff6b00'}}>Instructions:</h2>
                        <p style={{marginTop: "1rem", marginBottom: "0"}}>
                        To move forward with your application, we would like to invite you to finish our online video interview process. Please follow the instruction below carefully:
                         </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step1:</span> Use a laptop to create an account by click <Link to='/register'>apply now</Link> or visit our website at <Link to='/register'>https://www.hirebeat.co/register</Link> (Please make sure that your email address is consistent with your resume)
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step2:</span> <Link to='/resume'>Upload your resume</Link>
                            <li>Navigate to the resume section on the left-hand side of the dashboard, click new scan.</li>
                            <li>Upload your resume with the match job description you are applying for, then click scan.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step3:</span> <Link to='/practice'>Video Interview</Link>
                            <li>Navigate to the interview section on the left-hand side of the dashboard and click new practice.</li>
                            <li>Chose the <b>Behavior Question</b> and select the <b>Simulate Mode</b>.</li>
                            <li>Begin your interview with the default setting; after you finish, simply send for an <b>AI review</b> in your dashboard.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step4:</span> Please reply your username to us at: <a href = "mailto: duke.wang@hirebeat.co">duke.wang@hirebeat.co</a>
                        </p>
                        <p style={{marginTop: "1rem"}}>We will be in touch with you shortly after reviewing your result.</p>
                        <Link to="/register">
                            <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A", paddingLeft:'25px'}}>
                                Apply Now
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Marketing;
