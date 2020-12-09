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
                                                    <a>December 08, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>"Why do you want to work here?" Your Ultimate Interview Tips (Example included)</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog14-pic.jpg" alt="Interview answer, interview tips, job, career tips" />
                                    </div>
                                    <p>
                                    Every job seeker wishes to get their dream job. They, therefore, research how to write the best resume and cover letter. They forget that the interview is an integral part of job hunting. The interview gives the employer a chance to assess whether you qualify for the job position.</p>
                                    <p>
                                    A great way to prepare when entering the interview room is by getting ready to respond to the interviewer effectively. Imagine how great it can be if you know exactly how to answer the commonly asked questions in the job interview. "Why do you want to work here?" seems to be a simple but challenging question. Lack of proper preparation for this question can be risky because you will lower the chances of acquiring the job. This article contains information on how to provide the answers to "why do you want to work here?"
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Why the interviewers ask, "Why do you want to work here?"</h3>
                                    <br/>                                
                                    <p>
                                    Regardless of how the hiring manager phrase the question, "Why do you want to work here?" you must be ready to provide positive answers. He/she can phrase it in different ways, such as, "why choose our company?" "What made you apply for our job opportunity?" the interviewers ask this question to figure out whether you can fit in with the culture of their company. Also, they might want to know your motivation in applying for the job. An excellent way to answer this question is by referencing it to the organization's culture, mission, and vision. Also, it is essential to align it with your career goals and personal skills.
                                    </p>
                                    <h3 className="mb-0">How to answer the question</h3>
                                    <br/>
                                    <p>
                                    The company aims to hire someone whose goal is to make a positive impact on the organization. Thus, you need to come up with good ideas. Think of why the organization wants to hire you. Figure out what you want to offer to the company more than the benefit you will get from the job. Here are steps to prepare your answer to this question:
                                    </p>
                                    <h4>
                                    ✅  Research the company online
                                    </h4>
                                    <p>
                                    As technology advances, many organizations change their ways of running their businesses. Thus, it is essential to research the business website before attending the interview. Know the products and services they are offering and understand the current changes in their company. Also, think of the knowledge and experience you have and how it can benefit the company.
                                    </p>
                                    <h4>
                                    ✅  Understand your past career success
                                    </h4>
                                    <p>
                                    It is good to relate this question to your previous jobs. Figure out the things you did to meet the employers' expectations and the ideas you introduced to help the company succeed. Also, understand the lessons you learned from your previous jobs and how you can apply them in the future.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Example of the answer to "Why do you want to work here?"</h3>
                                    <br/>
                                    <p>
                                    "I have been working in the hospitality industry for more than 6 years. I have extended my experience in the food and beverage production and I am ready to apply the expertise in your organization. I love working in a team and I am excited that this role will allow me to use my skills to produce excellent foods and drinks. I have been a loyal guest in your hotel, and I'm impressed by the cutting edge technology and excellent services. I researched your company's mission, value, and culture, all of which made me believe that this is the best place I would love to work. I would love to grow my skills and career in a company that is passionate about innovation and success".
                                    </p>
                                    <p>
                                    How to respond to "Why do you want to work here?" depends on the organization. It is good to know how to formulate a meaningful response that matches different interview situations. Remember to avoid answers such as "I truly need a job and this opportunity seems to be interesting" or "I heard that you have a good pay."
                                    </p>
                                    <p>
                                    Looking to improve your interview skills? Try a mock interview at <Link to="/">HireBeat</Link> and get professional feedback on your performance.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/why-do-you-want-to-work-here"}
                                        quote={"'Why do you want to work here?' Your Ultimate Interview Tips"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/why-do-you-want-to-work-here"}
                                           title={"'Why do you want to work here?' Your Ultimate Interview Tips"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/why-do-you-want-to-work-here"}
                                            title={"'Why do you want to work here?' Your Ultimate Interview Tips"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/why-do-you-want-to-work-here"}
                                            title={"'Why do you want to work here?' Your Ultimate Interview Tips"}>
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