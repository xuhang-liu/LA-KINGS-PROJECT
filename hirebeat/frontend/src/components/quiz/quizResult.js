import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import QuizSidebar from './QuizSidebar';
import quiz_result_success from '../../assets/quiz/quiz_result_success.jpg';

class QuizResult extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
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

                                    <h2 style={{ fontFamily: "Poppins"}}>Business Analyst</h2>
                                    <p style={{color: "#4A6F8A", fontFamily: "Poppins"}}>In today’s complex business environment, an organization’s adaptability, agility, and ability to manage constant change through innovation can be keys to success. Traditional methods may no longer lead to reaching objectives when economic conditions are unfavorable. That’s where business analysis comes in. Corporations achieve goals through projects that translate customer needs into new products, services, and profits. Business analysts can make it all happen more efficiently and effectively.</p>
                                    <img src={quiz_result_success} alt="image"/>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
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
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-details1"}
                                           title={"HireBeat - Video Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
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
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-details1"}
                                            title={"HireBeat - Video Interview"}>
                                            <a target="_blank">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <QuizSidebar /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuizResult;