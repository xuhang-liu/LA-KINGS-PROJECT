import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent4 extends Component {
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
                                                    <a>September 21, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Questions to Ask at Career Fairs</h2>

                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog4-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Before we even get started, did you know that people get hired at career fairs? Well, they do. However, it is only those that stand out get lucky. Career fairs give students and people looking to gain experience in the business world and the opportunity to be in the same space with potential employers and benefit from each other.
                                    </p>
                                    <p>
                                    Apart from dressing for the occasion, making good business cards, fixing your resume, and being motivated, you should be prepared with questions. These are questions that will make recruiters love you and help you identify whether the company is a good fit.
                                    </p>
                                    <p>
                                    Here are some of the questions you should ask at career fairs.
                                    </p>
                                    <br/>

                                    <h3 className="mb-0">1. Ask about the industry, products, or services</h3>                                    
                                    <p>One of the things that you are required to do in preparation for a career fair is research. This way, you will know about the company and what they have been up to. Take note of their achievements, and do not hesitate to congratulate the recruiter for them. This will show that you have a genuine interest in the company, and you have done your research.</p>
                                    <p>Some of the questions you could ask, for instance, are regarding known changes. While the public may have an idea about it, there is more that people don’t know. You can ask about how recent changes they made have affected their operations. You could ask about improvements they need to make in their products and so on.</p>

                                    <h3 className="mb-0">2. Probe on growth opportunities</h3> 
                                    <p>Note that recruiters prefer candidates that have their goals aligned with those of the organization. Asking about the company's growth opportunities as a whole and the employees will make you stand out. The recruiters will see that you are interested in growth (which is the mission of all organizations), and you are willing to work with them to grow.</p>
                                    <p>Some of the questions that will give you answers to this include the company's opportunities, especially for the role you are interested in. It would help if you also asked about the employee development initiatives the company has in place.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog4-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">3. Ask about the organization’s culture</h3> 
                                    <p>An organization’s culture is what motivates employees and drives them to work diligently. Organizational culture can reduce employee turnover, increase productivity, and creates a healthy and happy work environment. The corporate culture is also what distinguishes a company from another and makes it unique.</p>
                                    <p>Asking about the company's culture will show that you have an interest in engaging with the company in the long term. Questions regarding the company’s culture will also help you point out if it would be a happy working environment for you. On this note, ask about the techniques and technologies they use to communicate internally, any team building events or activities that employees engage in, and so on.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog4-pic2.jpg" alt="image"></img>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>You can ask the recruiter about their personal experience with the company and any challenges that come with the role that you are interested in. Asking these questions at a career fair will not only make the recruiters see that you have a connection with the company, but you will be able to find out if it is a suitable environment for you.</p>

                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-questions-to-ask-at-career-fairs"}
                                        quote={"Questions to Ask at Career Fairs"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-questions-to-ask-at-career-fairs"}
                                           title={"Questions to Ask at Career Fairs"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-questions-to-ask-at-career-fairs"}
                                            title={"Questions to Ask at Career Fairs"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-questions-to-ask-at-career-fairs"}
                                            title={"Questions to Ask at Career Fairs"}>
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

export default BlogDetailsContent4;