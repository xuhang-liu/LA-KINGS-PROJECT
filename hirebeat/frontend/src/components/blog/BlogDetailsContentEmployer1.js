import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer1 extends Component {
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
                                                    <a>March 15, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How does a one-way interview help a company in its hiring?</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer1-pic.jpg" alt="interview, hiring, job, recruitment" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">
                                    Understanding One-way interview
                                    </h3>
                                    <p>
                                    One way interviews are facilitated by technology. They allow interviewers to record their responses to the interview questions with a video or audio-only with purpose-built interviewing technology. The process involves using a personal computer, a smartphone, or a mobile device that makes it convenient for job seekers with limited time due to busy schedules or a current job that does not allow them time off for a face-to-face interview. One-way interviews are also referred to as pre-recorded or on-demand interviews.
                                    </p>
                                    <p>
                                    One way interviews are convenient for employers in various ways. A recruiter can invite a large number of applicants to participate. Completed interviews are in-boxed to the recruiter for review and evaluation by the hiring team. Pre-recorded interviews help the company in their hiring in the following ways:
                                    </p>
                                    <h3 className="mb-0">Speed up the hiring process.</h3>                                    
                                    <p>
                                    If a company wants to screen many applicants, on-demand interviews speed up the hiring process. One way interviews use interview software requires the interviewer to record interview questions and send them to interviewees. Evaluating the feedback involves listening to videos that take a shorter period as opposed to living interviews. You can play the recordings several times for clarity and to ensure that you get all the information.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">De-stress the interview process for candidates</h3>                                    
                                    <p>
                                    Face-to-face interviews can be stressful even for the most prepared respondents. It hinders performance, enhancing the risk of making candidates sound and appear less qualified. With one-way interviews, the hiring team can create a better candidate experience for better decision-making. Interviewees can record as many times and rehearse their answers to boost confidence and ensure that they have submitted what reflects their best self.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Connect with remote candidates.</h3>                                    
                                    <p>
                                    Long-distance does not limit video interviews. The hiring company relies not only on local talents and skills but also on onboard remote candidates. One-way interviews resolve issues arising from time zone differences. They enable interviewers and job seekers to communicate at any hour of the day or night conveniently. It helps busy hiring managers with massive applications and struggles to coordinate different time zones.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Evaluate candidates by use of structured interviews.</h3>                                    
                                    <p>
                                    Structured interviews involve asking the candidates similar questions in the same order that helps the hiring company make objective decisions. One way interviews often appear rigid as they do not allow spontaneous responses from participants. However, they allow participants to prepare their answers on time and describe their skills and past experiences. Interviewers can compare applicants more objectively without being influenced by small talks before or after a live interview.
                                    </p>
                                    <br/>
                                    <p>
                                    One-way video interviews facilitate collaboration among many interviewers for better results in the hiring process. To learn more, visit <a href="/">www.hirebeat.co</a>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring"}
                                        quote={"How does a one-way interview help a company in its hiring?"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring"}
                                           title={"How does a one-way interview help a company in its hiring?"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring"}
                                            title={"How does a one-way interview help a company in its hiring?"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring"}
                                            title={"How does a one-way interview help a company in its hiring?"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <BlogSidebarEmployer /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContentEmployer1;