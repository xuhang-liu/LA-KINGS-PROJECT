import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent10 extends Component {
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
                                                <i className='bx bx-time'></i> 
                                                <Link href="#">
                                                    <a>November 10, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How To Answer The Question "Where Do You To See Yourself In 5 Years" In An Interview  (Sample Answer Included)</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog10-pic1.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Since you are here, you are probably looking forward to an interview, and you have some butterflies in your stomach. The exciting thing is that questions that would be considered basic make candidates nervous over an over. Regardless, it is the first time you will be facing a panel or the subsequent time. It is a scare that never seems to go away.</p>
                                    <p>
                                    Apart from "tell me about yourself," "where do you see yourself in 5 years" is a question you will never miss in an interview.</p>
                                    <br/>

                                    <h3 className="mb-0">Why do employers ask this question?</h3>                                    
                                    <p>Every question the employer asks leads to something. All the questions asked are intentional, and you need to know what the employer is trying to find in order so that you know the best answer to provide.</p>
                                    <p>
                                    When an employer asks where you see yourself in the next five years or so, he or she is basically to know if your career projections align with the organization's objectives. Employers also want to employ candidates that will be satisfied by the position in the long run. Your answer to this question will help the employer know if the company can grow your career and the different ways the employer can support.
                                    </p>
                                    <p>
                                    The question is also designed to establish if you are sincerely interested in the job and if you have the drive and ambition needed for the role.
                                    </p>
                                    <h3 className="mb-0">How to answer the question, "where do you see yourself in 5 years."</h3>
                                    <p>
                                    Now that you know why employers ask the question. Here are the ideal answers to provide in the interview.
                                    </p>
                                    <p>
                                    1. Talk about how the job description fits with your goals
                                    </p>
                                    <p>
                                    Before the interview, review the job description. Think about how the skills are highlighted in the job posting and compare it with those you already have. Think about how the skills you already have will be instrumental for the role and how the skills you will gain from the role will help you grow.
                                    </p>
                                    <br/>
                                    <p>
                                    2. Talk about how your interests fit in the role
                                    </p>
                                    <p>
                                    Your answer can be in line with how the position will help your interests evolve. For instance, if you are looking to be a senior finance officer in the future, talk about how the accounting assistant role will help you get there.
                                    </p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog10-pic.jpg" alt="image"></img>
                                    <h3 className="mb-0">Example answer to "where do you see yourself in 5 years".</h3> 
                                    <p>This is one of the interview questions that you don’t have to be so specific with. Something close to this will work:</p>
                                    <p><i>My future goals for the next five years are to lead the finance and accounting team. I am planning to expand my horizon by learning as much as I can in the current and subsequent roles in the finance department, and from there, expand my knowledge in finance through educational training.</i></p>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>When answering the question, never let the employer know that you are looking for a short-term engagement with the company. Also, never let it know that you are after the employer’s position as you need to show them that you are ambitious.</p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview"}
                                        quote={"How To Answer The Question 'Where Do You To See Yourself In 5 Years' In An Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview"}
                                           title={"How To Answer The Question 'Where Do You To See Yourself In 5 Years' In An Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview"}
                                            title={"How To Answer The Question 'Where Do You To See Yourself In 5 Years' In An Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview"}
                                            title={"How To Answer The Question 'Where Do You To See Yourself In 5 Years' In An Interview"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContent10;