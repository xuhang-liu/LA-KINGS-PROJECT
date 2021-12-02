import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import {FacebookShareButton, LinkedinShareButton} from "react-share";
import QuizSidebar from './QuizSidebar';
import quizSuccess from '../../assets/quiz/quiz_success.png';

class QuizResultPM extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                <div className="single-features-box" id="quize-result">
                    <div className="icon image">
                        <i className="bx bx-briefcase-alt 1"></i>
                    </div>
                    <h3 className="headline">Product Manager</h3>
                    <p className="maintext">
                    Want to learn more about this role? Check out role-specific information below!
                    </p>
                    <div className="single-footer-widget1">
                        <ul className="social" style={{margin: "auto"}}>
                        <li>
                                                        <FacebookShareButton 
                                                            url={"https://app.hirebeat.co/quiz"}
                                                            quote={"My best fit job is [ Product Manager ] - Take the quiz to find out what job best suits you"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank" rel="noreferrer">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://app.hirebeat.co/quiz"}
                                                            title={"My best fit job is [ Product Manager ] - Take the quiz to find out what job best suits you"}
                                                            source={"HireBeat"}>
                                                            <a target="_blank" rel="noreferrer">
                                                                <i className="bx bxl-linkedin"></i>
                                                            </a>
                                                        </LinkedinShareButton>
                                                    </li>
                        </ul>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <p style={{color: "#6FA8F3", fontFamily: "Inter, Segoe UI"}}>Your Career</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2 className="quiz-title">Product Manger</h2>
                                    {/* todo change here */}
                                    <p className="quiz-text" style={{marginBottom:"5%"}}>You believe before you see it. You are a visionary that can see the big picture and lead the entire team to create something different. You enjoyed working in a team and collaborating with others, and this made you a great product manager.</p>
                                    <div className="article-image" >
                                        <div className="contact-cta-box mwidth-200">
                                            <h3 className="quiz-title">We are here to help you landing your dream role!</h3>
                                            <p className="quiz-text">We offer personalized evaluation on your resume and interview, and more</p>
                                            <Link to="/register">
                                            <a className="default-btn" style={{color:"white", fontFamily:"Inter, Segoe UI"}}>
                                                Practice with HireBeat
                                            <span></span>
                                            </a>
                                            </Link>
                                        </div>
                                        <Link to="/company" style={{textDecoration: "none"}}>
                                            <p style={{marginLeft:"9%"}} className="mode-col-text2">Explore more about HireBeat -></p>
                                        </Link>
                                    </div>
                                    <div className="row" style={{marginBottom:"5%",marginTop:"5%"}}>
                                        <div className="col">
                                            <h4 className="quiz-title">Roles</h4>
                                            <div className="quiz-text">
                                                <ul style={{paddingLeft:"0"}}>
                                                    <li className="quiz-list" > 1. Using market research to get ideas for products that customers will want</li>
                                                    <li className="quiz-list" > 2. gathering and prioritizing product and customer requirements</li>
                                                    <li className="quiz-list" > 3. Develop and manage a detailed project schedule and work plan</li>
                                                    <li className="quiz-list" > 4. Work closely with cross-functional teams to ensure timely execution</li>
                                                    <li className="quiz-list" > 5. Manage the relationship with the client and all stakeholders</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <h4 className="quiz-title">Requirements</h4>
                                            <div className="quiz-text">
                                                <ul style={{paddingLeft:"0"}}>
                                                    <li className="quiz-list" > 1. Excellent client-facing and internal communication skills</li>
                                                    <li className="quiz-list" > 2. Excellent written and verbal communication skills</li>
                                                    <li className="quiz-list" > 3. Solid organizational skills including attention to detail and multitasking skills</li>
                                                    <li className="quiz-list" > 4. Team player who collaborates well with others</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="quiz-title">Interview Guidance</h4>
                                    <p className="quiz-text">Do you know most of the Product Manager’s interviews will evaluate the candidate‘s qualification through both Technical Questions and Behaviors Questions? So it is crucial to learn what types of questions will be asked. And more importantly, practice and improve your interview skills before you go to the real battlefield. Want to know how? HireBeat provides the cutting-edge AI interview practicing platform to help you ace your interview!</p>

                                    <div className="article-footer">
                                        <div className="row" style={{margin:"auto"}}>
                                            <p className="quiz-text2">SHARE WITH YOUR FRIENDS TO TAKE THE TEST TOO!</p>
                                            <div className="single-footer-widget1">
                                                <ul className="social" style={{margin: "auto"}}>
                                                <li>
                                                        <FacebookShareButton 
                                                            url={"https://app.hirebeat.co/quiz"}
                                                            quote={"My best fit job is [ Product Manager ] - Take the quiz to find out what job best suits you"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank" rel="noreferrer">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://app.hirebeat.co/quiz"}
                                                            title={"My best fit job is [ Product Manager ] - Take the quiz to find out what job best suits you"}
                                                            source={"HireBeat"}>
                                                            <a target="_blank" rel="noreferrer">
                                                                <i className="bx bxl-linkedin"></i>
                                                            </a>
                                                        </LinkedinShareButton>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <QuizSidebar />
                        </div>
                    </div>
                    <ReactWOW animation='fadeInUp' delay='0.8s'>
                        <div style={{width:"70%"}}>
                            <img src={quizSuccess} alt="image"/>
                        </div>
                    </ReactWOW>
                </div>
            </section>
        );
    }
}

export default QuizResultPM;