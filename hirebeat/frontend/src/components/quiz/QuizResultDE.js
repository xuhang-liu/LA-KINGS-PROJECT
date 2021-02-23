import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import {FacebookShareButton, LinkedinShareButton} from "react-share";
import QuizSidebar from './QuizSidebar';
import quizSuccess from '../../assets/quiz/quiz_success.png';

class QuizResultDE extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                <div className="single-features-box" id="quize-result">
                    <div className="icon image">
                        <i className="bx bx-laptop 1"></i>
                    </div>
                    <h3 className="headline">Developer/Engineer</h3>
                    <p className="maintext">
                    Want to learn more about this role? Check out role-specific information below!
                    </p>
                    <div className="single-footer-widget1">
                        <ul className="social" style={{margin: "auto"}}>
                        <li>
                                                        <FacebookShareButton 
                                                            url={"https://hirebeat.co/quiz"}
                                                            quote={"My best fit job is [ Developer/Engineer ] - Take the quiz to find out what job best suits you"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://hirebeat.co/quiz"}
                                                            title={"My best fit job is [ Developer/Engineer ] - Take the quiz to find out what job best suits you"}
                                                            source={"HireBeat"}>
                                                            <a target="_blank">
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
                                                <p style={{color: "#6FA8F3", fontFamily: "Avenir Next, Segoe UI"}}>Your Career</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2 className="quiz-title">Developer/Engineer</h2>
                                    {/* todo change here */}
                                    <p className="quiz-text" style={{marginBottom:"5%"}}>You love improving processes and constantly build new things through solving a puzzle. You are a great problem solver and will get things done without the help of others. You know within you, a puzzle solver.</p>
                                    <div className="article-image" >
                                        <div className="contact-cta-box mwidth-200">
                                            <h3 className="quiz-title">We are here to help you landing your dream role!</h3>
                                            <p className="quiz-text">We offer personalized evaluation on your resume and interview, and more</p>
                                            <Link to="/register">
                                            <a className="default-btn" style={{color:"white", fontFamily:"Avenir Next, Segoe UI"}}>
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
                                                    <li className="quiz-list" > 1. Develops information systems by designing, developing, and installing software solutions</li>
                                                    <li className="quiz-list" > 2. Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions</li>
                                                    <li className="quiz-list" > 3. Work together with crossfuntional teams to ensure products meet the company‘s strategy and goal</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <h4 className="quiz-title">Requirements</h4>
                                            <div className="quiz-text">
                                                <ul style={{paddingLeft:"0"}}>
                                                    <li className="quiz-list" > 1. Experience building developer-facing products and services</li>
                                                    <li className="quiz-list" > 2. Professional experiences in required programming languages</li>
                                                    <li className="quiz-list" > 3. Excellence in technical communication with peers and non-technical cohorts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="quiz-title">Interview Guidance</h4>
                                    <p className="quiz-text">Do you know most of the Developer’s interviews will evaluate the candidate‘s qualification through both Technical Questions and Behaviors Questions? So it is crucial to learn what types of questions will be asked. And more importantly, practice and improve your interview skills before you go to the real battlefield. Want to know how? HireBeat provides the cutting-edge AI interview practicing platform to help you ace your interview!</p>

                                    <div className="article-footer">
                                        <div className="row" style={{margin:"auto"}}>
                                            <p className="quiz-text2">SHARE WITH YOUR FRIENDS TO TAKE THE TEST TOO!</p>
                                            <div className="single-footer-widget1">
                                                <ul className="social" style={{margin: "auto"}}>
                                                <li>
                                                        <FacebookShareButton 
                                                            url={"https://hirebeat.co/quiz"}
                                                            quote={"My best fit job is [ Developer/Engineer ] - Take the quiz to find out what job best suits you"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://hirebeat.co/quiz"}
                                                            title={"My best fit job is [ Developer/Engineer ] - Take the quiz to find out what job best suits you"}
                                                            source={"HireBeat"}>
                                                            <a target="_blank">
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

export default QuizResultDE;