import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import QuizSidebar from './QuizSidebar';
import quizSuccess from '../../assets/quiz/quiz_success.jpg';


class QuizResultDetail extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">  
                <div className="container">
                <div className="single-features-box" id="quize-result">
                    <div className="icon image">
                        <i className="bx bx-analyse 1"></i>
                    </div>
                    <h3 className="headline">Analyst</h3>
                    <p className="maintext">
                        You know that the only way to be sure that something will work is to make a simple version of it and try it out. You love fast-paced trial and error, iterating on the best bits until you have something that works for everyone. You never get too attached to your ideas, always safe in the knowledge that the next big thing is just one prototype away.
                    </p>
                    <div className="single-footer-widget1">
                                                <ul className="social" style={{margin: "auto"}}>
                                                    <li>
                                                        <FacebookShareButton 
                                                            url={"https://hirebeat.co/blog-details1"}
                                                            quote={"HireBeat - Video Interview"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://hirebeat.co/blog-details1"}
                                                            title={"HireBeat - Video Interview"}
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
                                                <p style={{color: "#6FA8F3", fontFamily: "Poppins"}}>Your Career</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2 className="quiz-title">Business Analyst</h2>
                                    <p className="quiz-text" style={{marginBottom:"5%"}}>In today’s complex business environment, an organization’s adaptability, agility, and ability to manage constant change through innovation can be keys to success. Traditional methods may no longer lead to reaching objectives when economic conditions are unfavorable. That’s where business analysis comes in. Corporations achieve goals through projects that translate customer needs into new products, services, and profits. Business analysts can make it all happen more efficiently and effectively.</p>
                                    <div className="article-image" >
                                        <img src={quizSuccess} alt="image"/>
                                    </div>
                                    <div className="row" style={{marginBottom:"5%",marginTop:"5%"}}>
                                        <div className="col-md-6">
                                            <h4 className="quiz-title">Role</h4>
                                            <div className="quiz-text">
                                                <ul style={{paddingLeft:"0"}}>
                                                    <li className="quiz-list" > 1. Assisting with the business case</li>
                                                    <li className="quiz-list" > 2. Planning and monitoring</li>
                                                    <li className="quiz-list" > 3. Eliciting requirements</li>
                                                    <li className="quiz-list" > 4. Requirements organization</li>
                                                    <li className="quiz-list" > 5. Translating and simplifying requirements </li>
                                                    <li className="quiz-list" > 6. Requirements management and communication</li>
                                                    <li className="quiz-list" > 7. Requirements analysis</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <h4 className="quiz-title">Requirements</h4>
                                            <div className="quiz-text">
                                                <ul style={{paddingLeft:"0"}}>
                                                    <li className="quiz-list" > 1. Written and verbal communication skills, including technique writing</li>
                                                    <li className="quiz-list" > 2. Understanding of systems engineering concepts</li>
                                                    <li className="quiz-list" > 3. The ability to conduct cost/benefit analysis </li>
                                                    <li className="quiz-list" > 4. Business case development Modeling techniques and methods Leadership</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="quiz-title">Interview Guidance</h4>
                                    <p className="quiz-text">In today’s complex business environment, an organization’s adaptability, agility, and ability to manage constant change through innovation can be keys to success. Traditional methods may no longer lead to reaching objectives when economic conditions are unfavorable.</p>

                                    <div className="article-footer">
                                        <div className="row" style={{margin:"auto"}}>
                                            <p className="quiz-text2">SHARE WITH YOUR FRIENDS TO TAKE THE TEST TOO!</p>
                                            <div className="single-footer-widget1">
                                                <ul className="social" style={{margin: "auto"}}>
                                                    <li>
                                                        <FacebookShareButton 
                                                            url={"https://hirebeat.co/blog-details1"}
                                                            quote={"HireBeat - Video Interview"}
                                                            hashtag="#hirebeat">
                                                            <a target="_blank">
                                                                <i className="bx bxl-facebook"></i>
                                                            </a>
                                                        </FacebookShareButton>
                                                    </li>
                                            
                                                     <li>
                                                        <LinkedinShareButton
                                                            url={"https://hirebeat.co/blog-details1"}
                                                            title={"HireBeat - Video Interview"}
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
                        <div className="contact-cta-box mwidth-1000">
                            <h3 className="quiz-title">Want to land your dream role? </h3>
                            <p className="quiz-text">We are here to enhance your interview skills</p>
                            <Link to="/practice">
                                <a className="default-btn" style={{color:"white", fontFamily:"Poppins"}}>
                                    Practice with HireBeat
                                    <span></span>
                                </a>
                            </Link>
                         </div>
                         <Link style={{textDecoration: "none"}}>
                         <p style={{marginLeft:"9%"}} className="mode-col-text2">Explore more about HireBeat -></p>
                         </Link>
                    </ReactWOW>
                </div>
            </section>
        );
    }
}

export default QuizResultDetail;