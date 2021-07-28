import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer27 extends Component {
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
                                                    <a>Jul 21, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Five ways Applicant tracking systems up</h2>
                                    <p>
                                    With the advent of technology, HR professionals have had to look at how they hire students and recent graduates straight from university or college. Many organizations, recently, aim at recruiting quite a number of these candidates. On the one hand, many candidates are competing for these positions; on the other hand, organizations find it challenging to attract quality younger talent. To make the process even more tedious, these organizations find themselves trapped in redundant recruitment methods. It is for these reasons that an Automated Tracking System is necessary.
                                    </p>
                                    <h3 className="mb-0">1. It simplifies finding the right candidate.</h3>
                                    <br/>
                                    <p>
                                    The number of applicants in most cases overwhelms the positions available. Those who unfortunately do not make it are promised that the company will keep their information on file. Should a job open up, the company would notify them. That sounds like a lot of work. However, it is possible to go back into the database and retrieve applicants' files with the automated tracking system. Even better, you can use keywords such as location to find an applicant.
                                    </p>
                                    <h3 className="mb-0">2.	It makes it easier to communicate</h3>
                                    <br/>
                                    <p>
                                    Receiving applications is usually the first step in any recruitment process. Then, there follows a series of other steps. The ATS makes the process easier by setting up workflows in the system that create automated progress stages that also facilitate communications with candidates.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3.	Track candidates better</h3>
                                    <p>
                                    The ATS gives you an overview of the recruitment process. Without a hustle, you can see job openings, candidates applied, and track where each applicant is in the recruitment process.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4.	Better candidate connection</h3>
                                    <p>
                                    The ATS allows the recruiting officers an opportunity to structure the hiring process to understand the applicants better. For example, it can use keywords to narrow which candidate answered what.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">5.	Time management</h3>
                                    <p>
                                    The manual time used to review applications and calling applicants for interviews is significantly reduced. As a result, the time saved can be better used, ensuring that the organization gets the best applicants.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <p>
                                    ATS along is very important but if the organizations are to attract and retain quality hires, they must stay on top of their financial and accounting methods. In addition, they should be keen on branding themselves in a way that attracts young talent. For example, offering internship programs.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-five-ways-applicant-tracking-systems-up"}
                                        quote={"Five ways Applicant tracking systems up"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-five-ways-applicant-tracking-systems-up"}
                                           title={"Five ways Applicant tracking systems up"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-five-ways-applicant-tracking-systems-up"}
                                            title={"Five ways Applicant tracking systems up"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-five-ways-applicant-tracking-systems-up"}
                                            title={"Five ways Applicant tracking systems up"}>
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

export default BlogDetailsContentEmployer27;