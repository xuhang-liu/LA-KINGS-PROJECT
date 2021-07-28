import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent28 extends Component {
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
                                                    <a>Jun 04, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>HireBeat Blog – What Is Your Expected Salary?</h2>
                                    <p>
                                    The daunting salary question is an inevitable topic when it comes to interviews. Although it might be a little stressful to discuss money, it very important for employers to discuss this matter beforehand. There are two primary reasons for this:
                                    </p>
                                    <p>
                                    1. The first reason is that the employers want to know if they can afford to hire you. Recruitment is indeed a time and money-consuming process and the organization always seeks candidates that are willing to work in their estimated salary range.
                                    </p>
                                    <p>
                                    2. The second reason is that they want to know how much you value your skillset and experience. Companies always look for candidates that are confident about their abilities and don't sell themselves short.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog28-pic.jpg" alt="salary, job seekers, interview, pay, intern, recruit, company, human resources, competitiveness, candidate" />
                                    </div>
                                    <br/>
                                    <p>
                                    For these reasons, the salary question is inevitable in an interview. Although there is no one perfect answer to this question, one golden rule is to deflect it as much as possible. Try to put off this question by focusing on your abilities and experience. For example, you can say something like " Given my skill set and experience, I would hope that you are offering a salary that is at par with the market rate". Once you have established why you are an ideal choice for the role, you have a much better shot at negotiating a fair salary. Here are a few do’s and don'ts of answering this tactical question with confidence and integrity.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Do's</h3>
                                    <ul>
                                        <li><p>Try to research the market value of the job by keeping the company size, location, and job responsibilities in mind.</p></li>
                                        <li><p>Estimate a fair range beforehand.</p></li>
                                        <li><p>Add negotiable options in the case of fixed salaries.</p></li>
                                        <li><p>Deflect any questions regarding your current salary if you are either underpaid or overpaid.</p></li>
                                        <li><p>Earn your employer's respect by quoting a fair range if they persist for a definitive figure. For example, <i>"I am hoping to make around $75,000 to $90,000 annually. Is this in line with what you are offering?"</i></p></li>
                                        <li><p>Do think about the worst-case scenario, i-e, which salary range would make you walk away. This is especially important if you are not too desperate to put food on the table. It is always better to wait for a fair offer rather than settling on the least objectionable option.</p></li>
                                    </ul>
                                    <br/>
                                    <h3 className="mb-0">Don'ts</h3>
                                    <ul>
                                        <li><p>Avoid giving an exact figure especially at the beginning of an interview.</p></li>
                                        <li><p>Don't quote a salary range too high, or too low. Instead always aim to estimate a fair figure based on your position, skill set, experience, and monthly expenses.</p></li>
                                        <li><p>Don't show rigidity while negotiating. Instead, try to remain positive while discussing this sensitive matter. You can say something like <i>"I am open to negotiating a fair salary based on the industry average."</i></p></li>
                                    </ul>
                                    <br/>
                                    <h3 className="mb-0">Final Thoughts</h3>
                                    <p>
                                    Finally, try to be as honest as possible and stay true to yourself. It is better to wait for a good offer rather than regretting your decision later. On your way of finding the perfect job, HireBeat provides the personized powerful tool that gets you ready for your interview. To know more about HireBeat, please visit <a href="/job-seekers">https://hirebeat.co/job-seekers</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-wha-is-your-expected-salary"}
                                        quote={"HireBeat Blog – What Is Your Expected Salary?"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-wha-is-your-expected-salary"}
                                           title={"HireBeat Blog – What Is Your Expected Salary?"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-wha-is-your-expected-salary"}
                                            title={"HireBeat Blog – What Is Your Expected Salary?"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-wha-is-your-expected-salary"}
                                            title={"HireBeat Blog – What Is Your Expected Salary?"}>
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

export default BlogDetailsContent28;