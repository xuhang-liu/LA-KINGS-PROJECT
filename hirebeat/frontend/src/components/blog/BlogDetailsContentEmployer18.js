import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer18 extends Component {
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
                                                    <a>May 24, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How ATS works in the Recruitment Process</h2>
                                    <p>
                                    In today's digital and information age, it is not surprising that digital applicant tracking systems have become extremely common in today's world. These online tracking systems vary in their degree of complexity considerably, but the majority of them have proven efficient enough that most businesses across the globe have chosen to retain them, and if you are a business owner yourself, you will want to obtain a good understanding of what exactly an ATS is and how you can use them.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer18-pic.jpg" alt="ats, hiring, recruiting, talent acquisition, hr, hrtech, job, interview, candidate, sort" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">What is ATS and How do They Work?</h3>
                                    <br/>
                                    <p>
                                    An ATS (Applicant Tracking System) is a piece of software that provides a facility for recruiting and hiring individuals for companies and businesses. These applications perform several functions that range from collecting and analysing thousands of resumes to decide which candidates should be selected by a company to also storing information about potential candidates to new positions in the company. ATS systems have been around for a fair period, and they are extremely useful in that they streamline the entire recruitment and hiring process for businesses. In fact, most of the time whether or not a candidate's application is even viewed by a human recruiter is largely dependent on their compatibility with their ATS.
                                    </p>
                                    <p>
                                    Basically, when a job is created by a company, job seekers begin to apply to the job using online job boards and the ATS system then begins to screen individual candidates for their eligibility. The ATS will separate the most desirable candidates from the least desirable. Once the desired candidates have been selected, they will be requested to appear for interviews at which stage human recruiters will then determine who shall be hired by the company. Essentially the role that the ATS system plays is that it allows a company to easily screen large numbers of candidates and select the most appropriate candidates.
                                    </p>
                                    <h3 className="mb-0">What are the Benefits of ATS?</h3>
                                    <br/>
                                    <p>
                                    The benefits of an ATS system are that it greatly streamlines, simplifies, and automates the overall recruitment process for an agency by providing them with a means to screen through large numbers of candidates. ATS systems make it possible for agencies to acquire vastly larger numbers of candidates for new positions and they help companies with narrowing down the expected talent pool to smaller numbers of desirable candidates. In the absence of ATS systems, companies would be forced to sift through hundreds of resumes by themselves instead,  which is a long and painstaking process.
                                    </p>
                                    <h3 className="mb-0">How can a Business Leverage an ATS?</h3>
                                    <br/>
                                    <p>
                                    Businesses can make use of ATS primarily by using them to automate and improve their recruitment process. Through employing an ATS with effective criteria and a functional algorithm, a company gain access to relatively large numbers of potential candidates and easily determine which of those candidates is desirable for the positions open in the company. Once your business has posted a job online, you can then use your ATS system to analyse all of the applications that you receive. Your ATS will remove all of those applications that were completely inappropriate for your job post and will alert you to those ones that are the most relevant. You can then go through those applications that have been judged to have been the most relevant to further shortlist or select a candidate for the position.
                                    </p>
                                    <h3 className="mb-0">Final Words</h3>
                                    <br/>
                                    <p>
                                    ATS is a strong tool that helps small business, so does HireBeat. HireBeat is an HR platform that provides the video interview tool to your business and saves your time. To know more about us, please visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-how-ATS-works-in-the-recruitment-process"}
                                        quote={"How ATS works in the recruitment process"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-how-ATS-works-in-the-recruitment-process"}
                                           title={"How ATS works in the recruitment process"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-how-ATS-works-in-the-recruitment-process"}
                                            title={"How ATS works in the recruitment process"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-how-ATS-works-in-the-recruitment-process"}
                                            title={"How ATS works in the recruitment process"}>
                                            <a target="_blank">
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

export default BlogDetailsContentEmployer18;