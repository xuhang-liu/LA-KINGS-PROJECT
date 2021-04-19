import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer9 extends Component {
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
                                                    <a>April 14, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Boost Up Your ROI Using Video Interviews</h2>
                                    <p>
                                    We have come to that time of the financial year where we ought to look at what we have achieved. When recruiting new talent, we need to look at what we get in return. This is known as our Return on Investment (ROI).
                                    </p>
                                    <p>
                                    To increase our returns, we can leverage the use of new recruitment technology to ensure that we get the most out of our limited resources. One excellent innovation is video interviews. Through video interviews, employers are able to assess a candidate’s soft skills and qualifications during the process of hiring. While video interviews are not the final decision-makers, they play a significant role in determining whether a candidate possesses the relevant skills for a specific job.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer9-pic.jpg" alt="hiring, recruitment, job, interview, human resources, ROI, video, business" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">1.	Decreasing interview time with</h3>
                                    <br/>
                                    <p>
                                    video interviews, less time is used up. Thanks to new technology, interviewers don’t need to go through the repetitive process of conducting physical interviews. This saves time, an important and limited resource.
                                    </p>
                                    <p>
                                    When you eliminate the need to plan and manage physical meetings, you are able to complete the process of interviewing candidates faster than before. In addition, the candidates get to be interviewed at their convenience. Professionals tasked with hiring no longer need to dedicate a huge chunk of their time just to conduct traditional interviews which are quite repetitive.
                                    </p>
                                    <h3 className="mb-0">2.	Video interviews cut back on administrative costs</h3>
                                    <br/>
                                    <p>
                                    Video interviews possess the power to standardize, automate and simplify the recruitment process. As a result, the cost-per-hire is reduced significantly. An increase in productivity is experienced in all the departments of the organization because the workload on HR personnel and other stakeholders is reduced. With in-person interviews, the organization is likely to spend some it funds in setting up conducive assessment centers. Video interviews help avoid these expenses.
                                    </p>
                                    <h3 className="mb-0">3.	Increased rates of conversion</h3>
                                    <br/>
                                    <p>
                                    In order for us to realize a higher ROI, the recruitment process needs to be efficient. Video interviews reduce the time needed to review one candidate. This implies that finding high-quality applicants takes less time.
                                    </p>
                                    <p>
                                    And every organization wants to find the right fit on their first try. With video interviews, high-volume campaigns geared at finding more talent can be conducted easily.
                                    </p>
                                    <h3 className="mb-0">4.	Less time to hire</h3>
                                    <br/>
                                    <p>
                                    When you spend less time hiring new talent, you give your business an edge over your competitors. This has significant benefits for any business. Since most organizations operate in labor marketplaces that have high competition, the need to get the recruitment process done as quickly as possible is critical.
                                    </p>
                                    <p>
                                    You want to spend minimal time getting new talent to join your workforce. If you spend more time, the essential activities in your business are likely to get disrupted or take a hit. All in all, it is important for new talent to find your organization running optimally.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    This article helps you know better about how video interviews could help your business from four perspectives. HireBeat is an HR software company that provides you a video interview platform and simplifies your recruiting. To know more about us, please visit <a href="/">https://hirebeat.co</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-boost-up-your-roi-using-video-interviews"}
                                        quote={"Boost Up Your ROI Using Video Interviews"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-boost-up-your-roi-using-video-interviews"}
                                           title={"Boost Up Your ROI Using Video Interviews"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-boost-up-your-roi-using-video-interviews"}
                                            title={"Boost Up Your ROI Using Video Interviews"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-boost-up-your-roi-using-video-interviews"}
                                            title={"Boost Up Your ROI Using Video Interviews"}>
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

export default BlogDetailsContentEmployer9;