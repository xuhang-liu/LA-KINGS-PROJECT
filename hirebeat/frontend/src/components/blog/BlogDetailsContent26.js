import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent26 extends Component {
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
                                                    <a>April 30, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Stay Competitive in Your Job Search as a Candidate</h2>
                                    <p>
                                    The world today is incredibly competitive. The job search process can be pretty stressful as employers look at your education, years of experience, and skills to determine whether you’d be the right fit for the position.
                                    </p>
                                    <p>
                                    While it can be quite challenging, there are a few strategies that you can implement to help yourself stand out in the clutter. This article provides a few tips for you to beat the competition and emerge as a strong candidate.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog26-pic.jpg" alt="Interview, question, job, intern, recruit, company, human resources, competitiveness, candidate" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">Demonstrate your leadership skills</h3>
                                    <p>
                                    Most employers highly value candidates with leadership skills. Such candidates would be able to lead teams and manage members effectively, so if you have relevant experience that backs this up, it would be a good idea to highlight it.
                                    </p>
                                    <p>
                                    If you think there’s room for improvement, you should actively look for opportunities that allow you to lead a team. Even something as minor as mentoring someone can go a long way in boosting your application.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Tailor your resume to every position</h3>
                                    <p>
                                    Many candidates make the mistake of sending out a standard resume for every open position during the job search process. You should have a look every time you submit an application to ensure you’re highlighting the right skills and experiences relevant to an open position.
                                    </p>
                                    <p>
                                    Employers can tell when you’ve used the same resume and haven’t put any thought into the application. This is a basic mistake that, if not made, can help you stand out effortlessly.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Gain more professional experience</h3>
                                    <p>
                                    One of the best ways to improve the likelihood of landing your dream position is to gain relevant work experience. Even unpaid internships significantly contribute to improving your application and give you the chance to gain skills relevant to the job you’re applying to.
                                    </p>
                                    <p>
                                    Even entry-level positions, for instance, showcase that you’ve gotten the chance to learn in a professional environment, and any experience you gain will be applicable in the future.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Be prepared for your interview</h3>
                                    <p>
                                    The interview is, sometimes, the most important part of the job application process. You need to ensure you’re preparing for it and have everything you need to ace that interview.
                                    </p>
                                    <p>
                                    Firstly, you need to be confident and answer all questions expertly. Apart from this, you should research the company and the role comprehensively to give yourself context. This also comes in handy when the interviewer asks you if you have any questions at the end.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Final Thoughts</h3>
                                    <p>
                                    Standing out during the job search process can be tricky; competitiveness can quickly get to you and make you question whether you’re good enough. However, following the tips above is an excellent place to start if you want to land your dream job. HireBeat is an innovative tech company based in New York that aims to change job seekers’ lives through recruitment training. To know more about us, please visit <a href="/job-seekers">https://hirebeat.co/job-seekers</a>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate"}
                                        quote={"How to Stay Competitive in Your Job Search as a Candidate"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate"}
                                           title={"How to Stay Competitive in Your Job Search as a Candidate"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate"}
                                            title={"How to Stay Competitive in Your Job Search as a Candidate"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate"}
                                            title={"How to Stay Competitive in Your Job Search as a Candidate"}>
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

export default BlogDetailsContent26;