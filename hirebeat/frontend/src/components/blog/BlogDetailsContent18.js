import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent18 extends Component {
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
                                                    <a>Janurary 27, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to answer the teamwork type question in an interview</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog18-pic.jpg" alt="interview mistake, interview tips, job interview, hiring, career tips" />
                                    </div>
                                    <p>
                                    Job seekers should understand that teamwork is a top consideration for many employers. So, before you plan on attending the next interview, you should ready yourself with correct answers on your ability to work with a team.
                                    </p>
                                    <p>
                                    Employers often ask various teamwork questions such as "tell me about a time that you have being part of a team, " "Describe any problematic workplace situation you had to handle, " "or "the role you've played in a teamwork situation." All these questions are necessary for employers to understand if you have the experience and find it comfortable working in a team.
                                    </p>
                                    <p>
                                    This is the chance for you to express the qualities that show your ability to work with other co-workers, managers, clients, and supervisors. Continue reading to learn more about how you can answer any teamwork question posed to you in an interview room.
                                    </p>
                                    <h3 className="mb-0">How to answer these questions?</h3>
                                    <p>
                                    Teamwork questions are most likely to appear in 99% of the interviews, and that is because teamwork is an integral part of any company culture and work environment. There is a reason why people say, "unity is strength, but divided we fall." To answer this type of interview question, you should:
                                    </p>
                                    <ol>
                                        <li>
                                        <p>Always be positive and showing you are enjoying working in a team.</p>
                                        </li>
                                        <li>
                                        <p>Prepare two or three examples of your teamwork experience to support your claim for different questions.</p>
                                        </li>
                                        <li>
                                        <p>Show leadership if possible.</p>
                                        </li>
                                        <li>
                                        <p>Sum up with results and the takeaway that you learned.</p>
                                        </li>
                                    </ol>
                                    <br/>
                                    <h3 className="mb-0">Examples of Teamwork questions and answers</h3>
                                    <br/>
                                    <h3 className="mb-0">Question: Describe the time you were effective working in a team?</h3>                              
                                    <p>
                                    Example: When I was a junior, five of us were asked to work on a case project for a marketing class. We were asked to provide an analysis of the marketing practices of “ABC firm”. Also, we were required to come up with recommendations for alternative approaches. But we floundered during the early stages of our discussion. To find the right focus, I suggested that we consider ABC's social media advertising techniques.
                                    </p>
                                    <p>
                                    I led the discussion and encouraged other members to chip in with their thoughts, including those that didn't support my original sentiments about the topic. After my team members suggested that we focus on Facebook's targeted advertising on users' interests, we were able to reach a consensus. In the end, we did an excellent job to work as a group and score a grade A on the project. After this experience, I have learned that through teamwork, not only can a job be completed in a more efficient manner, but at the same time I can learn a lot of precious knowledge and abilities from my teammates, which will greatly improve my own professional ability in the long run.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <p>
                                    Teamwork question is one of the most frequently asked questions by most employers. It is important to get familiar with this type of question and have your answer ready. At <a href="/job-seekers">HireBeat</a>, you can choose the teamwork category in your interview practice section and ask our AI or professional HR to review your responses. It never hurt to prepare ahead and impress the recruiter at your next interview.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-how-to-answer-the-teamwork-type-question-in-an-interview"}
                                        quote={"How to answer the teamwork type question in an interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-how-to-answer-the-teamwork-type-question-in-an-interview"}
                                           title={"How to answer the teamwork type question in an interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-teamwork-type-question-in-an-interview"}
                                            title={"How to answer the teamwork type question in an interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-teamwork-type-question-in-an-interview"}
                                            title={"How to answer the teamwork type question in an interview"}>
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

export default BlogDetailsContent18;