import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent6 extends Component {
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
                                                    <a>October 06, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>4 Common Interview Questions and How to Answer Them</h2>

                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog6-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Regardless of how many interviews you have attended, every new interview poses a challenge. It is normal to get anxious and wonder which questions the interviewers will be asking. There is no sure way of identifying the topics and questions. As much as that could be the case, there are common interview questions that you will never miss; it does not have to be all of them but just a couple.
                                    </p>
                                    <p>
                                    Here are some common questions that you could be asked and the appropriate answers to give.
                                    </p>
                                    <br/>

                                    <h3 className="mb-0">1. Tell me about yourself</h3>                                    
                                    <p>This is one of the questions that you will never miss in an interview, and it usually comes first. As simple as it may seem, most people find difficulties in answering the questions. When an interviewer asks you to tell him about yourself, you should talk about your background, both academic and in the job market, that align with the role's skills. You can also speak about your current position and activities that show you are qualified for the role.</p>

                                    <h3 className="mb-0">2. Why you are leaving your current position</h3> 
                                    <p>This is also one of the questions that interviewers will never fail to ask. By asking this question, the interviewer is trying to understand you as an employee, by gauging your loyalty to an organization and your relationship with previous colleagues and bosses. It would help if you, therefore, were very careful with the answers you give for this. No matter how sour your transition from your former place of employment was, you should never talk about it in the interview. It would be best if you steered away from negative comments on your previous job. This will show the recruiters that you can be loyal to their company. The best answer would be talking about how this role would help you take your career to the next level.</p>
                                    <p>You should talk about how the company will offer you a more challenging opportunity.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog6-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">3. Where do you see yourself in five years?</h3> 
                                    <p>If you have been to other interviews, you can attest that this is one question that you will never miss. By asking this question, the company looks to find whether your goals align with that of the company. The best answer to this question would be how you would like to develop your skills, and what you expect your role to grow into.</p>
                                    <p>Employers understand that employees are motivated and able to perform better when their trajectories align with those of the organization.</p>
                                    
                                    <h3 className="mb-0">4. Expected remuneration</h3> 
                                    <p>This question is presented so that the company determines whether your expectations regarding remuneration is within your budget. Since this is a question you will always come across, you should stay prepared for it. Do the research and find out how much professionals with your qualifications are paid for the role and then use it in your interview. Also, let the recruiter know that your rate is negotiable.</p>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>With the above in mind, you will have a smooth interview and be able to answer the questions asked appropriately and increase your chances of getting hired.</p>

                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-4-common-interview-questions-and-how-to-answer-them"}
                                        quote={"4 Common Interview Questions"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-4-common-interview-questions-and-how-to-answer-them"}
                                           title={"4 Common Interview Questions"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-4-common-interview-questions-and-how-to-answer-them"}
                                            title={"4 Common Interview Questions"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-4-common-interview-questions-and-how-to-answer-them"}
                                            title={"4 Common Interview Questions"}>
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

export default BlogDetailsContent6;