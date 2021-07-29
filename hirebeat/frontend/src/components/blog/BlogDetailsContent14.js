import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent14 extends Component {
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
                                                    <a>Janurary 13, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Interview Question "Why Do You Want to Work Here?" Ultimate Guide with Example</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog14-pic.jpg" alt="Interview answer, interview tips, job, career tips" />
                                    </div>
                                    <p>
                                    As a job seeker, you are very likely to encounter this question in a job interview. When an interviewer inquires, “why do you want to work here?” they are trying to evaluate whether you will be a valuable addition to their brand.</p>
                                    <p>
                                    An employee who is directly aligned with the values and mission of a company is deemed to be a productive asset and is guaranteed to work for the company longer. The hiring team is always interested in finding out whether you are that kind of employee.
                                    </p>
                                    <p>
                                    You are likely to panic while figuring out an appropriate answer to that question. While a simple response such as, “I really need the money” is true, it doesn’t give you any credibility.
                                    </p>
                                    <p>
                                    The best way to answer the question is by giving a response that shows you know some of the institution’s objectives and core values, and that you are an asset who is determined to achieve them when you get appointed for the job.
                                    </p>
                                    <p>
                                    No hiring manager wants to hire a job seeker who is only after getting paid because they are attached to the company.
                                    </p>
                                    <p>
                                    Here we are few tips for you to help you ace this question.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">How to answer the question</h3>
                                    <br/>                                
                                    <p>
                                    The company aims to hire someone whose goal is to make a positive impact on the organization. Thus, you need to come up with good ideas. Think of why the organization wants to hire you. Figure out what you want to offer to the company more than the benefit you will get from the job. Here are steps to prepare your answer to this question:
                                    </p>
                                    <h4>
                                    ✅  Research the company online
                                    </h4>
                                    <p>
                                    Take some time to comprehend everything you can learn about the enterprise. If they have a website, visit the “About Us” section, or even search for them on social media. Look out for articles and news about projects that they might be undertaking.
                                    </p>
                                    <p>
                                    If you don’t discover anything that intrigues you and plays with your imagination in a way that drives your desire through the roof, you probably won’t be able to impress the interview team with your response.
                                    </p>
                                    <h4>
                                    ✅  Understand your past career success
                                    </h4>
                                    <p>
                                    If you find interesting information about the company that you are interested to work for, your response needs to be tuned in a way that coincides with the company’s values and tie to your career experience.
                                    </p>
                                    <p>
                                    For instance, instead of giving an answer such as, "I love this place and I would like to be part of its workforce", think of a response that demonstrates how your personal goals are directly related to the organization’s objectives or values.
                                    </p>
                                    <p>
                                    For example, if your interview is with a company that treasures community service, mention how your love for voluntary work will propel you to be a steadfast part of its community service team.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Sample Answer</h3>
                                    <br/>
                                    <p>
                                    "I am a firm believer of the collaborative approach when dealing with projects. I knew that I had to apply to this position to become part of your production team. After watching one of your production videos that showcased your team’s effort, I really got inspired.
                                    </p>
                                    <p>
                                    My background in production has given me some preparation for this role and my love for teamwork in the pursuit of a common goal coincides with the values put forward by the video. I look forward to working as one of the contributors of value in your company."
                                    </p>
                                    <br/>
                                    <p>
                                    The above response presents every aspect out there. The hiring managers learns that you already know the company well because you have seen its team in action.
                                    </p>
                                    <p>
                                    By relating your personal values and job experience in the response, you leave no doubt that you are the suitable candidate for the job.
                                    </p>
                                    <br/>
                                    <p>
                                    Looking to further improve your interview skills? Try a mock interview at <a href="/job-seekers">HireBeat</a> and get professional feedback on your performance.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-why-do-you-want-to-work-here"}
                                        quote={"Interview Question 'Why do you want to work here?'"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-why-do-you-want-to-work-here"}
                                           title={"Interview Question 'Why do you want to work here?'"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-why-do-you-want-to-work-here"}
                                            title={"Interview Question 'Why do you want to work here?'"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-why-do-you-want-to-work-here"}
                                            title={"Interview Question 'Why do you want to work here?'"}>
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

export default BlogDetailsContent14;