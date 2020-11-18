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
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                             HireBeat is an innovative tech company based in New York City that aims to change job seekers’
                             lives through recruitment training. We aim to help customers gain a competitive edge in the
                             recruitment industry with ease through interview training platforms.
                        </p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                            Note: The program is 6-8 weeks long and it is an unpaid position. You can choose either work remotely or in our New York office.
                        </p>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">What you’ll do</h3>
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
                        <h3 className="job-txt4">What you need</h3>
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
                        <h2 className="job-txt1" style={{paddingTop: "2rem"}}>Instruction</h2>
                        <p style={{marginTop: "1rem", marginBottom: "0"}}>
                            To move forward with your application, we would like to invite you to finish our online resume
                            scanning process. Please follow the instruction below carefully:
                         </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step1:</span> Use a laptop to create an account by click apply now or visit our website at
                            https://www.hirebeat.co/register (make sure the email matches your resume)
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step2:</span> Upload your resume
                            <li>Navigate to the resume section on the left-hand side of the dashboard, click new scan.</li>
                            <li>Upload your resume with the match job description you are applying, then click scan.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step3:</span> Video Interview
                            <li>Navigate to the interview section on the left-had side of the dashboard and click new practice.</li>
                            <li>Chose the Behavior Question and select the Simulate Mode</li>
                            <li>Begin your interview with the default setting; after you finish, simply send for an AI review in your dashboard.</li>
                        </p>
                        <p><span className="job-step">Step4:</span> Reply to us with your user name at duke.wang@hirebeat.co</p>
                        <p style={{marginTop: "1rem"}}>We will be in touch with you as soon as possible after we have reviewed your result.</p>
                        <Link to="/register">
                            <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
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
