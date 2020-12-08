import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent extends Component {
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
                                                    <a>November 25, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How To Answer "What Is Your Weakness" Question In An Interview</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog12-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    You have an interview around the corner, and in the spirit of preparation, you are speculating the possible questions you will be asked. One of the things that most employers want to know about employees is what their weaknesses are. What makes this question tricky is that one cannot possibly highlight their downsides to a possible employer. Well, you are not expected to do that. Understanding what the employers are looking for when asking this question and how to answer it will go a long way.</p>
                                    <br/>
                                    <h3 className="mb-0">What do employers look for when they ask about your weaknesses?</h3>                                    
                                    <p>Just like the rest of the questions asked in an interview, there is something that an employer is looking for when he or she is asking about your weaknesses. The two main things that stand out here is your ability to do the job correctly and whether you are a good fit for the role. While answering this question, you should be as honest as possible and avoid answers that will make you appear selfish and difficult. Your answer should show that you may not be perfect, but you are also ready to learn, as this is something that employer’s value.</p>
                                    <p>
                                    Also, when choosing a skill or an area that you have a weakness, ensure that it is not one of the listed requirements for the job as this may disqualify you.
                                    </p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog12-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">How to answer "What is your weakness?" in an interview</h3>
                                    <p>
                                    Knowing how to answer this question the right way will help you stand out in the interview.
                                    </p>
                                    <p>
                                    1. Your answer should have some depth
                                    </p>
                                    <p>
                                    When giving the answer, you should highlight the weakness or problem and stop at that. 
                                    Get to the insight and highlight your growth trajectory in regards to that weakness. You are allowed to talk about how you have been able to overcome the weakness and remain productive. Also, you can highlight what you have learned through your weakness. This will create an impression of a self-aware candidate, that is able to solve problems and achieve continuous growth.
                                    </p>
                                    <p>
                                    2. Be honest
                                    </p>
                                    <p>
                                    Honesty is the best policy and especially during interviews. Note that the employer is keen on the information that you provide, and they will have expectations derived from that conversation. The hiring manager can always smell calculated answers from a mile away. Always stick to authentic, realistic and genuine answers and the interviewer will be impressed.
                                    </p>
                                    <p>
                                    3. Keep it concise
                                    </p>
                                    <p>
                                    Keep your response short as you might end up talking about so much and not highlighting the important things. It would be best if you mentioned one or two weaknesses then go into detail.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Example answer to "what is your weakness?" question in an interview</h3>
                                    <p>Here is an example of an excellent answer to the question.</p>
                                    <p>
                                        <i>I get impatient and unsettled when tasks run past the scheduled deadline. I am very particular about due dates and get upset when work is not completed within the deadline. To overcome this weakness, I have been training myself to accept that sometimes projects due dates may require adjustments for efficiency and better results. That way, I will not be so uncomfortable when projects run past the scheduled time.</i>
                                    </p>
                                    <br/>
                                    <p>
                                    Let HireBeat help you to improve your interview skills. <Link to="/">Click here</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/how-to-answer-what-is-your-weakness-question-in-an-interview"}
                                        quote={"How To Answer 'What Is Your Weakness' Question In An Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/how-to-answer-what-is-your-weakness-question-in-an-interview"}
                                           title={"How To Answer 'What Is Your Weakness' Question In An Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/how-to-answer-what-is-your-weakness-question-in-an-interview"}
                                            title={"How To Answer 'What Is Your Weakness' Question In An Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/how-to-answer-what-is-your-weakness-question-in-an-interview"}
                                            title={"How To Answer 'What Is Your Weakness' Question In An Interview"}>
                                            <a target="_blank">
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

export default BlogDetailsContent;