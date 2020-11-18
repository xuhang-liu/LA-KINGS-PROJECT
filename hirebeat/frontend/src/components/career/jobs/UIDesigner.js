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

class UIDesigner extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="UI Design Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div>
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                            HireBeat is seeking a <b>UI Design Intern</b> to create simple, elegant, and intuitive interactive
                            interfaces for our core web product: AI-driven and function-heavy Saas product. As a UI Design
                            Intern, you will work with Product Management, Engineering, Business, to push boundaries,
                            build great products, and solve customer problems. Candidates should show an impressive background
                            with interface design, as well as interest and consideration for experience, and user-centered design.
                            This role is focused on visual interactive interface design: how users interact with devices,
                            how users process information, and ultimately how HireBeat’s product “look” and “feel”.
                            Core to this role is the creation of the final “pixel-perfect” UI that users experience,
                            and in creating UI, illustration, and micro animation in a visually systematic way that ensures
                            a holistic, consistent experience across our products.
                        </p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                            Note: Along with your Resume a link to your online portfolio is required. Applications
                            without a portfolio are unlikely to be considered.
                        </p>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">What you’ll do</h3>
                        <ul className="job-txt2">
                            <li>Collaborating with Product Management and Engineering to define and implement innovative solutions for the product direction, visuals and experience</li>
                            <li>Quickly iterate and offer versions based on design critique from peers or from learnings found in user testing or feature response</li>
                            <li>Build out multi-version comps for user testing</li>
                            <li>Provide prototypes/deliverables to describe interactions and motion to enhance UI</li>
                            <li>Execute final, “pixel perfect” UI designs and package, spec, and prep for engineering</li>
                            <li>Conceptualizing original ideas that bring simplicity and user friendliness to complex design roadblocks</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">You should have</h3>
                        <ul className="job-txt2">
                            <li>BA or BS in Human-Computer Interaction or related field, boot camps, projects, or work experienc</li>
                            <li>Confident knowledge of design applications like Sketch, Figma, and Adobe XD</li>
                            <li>Communicative and collaborative team-oriented worker</li>
                            <li>A readily available portfolio</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Must be able to</h3>
                        <ul className="job-txt2">
                            <li>Understand technical feasibilities and compromise with Engineering on design decisions while advocating for users </li>
                            <li>Own designs end-to-end from lofi to hifi and post-release</li>
                            <li>Consider edge cases and validations when designing</li>
                            <li>Quickly visualize and iterate on designs from business requirements</li>
                            <li>Keep up with current design trends and constantly apply them to designs</li>
                            <li>Openly accept criticism and apply learnings to improve processes and designs</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Nice to have</h3>
                        <ul className="job-txt2">
                            <li>2-3 years of experience designing UIs with some exposure to UX</li>
                            <li>Experience designing and working with SaaS or PaaS </li>
                            <li>Experience designing analytics dashboards</li>
                            <li>Experience designing for desktop resolutions</li>
                            <li>Front-end coding language knowledge like HTML/CSS/JS</li>
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
                            <li>Upload your resume with the match job description you are applying, then click scan.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step3:</span> Please reply your username to us at: <a href = "mailto: ye.tian@hirebeat.co">ye.tian@hirebeat.co</a>
                        </p>
                        <p style={{marginTop: "1rem"}}>We will be in touch with you as soon as possible after we have reviewed your result.</p>
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

export default UIDesigner;
